import { useEffect, useState } from "react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Link } from "react-router-dom"
import { CardContent } from "../ui/card"
import emptyCardBackground from '../../assets/empty.jpg';
import { EmptyBooksList } from "./emptyBooksList"

export const FavoritesBooks = () => {
  const [favorites, setFavorites] = useState<[]>([])

  useEffect(() => {
    getFavoriteBooks();
  }, [])

  const getFavoriteBooks = () => {
    const favorites: any = localStorage.getItem('favorites');
    const favoriteBooks = JSON.parse(favorites);
    if (!favoriteBooks) {
      return;
    } else {
      setFavorites(favoriteBooks);
    }
  }

  return (
    <section className="w-[100px] h-full">
      <Drawer>
        <DrawerTrigger className="w-auto text-lg text-slate-100 content-center 
        font-mono hover:text-amber-400 hover:underline "> Favoritos
        </DrawerTrigger>
        <DrawerContent className="bg-[#171719] gap-4 w-full flex items-center border border-slate-800">
          <DrawerHeader className="w-full border-b border-slate-800 flex justify-center">
            <div className="w-[calc(100%-40px)] max-w-[900px] flex flex-col 
            items-start justify-center bg-[#1e1e1e] p-4 rounded-lg">
              <DrawerTitle className="w-full font-mono text-center text-lg text-slate-100 sm:text-2xl">Favoritos</DrawerTitle>
              <DrawerDescription className="
              w-full text-center font-mono text-sm text-slate-300 
              bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
              text-transparent bg-clip-text
              sm:text-md
              ">
                Aqui estão os livros que você adicionou como seus favoritos.
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="w-full max-w-[1300px] h-auto flex flex-col items-center justify-center mb-4">
            {favorites?.length === 0 ? <EmptyBooksList /> :
              <Carousel opts={{ align: "start" }}
                className="w-auto max-w-[calc(100%-40px)] h-auto sm:mt-0 p-4 bg-[#1e1e1e]">
                <CarouselContent className="w-auto h-[150px] m-0 gap-4">
                  {favorites?.map((item: any) => {
                    return (
                      <CardContent
                        key={item.id}
                        className=" p-0 flex-none w-[100px] sm:w-1/3 md:w-1/4 lg:w-[100px] bg-no-repeat"
                        style={{
                          backgroundImage: `url(${item.volumeInfo?.imageLinks?.thumbnail || emptyCardBackground})`,
                          backgroundSize: "100% 150px",
                        }}
                      >
                        <Link className="w-full h-full flex items-center
                        text-lg text-slate-100 group"
                          to={`/book/${item?.id}`}
                        >
                          <DrawerTrigger className="w-full h-full">
                            <strong className='invisible w-full h-full p-2 flex items-center justify-center 
                            bg-[#000000b5] backdrop-blur-sm font-mono text-sm text-center group-hover:visible'>
                              {item?.volumeInfo?.title}
                            </strong>
                          </DrawerTrigger>
                        </Link>
                      </CardContent>
                    )
                  })}
                </CarouselContent>
                <CarouselPrevious className='hidden bg-transparent text-white h-[30px] w-[30px] sm:flex' />
                <CarouselNext className='hidden bg-transparent text-white h-[30px] w-[30px] sm:flex' />
              </Carousel>
            }
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  )
}

