import React from "react";

interface ICardComponent {
    textTitle: string;
    img: string;
    altText: string;
}

// From this component we callback to it by a HTML component as <Card /> - This way, everything inside the component will be rendered
const Card: React.FC<ICardComponent> = ( props ) => {
    const { textTitle, img, altText } = props;
    return(
        <div className="card">
            <img src={img} alt={altText} />
            <p>{textTitle}</p>
        </div>
    )
}

export default Card;