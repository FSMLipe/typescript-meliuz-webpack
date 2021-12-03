import React from "react";

//import Lottie from 'react-lottie';

import { ILoadComponent } from "@/types";

const Loader: React.FC<ILoadComponent> = ({show}) => {
    if (show) {
        return(
            <>

            </>
        )
    }

    return <div />
}

export default Loader;