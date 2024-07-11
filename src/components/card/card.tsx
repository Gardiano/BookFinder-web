import { Card, CardContent } from "@/components/ui/card";
import emptyCardBackground from '../../assets/empty.jpg';
import { Link } from "react-router-dom";

export interface CardProps {
  data: {
    id: string;
    volumeInfo: {
      title: string,
      authors: string[]
      imageLinks?: {
        thumbnail?: string;
      };
    };
  }[];
  title?: string | undefined;
}

export const Cards = (props: CardProps) => {
  return (
    <Card className="w-full flex flex-row items-center justify-center 
    flex-wrap bg-transparent shadow-none gap-4 border p-4">
      <>
        {props?.data?.map((item, index) => (
          <CardContent
            key={index}
            className="w-[120px] h-[180px] flex flex-col p-0 items-center justify-start 
            border-slate-100 sm:max-w-[150px]">
            <Link
              to={`/book/${item.id}`}
              className="w-full h-full flex relative">
              <img
                className="w-[150px] h-[180px] opacity-85 hover:opacity-100"
                src={item.volumeInfo?.imageLinks?.thumbnail || emptyCardBackground}
                alt="book_cover"
              />
            </Link>
          </CardContent>
        ))}
      </>
    </Card>
  )
}