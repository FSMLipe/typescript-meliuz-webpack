import React, {useState, useEffect} from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import api from "../../services/api";

interface IProduct{
    id: number;
    name: string;
    price: number;
    plataform: string;
    image: string;
    offer: boolean;
    category: number[];
    description: string;
    discount: number;
}

const Home: React.FC = () => {
    const [list, setList] = useState<IProduct[]>([]);
    useEffect( () => {
        api.get('products').then(
            res => setList(res.data)
        ).catch( e => console.error(e) )
    }, [])
    return(
        <div>
            <Header />
            <h1>Home</h1>
            {
                list?.map( item => (
                    <div key={item.id}>
                        <img src={item.image} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.price)}</h3>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}

export default Home