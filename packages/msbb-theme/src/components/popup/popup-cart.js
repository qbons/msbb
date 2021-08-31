import CustomScroll from 'react-custom-scroll';

import Calc from '../partial/calc';

const PopupCart = ( props ) => {
	const actions = props.actions;
        // ::TEMP:: CREATE STATE WHEN CART EMPTY BASED ON AJAX
	return (
                <div className="popcart clearfix">
                        <div className="holder">
                                <div className="chead">
                                        <a href="#" className="clearfix" onClick={(e) => {e.preventDefault(); actions.theme.toggleCart()}}>
                                                <span>Product is Added to Your Cart</span>
                                                <b className="cvr-bg"></b>
                                        </a>
                                </div>
                                <div className="cbody">
                                        <CustomScroll heightRelativeToParent="calc(100vh - 360px)">
                                                <div className="list">
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="#"><img src="http://msbb.test/wp-content/uploads/2021/03/belt-2-140x140.jpg" width="70"/></a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/belt/">Belt</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 55.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/hoodie-with-zipper/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/hoodie-with-zipper-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/hoodie-with-zipper/">Hoodie with Zipper</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 94.500</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <figure>
                                                                        <a href="http://msbb.test/product/beanie/">
                                                                                <img src="http://msbb.test/wp-content/uploads/2021/03/beanie-2-140x140.jpg" width="70"/>
                                                                        </a>
                                                                </figure>
                                                                <div className="caption">
                                                                        <span className="tagline">Hydrating Your Skin</span>
                                                                        <h3><a href="http://msbb.test/product/beanie/">Beanie</a></h3>
                                                                        <div className="util">
                                                                                <Calc max="10" classes={'smaller'} />
                                                                                <strong>Rp. 150.000</strong>
                                                                        </div>
                                                                        <a href="#" className="rmv cvr-bg"></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </CustomScroll>
                                </div>
                                <div className="cfoot">
                                        <div className="subtotal clearfix">
                                                <b>Grand Total</b>
                                                <b><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">Rp. </span>299.500</bdi></span></b>
                                        </div>
                                        <a href="http://msbb.test/gift/" className="btn-gift">You've got a Gift, Click here</a>
                                        <a href="http://msbb.test/cart/" className="button btn-white btn-fullwidth">View Cart</a>
                                        <a href="http://msbb.test/checkout/" className="button btn-fullwidth">Check Out</a>
                                </div>
                        </div>
                </div>
	);
};

export default PopupCart;
