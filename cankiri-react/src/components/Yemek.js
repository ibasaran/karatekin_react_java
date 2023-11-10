
const Yemek = (props) => {

    return (
        <div style={{border:'2px solid', width:'200px', margin:'10px'}}>
            <h3>{props.adi}</h3>

            {
                props.varmi ?  (
                    <div>
                        <p>{props.aciklama}</p>
                        <span>{props.ucreti}</span>
                    </div>
                ) : (
                    <p>KALMADI</p>
                )
            }

            <div></div>
        </div>
       
    )
}

const pi = 3.14;
let count = 12;

export {pi, count}   // Named export


export default Yemek; // Default export