import React, {useState, useEffect} from "react";
import Cart from '../../assets/cart.png'
import {Container} from "./style";
import api from "../../services/api";

const products = {
    "produtos": [
        {
            "id": 1,
            "photo": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",
            "name": "Iphone",
            "description": "Descrição do produto",
            "price": 8000
        },
        {
            "id": 2,
            "photo": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",
            "name": "Galaxy",
            "description": "Descrição do produto",
            "price": 3000
        },
        {
            "id": 3,
            "photo": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",
            "name": "Galaxy",
            "description": "Descrição do produto",
            "price": 5000
        },
        {
            "id": 4,
            "photo": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1567304928359",
            "name": "Galaxy",
            "description": "Descrição do produto",
            "price": 2000
        }
    ]
}

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>(products.produtos);
    const [cart, setCart] = useState<IProduct[]>(products.produtos);

    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        let push: any = [...cart, cart.push(data[index])]
        setCart(push)
        const productStore = JSON.stringify(cart);
        localStorage.setItem('@cart', productStore)
    }

    return(
        <Container>
            <div className="nav">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png" alt="vtex" width="200px" height="auto" />
                </div>
                <div className="cart">
                    <img src={Cart} alt="shopcart" width="50px" height="auto" />
                    <span>({cart.length}) - Itens</span>
                </div>
            </div>
            <section>
                {data.map((prod, index) =>(
                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="iphone" width="200" height="auto"/>
                        <h4>{prod.name}</h4>
                        <span>{prod.description}</span>
                        <h6>{prod.price}</h6>
                        <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                    </div>
                ))}
            </section>
        </Container>
    );
}

export default Home;