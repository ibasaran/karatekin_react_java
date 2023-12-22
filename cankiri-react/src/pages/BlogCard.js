
import {Col, 
    Card, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const BlogCard = (props) => {
    const navigate = useNavigate();

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{props.item.baslik}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {props.item.detay}
                    </Card.Text>
                    <Button variant="primary" onClick={
                        () => {  navigate('/blogdetay/' + props.item.id, {state:{'name':'ismail',surname:'başaran', address: {city:'Ankara'}}})  }
                    }>Devamı...</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default BlogCard;