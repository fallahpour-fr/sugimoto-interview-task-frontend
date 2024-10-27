import { Card } from "../components/Card";
import '../styles/Products.css';

export const Products = () => {
    let products=[
        {
            img:"/images/1.webp",
            title:"Porsche",
            rate:5
        },
        {
            img:"/images/2.webp",
            title:"Lamborghini",
            rate:5
        },
        {
            img:"/images/3.webp",
            title:"Maserati",
            rate:5
        },
    ]
    return <div className="product_container">
        {
            products.map((item)=>
            <Card>
                <image className="product_container_img" img={item.img} />
                <div className="product_container_title">{item.title}</div>
                <div className="product_container_rate">{item.rate}</div>
            </Card>
            )
        }
    </div>
}