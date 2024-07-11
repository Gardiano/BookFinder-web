
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/header';
import { PrimeReactProvider } from 'primereact/api';

const App = () => {
  return (
    <div>
      <PrimeReactProvider>
        <Header />
        <Outlet />
      </PrimeReactProvider>

    </div>
  )
}

export default App;
