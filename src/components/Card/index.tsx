import React from "react";

import {
    Grid,
    CardHeader,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Card
} from '@mui/material';

import { ICardComponent } from "@/types";

// From this component we callback to it by a HTML component as <Card /> - This way, everything inside the component will be rendered
const CardComponent: React.FC<ICardComponent> = ( { textTitle, img, altText, descriptionText, priceText, handleAction, itemDefault, handleDetails } ) => {
    return(
        <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={textTitle}
                />
                <CardMedia
                    component="img"
                    height="200px"
                    width="auto"
                    image={img}
                    alt={altText}
                />
                <CardContent>
                    <p>{descriptionText}</p>
                    <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceText)}</h3>
                </CardContent>
                <CardActions style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        onClick={ () => handleDetails(itemDefault.id) }
                        color="secondary"
                        variant="outlined"
                    >
                        + Detalhes
                    </Button>
                    <Button
                        onClick={ () => handleAction(itemDefault) }
                        color="primary"
                        variant="contained"
                    >
                        Adicionar ao carrinho
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardComponent;