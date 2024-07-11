import { ReactNode } from "react"
import { Skeleton } from "../ui/skeleton"

interface AuthorsProps {
  className: string
  author: ReactNode
}

export const Authors = (props: AuthorsProps) => {
  return (
    <>
      {!props.author ?
        <Skeleton className="w-full max-w-96 h-[30px] bg-slate-500" /> :
        <p className={`${props.className}`}>
          {`${props.author}`}
        </p>
      }
    </>
  )

}