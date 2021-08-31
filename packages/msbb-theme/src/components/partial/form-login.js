import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FormLogin = (props) => {
        const state = props.state;
        const setPopup = props.setPopup;
        const [pass, isPass] = useState(true);
        const [isLoading, setLoading] = useState(false);
        const [field, setField] = useState({
                user_password: '',
                user_login: ''
        });
        function handleChange(e) {
                setField((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value
                }));
        }
        function  handleSubmit (e) {
                e.preventDefault();
                if(!isLoading){
                        setLoading(true);
                        const data = {
                                username: field.user_login,
                                password: field.user_password
                        }
                        axios.post(state.theme.api + 'login',  data ).then(res => {
                                setLoading(false);
                                if(res.data.status == 'ok'){
                                        toast.success(res.data.msg);
                                        state.theme.token = res.data.data.token;
                                        state.theme.isUserLoggedIn = true;
                                        localStorage.setItem('msbbtoken', res.data.data.token);
                                        setPopup(false);
                                        window.location.reload();
                                }else{
                                        toast.error(res.data.msg);
                                }
                        });
                }
        }

        
	return (		
                <form id="form-login" onSubmit={handleSubmit}>
                        <div className="fgroup">
                                <input type="email" placeholder="Email" name="user_login"  required="required" autoComplete="username" onChange={handleChange} value={field.user_login}/>
                        </div>
                        <div className="fgroup">
                                <div className="pass-field">
                                        <input type={pass ? 'password' : 'text'}  name="user_password"  required="required" placeholder="Password" autoComplete="current-password" onChange={handleChange} value={field.user_password} />
                                        <b onClick={() => isPass(!pass)} className={pass ? '' : 'merem'}></b>
                                </div>
                        </div>
                        <a href="#"  className="forgot"  onClick={(e) => {e.preventDefault(); setPopup('forgot')}}>Forgot Password?</a>
                        <button type="submit" className={isLoading ? "button btn-fullwidth has-loading fetching" : "button btn-fullwidth has-loading"}>Sign In</button>
                </form>
	);
};

export default FormLogin;
