// ::PASS::
import { connect } from 'frontity';

import Link from '@frontity/components/link';

import CategoryMenu from './botline-category-menu';
import BrandMenu from './botline-brand-menu';

const BotbarBotline = ({ state }) => {
        const nav = state.theme.navigation;        
        const option = state.theme.options;
	return (
		<>
                        {nav.mainmenu.length > 0 && 
                                <div className="botline">
                                        <ul>
                                                {nav.mainmenu.map((item, index) => {
                                                        return(
                                                                <li key={index} className={state.router.link == item.slug ? 'current-menu-item' : ''}>
                                                                        <Link link={item.slug}>{item.title}</Link>
                                                                        {item.categoryMenu.length > 0 && <CategoryMenu nav={item.categoryMenu}/> }
                                                                        {item.id == option.brandMenu.menuId && <BrandMenu brand={option.brandMenu} />}
                                                                </li>
                                                        )
                                                })}
                                        </ul>
                                </div>
                        }
                </>
	);
};

export default connect(BotbarBotline);
