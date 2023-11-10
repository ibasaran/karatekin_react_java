import logo from './logo.svg';
import './App.css';
import Yemek from './components/Yemek';
import {pi} from './components/Yemek';

import YemekListesi from './YemekListesi';
import Counter from './pages/Counter';

function App() {

  let count = 0;


  const menuListesi = () => {

    const yemekler = [
      {
        adi: 'Doner',
        aciklama: 'Süper Döner',
        ucreti: '40tl',
        varmi: false
      },
      {
        adi: 'Çorba',
        aciklama: 'Süper Döner',
        ucreti: count,
        varmi:false
      }
    ];

    let yemekListesi = null;

    yemekListesi = yemekler.map((yemek, index) => {
        return <Yemek  adi={yemek.adi} 
                        aciklama={yemek.aciklama} 
                        ucreti={yemek.ucreti}  
                        varmi={yemek.varmi}
                    />
    })


    return yemekListesi;

  }

  return (
    <div className="App">
      {/* <Yemek adi="Döner" aciklama="Süper döner" ucreti="60 tl" />
      <Yemek adi="Çorba" aciklama="Sıcak çorba" ucreti="30 tl"/>
      <Yemek adi="Salata" aciklama="Mevsim salata" ucreti="25 tl"/>
      <Yemek adi="İçecek" aciklama="Asitli" ucreti="20 tl"/> */}

      {/* {menuListesi()} */}

      {/* <YemekListesi  isim="İsmail"    /> */}


      <Counter />


    </div>
  );
}

export default App;
