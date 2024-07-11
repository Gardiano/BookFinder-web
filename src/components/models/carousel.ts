export interface CarouselProps {
  className?: string
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
  title?: string;
}