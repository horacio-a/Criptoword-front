import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'



const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        apellido: '',
        asunto: '',
        contacto: '',
        numero: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFromData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target; 
        setFromData( oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData)
        setSending(false);
        setMsg(response.data.message);
        if(response.data.message === false) {
            setFromData(initialForm)
        }
  
    }


    return (
        <div>
            <div class='barraseparar'></div>
            <div id='titulos'>
                <h2>Contacto</h2>

            </div>
            <div class='barraseparar'></div>

            <Container >
                <Row>
                    <Col>
                        <div class='texto2'>
                            <div class='titulos2'>
                                Otros medios de conctactos
                            </div>
                            <div class='barraseparar2'></div>
                            <p>
                                Telefono cede Buenos Aires: 011-5524168
                            </p>
                            <p>
                                Telefono Cede Neuquen: 299-5758449
                            </p>
                            <p>
                                Email de consultas: Criptoword@gmail.com
                            </p>
                            <p>
                                Email de ventas: Criptowordventas@gmail.com
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <Form action="/contacto" method="post" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Alpellido" name="apellido" value={formData.apellido} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="asunto (Ventas-Consultas)" name="asunto" value={formData.asunto} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Email" name="contacto" value={formData.contacto} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="Text" placeholder="Numero de telefono" name="numero" value={formData.numero} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Deje su mensaje, lo atenderemos en 2 dias habiles." name="mensaje" value={formData.mensaje} onChange={handleChange} />
                            </Form.Group>
                            <div class='centrar'>
                            <Button variant="light" class='btn' type="submit"  >Enviar</Button>
                            </div>
                        </Form>
                        {sending ? <p> Enviado...</p> : null}
                        {msg ? <p> {msg} </p> : null}

                    </Col>



                </Row>
            </Container>

        </div>



    );
}
export default ContactoPage;