import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { increment } from '../store/counterSlice';
import { useDispatch , useSelector} from 'react-redux'

const BlogEkle = () => {

    // const [baslik,setBaslik] = useState('Başlık');
    // const [detay,setDetay] = useState('Detay');
    // const [kategori,setKategori] = useState();
    // const [resim,setResim] = useState();

    const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        id:'',
        baslik: '',
        detay: '',
        kategori: '',
        resim: ''
    })


    const formKaydet = () => {
        const blogKayitleri = JSON.parse(localStorage.getItem('blogs')) || []
        localStorage.setItem('blogs', JSON.stringify([...blogKayitleri,{...form, id: Date.now()}]))

        setForm(
            {
                baslik: '',
                detay: '',
                kategori: '',
                resim: ''
            }
        )
    }

    return (
        <div>
            <h1>{count}</h1>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Bog Başlığı</Form.Label>
                <Form.Control type="text" 
                    value={form.baslik}
                    onChange={(event) => setForm({...form, baslik:event.target.value})}
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Blog Detay</Form.Label>
                <Form.Control type="textarea"
                    value={form.detay}
                    onChange={(event) => setForm({...form, detay:event.target.value})}
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategorisi</Form.Label>
                <Form.Select
                    value={form.kategori}
                    onChange={(event) => setForm({...form, kategori:event.target.value})}
                >
                    <option>Şeçiniz</option>
                    <option value="B">Bilgisayar</option>
                    <option value="K">Kitap</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Blog Resmi</Form.Label>
                <Form.Control type="text"
                    value={form.resim}
                    onChange={(event) => setForm({...form, resim:event.target.value})}
                ></Form.Control>
            </Form.Group>
            <Button onClick={() => formKaydet()}>Kaydet</Button>
        </Form>

        <Button onClick={() => dispatch(increment())}>counter'ı artır</Button>
        </div>
             
    )
}


export default BlogEkle;