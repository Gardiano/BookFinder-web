import { NavigateBackButton } from "../buttons/NavigateBackButton";
import errorBackground from '../../assets/error.svg'
import { NavigationLink } from "../navigation/navigationLink";
import { Separator } from "@radix-ui/react-separator";

export default function ErrorPage() {
  return (
    <div className="w-[calc(100%-40px)] h-[90vh] flex flex-col mx-auto items-center justify-center">
      <div className="w-full max-w-[520px] h-auto flex flex-col items-center justify-evenly 
      bg-[#1e1e1e] gap-8 py-8 shadow-md rounded">
        <NavigationLink
          className='font-mono text-xl text-slate-200'
          url={`/`}
          content={<strong className='font-mono text-xl
          bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
          text-transparent bg-clip-text
          '>BookFinder</strong>
          }
        />
        <Separator orientation="horizontal" className="bg-amber-400 h-[1px] w-full" />
        <img
          className='w-full max-w-[100px] h-full max-h-[100px] sm:max-h-[150px] 
          sm: max-w-[150px]'
          src={errorBackground}
          alt='logo'
        />
        <div className=" w-full h-auto flex flex-col items-center justify-center gap-4">
        <Separator orientation="horizontal" className="bg-amber-200 h-[1px] w-full" />
          <h1 className="text-lg text-white text-center">Oops! Página não encontrada...</h1>
          <Separator orientation="horizontal" className="bg-amber-200 h-[1px] w-full" />
          <NavigateBackButton
            className="mt-4 w-[calc(100%-40px) w-[240px] h-[48px] bg-amber-600 hover:bg-amber-700"
          />
        </div>
      </div>
    </div>
  );
}