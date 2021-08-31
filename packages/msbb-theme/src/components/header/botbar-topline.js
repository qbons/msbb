import { useState } from 'react';
import { connect } from 'frontity';
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import UserAccount from './user-account';
import PopupSearch from '../popup/popup-search/';
import PopupMenu from '../popup/popup-menu/';


const BotbarTopline = ({ state, actions }) => {
	const [isSearch, setSearch] = useState(false);
	const [menu, setMenu] = useState(false);
	return (
		<>
			<div className="topline rowflex">
				<div className="mobile-trigger">
					<Link link="#" className="cvr-bg" onClick={(e) => {e.preventDefault(); setMenu(true)}}></Link>
				</div>
				{menu && <PopupMenu className={menu ? 'showing popmenu clearfix' : 'popmenu clearfix'} state={state} setMenu={setMenu} />}
				<div className="logo">
					<Link link="/"><Image src={state.theme.options.logoHead} width="140"/></Link>
				</div>
				<div className="searchbar">
					<a href="#" onClick={(e) => {e.preventDefault(); setSearch(true)}}></a>
					{isSearch && <PopupSearch state={state} setSearch={setSearch} /> }
					<form>
						<input type="text" placeholder="MSBB Products" />
						<button type="submit" className="cvr-bg"></button>
					</form>
				</div>
				<div className="util">
					<div className="ucart">
						<a href="#" className="cvr-bg-af" onClick={(e) => {e.preventDefault(); actions.theme.toggleCart()}}><span>Cart</span><b>{state.theme.cart.count}</b></a>
					</div>
					<UserAccount />
				</div>
			</div>
			
		</>
	);
};

export default connect(BotbarTopline);
