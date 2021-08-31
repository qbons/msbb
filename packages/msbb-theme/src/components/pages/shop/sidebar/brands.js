import CustomScroll from 'react-custom-scroll';
import { useState, useEffect } from "react";
import { connect, useConnect } from 'frontity';
import Link from '@frontity/components/link';


const Brands = (props) => {
        const {state} = useConnect();
        const req = state.source.get(state.router.link);
        const setArgs = props.setArgs;
        const [field, setField] = useState([]);
        const data = props.data;
        const [options, setOptions] = useState([]);

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
                        brand:field,
                        page: '1'
                })); 
        }
        
        useEffect(() => {
                if(data.content.brand.length > 0){
                        setOptions(data.content.brand);
                }
        }, []);

        function searchHandler(e){                
                let filtered = [];
                data.content.brand.filter(searchingFor(e.target.value)).map((child, c) => {
                        filtered.push(child);
                });
                setOptions(filtered);
        }

        function searchingFor(term){
                return function(x) {
                        return (
                                x.label.toLowerCase().includes(term.toLowerCase()) || 
                                !term
                         );
                };
        }

        return(
                <div className="item">
                        <h3>Brands</h3>
                        {options.length > 0 &&
                                <>
                                        <div className="brand-filter">
                                                <input type="text"  placeholder="cari brand" placeholder="Search.." onChange={searchHandler} />
                                        </div>
                                        <CustomScroll heightRelativeToParent="85px">
                                                <ul>
                                                {req.isProductBrand &&
                                                        <>
                                                                {options.map((v,k) => {
                                                                        return(
                                                                                <li key={k}  className={state.router.link == v.slug ? 'current-menu-item' : ''} ><Link link={v.slug}>{v.label}</Link></li>
                                                                        )
                                                                })}
                                                        </>
                                                }
                                                {!req.isProductBrand &&
                                                        <>
                                                                {options.map((v,k) => {
                                                                        return(
                                                                                <li key={k}><label><input className="checkbox" type="checkbox" value={v.value} onChange={changeHandler} /><span>{v.label}</span></label></li>
                                                                        )
                                                                })}
                                                        </>
                                                }
                                                </ul>
                                        </CustomScroll>
                                </>
                        }
                </div>
        )
}

export default connect(Brands);