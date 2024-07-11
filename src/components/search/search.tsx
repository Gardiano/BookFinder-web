import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from "primereact/autocomplete"
import { Dispatch, SetStateAction, useState } from "react";
import { Books } from "../models/books";
import { NavigationLink } from "../navigation/navigationLink";
import { getItemByTitle } from "../services/api";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { filterData } from "@/helpers/filterData";
import { useNavigate } from "react-router-dom";
import { Toasts } from "@/helpers/toasts";

interface sugestionsProps {
  id: string
  title: string
}

export const SearchBooks = () => {
  const error_Toast = Toasts().error_Toast;
  const success_Toast = Toasts().success_Toast;
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [booksForSuggestions, setBooksForSuggestions] = useState<Books[]>([]);

  const handleChange = (e: AutoCompleteChangeEvent) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSelect = (book: Books) => {
    navigate(`/books/${book.volumeInfo.title}`);
  };

  const search = async (event: AutoCompleteCompleteEvent,
    setBooksForSuggestions: Dispatch<SetStateAction<Books[]>>) => {
    try {
      const response = await getItemByTitle(event.query);
      const filteredData = filterData(response.data);

      const suggestions = filteredData.map((data: Books) => ({
        id: data.id,
        title: data.volumeInfo.title
      }));

      const filteredSuggestions = suggestions.filter((data: sugestionsProps) =>
        data.title.toLowerCase().includes(event.query.toLowerCase())
      );

      if (filteredSuggestions.length === 0) {
        setValue('')
        return error_Toast('Livros', 'Não há sugestões no momento, verifique o termo pesquisado.')
      };

      setBooksForSuggestions(filteredSuggestions);
      success_Toast('Livros', 'Volumes encontrados com sucesso.');
    } catch (error) {
      error_Toast('error', 'Algo deu errado, tente novamente.');
      throw new Error;
    }
  };

  const SuggestionBooksTemplate = (item: sugestionsProps) => {
    return (
      <>
        {booksForSuggestions.length == 0 ? <p> não há sugestões no momento... </p> :
          <div className="p-2 w-10 flex">
            <NavigationLink
              className='text-slate-200'
              url={`/books/${item.title}`}
              content={item.title}
            />
          </div>
        }
      </>
    )
  };

  return (
    <>
      <div className='w-full max-w-[500px] gap-2 flex justify-center sm:justify-center'>
        <AutoComplete
          value={value}
          suggestions={booksForSuggestions}
          completeMethod={(e) => search(e, setBooksForSuggestions)}
          onChange={handleChange}
          onSelect={(e) => handleSelect(e.value)}
          itemTemplate={SuggestionBooksTemplate}
          field="title"
          emptyMessage="Nenhuma sungestão encontrada."
          delay={500}
          dropdown={false}
          forceSelection={false}
          placeholder="   Encontre seus livros..."
          className='text-slate-100 border-slate-700 w-[500px]'
          panelStyle={{ color: 'white', background: '#1e1e1e' }}
          inputStyle={{
            width: '100%', maxWidth: '500px', background: '#2d2d2d',
            border: 'none', borderColor: 'rgb(51 65 85)', outline: 'none',
            borderRadius:'20px'
          }}
        />
        <Button
          disabled={value.length < 3 || booksForSuggestions.length == 0}
          className='bg-transparent w-[50px] h-[40px] p-0 rounded-sm border 
          border-slate-700 flex items-center justify-center text-[14px] 
          hover:bg-amber-600'>
          <Link to={`/books/${value}`} className="w-[50px] h-full flex items-center justify-center rounded-sm">
            <SearchIcon className='text-slate-100 w-[30px] h-[18px]' />
          </Link>
        </Button>
      </div>
    </>
  )
}