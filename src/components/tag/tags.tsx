import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badges } from "../badge/badge";

interface TagsProps {
  getBookByTag: (value: string) => {}
}

export const Tags = (props: TagsProps) => {

  const tag_value = [
    "Filosofia", "Literatura", "Política", "Ficção",
    "Chesterton", "Alighieri", "Grécia", "Roma",
    "Américas", "Europa", "Ocidente", "Educação",
    "Poesia", "Autobiografia", "Biografias", "Brasil", "História"
  ];

  return (
    <Carousel className="w-[100vw] h-[50px] px-2 sm:max-w-[calc(100%-100px)]">
      <CarouselContent className="flex flex-row items-center justify-start gap-4 ml-2">
        {tag_value.map((tag, index) => (
          <Badges
            key={index}
            fn={() => props.getBookByTag(tag)}>
            {tag}
          </Badges>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden text-slate-100 sm:flex" />
      <CarouselNext className="hidden text-slate-100 sm:flex" />
    </Carousel>
  )
}