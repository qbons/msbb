import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FormForgot = (props) => {
        const state = props.state;
        const setPopup = props.setPopup;
        const [isLoading, setLoading] = useState(false);
        const [field, setField] = useState({
                user_email: ''
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
                                email: field.user_email
                        }
                        axios.post(state.theme.api + 'forgot-password',  data ).then(res => {
                                setLoading(false);
                                if(res.data.status == 'ok'){
                                        toast.success('Email reset password sent!');
                                        setPopup(false);
                                }else{
                                        toast.error(res.data.msg);
                                }
                        });
                }
        }

	return (
                <form id="form-forgot-pass" onSubmit={handleSubmit}>
                        <div className="tmethod">
                                <a href="#" className="bm cvr-bg active" onClick={(e) => e.preventDefault()}></a>
                        </div>
                        <div className="fgroup byemail active">
                                <input type="email" placeholder="Your Email" name="user_email"  onChange={handleChange} value={field.user_email}  />
                        </div>
                        <button type="submit" className={isLoading ? "button btn-fullwidth has-loading fetching" : "button btn-fullwidth has-loading"}>Send</button>
                </form>
	);
};

export default FormForgot;
