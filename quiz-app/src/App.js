import './App.css'
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Quiz/>}/>
        <Route path='/result' element = {<Result/>}/>
      </Routes>
      <Footer />
    </>
  );
}
