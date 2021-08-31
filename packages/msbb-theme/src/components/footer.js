import { connect } from 'frontity';
import { useState , useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import PopupCart from '../components/popup/popup-cart';

const Footer = ({state, actions, libraries}) => {
        const nav = state.theme.navigation;
        const option = state.theme.options;

        const Html2React = libraries.html2react.Component;

        const [cart, setCart] = useState(false);
        useEffect(() => {
                setCart(state.theme.isCartOpen);
        }, [state.theme.isCartOpen]);
        return (
                <>
                        <footer id="bottom">
                                <div className="wrapper">
                                        <div className="footer-widget rowflex">
                                                <div className="col">
                                                        {option.logoFoot != '' && 
                                                                <div className="widget">
                                                                        <Link link="/"><Image src={state.theme.options.logoFoot} width="171"/></Link>
                                                                </div>
                                                        }
                                                </div>
                                                <div className="col">
                                                        {nav.footermenu.length > 0 && 
                                                                <div className="widget">
                                                                        <ul id="menu-footer-menu">
                                                                                {nav.footermenu.map((item, index) => {
                                                                                        return(
                                                                                                <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                        )
                                                                                })}
                                                                        </ul>
                                                                </div>
                                                        }
                                                </div>
                                                <div className="col lastcol">
                                                        <div className="duo">
                                                                <div className="widget widget_subscribe"> {/* ::TEMP:: */}
                                                                        <h3 className="widget-title">Stay in the loop</h3>
                                                                        <div className="form-basic">
                                                                                <form id="form-subscribe-widget">
                                                                                        <input type="email" placeholder="Your Email" name="email" required="required" />
                                                                                        <button type="submit" className="button has-loading">Subscribe</button>
                                                                                </form>
                                                                        </div>
                                                                </div>
                                                                <div className="widget widget_social">
                                                                        <h3 className="widget-title">Contact Us</h3>
                                                                        <div className="wrap">
                                                                                {option.contact.map((item, index) => {
                                                                                        if(item.url != ''){
                                                                                                return(
                                                                                                        <Link key={index} link={item.prefix + item.url} className={item.type + " cvr-bg"} target="_blank"></Link>
                                                                                                )
                                                                                        }
                                                                                })}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="solo">
                                                                {option.paymentLogo.length > 0 &&
                                                                        <div className="widget widget_payment">
                                                                                <h3 className="widget-title">Payment Method</h3>
                                                                                {option.paymentLogo.map((item, index) => {
                                                                                        return(
                                                                                                <figure key={index}><Image src={item} /></figure>
                                                                                        )
                                                                                })}
                                                                        </div>
                                                                }
                                                        </div>
                                                </div>
                                        </div>
                                        {option.copyright != '' && 
                                                <div className="tribute">
                                                        <p><Html2React html={option.copyright} /></p>
                                                </div>
                                        }
                                </div>
                        </footer>
                        {option.whatsapp != '' &&
                                <div className="watrig">
                                        <Link link={option.whatsapp} target="_blank"></Link>
                                </div>
                        }

                        {cart && <PopupCart actions={actions} />}
                        
                        <Toaster
                                position="bottom-center"
                                toastOptions={{
                                        duration: 3000,
                                }}
                        />
                </>
        )
}

export default connect(Footer);