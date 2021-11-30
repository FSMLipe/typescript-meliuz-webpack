import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
    return(
        <div>
            <h1>Hello</h1>
            <Card 
            textTitle = "Rick and Morty"
            img = "https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_rick_and_morty_1147486360_1_20201210150106.jpg"
            altText = "Rick and Morty"
            />
            <Card
            textTitle = "Naruto"
            img = "https://sm.ign.com/ign_br/screenshot/default/naruto-1498593686428-v2-1920x1080_pxb6.png"
            altText = "Naruto" 
            />
        </div>
    )
}

export default App