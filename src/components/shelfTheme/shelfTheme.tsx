interface ShelfThemeProps {
  background: string
  theme: string
  themeDescription: string
  flexDirection: string
  imageDescription: string
}

export const ShelfTheme = (props: ShelfThemeProps) => {
  return (
    <div className={`hidden w-[calc(100%-40px)] gap-10 items-center justify-center 
    h-auto rounded-lg border-[5px] border-amber-400 flex-wrap ${props.flexDirection}
     hover:border-amber-500 sm:flex-nowrap sm:flex`}>
      <div className='hidden w-full max-w-[580px] h-[525px] bg-no-repeat rounded-md items-center justify-center bg-center 
      -skew-y-[4deg] transform-gpu scale-110 p-4 group sm:flex'
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundSize: "auto 525px",
        }}
      >
        <div className="hidden w-full h-auto max-w-[450px] max-h-auto p-4 
        rounded-md justify-center items-center text-slate-100 font-mono text-sm 
        bg-[#4f4f4f71] backdrop-blur-md
        group-hover:flex">
          {props.imageDescription}
        </div>
      </div>
      <div className='w-auto max-w-[900px] flex flex-col justify-center p-4 gap-4'>
        <h1 className='w-full text-2xl text-slate-100 font-mono bg-[#4f4f4f71] 
        rounded-md backdrop-blur-md p-4 sm:w-fit text-center hover:border-2 hover:border-amber-500'
        > {props.theme}
        </h1>
        <label className='font-mono text-lg text-slate-100 text-justify bg-[#4f4f4f71] 
        rounded-md backdrop-blur-md p-4 hover:border-2 hover:border-amber-500'>
          {props.themeDescription}
        </label>
      </div>
    </div>
  )
}