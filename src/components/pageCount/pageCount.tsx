import { ReactNode } from "react"
import { Skeleton } from "../ui/skeleton"

interface PageCountProps {
  className: string
  pageCount: ReactNode
}

export const PageCount = (props: PageCountProps) => {
  return (
    <>
      {!props.pageCount ?
          <Skeleton className="w-full h-[30px] bg-slate-500 mt-2" /> :
          <u className={props.className}>
            {props.pageCount} Num. págs
          </u>
      }
    </>
  )
}