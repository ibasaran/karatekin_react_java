import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import BlogList from './pages/BlogList';
import BlogEkle from './pages/BlogEkle';
import BaseLayout from './layouts/BaseLayout';
import BlogDetay from './pages/BlogDetay';

import { Provider } from 'react-redux'
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<BaseLayout />}>
                  <Route index element={<BlogList />}></Route>
                  <Route path='/blogekle' element={<BlogEkle />}></Route>
                  <Route path='/blogdetay/:id' element={<BlogDetay />}></Route>
                </Route>
                
              </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
