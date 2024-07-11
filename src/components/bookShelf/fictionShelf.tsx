import { useEffect, useState } from 'react';
import { Carousels } from '../carousel/carousel';
import fictionBackground from '../../assets/fictionWriter.jpg';
import { getShelfBooks } from '../services/api';
import { filterData } from '@/helpers/filterData';
import { Skeleton } from '../ui/skeleton';
import { BookProps, Books } from '../models/books';
import { ShelfTheme } from '../shelfTheme/shelfTheme';

export const FictionShelf = () => {
  const [items, setItems] = useState<Books[]>([]);

  useEffect(() => {
    getFictionBooks();
  }, []);

  const getFictionBooks = async () => {
    let category = ['Fiction'];
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
              flexDirection='flex-row-reverse'
              imageDescription={`
                Escritor de ficção literária, esculpido em mármore envelhecido com rachaduras e veios que sugerem a passagem do tempo, 
                banhado por uma iluminação dramática em claro-escuro que acentua seu rosto introspectivo, 
                centrado em um fundo preto que evoca uma sensação de mistério e sabedoria.
              `}
              background={fictionBackground}
              theme='Ficção Literária'
              themeDescription='
              Ficção literária é um gênero de literatura que cria narrativas imaginárias ou inventadas, 
              ao invés de relatos baseados em eventos reais. 
              As obras de ficção literária são produtos da criatividade do autor e podem incluir
               romances, contos, novelas e outras formas de escrita narrativa. 
              Esse gênero é caracterizado por alguns aspectos principais: ficção científica, fantasia, mistério e romance.
            '
            />
            <div className='h-full] w-full flex justify-center'>
              <Carousels
                data={items}
                title={'Ficção Literária'}
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