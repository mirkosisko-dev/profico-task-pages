import axios from "axios";
import { toast } from "react-toastify";
import { IBookmark } from "../types";

const createBookmark = async (body: IBookmark) => {
  try {
    return await axios.post("/api/bookmarks/create", body);
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

const deleteBookmark = async (body: {
  article_id: string;
  user_id: number;
}) => {
  try {
    return await axios.post("/api/bookmarks/delete", body);
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

const getUserBookmarks = async (body: {
  userId: number;
}): Promise<IBookmark[]> => {
  try {
    const response = await axios.post("/api/bookmarks", body);

    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

export { createBookmark, deleteBookmark, getUserBookmarks };
