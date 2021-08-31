import {useState} from 'react';

const Calc = (props) => {
        const max = props.max;
        const classes = props.classes;
        const [count, setCount] = useState(1);
        
        const decrementCount = (e) => {
                e.preventDefault();
                if (count > 1) setCount(count - 1);
        };
        
        const incrementCount = (e) => {
                e.preventDefault();
                if (count < max ) setCount(count + 1);
        };
	return (
		<div className={`calc ${classes}`}>{/* ::TEMP:: */}
                        <a href="#" className={count > 1 ? 'min' : 'min inactive'} onClick={decrementCount}></a>
                        <input
                                type="number"
                                name="clicks"
                                value={count}
                                onChange={event => {
                                        setCount(event.target.value);
                                }}
                        />
                        <a href="#"className={count == max ? 'plus inactive' : 'plus'}   onClick={incrementCount}></a>
                </div>
	);
};

export default Calc;
