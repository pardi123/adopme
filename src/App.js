import { StrictMode, useState } from 'react';
import './App.css';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import Details from "./Details";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

const App =()  =>{
  const theme = useState("darkblue")
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
           <header>
              <Link to='/'>Adopt Me</Link>
           </header>
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>

    </StrictMode>
  );
}

export default App;
