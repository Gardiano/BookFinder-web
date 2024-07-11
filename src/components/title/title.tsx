import { ReactNode } from "react"
import { Skeleton } from "../ui/skeleton"

interface TitleProps {
  className: string
  title: ReactNode
}

export const Title = (props: TitleProps) => {
  return (
    <>
      {!props.title ?
          <Skeleton className="w-full h-[30px] bg-slate-500"></Skeleton> :
          <h1 className={props.className}>
            {props.title}
          </h1>
      }
    </>
  )
}