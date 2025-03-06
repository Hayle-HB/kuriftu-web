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
  data?: any;
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

interface SubmitReservationPayload {
  Form: ReservationForm;
  roomsCart: RoomCartItem[];
  checkin: string;
  checkout: string;
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
    const response = await api.post<PostResponse>("/Reservation", payload);
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
    const response = await api.get("filterRoom", { params });
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


export const startTempReservation = async (reservationPayload: SubmitReservationPayload): Promise<PostResponse> => {
  try {
    const { Form, roomsCart, checkin, checkout } = reservationPayload;

    // Prepare the request payload
    const formattedPayload = {
      regesterObject: {
        firstName: Form.res_firstname,
        lastName: Form.res_lastname,
        phoneNumber: Form.res_phone,
        email: Form.res_email,
        country: Form.country,
        address: Form.address,
        city: Form.city,
        zip: Form.postalCode,
        paymentMethod: Form.res_paymentMethod,
        price: roomsCart.reduce((total, room) => total + parseFloat(room.room_price), 0), // Sum total price
        specialRequest: Form.res_specialRequest || "",
        userGID: "default", // Provide real user GID if available
        promocode: Form.res_promo || "",
        roomId: roomsCart.map(room => room.room_id).join(","), // Combine multiple room IDs
        guestInfo: roomsCart.map(room => `${room.adults},${room.teens},${room.kids}`).join("|"), // Format as "adults,teens,kids"
        roomNo: roomsCart.map(room => room.room_number).join(","), // List of room numbers
        roomAcc: roomsCart.map(room => room.room_acc).join(","), // List of accommodation types
        roomLocation: roomsCart.map(room => room.room_location).join(","), // List of locations
        cincoutInfo: `${checkin},${checkout}`, // "checkin,checkout"
        tempBoard: Form.res_extraBed || " ", // Using extra bed field as tempBoard if exists
      },
    };
    
    // Make API request
    const response = await api.post<PostResponse>("/tempRes", formattedPayload);
    let formatedResponse = {
      success: true,
      message: "room successfully on hold.",
      data: response.data
    }
    return formatedResponse;
    } catch (error) {
      console.error("Error submitting reservation:", error);
      throw error;
    }
};
