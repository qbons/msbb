// ::PASS::
import { useState } from 'react';
import Link from '@frontity/components/link';

const WrapMenu = (props) => {
        return(
               <>{props.children} </>
        )
}

const CategoryMenu = ( props ) => {
        const nav = props.nav;
        const [menu, setMenu] = useState(nav[0].id);
        
	return (
		<>
			<ul className="cat-menu">
                                <li>
                                        <div className="rowflex">
                                                <div className="navtab">
                                                        <ul>
                                                                {nav.map((item, index) => {
                                                                        const current =  menu === item.id ? 'current' : ''
                                                                        return(
                                                                                <li key={index} className={current}><Link link="#" onClick={(e) => {e.preventDefault(); setMenu(item.id)}}>{item.title}</Link></li>
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                                <div className="navholder">
                                                        {nav.map((item, index) => {
                                                                return(
                                                                        <div key={index} className={menu === item.id ? 'item active' : 'item' }>
                                                                                {item.child.length > 0 &&
                                                                                        <>
                                                                                                {item.child.map((child1, c1) => {
                                                                                                        return(
                                                                                                                <WrapMenu key={c1}>
                                                                                                                        {child1.length > 0 &&
                                                                                                                                <>
                                                                                                                                        {child1.map((child2, c2) => {                             
                                                                                                                                                return(
                                                                                                                                                        <ul key={c2}>
                                                                                                                                                                <>
                                                                                                                                                                        {child2.child.length > 0 && 
                                                                                                                                                                                <>
                                                                                                                                                                                        {child2.child.map((child3, c3) => {
                                                                                                                                                                                                return(
                                                                                                                                                                                                        <li key={c3}>
                                                                                                                                                                                                                <Link link={child3.slug}>{child3.title}</Link>
                                                                                                                                                                                                                {child3.child.length > 0 && 
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                {child3.child.map((child4, c4) => {
                                                                                                                                                                                                                                        return(
                                                                                                                                                                                                                                                <li key={c4}>
                                                                                                                                                                                                                                                        <Link link={child4.slug}>{child4.title}</Link>
                                                                                                                                                                                                                                                        {child4.child.length > 0 && 
                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                        {child4.child.map((child5, c5) => {
                                                                                                                                                                                                                                                                                return(
                                                                                                                                                                                                                                                                                        <li key={c5}>
                                                                                                                                                                                                                                                                                                <Link link={child5.slug}>{child5.title}</Link>
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
                                                                                                                                                                                </>
                                                                                                                                                                        }
                                                                                                                                                                </>
                                                                                                                                                        </ul>
                                                                                                                                                )
                                                                                                                                        })}
                                                                                                                                </>
                                                                                                                        }
                                                                                                                </WrapMenu>
                                                                                                        )
                                                                                                })}
                                                                                        </>
                                                                                }
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                </li>
                        </ul>
		</>
	);
};

export default CategoryMenu;
