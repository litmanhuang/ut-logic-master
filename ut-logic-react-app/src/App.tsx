
import "./App.css";
import useFetch from "react-fetch-hook";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Student from "./pages/Student";

export default function App() {
  const response = useFetch("http://localhost:3000/students");
  console.log("response", response);

  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/students" element = {<Student/>}/>
    </Routes>
  </BrowserRouter>  
  
  );
}
