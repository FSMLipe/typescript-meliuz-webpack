import React from "react";

import { Container } from "@mui/material";
import Newsletter from '@/components/Newsletter';

const Footer: React.FC = () => {
    return(
        <>
            <Newsletter />
            <footer>
                <Container>
                    <p>Todos os direitos reservados</p>
                </Container>
            </footer>
        </>
    )
}

export default Footer