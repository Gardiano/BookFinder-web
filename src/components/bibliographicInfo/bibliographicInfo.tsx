import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import emptyCardBackground from '../../assets/book.svg';
import { ReactNode } from "react";

interface BibliographicInfoProps {
  className?: string
  image: string
  publisher: string
  language: string | undefined
  categories: ReactNode
  industryIdentifiers: ReactNode
}

export const BibliographicInfo = (props: BibliographicInfoProps) => {
  return (
    <NavigationMenu className="mt-2">
      <NavigationMenuList className="bg-amber-600 rounded-md">
        <NavigationMenuItem className="bg-amber-600 rounded-md">
          <NavigationMenuTrigger
            className="bg-amber-600 text-slate-100 items-center justify-center">
            Informações Bibliograficas
          </NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#171719]">
              <li className="row-span-2 flex items-center justify-center">
                <NavigationMenuLink asChild>
                  <div
                    className=" bg-none bg-no-repeat bg-center 
                    flex h-[150px] w-[120px] select-none flex-col justify-end"
                    style={{
                      backgroundImage: `url(${props?.image || emptyCardBackground})`,
                      backgroundSize: "120px 150px",
                    }}
                  >
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="flex h-full justify-center items-center 
              text-slate-100 p-4 w-fit font-mono text-center rounded-md bg-[#1e1e1e]">
                Editora - {props.publisher || 'Indisponivel'}
              </li>
              <li className="flex  h-full justify-center items-center 
              text-slate-100 p-4 w-fit font-mono text-center rounded-md bg-[#1e1e1e]">
                Categoria - {props.categories || 'Indisponivel'}
              </li>
              <li className="flex h-full justify-center items-center 
              text-slate-100 p-4 w-fit font-mono text-center rounded-md bg-[#1e1e1e]">
                {props.industryIdentifiers || 'Indisponivel'}
              </li>
              <li className="flex h-full justify-center items-center 
              text-slate-100 p-4 w-fit font-mono text-center rounded-md bg-[#1e1e1e]">
                Tradução - {props.language || 'Indisponivel'}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}