import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/pages/estilo.css"


function Footer() {
    return (
        <footer className='footer'>
            <Container fluid>
                <div className='barraseparar' ></div>
                <Row>
                    <Col xs={3}></Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://www.facebook.com">
                                <div className='icon-color'>
                                    <i className="fa-brands fa-facebook-square" ></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://twitter.com/home">
                                <div className='icon-color'>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://www.google.com">
                                <div className='icon-color'>
                                    <i className="fab fa-google"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://www.instagram.com">
                                <div className='icon-color'>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://linkedin.com/home">
                                <div className='icon-color'>
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons'>
                            <a href="https://www.github.com">
                                <div className='icon-color'>
                                    <i className="fab fa-github"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
            <div className='barraseparar'></div>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col>
                            <img
                                style={{
                                    height: 45, textAlign: 'center', marginBottom: 15,
                                }}
                                src="imagenes/Logotipo Criptoword fondo negro.png"
                                alt="Criptoword"
                            />
                            <p className='footer'>
                                Somos una empresa dedicada al mundo crypto.
                                Traemos soluciones para las personas que no están dentro de este maravilloso mundo,
                                facilitando el staking y la adquisición de NFTs y estableciendo los mejores precio en la
                                minería con los rig´s y asic´s
                            </p>
                        </Col>
                        <Col><h5 className="text-uppercase fw-bold mb-4" >
                            <div style={{ marginBottom: 30 }}>
                                Nuestros servicios

                            </div>
                        </h5>
                            <p>
                                <a href="/Mineria" className='footer' >Mineria</a>
                            </p>
                            <p>
                                <a href="/NFT" className='footer'>NFT</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 className="text-uppercase fw-bold mb-4">
                                <div style={{ marginBottom: 30 }}>
                                    FAQ
                                </div>
                            </h6>
                            <p>
                                <a href="/FAQ" className='footer'>Medio de pago</a>
                            </p>
                            <p>
                                <a href="/FAQ" className='footer'>Configuraciones</a>
                            </p>
                            <p>
                                <a href="/FAQ" className='footer'>Ayuda</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contacto
                            </h6>
                            <p><i className="fas fa-home me-3"></i>Neuquen, nqn 8324, AR</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                Criptoword@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                Criptowordventas@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i>+54 011-5524168</p>
                            <p><i className="fas fa-phone me-3"></i>+54 299-5758449</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;