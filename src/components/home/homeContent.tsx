import background from '../../assets/book2.svg';
import bookBackground from '../../assets/book4.svg'
import { Button } from '../ui/button';
import { ArrowUpLeft, SearchIcon } from 'lucide-react';
import { NavigationLink } from "../navigation/navigationLink";
import { PhilosofyShelf } from '../bookShelf/philosophyShelf';
import { FictionShelf } from '../bookShelf/fictionShelf';
import { LiteratureShelf } from '../bookShelf/literatureShielf';
import { PoliticsShelf } from '../bookShelf/politicsShelf';

export const HomeContent = () => {
  return (
    <main id='toTop' className="w-full flex flex-row flex-wrap justify-center">
      <div className="w-[88%] max-w-[1300px] h-auto mt-0 flex-col flex items-center 
        flex-nowrap sm:flex-row sm:h-[680px] sm:mt-6">
        <div className="w-full h-auto flew-wrap gap-[20px] flex flex-col 
          justify-center items-start sm:items-start">
          <p className="hidden w-full text-slate-200 font-mono text-center sm:flex sm:text-start">
            Melhor maneira de aprender em todos os lugares.
          </p>
          <strong className="hidden w-full max-w-[100%]
            font-mono text-lg text-center leading-normal
            bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
            text-transparent bg-clip-text
            sm:max-w-[75%] sm:text-5xl sm:text-start sm:flex">
            Encontre seus livros favoritos para ler.
          </strong>
          <p className="w-[85%] text-slate-300 font-mono hidden sm:flex">
            Um motor de busca global de conhecimento para educação.
            Disponibilizando os melhores livros envolvendo milhões de pessoas.
          </p>

          <Button className='p-0 hidden w-full max-w-[300px] h-[48px] pointer 
            gap-4 bg-amber-600 hover:bg-amber-700 md:flex'>
            <>
              <NavigationLink
                className='w-full h-full p-0 gap-4 flex justify-center items-center 
                rounded-md'
                url={`/books/literatura`}
                content={
                  <div className='font-mono text-md pointer flex gap-4 
                    h-full w-full justify-center items-center '>
                    VER LIVROS
                    <SearchIcon className='h-[20px]' />
                  </div>
                }
              />
            </>
          </Button>
        </div>
        <div className="max-w-1/2 h-[400px] flex-col flex-wrap justify-center 
          items-center hidden sm:flex">
          <img
            className='w-full max-w-[500px] h-[550px] 
            hover:-skew-y-[4deg] transform-gpu'
            src={background}
            alt='Logo'
          />
        </div>
      </div>

      <div className='hidden mt-8 w-full h-[550px] bg-[#1e1e1e] flex-wrap items-center 
        justify-center flex-row gap-4 p-6 sm:flex'>
        <b className="w-full max-w-[500px] text-4xl font-mono
        bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
        text-transparent bg-clip-text">
          Separamos para você algumas listas de livros que podem ser encontrados por aqui.
        </b>
        <img
          className='flex w-full max-w-[300px] h-full max-h-[220px] 
          hover:-skew-y-[4deg] transform-gpu'
          src={bookBackground}
          alt='book'
        />
      </div>
      <div className='w-full mx-auto h-auto flex mt-0 items-center flex-col justify-center gap-y-4 sm:gap-y-12'>
        <PhilosofyShelf />
        <FictionShelf />
        <LiteratureShelf />
        <PoliticsShelf />
      </div>
      <div className='hidden w-full h-[0px] items-end justify-end relative bottom-0 top-0 sm:flex'>
        <a
          href='#toTop'
          className='w-[40px] h-[40px] justify-center items-center flex text-[12px]
       bg-amber-600 text-white rounded-full mr-[30px] mb-[0px] animate-bounce'>
          <ArrowUpLeft />
        </a>
      </div>
    </main>
  )
}