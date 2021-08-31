import {connect, useConnect} from 'frontity';
import {useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Link from '@frontity/components/link';

import Carousel from "./carousel";


const Popup = (props) => {
        const {state} = useConnect();
        const data = props.data;
        const max = data.stock;
        const setPopup = props.setPopup;
        const [isLoading, setLoading] = useState(false);
        const [wished, setWished] = useState(data.wished);
        const [count, setCount] = useState(1);

        function processWishlist(e){
                e.preventDefault();
                if(state.theme.token != false){
                        setLoading(true);
                        axios.post(state.theme.api + 'process-wishlist',  {id : data.id}, {
                                headers: { 'Authorization' : `Bearer ${state.theme.token}` }
                        } ).then(res => {
                                state.theme.wishlist = res.data.wishlist;
                                setWished(res.data.action == 'added' ? true : false);
                                res.data.action == 'added' ? toast.success(res.data.msg) : toast.error(res.data.msg);
                                setLoading(false);    
                        }); 
                }else{
                        toast.error('Please login before adding product to wishlist!');
                }
        }

        const decrementCount = (e) => {
                e.preventDefault();
                if (count > 1) setCount(count - 1);
        };
        
        const incrementCount = (e) => {
                e.preventDefault();
                if (count < max ) setCount(count + 1);
        };
        
        return(
                <div className="popup-layer">
                        <div id="poprod">
                                <button className="close-popup" onClick={() => setPopup(false)}></button>
                                <div className="the-product">
                                        <Carousel data={data} />
                                        <div className="main">
                                                <h1>{data.title}</h1>
                                                <div className="meta">
                                                        {data.category.length > 0 &&
                                                                <div className="cat">
                                                                        {data.category.map((v, k) => {
                                                                                return(
                                                                                        <Link key={k} link={v.slug}>{v.name}</Link>
                                                                                )
                                                                        })}
                                                                </div>
                                                        }
                                                        <div className="prorate">
                                                                <div className={`rate rscore${data.rating.avg}`}>
                                                                        <i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i>
                                                                </div>
                                                                <small>({data.rating.count})</small>
                                                        </div>
                                                        {data.rating.count != 0  && <strong><Link link={data.slug}>{data.rating.count} reviewers recommended this products.</Link></strong>}
                                                        {data.rating.count == 0  && <strong><Link link={data.slug}>No review available</Link></strong>}
                                                </div>
                                                <div className="nominal">
                                                        {data.sale != 0 && <b className="disc">{data.sale}%</b>}
                                                        <div className="pricing">
                                                                {data.type == 'simple' &&
                                                                        <>
                                                                                {data.price.amount.sale == '' &&
                                                                                        <span className="woocommerce-Price-amount amount">
                                                                                                <bdi>{data.price.display.default}</bdi>
                                                                                        </span>
                                                                                }
                                                                                {data.price.amount.sale != '' &&
                                                                                        <>
                                                                                                <del aria-hidden="true"><span className="woocommerce-Price-amount amount">
                                                                                                        <bdi>{data.price.display.sale}</bdi>
                                                                                                </span></del>
                                                                                                <ins><span className="woocommerce-Price-amount amount">
                                                                                                        <bdi>{data.price.display.regular}</bdi>
                                                                                                </span></ins>
                                                                                        </>
                                                                                }
                                                                        </>
                                                                }
                                                                {data.type == 'variable' &&
                                                                        <>
                                                                                <span style={{marginLeft: '0'}}>{data.price.display.range.min}</span>
                                                                                <span style={{margin: '0 3px'}}>-</span>
                                                                                <span style={{marginLeft: '0', marginRight: '0'}}>{data.price.display.range.max}</span>
                                                                        </>
                                                                }
                                                        </div>
                                                </div>
                                                <div className="util">
                                                        <strong>Quantity</strong>
                                                        <div className={`calc solid`}>
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
                                                        <a href="#" className={`add-to-wish cvr-bg ${wished ? 'wished' : ''} ${isLoading ? 'fetching' : ''} `} onClick={processWishlist}></a>
                                                </div>
                                        </div>
                                </div>
                                <div className="action clearfix">
                                        <div className="left">
                                                <Link link={data.slug}>See Detail Product</Link>
                                        </div>
                                        <div className="right">
                                                <a href="#" className={`btn-atc cvr-bg-bf ${props.isCartLoading ? 'fetching' : '' }`} onClick={(e) => props.addToCart(e, count )}>Add to Cart</a>
                                                <a href="#" className="button">Buy Now</a>  {/* ::TEMP:: */}
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default connect(Popup);