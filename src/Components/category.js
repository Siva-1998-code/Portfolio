import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Headphone from './Products/Electronics';
import Mobiles from './Products/Mobiles';
import Fashion from './Products/Fashion';
import Tv from './Products/Tv';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Category() {
  return (
    <BrowserRouter>
      <Container fluid className='pt-4 pb-4 bg-info text-light'>
        <Row className='text-center'>
          <Col>
            <Link to="/Mobiles">
              Mobiles & Tablets
              </Link>
          </Col>
          <Col>
            <Link to="/Headphone">
            Electronics
              </Link>
          </Col>
          <Col>
            <Link to="/Fashion">
            Fashion
            </Link>
          </Col>
          <Col>
            <Link to="/Tv">
            TVs & Appliances
            </Link>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/Mobiles" element={<Mobiles />}>Mobiles</Route>
        <Route path="/Headphone" element={<Headphone />}>Electronics</Route>
        <Route path="/Fashion" element={<Fashion />}>Fashion</Route>
        <Route path="/Tv" element={<Tv />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Category;

