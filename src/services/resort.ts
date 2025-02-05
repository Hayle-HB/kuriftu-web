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

// GET API
export const fetchData = async (params: any): Promise<GetResponse> => {
  try {
    const response = await api.get<GetResponse>("/filterRoom", { params });
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
    const response = await api.post("/chapaPayment", { ...data });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};