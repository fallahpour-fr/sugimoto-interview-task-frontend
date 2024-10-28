import { Fragment ,useEffect} from "react";
import { Products, ProductDetail } from "./pages";
import { Header } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/productsSlice';

function App() {
  const dispatch = useDispatch();

  let products=[
    {
        img:"/images/1.webp",
        title:"Porsche",
        rate:4,
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        colors: ["red", "blue", "green", "black"]
    },
    {
        img:"/images/2.webp",
        title:"Lamborghini",
        rate:5,
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        colors: ["red", "blue", "green", "black"]
    },
    {
        img:"/images/3.webp",
        title:"Maserati",
        rate:3,
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        colors: ["red", "blue", "green", "black"]
    },
    {
        img:"/images/4.webp",
        title:"Hyundai",
        rate:5,
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        colors: ["red", "blue", "green", "black"]
    },
]

useEffect(() => {
  dispatch(setProducts(products));
}, [dispatch, products]);

  return (    
    <BrowserRouter>
    <Header/>
      <Fragment>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product-detail' element={<ProductDetail />} />
        </Routes>
      </Fragment>     
    </BrowserRouter>
  );
}

export default App;
