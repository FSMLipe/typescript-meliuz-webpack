import React from "react";

import Lottie from 'react-lottie';

import * as animantionData from '@/assets/animation/mario.json';

import { ILoadComponent } from "@/types";

const Loader: React.FC<ILoadComponent> = ({show}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animantionData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    if (show) {
        return(
            <>
                <Lottie
                    options={defaultOptions} 
                    height={400}
                    width={400}
                />
            </>
        )
    }

    return <div />
}

export default Loader;