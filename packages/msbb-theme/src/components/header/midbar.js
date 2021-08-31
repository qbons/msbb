// ::PASS::
import { connect } from 'frontity';
import Link from '@frontity/components/link';

const Midbar = ({ state }) => {
        const nav = state.theme.navigation;
        const option = state.theme.options;
	return (
		<>
                        {(nav.topmenu.length > 0 || option.email != '') && 
                                <div className="midbar">
                                        <div className="wrapper clearfix">
                                                <div className="midmenu">
                                                        {nav.topmenu.length > 0 &&
                                                                <ul id="menu-top-menu">
                                                                        {nav.topmenu.map((item, index) => {
                                                                                return(
                                                                                        <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                )
                                                                        })}
                                                                </ul>
                                                        }
                                                </div>
                                                {option.email !='' &&
                                                        <div className="midml">
                                                                <Link link={"mailto:" + option.email} className="cvr-bg-bf">{option.email}</Link>
                                                        </div>
                                                }
                                        </div>
                                </div>
                        }
		</>
	);
};

export default connect(Midbar);
