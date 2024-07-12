
import "./App.css";
import useFetch from "react-fetch-hook";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Student from "./pages/Student";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/students" element = {<Student/>}/>
    </Routes>
  </BrowserRouter>  
  
  );
}
