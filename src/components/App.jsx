import Navigation from "./Navigation";
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";


export const App = () => {
  return (
    <div className='Container'> 
    <header>
      <Navigation/>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  );
};
