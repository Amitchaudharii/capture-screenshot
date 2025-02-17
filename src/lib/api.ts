import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://capture.cleanstartsolution.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postData = async <T, R>(
  url: string,
  data: T
): Promise<R | null> => {
  try {
    const response = await api.post<R>(url, data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMsg: any = axiosError.response?.data || axiosError.message;
    console.error("POST Error:", errorMsg);
    alert(errorMsg?.message);
    return null;
  }
};

export const getData = async <R>(url: string): Promise<R | null> => {
  try {
    const response = await api.get<R>(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMsg: any = axiosError.response?.data || axiosError.message;

    console.error("GET Error:", errorMsg);

    alert(errorMsg?.message);

    return null;
  }
};
