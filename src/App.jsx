import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componds/Header";
import Home from "./pages/Home";

export default function App() {
  return(
    <main className="bg-slate-400 text-tertiary ">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
  
}