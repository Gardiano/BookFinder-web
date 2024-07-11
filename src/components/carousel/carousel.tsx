import emptyCardBackground from '../../assets/empty.jpg';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from 'react-router-dom';
import { CarouselTitle } from './carouselTitle';
import { CarouselProps } from '../../components/models/carousel';

export const Carousels = (props: CarouselProps) => {
  return (
    <Carousel opts={{ align: "start" }}
      className={props.className}>
      <CarouselTitle title={props?.title!} />
      <CarouselContent className="w-auto h-auto ">
        {props?.data?.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex-none w-[120px] sm:w-1/3 md:w-1/4 lg:w-[120px]"
            style={{ marginRight: "10px" }}
          >
            <div className="p-0 w-auto">
              <Card className="rounded-4 border-none bg-transparent">
                <CardContent
                  className="bg-no-repeat h-[150px] p-0 bg-center flex items-center "
                  style={{
                    backgroundImage: `url(${item.volumeInfo?.imageLinks?.thumbnail || emptyCardBackground})`,
                    backgroundSize: "100% 150px",
                  }}
                >
                  <Link className="w-full h-full flex items-center justify-center hover:border-b-2 hover:border-amber-500
                      text-lg text-slate-100 relative group"
                    to={`/book/${item?.id}`}
                  >
                    <strong className='invisible w-full h-full p-2 flex items-center justify-center 
                        bg-[#000000b5] backdrop-blur-sm font-mono text-sm text-center absolute group-hover:visible'>
                      {item?.volumeInfo?.title}
                    </strong>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden bg-transparent text-white h-[30px] w-[30px] sm:flex' />
      <CarouselNext className='hidden bg-transparent text-white h-[30px] w-[30px] sm:flex' />
    </Carousel>
  )
}