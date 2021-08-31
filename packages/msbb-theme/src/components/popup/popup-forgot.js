import FormForgot from '../partial/form-forgot';
import Image from "@frontity/components/image";

const PopupForgot = ( props ) => {
	const state = props.state;
	const setPopup = props.setPopup;
	return (
		<div className="popup-layer">
			<div id="popforgot" className="popup-credential">
                                <button className="close-popup" onClick={() => setPopup('none')}></button>
                                <div className="login-layer">
                                        <div className="holder">
                                                <div className="hentry">
                                                        <figure><Image src={state.theme.options.logoHead} width="155"/></figure>
                                                        <h2>Forgot Password</h2>
                                                        <p>Gunakan alamat email untuk mengatur ulang password kamu</p>
                                                </div>
                                                <div className="form-basic">
                                                        <FormForgot state={state} setPopup={setPopup}/>
                                                </div>
                                                <div className="botcred">
                                                        <p>Back to  <a href="#" onClick={(e) => {e.preventDefault(); setPopup('login')}}>Login</a> or <a href="#" onClick={(e) => {e.preventDefault(); setPopup('register')}}>Register</a></p>
                                                </div>
                                        </div>
                                </div>
                        </div>
		</div>
	);
};

export default PopupForgot;
