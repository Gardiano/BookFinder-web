
import { useEffect, useState } from 'react';
import { api } from '../services/baseUrl';
import { Carousels } from '../carousel/carousel';
import politicalBackground from '../../assets/abraham.jpg';
import { filterData } from '@/helpers/filterData';
import { Skeleton } from '../ui/skeleton';
import { BookProps, Books } from '../models/books';
import { ShelfTheme } from '../shelfTheme/shelfTheme';

export const PoliticsShelf = () => {
  const key = import.meta.env.VITE_REACT_APP_API_KEY2;
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getPoliticalBooks();
  }, []);

  const getPoliticalBooks = async () => {
    try {
      const response: BookProps<Books> = await api
        .get(`/volumes?q=intitle:politica&printType=books&orderBy=relevance&projection=lite&langRestrict=pt&maxResults=35&key=${key}`);
      const validItems = filterData(response.data);
      setItems(validItems);
    } catch (e) {
      throw new Error;
    }
  }

  return (
    <>
      {items.length == 0 ? <Skeleton className='w-full h-[400px] bg-slate-500' /> :
        <>
          <div className='w-[100%] h-auto flex-wrap gap-[70px] content-center 
          justify-center items-center sm:flex sm:p-6 sm:bg-[#1e1e1e]'>
            <ShelfTheme
              flexDirection='flex-row-reverse'
              imageDescription={`
                Um busto de Abraham Lincoln, esculpido em mármore envelhecido com rachaduras e veios que sugerem a passagem do tempo, 
                banhado por uma iluminação dramática em claro-escuro que acentua seu rosto introspectivo, 
                centrado em um fundo preto que evoca uma sensação de mistério e sabedoria.
                `}
              background={politicalBackground}
              theme='Política'
              themeDescription='Numa conceituação moderna, política é a ciência moral normativa do governo da sociedade civil; 
              Outros a definem como conhecimento ou estudo "das relações de regularidade 
              e concordância dos fatos com os motivos que inspiram as lutas em torno do poder do Estado e entre os Estados. em suma
              a política está relacionada com aquilo que diz respeito a sociedade, regras, leis e normas de conduta.
              '
            />
            <div className='h-full] w-full flex justify-center'>
              <Carousels
                data={items}
                title={'Política'}
                className='w-auto max-w-[calc(100%-40px)] h-auto sm:mt-0 
                sm:w-[70%] p-4 rounded-md bg-[#141414]'
              />
            </div>
          </div>
        </>
      }
    </>
  )
}