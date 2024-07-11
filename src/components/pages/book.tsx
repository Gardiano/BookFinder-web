import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Description } from "../../components/description/description";
import { Title } from "../title/title";
import { Authors } from "../authors/authors";
import { PageCount } from "../pageCount/pageCount";
import { Date } from "../date/date";
import { BookCover } from "../bookCover/bookCover";
import { NavigationLink } from "../navigation/navigationLink";
import { BibliographicInfo } from "../bibliographicInfo/bibliographicInfo";
import { Carousels } from "../carousel/carousel";
import { getItemById, getShelfBooks } from "../services/api";
import { BookProps, Books } from "../models/books";
import { filterData } from "@/helpers/filterData";
import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Toasts } from "@/helpers/toasts";
import { Toaster } from "../ui/toaster";
import { NavigateBackButton } from "../buttons/NavigateBackButton";

export const Book = () => {
  const params = useParams();
  const success_Toast = Toasts().success_Toast;
  const error_Toast = Toasts().error_Toast;
  const [items, setItems] = useState<Books | any>();
  const [categories, setCategories] = useState<string[]>([]);
  const [relatedBooks, setRelatedBooks] = useState<Books[]>([]);
  const [itsFavorite, setItsFavorite] = useState<boolean>(false);
  const predefinedCategories = [
    'General', 'Philosophy', 'Classics', 'Art', 'Fiction', 'Literature',
    'Political', 'Politic', 'Politics', 'Policy', 'Romance', '', ' '
  ]

  useEffect(() => {
    getDataBook();
  }, [params.id!]);

  useEffect(() => {
    checkFavorites();
  }, [items]);

  useEffect(() => {
    if (categories.length > 0) {
      getRelatedShelfBooks(categories);
    }
  }, [categories]);

  const getDataBook = async () => {
    try {
      const response: BookProps<Books> = await getItemById(params.id!);
      setItems(response.data);
      FilteredRelatedCategories(response.data.volumeInfo?.categories);
      success_Toast(`${response.data.volumeInfo.title}`, 'Volume encontrado com sucesso.');
    } catch (e) {
      error_Toast('error', 'Algo deu errado, tente novamente.');
      throw new Error
    }
  }

  const FilteredRelatedCategories = (arr: string[]) => {
    let find = arr.find((element: string) => predefinedCategories.includes(element.split(' / ')[0]));
    let category = find ? find.split(' / ')[0] : null;
    setCategories(category ? [category] : []);
  }

  const getRelatedShelfBooks = async (categories: string[]) => {
    try {
      const response: BookProps<Books> = await getShelfBooks(categories);
      const validItems = filterData(response.data);
      setRelatedBooks(validItems);
    } catch (e) {
      throw new Error
    }
  }

  const checkFavorites = () => {
    if (items?.id) {
      const favId = items.id;
      const fav = JSON.parse(localStorage.getItem('favorites') ?? '[]');
      const foundFavorite = fav.find((element: any) => element.id === favId);

      setItsFavorite(!!foundFavorite);
    } else {
      setItsFavorite(false);
    }
  }

  const addToFavorites = () => {
    const itemId = items?.id;
    const obj = {
      id: items?.id,
      saved: true,
      volumeInfo: {
        title: items?.volumeInfo.title,
        imageLinks: {
          thumbnail: items?.volumeInfo.imageLinks?.thumbnail!
        }
      }
    }

    if (!itemId) {
      console.error("bookID is not finded");
      return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const existingBookIndex = favorites.findIndex((book: any) => book.id === itemId);

    if (existingBookIndex > -1) {
      favorites.splice(existingBookIndex, 1);
    } else {
      console.log(obj.saved)
      favorites.push(obj);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    checkFavorites();
  };

  return (
    <>
      <div className="mt-4 hidden w-full max-w-[1300px] h-[30px] mx-auto 
       justify-end sm:flex"
      >
        <NavigateBackButton
          className="text-slate-100 bg-transparent rounded-full hover:bg-amber-600"
        />
      </div>
      <main className="w-full mx-auto h-full flex
      items-start justify-center">
        <div className="w-full max-w-[1300px] p-4 gap-8 flex justify-center flex-col
        xl:flex-row items-start">
          <div className="w-full max-w-[1000px] mx-auto p-4 bg-[#1e1e1e] h-auto flex flex-col
          justify-center items-center gap-y-4 2xl:max-w-[300px]">
            <div className="w-full h-[2px] flex relative items-start justify-end">
              <Button
                disabled={!items}
                onClick={addToFavorites}
                className="flex relative right-[-8px] top-[-14px] bg-[#1e1e1e] 
              shadow-none hover:bg-transparent m-0 p-0">
                <Bookmark className={!itsFavorite ? 'text-white' : 'text-yellow-400'} />
              </Button>
            </div>
            <BookCover
              className="w-[120px] h-[170px] flex rounded-2 sm:w-[140px] sm:h-[200px]"
              bookCover={items?.volumeInfo?.imageLinks?.thumbnail!}
            />
            <Title
              title={items?.volumeInfo.title}
              className="text-slate-100 font-mono text-lg text-center"
            />

            <NavigationLink
              className="flex w-full h-[42px] max-w-[293px] justify-center 
              items-center bg-amber-600 hover:bg-amber-700
              font-mono text-slate-100 rounded-sm sm:h-[48px]"
              url={items?.volumeInfo.previewLink || ''}
              content={'VER PRÉVIA'}
              blank="_blank"
            />
          </div>
          <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-y-4">
            <Separator className="flex bg-slate-400 sm:hidden" orientation="horizontal" />
            <div className="bg-[#1e1e1e] p-4 flex flex-col items-center 
            justify-center gap-x-4 gap-y-[2px] rounded-md">
              <Authors
                className="text-amber-200 text-lg w-fit p-none sm:text-2xl"
                author={items?.volumeInfo?.authors?.map((item: string) => item)}
              />
              <PageCount
                className="text-slate-400 w-fit p-none"
                pageCount={items?.volumeInfo.pageCount}
              />
              <Date
                className="text-slate-400 w-fit p-none"
                published_date={items?.volumeInfo.publishedDate}
              />
              {items && <BibliographicInfo
                language={items?.volumeInfo.language}
                publisher={items?.volumeInfo?.publisher!}
                image={items?.volumeInfo.imageLinks.thumbnail!}
                categories={categories?.map((categories: any) => categories)}
                industryIdentifiers={items?.volumeInfo.industryIdentifiers?.[0] &&
                  <p>ISBN {items.volumeInfo.industryIdentifiers[0].identifier}</p>
                }
              />}
            </div>
            <Separator className="flex bg-slate-400 sm:hidden" orientation="horizontal" />

            <div className="w-full max-w-[1300px] p-6 bg-[#1e1e1e] rounded-md">
              <Description
                className=" text-justify text-slate-100 h-[200px]
               overflow-x-hidden p-4 overflow-y-scroll 
               scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-[#373737]
                "
                description={items?.volumeInfo.description}
              />
            </div>

            <div className="flex flex-rol flex-wrap items-center justify-center bg-[#1e1e1e] rounded-md">
              {relatedBooks.length == 0 ? null :
                <Carousels
                  data={relatedBooks}
                  title="Livros Relacionados"
                  className="w-auto max-w-[calc(100%-40px)] h-auto sm:mt-0 sm:w-[83%] p-4 rounded-md bg-[#1e1e1e]"
                />}
            </div>
            <Separator className="flex bg-slate-400 sm:hidden" orientation="horizontal" />
          </div>
        </div>
      </main>
      <Toaster />
    </>
  )
}