import { connect, useConnect } from 'frontity';
import { useState } from 'react';
import Image from "@frontity/components/image";
import ProductItem from './product-item/';


const Brands = (props) => {
        const [isPopup, setPopup] = useState(false);
        const {state, actions, libraries} = useConnect();
        const req = state.source.get(state.router.link);
        const data = req.data.brand;
        const Html2React = libraries.html2react.Component;
        
        return(
                <>
                        {(data.banner != false || data.poptitle != false || data.text != false) &&
                                <div className="product-banner unexpand">
                                        {data.banner != false  && <Image src={data.banner} /> }
                                        {data.name != false && <h2 className="line-title"><span>{data.name}</span></h2> }
                                        {data.excerpt != false &&
                                                <>
                                                        <div className="format-text">
                                                                <p>{data.excerpt}</p>
                                                        </div>
                                                        <a href="#" className="morepost" onClick={(e) => {e.preventDefault(); setPopup(true)}}>See More</a>
                                                </>
                                        }
                                        {isPopup && 
                                                <div className="popup-layer">
                                                        <div className="generic-popup">
                                                                <button className="close-popup" onClick={() => setPopup(false)}></button>
                                                                {data.text != false && 
                                                                        <div className="format-text">
                                                                                <Html2React html={data.text} />
                                                                        </div>
                                                                }
                                                        </div>
                                                </div>
                                        }
                                </div>
                        }
                        {data.products.length > 0 &&
                                <div className="product-popular">
                                        {data.poptitle != false && <h2 className="line-title"><span>{data.poptitle}</span></h2> }
                                        <div className="product-list">
                                                {data.products.map((v, k) => {
                                                        return(
                                                                <ProductItem key={k} data={v}/>
                                                        )
                                                })}
                                        </div>
                                </div>
                        }
                        {data.alltitle != false && <h2 className="line-title"><span>{data.alltitle}</span></h2>}
                </>
        )
}

export default connect(Brands);