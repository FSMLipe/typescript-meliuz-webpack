import React from "react";

import ErrorImage from '@/assets/error404.jpg';

const Error404: React.FC = () => {
    return(
        <div>
            <h1>Error</h1>
            <img src={ErrorImage} alt="These aren't the droids you looking for" />
        </div>
    )
}

export default Error404