// ::PASS::
import CustomScroll from 'react-custom-scroll';

import Brand from './brand';
import Form from './form';
import Voucher from './voucher';
import Products from './products';

const PopupSearch = ( props ) => {
        const state = props.state;
        const setSearch = props.setSearch;
        const option = state.theme.options.searchPopup;
	return (
		<div className="popup-layer">
                        <div id="popsearch">
                                <button className="close-popup" onClick={() => setSearch(false)}></button>
                                <div className="layer">
                                        <Form state={state} option={option} />
                                        <CustomScroll heightRelativeToParent="550px">
                                                <Voucher state={state}  option={option} />
                                                <Brand state={state}  option={option} />
                                                <Products state={state} option={option} />
                                        </CustomScroll>
                                </div>
                        </div>
                </div>
	);
};

export default PopupSearch;
