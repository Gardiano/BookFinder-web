
import { BookProps, Books } from "../models/books";
import { api } from "./baseUrl";
const key = import.meta.env.VITE_REACT_APP_API_KEY2;

export const getItemById = async (id: string): Promise<BookProps<Books>> => {
  return new Promise((resolve, reject) => {
    api.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${key}&langRestrict=pt`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export const getItemByTitle = async (title: string): Promise<BookProps<Books>> => {
  return new Promise((resolve, reject) => {
    api.get(`/volumes?q=intitle:${title}&printType=books&orderBy=relevance&projection=lite&langRestrict=pt&maxResults=40&key=${key}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export const getShelfBooks = async (category: string[]): Promise<BookProps<Books>> => {
  return new Promise((resolve, reject) => {
    api.get(`/volumes?q=subject:${category}&printType=books&orderBy=relevance&projection=lite&langRestrict=pt&maxResults=35&key=${key}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}