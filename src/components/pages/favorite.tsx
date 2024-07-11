import { useEffect, useState } from "react"
import { Carousels } from "../carousel/carousel";

export const Favorite = () => {
  const [favorites, setFavorites] = useState<[]>([])

  useEffect(() => {
    getFavoriteBooks();
  }, [])

  const getFavoriteBooks = () => {
    const favorites: any = localStorage.getItem('favorites');
    const FavoriteBooks = JSON.parse(favorites);
    setFavorites(FavoriteBooks);
  }

  return (
    <main className="w-full max-w-[1300px] h-full mx-auto flex flex-col items-center justify-center border-2">
      <>
        <Carousels
          data={favorites}
          title="Favoritos"
        />
      </>
    </main>
  )
}