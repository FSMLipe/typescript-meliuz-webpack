import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    Grid
} from '@mui/material'

import api from '@/services/api';
import { getDiscountPrice } from '@/utils';

import { IProduct } from '@/types';

import LoaderComponent from '@/components/Loader';

const ProductDetails: React.FC = () => {
    const { id } = useParams()

    const [ product, setProduct ] = useState<IProduct[]>([])
    const [ isLoad, setIsLoad ] = useState(false)

    useEffect( () => {
        setIsLoad(true)
        api.get(`products?id=${id}`).then(
            res => {
                setProduct(res.data)
            }
        )
        .catch( e => console.error(e) )
        .finally( () => {
            setTimeout(() => {
                setIsLoad(false)
            }, 1500)
        })
    }, [])

    if(isLoad) {
        return <LoaderComponent show={isLoad} />
    }

    return (
        <Container style={{
            minHeight: '90vh',
            paddingTop: 60,
            paddingBottom: 60
        }}>
            {product?.map( item => (
                <Grid 
                    container
                    spacing={3} 
                    key={item.id}
                >
                    <Grid item xs>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt={item.name} />
                    </Grid>
                    <Grid item xs>
                        <p>{item.description}</p>
                        //adicionar uma tratatíva de preço com e sem desconto
                        <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</h3>
                        <h3>{getDiscountPrice(item.discount, item.price)}</h3>
                        { item.discount > 0 && (<h5>Com {item.discount}% de desconto</h5>) }
                    </Grid>
                </Grid>
            ))}
        </Container>
    )
}

export default ProductDetails