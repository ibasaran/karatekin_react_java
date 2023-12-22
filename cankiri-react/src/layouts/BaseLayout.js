import  {Container, Row, Col} from 'react-bootstrap';
import Navigation from '../components/Navigation';
import {Outlet} from 'react-router-dom';


const BaseLayout = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default BaseLayout;