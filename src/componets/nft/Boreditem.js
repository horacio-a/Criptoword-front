import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

                

const Boreditem = (props) => {
    const {key,  name, price, owmer, imagen, collection, body, coin } = props;    
    if (collection == 'Bored Ape Yacht Club') {
        return (
        
            <div className='NFT'>
                    <Card style={{ width: '18rem' }}>
                        <img src={imagen} style={{ height: '18rem', background: "#061121" }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p style={{ color: 'white' }}>Precio: {price} {coin} </p>
                                <p style={{ color: 'white' }}>Dueño: {owmer} </p>
                                <p style={{ color: 'white' }}>Coleccion:  {collection} </p>
    
                            </Card.Text>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="primary" href='/contacto' >Ofertar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    <hr />
                </div>
        )
    } else {
        
    }
       
}


export default Boreditem