import React, { useState, useEffect } from 'react';
import ProductsCard from '../Components/ProductsCard';
import axios from 'axios';

export default function Home() {
    const [data, setdata] = useState([]);
    const [ld, setld] = useState(false);

    const getdata = async () => {
        setld(true);
        const api = await axios.get("https://63be78edf5cfc0949b58277e.mockapi.io/api1")
        setdata(api.data);
        setld(false);
    }
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>

            {/* <section id="home">
            <div className="container">
                <div className="home_content">  */}
                
            {ld ? (<img src='https://i.gifer.com/origin/4a/4a287dd4b9222ebb17dc354257d0ef79_w200.webp ' style={{ marginLeft: '490px' }} />) : (data.map((item) => (

                <ProductsCard key={item.id} {...item} />
            )))

            }
            {/* </div> 
            </div> 
            </section>  */}

        </>
    );
};
