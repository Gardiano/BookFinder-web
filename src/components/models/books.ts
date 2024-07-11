
export interface Books {
  items: any
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: {
    categories: string[],
    title: string,
    authors: string[],
    publisher: string,
    publishedDate: string,
    description: string,
    imageLinks: {
      thumbnail: string,
    },
    previewLink: string,
    infoLink: string,
    pageCount?: number;
    language?: string;
    industryIdentifiers?: { type: string; identifier: string }[];
  }
}

export interface BookProps<T> {
  status: number;
  data: T;
}