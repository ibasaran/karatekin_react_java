import React from "react";

class YemekListesi extends React.Component {


    constructor() {
        super();
        this.state = {
            anayemek: 'Ispanak'
        }
    }

    componentDidMount() {
        console.log('Component mount oldu');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidCatch() {
        console.log('componentDidCatch')
    }


    render() {
        return (
           <div>
                <h1>Merhaba {this.props.isim} Yemek Listesi</h1>
                <p>Ana Yemek : {this.state.anayemek} </p>
           </div>
        )
    }


}


export default YemekListesi;