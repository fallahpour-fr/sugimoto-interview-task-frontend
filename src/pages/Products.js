import { Card } from "../components/Card";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Products.css';

export const Products = () => {
    const products = useSelector((state) => state.products.products);
    const navigate = useNavigate(); 
    const handleProductClick = (product) => {
        navigate('/product-detail', { state: { product } });
        console.log("hi")
    };
    return <div className="product_container">
        {
            products.map((item)=>
            <Card key={item.title} onClick={() => handleProductClick(item)}>
                <img className="product_container_img" src={item.img} />
                <div className="product_container_title">{item.title}</div>
                <div className="product_container_rate">Rate: {item.rate}</div>
            </Card>
            )
        }
    </div>
}

export default Products;