import React,{useState,useEffect} from 'react';
import axios  from 'axios';
import ProductsCard from '../Components/ProductsCard';

const Airdopes = () => {
    const [airdata, setairdata] = useState([]);
    const [ld, setld] = useState(false);
    const show = async () => {
      setld(true);
        await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api1/?catgory=Airdopes`)
            .then((response) => {
                setairdata(response.data);
                setld(false);
            });
    };
    useEffect(() => {
        show();
    
         
    }, []);
  return (
    <div>
      <div className="container">
                <div className="home_content"> 
      {ld?(<img src='https://i.gifer.com/origin/4a/4a287dd4b9222ebb17dc354257d0ef79_w200.webp' style={{ width:'50px',marginLeft:'600px' }}/>):
                       airdata.map((item)=>(

                            <ProductsCard key={item.id} {...item}/>
                        )) 
                    }
                    </div>
                    </div>
    </div>
  );
}

export default Airdopes;
