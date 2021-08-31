import PriceRange from './price-range';
import { useState, useEffect } from 'react';


const Price = (props) => {
        const [price, setPrice] = useState([0,0]);
        const setArgs = props.setArgs;
        const data = props.data.content.price;

        useEffect(() => {
                if(price[0] != 0 && price[1] != 0){
                        setArgs((prevState) => ({
                                ...prevState,
                                price:price,
                                page: '1'
                        })); 
                }
        }, [price]);
        
        return(
                <div className="item price-widget">
                        <h3>Prices</h3>
                        <div className="holder">
                                <PriceRange min={data.min} max={data.max} setPrice={setPrice} />
                        </div>
                </div>
        )
}

export default Price;