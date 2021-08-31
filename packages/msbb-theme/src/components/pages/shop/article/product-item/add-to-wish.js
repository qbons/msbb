import {connect, useConnect} from 'frontity';
import {useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddToWish = (props) => {
        const data = props.data;
        const {state} = useConnect();
        const [isLoading, setLoading] = useState(false);
        
        let wishlist = state.theme.wishlist;
        let wished = (wishlist.length > 0 && wishlist.includes(data.id) ) ? 'wished' : '';

        function processWishlist(e){
                e.preventDefault();
                if(state.theme.token != false){
                        setLoading(true);
                        axios.post(state.theme.api + 'process-wishlist',  {id : data.id}, {
                                headers: { 'Authorization' : `Bearer ${state.theme.token}` }
                        } ).then(res => {
                                state.theme.wishlist = res.data.wishlist;
                                res.data.action == 'added' ? toast.success(res.data.msg) : toast.error(res.data.msg);
                                setLoading(false);    
                        }); 
                }else{
                        toast.error('Please login before adding product to wishlist!');
                }
        }
        
        return(
                <a href="#" className={`add-to-wish cvr-bg ${wished} ${isLoading ? 'fetching' : ''}`}  onClick={processWishlist}></a>
        )
}

export default connect(AddToWish, false);