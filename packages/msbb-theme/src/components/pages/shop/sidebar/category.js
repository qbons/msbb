import { connect, useConnect } from 'frontity';
import Link from '@frontity/components/link';

import CustomScroll from 'react-custom-scroll';
import { useState } from "react";


const Category = (props) => {
        const {state} = useConnect();
        const req = state.source.get(state.router.link);
        const setArgs = props.setArgs;
        const [field, setField] = useState([]);
        const data = props.data;
        const options = data.content.category;

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
                        category:field,
                        page: '1'
                })); 
        }

        return(
                <div className="item">
                        <h3>Category</h3>
                        <CustomScroll heightRelativeToParent="326px">
                                {options.length > 0 &&
                                        <ul>
                                                {req.isProductCat &&
                                                        <>
                                                                {options.map((v,k) => {
                                                                        return(
                                                                                <li key={k}  className={state.router.link == v.slug ? 'current-menu-item' : ''} ><Link link={v.slug}>{v.label}</Link></li>
                                                                        )
                                                                })}
                                                        </>
                                                }
                                                {!req.isProductCat &&
                                                        <>
                                                                {options.map((v,k) => {
                                                                        return(
                                                                                <li key={k}><label><input className="checkbox" type="checkbox" value={v.value} onChange={changeHandler} /><span>{v.label}</span></label></li>
                                                                        )
                                                                })}
                                                        </>
                                                }
                                        </ul>
                                }
                        </CustomScroll>
                </div>
        )
}

export default connect(Category);