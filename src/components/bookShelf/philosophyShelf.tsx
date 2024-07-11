import { useEffect, useState } from 'react';
import { Carousels } from '../carousel/carousel';
import { getShelfBooks } from '../services/api';
import { filterData } from '@/helpers/filterData';
import { Skeleton } from '../ui/skeleton';
import { Books, BookProps } from '../models/books';
import greekPhilosophyBackground from '../../assets/aurelius3.jpg';
import { ShelfTheme } from '../shelfTheme/shelfTheme';

export const PhilosofyShelf = () => {
  const [items, setItems] = useState<Books[]>([]);

  useEffect(() => {
    getPhilosophyBooks();
  }, []);

  const getPhilosophyBooks = async () => {
    let category = ['Philosophy'];
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
      {items.length == 0 ? <Skeleton className='w-full max-w-[1300px] h-[400px] bg-slate-500' /> :
        <>
          <div className='w-[100%] h-auto mt-2 flex-wrap gap-[70px] content-center 
          justify-center items-center sm:flex sm:p-6 sm:bg-[#1e1e1e] sm:mt-12'>
            <ShelfTheme
              flexDirection='flex-row'
              imageDescription={`
              Um busto de filósofo, esculpido em mármore envelhecido com rachaduras e veios que sugerem a passagem do tempo, 
              banhado por uma iluminação dramática em claro-escuro que acentua seu rosto introspectivo, 
              centrado em um fundo preto que evoca uma sensação de mistério e sabedoria.
              `}
              background={greekPhilosophyBackground}
              theme='Filosofia'
              themeDescription='Filosofia é uma área do conhecimento dedicada à 
              construção de saberes lógicos e racionais.
              A filosofia produz um conhecimento sistemático a partir da argumentação 
              e da criação de conceitos. A filosofia se dedica a estudar qualquer
              assunto desde que se possa produzir um conhecimento válido a partir 
              da realidade, experiência e argumentação.
            '
            />
            <div className='h-auto w-full flex justify-center'>
              <Carousels
                data={items}
                title={'Filosofia'}
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