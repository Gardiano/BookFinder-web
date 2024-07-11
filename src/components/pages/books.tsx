import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemByTitle } from "../services/api";
import { Books } from "../models/books";
import { filterData } from "@/helpers/filterData";
import emptyLogo from '../../assets/book4.svg'
import { Toaster } from "../ui/toaster";
import { Carousels } from "../carousel/carousel";
import { NavigateBackButton } from "../buttons/NavigateBackButton";
import { Tags } from "../tag/tags";
import { Toasts } from "@/helpers/toasts";

export const BooksCard = () => {
  const params = useParams();
  const error_Toast = Toasts().error_Toast;
  const success_Toast = Toasts().success_Toast;
  const [items, setItems] = useState<Books[]>([]);

  useEffect(() => {
    getDataBooks(params.id!);
  }, [params.id]);

  const getDataBooks = async (title: string) => {
    try {
      const response = await getItemByTitle(title || params.id!);
      const validItems = filterData(response.data);
      setItems(validItems as Books[]);
      success_Toast('Livros', 'Volumes encontrados com sucesso.');
    } catch (e) {
      error_Toast('error', 'Algo deu errado, tente novamente.');
      throw new Error
    }
  }

  return (
    <>
      <main className="w-[calc(100%-40px)] max-w-[1300px] h-full flex items-center
      justify-center flex-col mx-auto gap-6">
        <div className="mt-4 hidden w-full max-w-[1300px] h-[30px] mx-auto justify-end sm:flex">
          <NavigateBackButton
            className="text-slate-100 bg-transparent rounded-full hover:bg-amber-600"
          />
        </div>
        <h1 className=" w-full max-w-[1300px] text-center font-mono text-md 
        text-slate-100 sm:text-2xl">
          Encontre os livros que voce procura.
        </h1>
        <Tags getBookByTag={getDataBooks} />
        <div className="w-full h-full flex flex-wrap justify-center items-center 
        bg-[#1e1e1e] flex-row gap-4 rounded-sm py-4">
          {items.length === 0 ?
            <div className="flex flex-row items-center p-6">
              <h1 className="text-lg text-slate-100 font-mono">
                Procure titulos ou autores dos seus livros favoritos.
              </h1>
              <img className="w-[200px] h-[100px] animate-bounce" src={emptyLogo} alt='image' />
            </div> :
            <Carousels
              data={items}
              title={''}
              className='w-auto max-w-[calc(100%-40px)] h-auto sm:mt-0 sm:w-[80%] p-4 rounded-md bg-[#1e1e1e]'
            />
          }
        </div>
      </main>
      <Toaster />
    </>
  )
}