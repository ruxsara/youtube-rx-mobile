import { axiosInstance } from "./api";

export const fetchVideos = async () => {
  try {
    const data = await axiosInstance.get("videos");
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
