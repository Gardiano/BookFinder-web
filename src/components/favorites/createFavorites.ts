import { FavoritesProps } from "../models/favorites";

export const createFavorites = (data: FavoritesProps) => {
  
  const obj = {
    id: data?.id,
    saved: true,
    volumeInfo: {
      title: data?.volumeInfo.title,
      imageLinks: {
        thumbnail: data?.volumeInfo.imageLinks?.thumbnail!
      }
    }
  }

  return obj;
}