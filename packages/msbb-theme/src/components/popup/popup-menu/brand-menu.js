// ::PASS::
import {useState, useEffect} from 'react';
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const WrapBrand = (props) => {
        return(
               <>{props.children} </>
        )
}

const BrandMenu = ( props ) => {
        const setBrand = props.setBrand;
        const brand = props.brand;
        const [brandList, setBrandList] = useState([]);

        useEffect(() => {
                if(brand.brandList.length > 0){
                        setBrandList(brand.brandList);
                }
        }, []);

        function searchHandler(e){                
                let filtered = [];
                brand.brandList.map((item,index) => {
                        let list = [];
                        item.list.filter(searchingFor(e.target.value)).map((child, c) => {
                                list.push(child);
                        });
                        filtered.push({
                                alpha: item.alpha,
                                list: list
                        });
                });
                setBrandList(filtered);
        }

        function searchingFor(term){
                return function(x) {
                        return (x.title.toLowerCase().includes(term.toLowerCase()) || !term );
                };
        }
        
	return (
		<div id="popbrands" className="popsubmenu">
                        <button className="close-popup" onClick={() => setBrand(false)}></button>
                        <div className="holder">
                                {brand.logoTitle != '' && <h2>{brand.logoTitle}</h2>}
                                {brand.logoList.length > 0 &&
                                        <div className="bitem blogo">
                                                <div className="rowflex">
                                                        {brand.logoList.map((item, index) => {
                                                                return(
                                                                        <Link key={index} link={item.slug}><Image src={item.img} width="100" /></Link>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                }
                                {typeof brandList !== 'undefined' && 
                                        <div className="bitem bname">
                                                <div className="hentry clearfix">
                                                        <fieldset>
                                                                <input type="text" placeholder="Cari brand" onChange={searchHandler} />
                                                                <button type="submit" className="cvr-bg"></button>
                                                        </fieldset>
                                                        {brand.brandTitle != '' && <h3>{brand.brandTitle}</h3> }
                                                </div>
                                                <div className="rowflex">
                                                        {brandList.map((item, index) => {
                                                                return(
                                                                        <WrapBrand key={index}>
                                                                                {item.list.length > 0 &&
                                                                                        <div className="item">
                                                                                                <h4>{item.alpha.toUpperCase()}</h4>
                                                                                                <ul>
                                                                                                        {item.list.map((list, i) => {
                                                                                                                return(
                                                                                                                        <li key={i}><Link link={list.slug}>{list.title}</Link></li>
                                                                                                                )
                                                                                                        })}
                                                                                                </ul>
                                                                                        </div>
                                                                                }
                                                                        </WrapBrand>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                }
                        </div>
                </div>
	);
};

export default BrandMenu;
