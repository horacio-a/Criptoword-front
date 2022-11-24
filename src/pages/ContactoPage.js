import React, { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ContactoPage = (props) => {

    const form = useRef();

    const comprobarEstado = () => {
        if (form.current.nombre.value !== ''  && form.current.apellido.value !== '' && form.current.asunto.value !== '' && form.current.numero.value !== '' && form.current.mensaje.value !== '') {
            return true
        } else {
            return false
        }
    }

    const enviarEmail = (e) => {
        e.preventDefault();
        const toastLoding = toast.loading('Loading...');

        const Enviar = comprobarEstado()
        if (Enviar === true) {
            emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_APIPUBLIC)
                .then((result) => {
                    toast.dismiss(toastLoding)
                    toast.success('Enviado')
                    console.log(result.text);

                }, (error) => {
                    toast.error('Error')
                    console.log(error.text);
                });
        } else {
            toast.dismiss(toastLoding)
            toast.error('Complete todos los Campos')
            console.log('no enviar')
        }

        


    }

    return (
        <div>
            <div className='barraseparar'></div>
            <div id='titulos'>
                <h2>Contacto</h2>

            </div>
            <div className='barraseparar'></div>

            <Container >
                <Row>
                    <Col>
                        <div className='texto2'>
                            <div className='titulos2'>
                                Otros medios de conctactos
                            </div>
                            <div className='barraseparar2'></div>
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
                        <Form ref={form} onSubmit={enviarEmail}>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="Nombre" name="nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Alpellido" name="apellido" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="asunto (Ventas-Consultas)" name="asunto" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Email" name="contacto" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="Text" placeholder="Numero de telefono" name="numero" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Deje su mensaje, lo atenderemos en 2 dias habiles." name="mensaje" />
                            </Form.Group>
                            <div className='centrar'>
                                <Button variant="light" className='btn' type="submit"  >Enviar</Button>
                            </div>
                        </Form>
                        <Toaster />

                    </Col>



                </Row>
            </Container>

        </div>



    );
}
export default ContactoPage;