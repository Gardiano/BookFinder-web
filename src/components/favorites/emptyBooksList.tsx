import bookBackground from '../../assets/book5.svg';

export const EmptyBooksList = () => {
  return (
    <div className='flex w-[calc(100%-40px)] h-full max-w-[900px] bg-[#1e1e1e] 
    flex flex-wrap items-center justify-center flex-row gap-4 p-6 rounded-lg '>
      <div className='w-[100%] max-w-[500px] flex flex-col gap-4'>
        <p className='
        font-mono text-center text-slate-200 text-sm sm:text-xl
        bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
        text-transparent bg-clip-text
        '>
          Não há livros favoritados por aqui no momento.
        </p>
      </div>
      <img
        className='flex h-full w-full max-w-[80px] max-h-[80px] sm:max-h-[150px] sm:max-w-[300px]'
        src={bookBackground}
        alt='book'
      />
    </div>
  )
}