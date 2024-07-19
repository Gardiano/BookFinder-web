export interface FavoritesProps {
  data: {}[]
  id: string
  save: boolean
  volumeInfo: {
    title: string
    imageLinks: {
      thumbnail: string
    }
  }
}