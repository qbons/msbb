// ::PASS::
import {useState} from 'react';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import PopupLogin from '../../popup/popup-login';
import PopupRegister from '../../popup/popup-register';
import PopupForgot from '../../popup/popup-forgot';

import CategoryMenu from './category-menu';
import BrandMenu from './brand-menu';


const PopupMenu = ( props ) => {
	const state = props.state;
	const setMenu = props.setMenu;
        const className = props.className;
        const [popup, setPopup] = useState('none');
        const [category, setCategory] = useState(false);
        const [brand, setBrand] = useState(false);
        const option = state.theme.options;
        const nav = state.theme.navigation;        
	return (
                <>
                        <div className={className}>
                                <div className="holder">
                                        <a href="#" className="cls cvr-bg" onClick={(e) => {e.preventDefault(); setMenu(false)}}></a>
                                        <figure><Link link="/"><Image src={option.logoHead} width="140"/></Link></figure>
                                        <div className="wrap">
                                                {nav.mobilemenu.length > 0 &&
                                                        <div className="m">
                                                                <ul>
                                                                        {nav.mobilemenu.map((item, index) => {
                                                                                let classes = '';
                                                                                if(item.classes.length > 0){
                                                                                        item.classes.map((cls,idx) => {
                                                                                                classes +=  cls ;
                                                                                        });
                                                                                }
                                                                                return (
                                                                                        <li key={index} className={classes}>
                                                                                                {(classes != 'popcats' && classes != 'popbrands') &&
                                                                                                        <Link link={item.slug} >{item.title}</Link>
                                                                                                }
                                                                                                {classes == 'popcats' &&
                                                                                                        <a  href="#" onClick={(e) => {e.preventDefault(); setCategory(true)}}>{item.title}</a>
                                                                                                }
                                                                                                {classes == 'popbrands' &&
                                                                                                        <a  href="#" onClick={(e) => {e.preventDefault(); setBrand(true)}}>{item.title}</a>
                                                                                                }
                                                                                        </li>
                                                                                )
                                                                        })}
                                                                </ul>
                                                        </div>
                                                }
                                                <div className="s">
                                                        <ul>
                                                                {nav.topmenu.length > 0 &&
                                                                        <>
                                                                                {nav.topmenu.map((item, index) => {
                                                                                        return(
                                                                                                <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                        )
                                                                                })}
                                                                        </>
                                                                }
                                                                {option.email !='' &&
                                                                        <li><Link link={"mailto:" + option.email}>{option.email}</Link></li>
                                                                }
                                                        </ul>
                                                </div>
                                                <div className="c">
                                                        <a href="#" onClick={(e) => {e.preventDefault(); setPopup('login')}}>Log In</a>
                                                        <a href="#" onClick={(e) => {e.preventDefault(); setPopup('register')}}>Register</a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        {popup === 'login' && <PopupLogin state={state} setPopup={setPopup} />}
                        {popup === 'register' && <PopupRegister state={state} setPopup={setPopup} />}
                        {popup === 'forgot' && <PopupForgot state={state} setPopup={setPopup} />}
                        {category && <CategoryMenu setCategory={setCategory} state={state} />}
                        {brand && <BrandMenu setBrand={setBrand} state={state} brand={option.brandMenu} />}
                </>
	);
};

export default PopupMenu;
