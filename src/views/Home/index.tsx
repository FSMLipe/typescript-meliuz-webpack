import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import api from '@/services/api';
import { addNewProduct } from '@/store/modules/cart/actions'

import { IProduct } from '@/types'

const Home: React.FC = () => {
    const dispatch = useDispatch()

    const [list, setList] = useState<IProduct[]>([]);

    useEffect( () => {
        api.get('products').then(
            res => setList(res.data)
        ).catch( e => console.error(e) )
    }, [])

    const handleAddCart = (item: IProduct) => {
        dispatch(addNewProduct(item));
    }

    return(
        <div>
            <Header />
            <h1>Home</h1>
            <Link to="/checkout">
                Checkout
            </Link>
            {
                list?.map( item => (
                    <div key={item.id}>
                        <img src={item.image} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.price)}</h3>
                        <button onClick={ () => handleAddCart(item) }>Adicionar ao carrinho</button>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}

export default Home