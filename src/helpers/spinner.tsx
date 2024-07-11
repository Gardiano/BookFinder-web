
import { Loader } from "lucide-react";

interface SpinnerProps {
  width: number
  height: number
}

export const Spinner = ({width, height}: SpinnerProps) => {
  return <Loader width={width} height={height} className=' bg-transparent text-slate-100 animate-ping mt-8' />
}