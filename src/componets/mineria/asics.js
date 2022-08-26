import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

                

const AsicsItem = (props) => {
    const {key,  name, price, power, imagen, unitpower, type, profit, consumption, body} = props;    
    if (type === 'asics') {
        return (
        
            <div className='NFT'>
                    <Card style={{ width: '18rem' }}>
                        <img src={imagen} style={{ height: '18rem', background: "#061121" }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p style={{ color: 'white' }}>Precio: {price}</p>
                                <p style={{ color: 'white' }}>Potencia: {power} {unitpower} </p>
                                <p style={{ color: 'white' }}>Ganancias diarias:  {profit} </p>
                                <p style={{ color: 'white' }}>Consumo:  {consumption}w </p>


                            </Card.Text>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="primary" >Ofertar</Button>
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


export default AsicsItem