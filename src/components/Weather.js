import { Container, Row, Col, Card } from 'react-bootstrap';
import { Cloud, GeoAlt, Search } from 'react-bootstrap-icons';

function Weather() {
  return (
    <Container fluid className="weather">

        <Card>
            <Card.Body>
                <Card.Title>
                    <div className="search-box">
                        < GeoAlt />
                        <input type="text" placeholder="Location" />
                        <button>< Search /></button>
                    </div>
                </Card.Title>
                <Card.Subtitle>
                    <Row className="align-items-center">
                        < Cloud color='#000' size="2rem"/>
                    </Row>
                </Card.Subtitle>
                <Card.Text>
                    <Container fluid>
                        <Row>
                            <Col>H</Col>
                            <Col>72DF</Col>
                        </Row>
                        <Row>
                            <Col size={6}>
                                L
                            </Col>
                            {/* <Col size={2}></Col> */}
                            <Col size={6}>
                                12DF
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
        {/* <Col  sm={12} md={4}>
            <div className="weather-card">
                <Row>
                    <div className="search-box">
                    < GeoAlt />
                    <input type="text" placeholder="Location" />
                    <button>< Search /></button>
                </div>
                </Row>
                
                <Row>
                    <div className="not-found">
                        <h2>Invalid Location!</h2>
                    </div>
                </Row>

                <Row>
                    <div className="weather-box">
                        <Col size={12}>
                            <img src="" alt="" />
                        </Col>
                        <Col size={12}>
                            <h1 className="temperature"></h1>
                        </Col>                        
                    </div>
                </Row>
                
                <Row>
                    <div className="weather-details">
                        <Col size={6}>
                            <p className="high">H</p>
                        </Col>
                        <Col size={6}>
                            <p className="high-temp">28</p>
                        </Col>
                        <Col size={6}>
                            <p className="low">L</p>
                        </Col>
                        <Col size={6}>
                            <p className="low-temp">12</p>
                        </Col>
                    </div>
                </Row>
            </div>
        </Col> */}
    </Container>
  )
}

export default Weather