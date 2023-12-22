import {Container, Row, Col, 
    Card, Button, Navbar, Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {


    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();



    useEffect( () => {
        const blogKayitlari = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(blogKayitlari);
    }, []);


    const blogsRender = () => {
        const bloglar = blogs.map((item, index) => {
            return (
                <BlogCard item={item}/>
            )
        })

        return bloglar;
    }


    return (
        <Container style={{marginTop:20}}>
            <Row>
                
                   {blogsRender()}
                
            </Row>
        </Container>
    )
}


export default BlogList;