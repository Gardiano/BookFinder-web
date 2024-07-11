import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Skeleton } from "../ui/skeleton"

interface NavigationLinkProps {
  url: string
  className: string
  content?: ReactNode
  blank?: string
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <>
      {!props.url ? <Skeleton className="w-full h-[48px] bg-slate-500" /> :
        <Link
          className={props.className}
          to={props.url}
          target={props.blank}
          >
          {props.content}
        </Link>
      }
    </>
  )
}