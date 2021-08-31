import Link from '@frontity/components/link';

const Nav = (props) => {
        const data = props.data;
        
        return(
                <>
                        {typeof data.util != 'undefined' &&
                        <ul>
                                {data.util.sidebarMenu.map((item, index) => {
                                        return(
                                                <li key={index} className={item.title === data.title ? 'current-menu-item' : '' }><Link link={item.slug}>{item.title}</Link></li>
                                        )
                                })}
                        </ul>
                        }
                </>
        )
}

export default Nav;