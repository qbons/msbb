import { connect } from 'frontity';
import Switch from '@frontity/components/switch';

import Loading from './loading';
import Homepage from './pages/homepage/';
import Shop from './pages/shop/';
import FAQ from './pages/faq/';
import Contact from './pages/contact/';
import Reseller from './pages/reseller/';
import Block from './pages/block/';
import Regular from './pages/regular/';

const Body = ({ state }) => {
	const req = state.source.get(state.router.link);
	
	return (
		<>
			<div id="body">
				<Switch >
					<Loading when={req.isFetching} />
					<Homepage  when={req.isHomepage} />
					<Shop  when={req.isShopPage || req.isProductCat || req.isProductBrand } />
					<Contact  when={req.isContactPage} />
					<Reseller  when={req.isResellerPage} />
					<FAQ  when={req.isFaqPage} />
					<Block  when={req.isBlockPage} />
					<Regular  when={req.isRegularPage} />
				</Switch>
                        </div>
		</>
	);
};

export default connect(Body);