import Root from "./components";
import axios from 'axios';

import MSBBAPI from './msbb-api';

const msbbTheme = {
	name: "msbb-theme",
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			isMobileMenuOpen: false,
			autoPrefetch: 'no',
			isCartOpen: false,
			isUserLoggedIn: false,
			options: [],
			navigation: [],
			api: 'http://msbb-api.test/wp-json/msbb-api/v1/',
			token: false,
			wishlist: [],
			cart: {
				count: 0,
				key: '',
				items: '',
				total: ''
			}
		},
	},
	actions: {
		theme: {
			beforeSSR: async ({ state, actions }) => {
				await Promise.all([
					actions.source.fetch("option", {force: false}),
					actions.source.fetch("navigation", {force: false})
				]);
			},
			afterCSR: async ({state,actions}) => {
				const token = localStorage.getItem('msbbtoken');
				if(token !== null){
					state.theme.token = token;
					state.theme.isUserLoggedIn = true;
					await actions.theme.fetchWishlist();
					await actions.theme.fetchCart();
				}else{
					state.theme.token = false;
					state.theme.isUserLoggedIn = false;
				}
				
				document.getElementById('shell').classList.remove('unloaded');
			},
			toggleCart: ({state}) => {
				state.theme.isCartOpen = !state.theme.isCartOpen;
				state.theme.isCartOpen ? document.body.classList.add('has-no-scroll') : document.body.classList.remove('has-no-scroll');
			},
			fetchWishlist: ({state}) => {
				if(state.theme.token != false){
					axios.post(state.theme.api + 'wishlist',  [], {
						headers: { 'Authorization' : `Bearer ${state.theme.token}` }
					} ).then(res => {
					       state.theme.wishlist = res.data;
					}); 
				}
			},
			fetchCart: ({state}) => {
				if(state.theme.token != false){
					axios.post(state.theme.api + 'cart',  [], {
						headers: { 'Authorization' : `Bearer ${state.theme.token}` }
					} ).then(res => {
						state.theme.cart = res.data;
					}); 
				}
			},
		},
	},
	libraries: {
		source:{ 
			handlers: MSBBAPI()
		}
	},
}
export default msbbTheme;