import {useState} from 'react';
import SlideToggle from "react-slide-toggle";
import { connect } from "frontity"

import PopupLogin from '../popup/popup-login';
import PopupRegister from '../popup/popup-register';
import PopupForgot from '../popup/popup-forgot';


const NotLoggedIn = (props) => {
        const state = props.state;
        const [popup, setPopup] = useState('none');
        return (
                <>
                        <button className="button btn-account cvr-bg-bf" onClick={() => setPopup('login')}>Sign In</button>
                        {popup === 'login' && <PopupLogin state={state} setPopup={setPopup} />}
                        {popup === 'register' && <PopupRegister state={state} setPopup={setPopup} />}
                        {popup === 'forgot' && <PopupForgot state={state} setPopup={setPopup} />}
                </>
        )
}

const LoggedIn = (props) => {        
        function logout(e){
                e.preventDefault();
                localStorage.removeItem('msbbtoken');
                window.location.reload();
        }
        return(
                <>
                        <SlideToggle
                                collapsed="true"
                        >
                                {({ toggle, setCollapsibleElement }) => (
                                        // ::TEMP::
                                        <>
                                                <button className="button btn-account cvr-bg-bf" onClick={toggle}>Account</button>
                                                <div className="drop" ref={setCollapsibleElement}>
                                                        <ul>
                                                                <li><a href="#">Edit Profile</a></li>
                                                                <li><a href="#">Review</a></li>
                                                                <li><a href="#">Order</a></li>
                                                                <li><a href="#" onClick={logout}>Logout</a></li>
                                                        </ul>
                                                </div>
                                        </>
                                )}
                        </SlideToggle>
                </>
        )
}

const UserAccount = ({state}) => {
        return(
                <div className="uacc">
                        {!state.theme.isUserLoggedIn && <NotLoggedIn state={state}/> }
                        {state.theme.isUserLoggedIn && <LoggedIn state={state}/> }
                </div>
        )
}

export default connect(UserAccount);