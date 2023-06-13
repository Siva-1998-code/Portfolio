import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StartLearning() {
    return (
        <Container>
            <h1 className='text-center'>Start learning from
                the world’s best institutions</h1>
            <Row className='py-5 pe-5 ps-5'>
                <Col >
                    <span><h1>01</h1> Marketing</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
                <Col>
                    <span><h1>02</h1> Web Design</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
                <Col>
                    <span><h1>03</h1> Exel Course</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
            </Row>
            <Row className='py-5 pe-5 ps-5'>
                <Col>
                    <span><h1>04</h1> Branding</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
                <Col>
                    <span><h1>05</h1> Leadership</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
                <Col>
                    <span><h1>06</h1> Javascript Basics</span>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
                </Col>
            </Row>
        </Container>
    );
}

export default StartLearning;