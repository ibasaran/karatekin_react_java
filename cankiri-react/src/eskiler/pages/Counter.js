import {useState, useEffect} from "react";

const Counter = () => {

    const [count,setCount] = useState(1);
    const [countValue, setCountValue] = useState(5);

    // useEffect(() => {
    //     console.log('Count deger' + count);
    // });
    //  Parametre vermediğimizde her state değişiminde çalışır.

    // useEffect(() => {
    //     console.log('Count deger' + count);
    // }, []);
    //  Boş parametre verdiğimizde sadece 1 kere çalışır.

    useEffect(() => {
        console.log('Count deger' + count);
    }, [countValue]); // Verilen parametrenin değişikliğini izler. Değişince çalışır.


    return (
        <div>
            <h1>Merhaba Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Artır++</button>
            <button onClick={() => setCount(count - 1)}>Azalt--</button>
           <br />
            <input
                type="number"
                value={countValue}
                onChange={(e) => setCountValue(Number(e.target.value))}
            >
            </input>
            <br/>
            <button onClick={() => setCount(count + countValue)}> Artır </button>
            <button onClick={() => setCount(count - countValue)}> Azalt </button>
        </div>
    )
}

export default Counter;