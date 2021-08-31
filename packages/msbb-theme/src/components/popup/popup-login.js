import FormLogin from '../partial/form-login';
import Image from "@frontity/components/image";

const PopupLogin = ( props ) => {
	const state = props.state;
	const setPopup = props.setPopup;
	return (
		<div className="popup-layer">
			<div id="poplogin"  className="popup-credential">
				<button className="close-popup" onClick={() => setPopup('none')}></button>
				<div className="login-layer">
					<div className="holder">
						<div className="hentry">
							<figure><Image src={state.theme.options.logoHead} width="155"/></figure>
							<h2>Sign In</h2>
						</div>
						<div className="form-basic">
							<FormLogin state={state} setPopup={setPopup}/>
						</div>
						<div className="botcred">
							<p>Don't have an account? <a href="#" onClick={(e) => {e.preventDefault(); setPopup('register')}}>Register</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupLogin;
