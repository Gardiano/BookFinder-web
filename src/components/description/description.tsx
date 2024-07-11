import { ReactNode } from "react"
import { Skeleton } from "../ui/skeleton"

interface DescriptionProps {
  className: string
  description: ReactNode | string
}

export const Description = (props: DescriptionProps) => {

  if (!props.description) {
    return <Skeleton className="flex w-full h-[200px] bg-slate-500" />
  }

  return (
    <p className={props.className}> {props.description}</p>
  )
}