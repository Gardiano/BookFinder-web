
import { useEffect, useState } from 'react';
import { Carousels } from '../carousel/carousel';
import literatureBackground from '../../assets/literaryWriter.jpg'
import { getShelfBooks } from '../services/api';
import { filterData } from '@/helpers/filterData';
import { Skeleton } from '../ui/skeleton';
import { BookProps, Books } from '../models/books';
import { ShelfTheme } from '../shelfTheme/shelfTheme';

export const LiteratureShelf = () => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getLiteratureBooks();
  }, []);

  const getLiteratureBooks = async () => {
    let category = ['Literature'];
    try {
      const response: BookProps<Books> = await getShelfBooks(category);
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
              flexDirection='flex-row'
              imageDescription={`
                Escritor literário, esculpido em mármore envelhecido com rachaduras e veios que sugerem a passagem do tempo, 
                banhado por uma iluminação dramática em claro-escuro que acentua seu rosto introspectivo, 
                centrado em um fundo preto que evoca uma sensação de mistério e sabedoria.
                `}
              background={literatureBackground}
              theme='Literatura'
              themeDescription='
              A Literatura é a arte que usa a linguagem escrita como meio de expressão, 
              seja em prosa ou em verso, de acordo com princípios teóricos e práticos; 
              sendo o conjunto de obras escritas ou orais às quais reconhecemos um valor estético.
              O texto literário, diferentemente do texto não literário, possui caráter subjetivo e conotativo.
            '
            />
            <div className='h-full] w-full flex justify-center'>
              <Carousels
                data={items}
                title={'Literatura'}
                className='w-auto max-w-[calc(100%-40px)] h-auto sm:mt-0 
                sm:w-[70%] p-4 rounded-md  bg-[#141414]'
              />
            </div>
          </div>
        </>
      }
    </>
  )
}