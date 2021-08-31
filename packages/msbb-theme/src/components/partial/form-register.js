import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FormRegister = (props) => {
        const state = props.state;
        const setPopup = props.setPopup;
        const [pass, isPass] = useState(true);
        const [isLoading, setLoading] = useState(false);
        const [field, setField] = useState({
                first_name: '',
                user_password: '',
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
                                user_email: field.user_email,
                                user_password: field.user_password,
                                first_name: field.first_name
                        }
                        axios.post(state.theme.api + 'register',  {data:data} ).then(res => {
                                setLoading(false);
                                if(res.data.status == 'ok'){
                                        toast.success('Pendaftaran berhasil!');
                                        setPopup(false);
                                }else{
                                        toast.error(res.data.msg);
                                }
                        });
                }
        }


	return (
                <form id="form-register" onSubmit={handleSubmit}>
                        <div className="fgroup">
                                <input type="text"  placeholder="Full Name" name="first_name" required="required" onChange={handleChange} value={field.first_name} />
                        </div>
                        <div className="fgroup">
                                <input type="email"  placeholder="Email" name="user_email" required="required" autoComplete="username" onChange={handleChange} value={field.user_email}  />
                        </div>
                        <div className="fgroup">
                                <div className="pass-field">
                                        <input type={pass ? 'password' : 'text'}  name="user_password"  required="required" placeholder="Password" autoComplete="current-password" onChange={handleChange} value={field.user_password}  />
                                        <b onClick={() => isPass(!pass)} className={pass ? '' : 'merem'}></b>
                                </div>
                        </div>
                        <button type="submit" className={isLoading ? "button btn-fullwidth has-loading fetching" : "button btn-fullwidth has-loading"}>Register</button>
                </form>
	);
};

export default FormRegister;
