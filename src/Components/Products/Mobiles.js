import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Mobiles() {
    return (
        <Container className='mb-5'>
            <h1 className='mt-4 mb-4'>Featured Iphones</h1>
            <Row className='text-center'>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRs_py4A_fNUiq8jWP0s67LJj9f1fSSauNo4ZWzL4BqBKaX88Jxtwt996AwaLNCN9YyVONsYR7v8tniYWzx0_8DOsWKR8RqcRZrQN6jJF7fWBUoLUIv2Pm7dg&usqp=CAE" />
                            <Card.Body>
                                <Card.Title>Iphone 11 pro </Card.Title>
                                <Card.Text>₹ 89,099 <br/> (Silver , 256GB) </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdhokiKeQyElTUuI7SIhealudQBVcUzGsVdmrMNH2Fr3W6DB_NV2QupYjeLl0bH4M-Jif7l0hANJO19HFAbJpvhVOlFbCpbsckhHFNDnhfzRDICQfcQFTOtk4&usqp=CAE" />
                            <Card.Body>
                                <Card.Title>Iphone 12 pro</Card.Title>
                                <Card.Text>₹ 1,06,699 <br/> (Silver , 256GB) </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwBEgqbRD9qZk5bkCk5gJVTBjsiblEKG0hBraNMgElRUf8lpnLHSEaf6Q8PK8bw7FnTPSA2W392A_fOh0hUUM5nscmrFH_j9C0RffWqyxSsMRGXqs0wqe24TGu&usqp=CAE" />
                            <Card.Body>
                                <Card.Title>Iphone 13 pro</Card.Title>
                                <Card.Text>₹ 1,25,999 <br/> (Gold , 256GB) </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}  className='mt-3 mb-3 py-3 '>
                        <Link>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3h-0e7HQbv54ACKnzEvFuORP857AX-SdEpGWj_pqUe86WS2iwg2k5j6Pdo5RjGIAAwdPgnaL_77FjLuA-L0zIstB8q8hUpEgDBObE00loaU7s29hv-TYngw&usqp=CAE" />
                            <Card.Body>
                                <Card.Title>Iphone 14 pro</Card.Title>
                                <Card.Text>₹ 1,29,999 <br/> (SpaceBlack , 256GB)</Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Mobiles;
