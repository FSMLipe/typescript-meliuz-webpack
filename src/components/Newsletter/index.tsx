import React, { FormEvent, useState } from "react";

import {
    Box,
    TextField,
    Container,
    Button
} from '@mui/material';

import { toast } from 'react-toastify';
import Lottie from 'react-lottie';

import * as animationData from '@/assets/animation/gameLoad.json';

import api from "@/services/api";

import { IUserData } from "@/types";

const Newsletter: React.FC = () => {
    const [ userData, setUserData ] = useState<IUserData>();
    const [ isLoad, setIsLoad ] = useState(false);
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api.post('newsletter', userData)
            .then( res => {
                setIsLoad(true)
                if(res.status === 201){
                    toast.success('Cadastro realizado com sucesso!');
                }
            })
            .catch( () => toast.error('Ooooops, algo deu errado, tente novamente!'))
            .finally( () => {
                setTimeout(() => {
                    setIsLoad(false)
                }, 1500)
            })
    }

    return(
        <div className="newsletter-content">
            <h2>Newsletter</h2>
            <Container>
                    { isLoad ? (
                        <>
                            <Lottie 
                                options={defaultOptions}
                                width={200}
                                height={200}
                            />
                        </>
                    ) : (
                        <>
                            <Box 
                                component="form" 
                                onSubmit={handleSubmit}
                                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            >
                                <TextField 
                                    label="Nome" 
                                    variant="outlined"
                                    style={{ margin: 8 }}
                                    onChange={ e => setUserData({...userData, name: e.target.value}) }
                                />
                                <TextField 
                                    label="E-mail" 
                                    variant="outlined"
                                    style={{ margin: 8 }}
                                    onChange={ e => setUserData({...userData, email: e.target.value}) }
                                />
                                <Button 
                                    variant="contained"
                                    style={{ margin: 8, height: 54 }}
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </Box>
                        </>
                    )}
            </Container>
        </div>
    )
}

export default Newsletter;