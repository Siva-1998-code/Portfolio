import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Tv() {
    return (
        <Container>
            <h1 className='mt-4 mb-4'>Featured Tv</h1>
            <Row className='text-center'>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/416/416/xif0q/television/h/a/r/-original-imaghgphdj9fsvzt.jpeg?q=70" />
                            <Card.Body>
                                <Card.Title>Realme 32inch TV</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 pb-5 pt-4'>
                        <Link>
                            <Card.Img variant="top" src="https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/10/1570783553_MiTV4x50.jpg" />
                            <Card.Body>
                                <Card.Title>Redmi 50inch TV</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71eUw15rVbL._SL1500_.jpg" />
                            <Card.Body>
                                <Card.Title>Samsung 43inch TV</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-4 '>
                        <Link>
                            <Card.Img variant="top" src="https://cdn1.smartprix.com/rx-iP9vLugob-w1200-h1200/P9vLugob.jpg" />
                            <Card.Body>
                                <Card.Title>Vu  GloLED 55inch TV</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Tv;