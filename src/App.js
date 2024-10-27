import { Fragment } from "react";
import { Products } from "./pages/Products";
import { Header } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Products />
      <Fragment>
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </Fragment>
     
    </BrowserRouter>
  );
}

export default App;
