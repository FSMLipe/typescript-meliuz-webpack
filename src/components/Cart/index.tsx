import React, { useState, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Badge,
    SwipeableDrawer,
    Card,
    CardMedia,
    Typography,
    CardContent,
    Box,
    Chip,
    Stack,
    Container,
    IconButton
} from '@mui/material';

import { 
    AddCircleOutlineOutlined,
    RemoveCircleOutlineOutlined
} from '@mui/icons-material'; 

import { getDiscountPrice } from "@/utils";

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
                <div className="cart-content">
                <Container>
                    {state.length == 0 ? (
                        <div className="cart-empty">
                            <div>
                                <h1>Oooops</h1>
                                <h3>Seu carrinho está vazio</h3>
                            </div>
                        </div>
                    ) : (
                        <>
                            {state?.map( (item, index) => (
                                <Card 
                                    key={index} 
                                    sx={{ marginTop: 2, marginBottom: 2}}
                                >
                                    <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Box sx={{ width: 200 }}>
                                            <CardMedia 
                                                component="img"
                                                image={item.image}
                                                sx={{ width: 151 }}
                                                alt={item.name}
                                            />
                                            <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                        </Box>
                                        <Box>
                                            <Stack spacing={1} sx={{ display: 'flex' }}>
                                                <>
                                                    {item?.category.map( item => (<Chip size="small" variant="outlined" label={item}/>))}
                                                </>
                                            </Stack>
                                            <Typography sx={{ fontWeight: 'bold' }}>{getDiscountPrice(item.discount, item.price)}</Typography>
                                            <Box>
                                                <IconButton>
                                                    <RemoveCircleOutlineOutlined />
                                                </IconButton>

                                                <IconButton>
                                                    <AddCircleOutlineOutlined />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button
                                color="error" 
                                variant="contained"
                                className="checkout-button"
                                fullWidth
                            >
                                Finalizar compra!
                            </Button>
                        </>
                    )}
                </Container>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default Cart;