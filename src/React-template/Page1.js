import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Page1.css'
import { Button } from 'react-bootstrap';

function OnlineSchool() {
  return (
    <Container className=''>
      <Row>
        <Col className='containe'>
          <div className='contant'>
            <h1>Online School</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <Button className='btn btn-danger mt-4'> Learn More</Button>
          </div>
        </Col>
        <Col sm>
          <Card style={{ width: '20rem'}}>
            <Card.Img  src="https://o.remove.bg/downloads/2d467c7a-59c4-49e1-8acc-1c11dc84e967/cheerful-traditional-indian-woman-white-background-studio-shot_1157-48206-removebg-preview.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OnlineSchool;


