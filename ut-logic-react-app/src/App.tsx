import {BrowserRouter, Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Student from "./pages/Student";

const queryClient = new QueryClient ({
  defaultOptions:{
    queries:{
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})


export default function App() {
  return (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/students" element = {<Student/>}/>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>  
  
  );
}
