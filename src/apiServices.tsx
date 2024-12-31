import axiosInstance from "./api";

export const axiosPost = async (url: string, data: any, config?: any) : Promise<any> => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response;

  } catch (err) {
    console.log(err);
    return { data: err };
  }
};

export const axiosGet = async (url: string) : Promise<any> => {
  try {
    const response = await axiosInstance.get(url);
    return response;

  } catch (err) {
    console.log(err);
    return { data: err };
  }
};

export const axiosDelete = async (url: string) : Promise<any> => {
  try {
    const response = await axiosInstance.delete(url);
    return response;

  } catch (err) {
    console.log(err);
    return { data: err };
  }
};
