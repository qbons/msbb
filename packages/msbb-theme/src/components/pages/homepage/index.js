import { connect } from "frontity";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import HeadMeta from '../../head-meta';

const Homepage = ({state}) => {
        function testToken(e){
                e.preventDefault();
                axios.post(state.theme.api + 'test-token',{}, {
                        headers: {
                                Authorization: 'Bearer ' + state.theme.token
                        }
                } ).then(res => {
                        console.log(res.data);
                });
        }
        return(
                <>
                        <HeadMeta/>
                        <div className="inner-page" style={{padding: '20vh 0', textAlign: 'center'}}>
                                Homepage<br/><br/>
                                <a href="#" className="button" onClick={testToken}>Test Token</a>
                        </div>
                </>
        )
}

export default connect(Homepage);