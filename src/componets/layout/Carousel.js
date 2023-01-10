import React from 'react'


import Carousel from 'react-bootstrap/Carousel';
import "../styles/pages/estilo.css"
import Button from 'react-bootstrap/esm/Button';

function Carouse() {
    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100 opacity-25"
                    src="imagenes/NFT .jpg"
                    alt="First slide"
                />               
                <Carousel.Caption>
                    <div className='carousel-Caption'>
                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="/NFT">   <Button  className='ButtonIndex'>Acceder</Button></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-25"
                    src="imagenes/NFT2.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
                <div className='carousel-Caption'>
                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="/NFT"><Button className='ButtonIndex'>Acceder</Button></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-25"
                    src="imagenes/NFT 3.jpeg"
                    alt="First slide"
                />

                <Carousel.Caption>
                <div className='carousel-Caption'>

                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="/NFT"> <Button  className='ButtonIndex'>Acceder</Button></a>
                    </div>  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carouse;