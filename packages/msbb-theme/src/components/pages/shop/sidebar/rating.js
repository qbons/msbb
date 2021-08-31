import { useState } from "react";

const Rating = (props) => {
        const rating = [5,4,3,2,1];
        const setArgs = props.setArgs;
        const [field, setField] = useState([]);

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
                        rating:field,
                        page: '1'
                })); 
        }

        return(
                <div className="item">
                        <h3>Rating</h3>
                        <ul>
                                {rating.map((v,k) => {
                                        return(
                                                <li key={k}>
                                                        <label>
                                                                <input type="checkbox" value={v}  onChange={changeHandler} className="checkbox" />
                                                                <span>
                                                                        <div className={`rate rscore${v}`}><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i></div>
                                                                </span>
                                                        </label>
                                                </li>
                                        )
                                })}
                        </ul>
                </div>
        )
}

export default Rating;