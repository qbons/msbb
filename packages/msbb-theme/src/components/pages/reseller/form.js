import React, { Component } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.req = this.props.state.source.get(this.props.state.router.link);
                this.data  = this.req.data;
                this.state = {
                        full_name: '',
                        company_name: '',
                        user_email: '',
                        company_email: '',
                        user_phone: '',
                        company_phone: '',
                        company_address: '',
                        product_desc: '',
                        receiver: this.data.content.email,
                        isLoading: false
                };
                
	}	
        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                })
        }
        handleSubmit(e) {
                e.preventDefault();
                const data = {
                        full_name: this.state.full_name,
                        company_name: this.state.company_name,
                        user_email: this.state.user_email,
                        company_email: this.state.company_email,
                        user_phone: this.state.user_phone,
                        company_phone: this.state.company_phone,
                        company_address: this.state.company_address,
                        product_desc: this.state.product_desc,
                        receiver: this.data.content.email
                }
                this.setState({isLoading: true});
                const url = this.props.state.theme.api + 'form-reseller';
                axios.post(url, { data:data }).then(res => {
                        this.setState({isLoading: false});
                        if(res.data.status == 'ok'){
                                toast.success(res.data.msg);
                                this.setState({
                                        full_name: '',
                                        company_name: '',
                                        user_email: '',
                                        company_email: '',
                                        user_phone: '',
                                        company_phone: '',
                                        company_address: '',
                                        product_desc: '',
                                        receiver: this.data.content.email,
                                        isLoading: false
                                });
                        }else{
                                toast.error(res.data.msg);
                        }
                });
        };
	render() {
		return (
                        <div className="form-basic">
                                <form id="form-reseller" onSubmit={this.handleSubmit}>
                                        <div className="rowflex">
                                                <div className="fgroup">
                                                        <label>Full Name<sup>*</sup></label>
                                                        <input type="text"  placeholder="Enter your full name" required="required" name="full_name" onChange={this.handleChange} value={this.state.full_name} />
                                                </div>
                                                <div className="fgroup">
                                                        <label>Company Name Product<sup>*</sup></label>
                                                        <input type="text"  placeholder="Enter your company name product"  required="required" name="company_name" onChange={this.handleChange} value={this.state.company_name}   />
                                                </div>
                                        </div>
                                        <div className="rowflex">
                                                <div className="fgroup">
                                                        <label>Email Address<sup>*</sup></label>
                                                        <input type="email"  placeholder="Enter your email address"  required="required" name="user_email" onChange={this.handleChange}  value={this.state.user_email}  />
                                                </div>
                                                <div className="fgroup">
                                                        <label>Company Email Address<sup>*</sup></label>
                                                        <input type="email"  placeholder="Enter your company email address"  required="required" name="company_email" onChange={this.handleChange} value={this.state.company_email}  />
                                                </div>
                                        </div>
                                        <div className="rowflex">
                                                <div className="fgroup">
                                                        <label>Phone Number<sup>*</sup></label>
                                                        <input type="text"  placeholder="Enter your phone number"  required="required" name="user_phone" className="type-number" onChange={this.handleChange} value={this.state.user_phone}  />
                                                </div>
                                                <div className="fgroup">
                                                        <label>Company Phone Number<sup>*</sup></label>
                                                        <input type="text"  placeholder="Enter your company phone number"  required="required" name="company_phone" className="type-number" onChange={this.handleChange} value={this.state.company_phone}  />
                                                </div>
                                        </div>
                                        <div className="fgroup">
                                                <label>Store / Company Address<sup>*</sup></label>
                                                <textarea placeholder="Enter your company address" required="required" name="company_address" onChange={this.handleChange} value={this.state.company_address}></textarea>
                                        </div>
                                        <div className="fgroup">
                                                <label>Describe Your Product</label>
                                                <textarea placeholder="Description about your product" name="product_desc" onChange={this.handleChange} value={this.state.product_desc}></textarea>
                                        </div>
                                        <div className="centered">
                                                <br/>
                                                <button type="submit" className={this.state.isLoading ? "button btn-orange medwide smalltall has-loading fetching" : "button btn-orange medwide smalltall has-loading"}>Kirim</button>
                                        </div>
                                </form>
                        </div>
		);
	}
}