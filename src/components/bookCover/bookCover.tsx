import { Skeleton } from "../ui/skeleton"

interface BookCoverProps {
  className: string
  bookCover: string | undefined
}

export const BookCover = (props: BookCoverProps) => {
  return (
    <>
      {
        !props.bookCover ?
          <Skeleton className="w-full max-w-[150px] h-[207px] bg-slate-500" /> :
          <img
            className={props.className}
            src={props.bookCover || ''}
          />
      }
    </>
  )
}