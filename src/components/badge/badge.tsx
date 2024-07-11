import { ReactNode } from "react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

interface BadgeProp {
  fn: () => {}
  children: ReactNode
}

export const Badges = (props: BadgeProp) => {
  return (
    <>
      <Button
        onClick={props.fn}
        className="h-[45px] flex flex-row justify-start m-0 p-0 
        bg-transprante hover:bg-transprent
        ">
        <Badge
          variant="default"
          className="w-fit h-[35px] font-mono font-normal text-[14px] 
          flex flex-nowrap items-center 
          justify-center text-slate-100 bg-[#2e2e2e] rounded-md 
          hover:bg-transparente"
        >
          {props.children}
        </Badge>
      </Button>
    </>
  )
}