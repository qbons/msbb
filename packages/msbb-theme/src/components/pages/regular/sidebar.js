import Nav from './nav';

const Sidebar = (props) => {
        const data = props.data;
        return(
                <aside className="pgnav">
                        {data.util.sidebarTitle != '' && <h2>{data.util.sidebarTitle}</h2>}
                        {data.util.sidebarMenu.length > 0 && <Nav data={data} /> }
                </aside>
        )
}
export default Sidebar;