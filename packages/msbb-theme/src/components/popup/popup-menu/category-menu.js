// ::PASS::
import Link from '@frontity/components/link';

const CategoryMenu = ( props ) => {
        const setCategory = props.setCategory;
        const state = props.state;
        const nav = state.theme.navigation.mobilemenucat;
        
	return (
		<div id="popcats" className="popsubmenu">
                        <button className="close-popup" onClick={() => setCategory(false)}></button>
                        <div className="holder">
                                <h2>Category</h2>
                                {nav.length > 0 &&
                                        <ul>
                                                {nav.map((item, index) => {
                                                        return(
                                                                <li key={index}>
                                                                        <Link link={item.slug}>{item.title}</Link>
                                                                        {item.child[0].length > 0 &&
                                                                                <ul className="sub-menu">
                                                                                        {item.child[0].map((child1, c1) => {
                                                                                                return(
                                                                                                        <li key={c1}>
                                                                                                                <Link link={child1.slug}>{child1.title}</Link>
                                                                                                                {child1.child.length > 0 && 
                                                                                                                        <ul className="sub-menu">
                                                                                                                                {child1.child.map((child2, c2) => {
                                                                                                                                        return(
                                                                                                                                                <li key={c2}>
                                                                                                                                                        <Link link={child2.slug}>{child2.title}</Link>
                                                                                                                                                </li>
                                                                                                                                        )
                                                                                                                                })}
                                                                                                                        </ul>
                                                                                                                }
                                                                                                        </li>
                                                                                                )
                                                                                        })}
                                                                                </ul>
                                                                        }
                                                                </li>
                                                        )
                                                })}
                                        </ul>
                                }
                        </div>
                </div>
	);
};

export default CategoryMenu;
