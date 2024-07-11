interface CarouselTitleProps {
  title: string
}

export const CarouselTitle = (props: CarouselTitleProps) => {
  return (
    <>
      {props.title ?
        <h1
          className='flex text-lg rounded-sm text-white mb-4 bg-[#00000027] 
          w-fit p-4 font-mono sm:text-xl sm:hidden'>
          {props.title}
        </h1> : null
      }
    </>
  )
}