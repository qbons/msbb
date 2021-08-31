import FormRegister from '../partial/form-register';
import Image from "@frontity/components/image";

const PopupRegister = ( props ) => {
        const state = props.state;
	const setPopup = props.setPopup;
	return (
                <div className="popup-layer">
                        <div id="popregister" className="popup-credential">
                                <button className="close-popup" onClick={() => setPopup('none')}></button>
                                <div className="login-layer">
                                        <div className="holder">
                                                <div className="hentry">
                                                        <figure><Image src={state.theme.options.logoHead} width="155"/></figure>
                                                        <h2>Sign Up</h2>
                                                </div>
                                                <div className="form-basic">
                                                        <FormRegister state={state} setPopup={setPopup}/>
                                                </div>
                                                <div className="botcred">
                                                        <p>Have an account? <a href="#" onClick={(e) => {e.preventDefault(); setPopup('login')}}>Login Now</a></p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
	);
};

export default PopupRegister;
