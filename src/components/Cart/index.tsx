import React, { useState, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Badge,
    SwipeableDrawer,
    Container
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { ICartState } from "@/store/modules/cart/types";

const Cart: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCart = (event: SyntheticEvent) => {
        setIsOpen(!isOpen)
    }

    const state = useSelector( (state: ICartState) => state.cart );

    return(
        <>
            <Button onClick={handleCart}>
                    <Badge badgeContent={state.length}>
                        <ShoppingBagIcon />
                    </Badge>
                </Button>
            <SwipeableDrawer
                anchor="right"
                open={isOpen}
                onClose={handleCart}
                onOpen={handleCart}
            >
                <Container>
                    {state.length == 0 ? (
                        <div className="cart-empty">
                            <h1>Oooops</h1>
                            <h3>Seu carrinho está vazio</h3>
                        </div>
                    ) : (
                        <>
                            {state?.map( (item, index) => (
                                <div key={index}>
                                    <h4>{item.name}</h4>
                                    <img src={item.image} alt={item.name} />
                                    <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.price)}</h3>
                                </div>
                            ))}
                        </>
                    )}
                </Container>
            </SwipeableDrawer>
        </>
    )
}

export default Cart;