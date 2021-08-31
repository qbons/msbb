import { useState } from 'react';
import PriceRange from './sidebar/price-range';

const MobileFilter = (props) => {
        const setArgs = props.setArgs;
        const theArgs = props.theArgs;
        const data = props.data;
        const optPurpose = data.content.purpose;
        const optCategory = data.content.category;
        const optRating =  [5,4,3,2,1];
        const optBrand = data.content.brand;
        const [fieldPurpose, setFieldPurpose] = useState(theArgs.purpose);
        const [fieldCategory, setFieldCategory] = useState(theArgs.category);
        const [fieldRating, setFieldRating] = useState(theArgs.rating);
        const [fieldBrand, setFieldBbrand] = useState(theArgs.brand);
        const dataPrice = data.content.price;
        const [fieldPrice, setFieldPrice] = useState([dataPrice.min,dataPrice.max]);

        function changePurposeHandler(e){
                if (e.target.checked) {
			fieldPurpose.push(e.target.value);
		}else{
			let index = fieldPurpose.indexOf(e.target.value);
			if (index !== -1) {
				fieldPurpose.splice(index, 1);
			}
		}
                setFieldPurpose(fieldPurpose);
        }

        function changeCategoryHandler(e){
                if (e.target.checked) {
			fieldCategory.push(e.target.value);
		}else{
			let index = fieldCategory.indexOf(e.target.value);
			if (index !== -1) {
				fieldCategory.splice(index, 1);
			}
		}
                
                setFieldCategory(fieldCategory);
        }

        function changeRatingHandler(e){
                if (e.target.checked) {
			fieldRating.push(e.target.value);
		}else{
			let index = fieldRating.indexOf(e.target.value);
			if (index !== -1) {
				fieldRating.splice(index, 1);
			}
		}
                setFieldRating(fieldRating);
        }

        function changeBrandHandler(e){
                if (e.target.checked) {
			fieldBrand.push(e.target.value);
		}else{
			let index = fieldBrand.indexOf(e.target.value);
			if (index !== -1) {
				fieldBrand.splice(index, 1);
			}
		}
                setFieldBbrand(fieldBrand);
        }

        function applyHandler(e){
                e.preventDefault();
                setArgs((prevState) => ({
                        ...prevState,
                        purpose:fieldPurpose,
                        category:fieldCategory,
                        rating: fieldRating,
                        brand: fieldBrand,
                        price: fieldPrice,
                        page: '1'
                })); 
                props.setMobileFilter(false); 
        }

        function resetHandler(e){
                e.preventDefault();
                setArgs({
                        purpose: [],
                        category: [],
                        rating: [],
                        brand: [],
                        price: [dataPrice.min, dataPrice.max],
                        sort: 'stock',
                        show: '16',
                        search: '',
                        page: '1'
                });
                props.setMobileFilter(false);
        }
        
        return(
                <>
                        <div className="popmfilter clearfix"  style={{display: props.isMobileFilter ? 'block' : 'none' }} >
                                <div className="xholder">
                                        <div className="fhead">
                                                <a href="#" className="clearfix" onClick={(e) => { e.preventDefault(); props.setMobileFilter(false);  }}>
                                                        <span>Filter</span>
                                                        <b className="cvr-bg"></b>
                                                </a>
                                        </div>
                                        <form id="filter-product-mobile">
                                                <div className="fbody">
                                                        {optPurpose.length > 0 &&
                                                                <div className="item">
                                                                        <h3>Product</h3>
                                                                        <ul>
                                                                                {optPurpose.map((v,k) => {
                                                                                        return(
                                                                                                <li key={k}>
                                                                                                        <label>
                                                                                                                <input type="checkbox" className="checkbox" value={v.value} onChange={changePurposeHandler}  />
                                                                                                                <span>{v.label}</span>
                                                                                                        </label>
                                                                                                </li>
                                                                                        )
                                                                                })}
                                                                        </ul>
                                                                </div>
                                                        }
                                                        {optCategory.length > 0 &&
                                                                <div className="item">
                                                                        <h3>Category</h3>
                                                                        <ul>
                                                                                {optCategory.map((v,k) => {
                                                                                        return(
                                                                                                <li key={k}><label><input className="checkbox" type="checkbox" value={v.value} onChange={changeCategoryHandler} /><span>{v.label}</span></label></li>
                                                                                        )
                                                                                })}
                                                                        </ul>
                                                                </div>
                                                        }
                                                        <div className="item frate">
                                                                <h3>Rating</h3>
                                                                <ul>
                                                                        {optRating.map((v,k) => {
                                                                                return(
                                                                                        <li key={k}>
                                                                                                <label>
                                                                                                        <input type="checkbox" value={v}  onChange={changeRatingHandler} />
                                                                                                        <span>
                                                                                                                <div className={`rate rscore${v}`}>
                                                                                                                        {[...Array(v)].map((x, i) =>
                                                                                                                                <i className="ico-star" key={i}></i>
                                                                                                                        )}
                                                                                                                </div>
                                                                                                        </span>
                                                                                                </label>
                                                                                        </li>
                                                                                )
                                                                        })}
                                                                </ul>
                                                        </div>
                                                        {optBrand.length > 0 &&
                                                                <div className="item">
                                                                        <h3>Brands</h3>
                                                                        <ul>
                                                                                {optBrand.map((v,k) => {
                                                                                        return(
                                                                                                <li key={k}><label><input type="checkbox" className="checkbox" value={v.value} onChange={changeBrandHandler} /><span>{v.label}</span></label></li>
                                                                                        )
                                                                                })}
                                                                        </ul>
                                                                </div>
                                                        }
                                                        <div className="item price-widget">
                                                                <h3>Prices</h3>
                                                                <div className="holder">
                                                                        <PriceRange min={dataPrice.min} max={dataPrice.max} setPrice={setFieldPrice} />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="ffoot">
                                                        <a href="#" className="cvr-bg-bf ic-reset" onClick={resetHandler}>Reset</a>
                                                        <button type="submit" className="button btn-fullwidth has-loading" onClick={applyHandler}>Apply Filter</button>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </>
        )
}

export default MobileFilter;