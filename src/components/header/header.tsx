import { SearchBooks } from "../search/search";
import { SheetMenu } from "../menu/menu";
import { NavigateBackButton } from "../buttons/NavigateBackButton";
import { FavoritesBooks } from "../favorites/favoriteBooks";
import { NavigationLink } from "../navigation/navigationLink";
import { Separator } from "@radix-ui/react-separator";

export const Header = () => {
  return (
    <header className="w-full h-[120px] flex items-center justify-center bg-[#171719]
    border-0 border-slate-700 sm:border-b">
      <div className="w-[calc(100%-20px)] flex flex-col items-center justify-start gap-2 md:flex-row md:full">
        <div className='w-[calc(100%-20px)] flex flex-row h-full justify-center items-center md:w-1/2'>
          <div className="w-full flex flex-row items-center justify-between
          sm:w-full gap-4 sm:justify-center md:justify-evenly">
            <SheetMenu />
            <NavigationLink
              className='font-mono text-xl text-slate-200'
              url={`/`}
              content={<strong className='font-mono text-xl
                bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-amber-600 via-white to-white
                text-transparent bg-clip-text
                '>BookFinder</strong>}
            />
            <div className="hidden w-full max-w-[200px] h-auto flex-row 
            items-center justify-between font-mono md:flex">
              <Separator orientation="vertical" className="bg-slate-400 h-[12px] w-[1px]" />
              <NavigationLink
                className="text-lg text-slate-100 hover:text-amber-400 hover:underline"
                url={`/books/literatura`}
                content={<p> Livros </p>}
              />
              <Separator orientation="vertical" className="bg-slate-400 h-[12px] w-[1px]" />
              <FavoritesBooks />
            </div>
            <NavigateBackButton
              className="flex text-slate-100 bg-transparent hover:bg-transparent sm:hidden"
            />
          </div>
        </div>
        <div
          className='w-[calc(100%-50px)] h-full flex flex-row items-center 
          md:w-[500px] justify-center'>
          <SearchBooks />
        </div>
      </div>
    </header>
  )
}