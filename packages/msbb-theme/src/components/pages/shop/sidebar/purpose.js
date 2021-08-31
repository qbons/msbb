import CustomScroll from 'react-custom-scroll';
import { useState } from "react";

const Purpose = (props) => {
        const setArgs = props.setArgs;
        const [field, setField] = useState([]);
        const data = props.data;
        const options = data.content.purpose;

        function changeHandler(e){
                if (e.target.checked) {
			field.push(e.target.value);
		}else{
			let index = field.indexOf(e.target.value);
			if (index !== -1) {
				field.splice(index, 1);
			}
		}
                setArgs((prevState) => ({
                        ...prevState,
                        purpose:field,
                        page: '1'
                })); 
        }
        
        return(
                <div className="item">
                        <h3>Product</h3>
                        <CustomScroll heightRelativeToParent="155px">
                                {options.length > 0 &&
                                        <ul>
                                                {options.map((v,k) => {
                                                        return(
                                                                <li key={k}><label><input className="checkbox" type="checkbox" value={v.value} onChange={changeHandler} /><span>{v.label}</span></label></li>
                                                        )
                                                })}
                                        </ul>
                                }
                        </CustomScroll>
                </div>
        )
}

export default Purpose;