import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { connect, useConnect } from 'frontity';
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import AddToWish from './add-to-wish';
import Popup from './popup';


const ProductItem = (props) => {
        const data = props.data;
        const {state } = useConnect();
        const [showPopup, setPopup] = useState(false);
        const [popupData, setPopupData ] = useState([]);
        const [isPopupLoading, setPopupLoading] = useState(false);
        const [isCartLoading, setCartLoading] = useState(false);
        const headers = state.theme.token == false ? {} : { headers: { 'Authorization' : `Bearer ${state.theme.token}` } };
        
        function getPopupData(e){
                e.preventDefault();
                setPopupLoading(true);
                
                axios.post(state.theme.api + 'product/popup',  {id : data.id}, headers ).then(res => {
                        setPopupData(res.data);
                        setPopup(true);
                        setPopupLoading(false);    
                }); 
        }

        function addToCart(e,qty){
                e.preventDefault();
                if(state.theme.token !== false){
                        setCartLoading(true);
                        axios.post(state.theme.api + 'product/add-to-cart',  {id : data.id, qty: qty}, headers ).then(res => {
                                state.theme.cart = res.data;
                                toast.success('Product added to cart!')
                                setCartLoading(false);          
                        }); 
                }else{
                        toast.error('Please login before adding product to cart!');
                }
        }

        return(
                <>
                        <div className="product-item">
                                <figure className={data.instock === 'no' ? 'nostock' : '' }>
                                        <Image src={data.thumbnail}  />

                                        {data.sale != 0 && <span className="disc">{data.sale}%</span>}

                                        <AddToWish data={data} />

                                        {data.instock === 'yes' && 
                                                <div className="action">
                                                        <a href="#" className={`cvr-bg-af ico-view ${isPopupLoading ? 'fetching' : ''}`} onClick={getPopupData}></a>
                                                        {data.type === 'simple' && <a href="#" className={`cvr-bg-af ico-cart ${isCartLoading ? 'fetching' : ''}`} onClick={(e) => addToCart(e,1)}></a>}
                                                        {data.type !== 'simple' && <Link link={data.slug} className={`cvr-bg-af ico-cart`}></Link>}
                                                </div>
                                        }
                                        {data.instock !== 'yes' && 
                                                <div className="stockinfo">
                                                        <span>Out of Stock</span>
                                                </div>
                                        }
                                </figure>
                                <div className="caption">
                                        {data.category.length > 0 &&
                                                <div className="cat">
                                                        {data.category.map((v, k) => {
                                                                return(
                                                                        <Link key={k} link={v.slug}>{v.name}</Link>
                                                                )
                                                        })}
                                                </div>
                                        }
                                        <h3><Link link={data.slug}>{data.title}</Link></h3>
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
                                        <div className="prorate">
                                                <div className={`rate rscore${data.rating.avg}`}>
                                                        <i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i><i className="ico-star"></i>
                                                </div>
                                                <small>({data.rating.count})</small>
                                        </div>
                                        <div className={`mact ${data.instock != 'yes' ? 'disabled' : ''}`}>
                                                <a href="#" className={`cvr-bg-af ic-view ${isPopupLoading ? 'fetching' : ''}`}  onClick={getPopupData}></a>
                                                {data.type === 'simple' && <a href="#" className={`button cvr-bg-bf ic-cart has-loading ${isCartLoading ? 'fetching' : ''}`} onClick={(e) => addToCart(e,1)}>Add to Cart</a>}
                                                {data.type !== 'simple' && <Link link={data.slug} className={`button cvr-bg-bf ic-cart`}>Add to Cart</Link>}
                                        </div>
                                </div>
                                
                        </div>
                        {showPopup && <Popup data={popupData} setPopup={setPopup}  addToCart={addToCart} isCartLoading={isCartLoading} />}
                </>
        )
}

export default connect(ProductItem);