import {connect} from "frontity";

import Styling from "./styling";
import Header from './header/';
import Body from "./body";
import Footer from "./footer";

const Root = ({state}) => {
	return(
                <div id="shell" className="unloaded">
			<Styling/>
			<Header/>
                        <Body/>
                        <Footer/>
		</div>
	)
}

export default connect(Root);