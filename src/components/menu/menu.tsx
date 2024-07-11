import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { FavoritesBooks } from "../favorites/favoriteBooks";

const SHEET_SIDES = ["left"] as const
type SheetMenu = (typeof SHEET_SIDES)[number];

export const SheetMenu = () => {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className='bg-transparent w-[55px] border-none shadow-none hover:bg-transparent'>
              <Menu className='text-slate-200' />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-[#171719] text-white font-mono">
            <SheetHeader>
              <SheetTitle className="text-slate-100 font-mono text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <SheetTrigger asChild>
                <>
                  <SheetClose asChild>
                    <Link to={'/'} className="text-slate-200" > Inicio </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={'/books/literatura'} className="text-slate-200" > Pesquisar </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <FavoritesBooks />
                  </SheetClose>
                </>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </>
  )
}