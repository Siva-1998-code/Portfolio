import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Fashion() {
    return (
        <Container>
            <h1 className='mt-4 mb-4'>Featured Laptops</h1>
            <Row className='text-center'>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661" />
                            <Card.Body>
                                <Card.Title>Mac Book Air M1</Card.Title>
                            </Card.Body>

                        </Link>
                    </Card>
                </Col>
                <Col>

                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg" />
                            <Card.Body>
                                <Card.Title>Mac Book Air M1 Pro</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg" />
                            <Card.Body>
                                <Card.Title>Mac Book Air M2</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg" />
                            <Card.Body>
                                <Card.Title>Mac Book Air M2 Pro</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Fashion;