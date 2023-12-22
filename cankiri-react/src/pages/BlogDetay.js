import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

const BlogDetay = () => {

    const {id} = useParams();
    const [blog,setBlog] = useState({})
    const location = useLocation();

    const count = useSelector(state => state.counter.count)


    useEffect( () => {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || []

        const blogDetay = blogs.filter(item => item.id == id)

        if (blogDetay.length > 0) {
            setBlog(blogDetay[0])
        }

    }, [id])


    return (
        <div>
            <h1>{blog.baslik}</h1>
            <h3>{location.state.name}</h3>
            <h3>{location.state.surname}</h3>
            <h3>{location.state.address?.city}</h3>
            <h3>{count}</h3>
        </div>
        
    )
}
export default BlogDetay;