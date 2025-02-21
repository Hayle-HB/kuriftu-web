import api from "./";

// Define types for the API responses and payloads
export interface GetResponse {
  data: any; // Replace `any` with your specific response structure
}

export interface PostPayload {
  input: string;
}

export interface PostResponse {
  success: boolean;
  message: string;
  // Add other properties as per your API response
}
interface RoomCartItem {
  room_price: string;
  room_acc: string;
  room_id: string;
  room_number: string;
  room_location: string;
  adults: number;
  teens: number;
  kids: number;
}

interface ReservationForm {
  res_firstname: string;
  res_lastname: string;
  res_phone: string;
  res_email: string;
  country: string;
  address: string;
  res_promo?: string;
  city: string;
  res_specialRequest?: string;
  postalCode: string;
  acknowledgement: boolean;
  res_paymentMethod: string;
  res_groupName?: string;
  res_extraBed?: string;
  res_remark?: string;
  res_paymentStatus: string;
}

export interface ReservationPayloadProps {
  roomsCart: RoomCartItem[];
  checkin: string;
  checkout: string;
  Form: ReservationForm;
}


interface ReservationResponse {
  success: boolean;
  reservationId: string;
  message: string;
}
// Interface for updating reservation status
interface UpdateReservationPayload {
  reservationID: string;
  paymentStatus: string;
}
interface UpdateReservationResponse {
  success: boolean;
  message: string;
}

// GET API
export const fetchData = async (params: any): Promise<GetResponse> => {
  try {
    const response = await api.get<GetResponse>("/rooms/filteredRooms", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPaymentSession = async (params: any): Promise<GetResponse> => {
  try {
    const response = await api.get<GetResponse>("/dashenSession", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST API
export const postReservation = async (payload: any): Promise<PostResponse> => {
  try {
    const response = await api.post<PostResponse>("/addReservation", payload);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};



export const getPaymentChapa = async (data:any) => {
  try {
    const response = await api.post("/chapa", { ...data });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


// Fetch Available Rooms
export const fetchAvailableRooms = async (params: any): Promise<any> => {
  try {
    const response = await api.get("/rooms/filteredRooms", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    throw error;
  }
};

// Create a New Reservation
export const createReservation = async (
  reservationPayload: ReservationPayloadProps
): Promise<ReservationResponse> => {
  try {
    const payload = { ...reservationPayload};
    console.log(payload);
    const response = await api.post<ReservationResponse>("/addReservation", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};

// Process Payment via Dashen Bank
export const processDashenPayment = async (amount: number, merchant: string, reservationId: string): Promise<any> => {
  try {
    const response = await api.get("/dashenSession", { params: { amount, merchant, reservationId } });
    return response.data;
  } catch (error) {
    console.error("Error fetching Dashen payment session:", error);
    throw error;
  }
};

// Process Payment via Chapa
export const processChapaPayment = async (formValues: any, amount: string, reservationId: string): Promise<any> => {
  try {
    const payload = {
      first_name: formValues.res_firstname,
      last_name: formValues.res_lastname,
      email: formValues.res_email,
      phone_number: formValues.res_phone,
      amount: amount.toString(),
      reservationId
    };
    const response = await api.post("/chapa", payload);
    return response;
  } catch (error) {
    console.error("Error processing Chapa payment:", error);
    throw error;
  }
};

// Update Reservation Payment Status
export const updateReservation = async (
  payload: UpdateReservationPayload
): Promise<UpdateReservationResponse> => {
  try {
    const response = await api.post<UpdateReservationResponse>("/updateReservation", payload);
    return response.data;
  } catch (error) {
    console.error("Error updating reservation status:", error);
    throw error;
  }
};