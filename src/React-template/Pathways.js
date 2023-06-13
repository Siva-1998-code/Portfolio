import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Pathways() {
    return (
        <Container>
            <Row>
                <Col className='py-5 ps-5'>
                    <Card style={{ width: '20rem',height:'25rem'}}>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Text className='py-5'>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-5 '>
                    <Card style={{ width: '20rem',height:'25rem'}}>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Text className='py-5'>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-5 '>
                    <Card style={{ width: '20rem',height:'25rem'}}>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Text className='py-5'>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Pathways;

