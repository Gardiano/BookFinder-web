import { FavoritesProps } from "../models/favorites";
import { createFavorites } from "./createFavorites";

export const addToFavorites = (data: FavoritesProps, fn: () => void) => {
  const itemId = data?.id;
  const favoritesObject = createFavorites(data);

  if (!itemId) {
    console.error("bookID is not finded");
    return;
  }

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const existingBookIndex = favorites.findIndex((book: any) => book.id === itemId);

  if (existingBookIndex > -1) {
    favorites.splice(existingBookIndex, 1);
  } else {
    favorites.push(favoritesObject);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  fn();
};