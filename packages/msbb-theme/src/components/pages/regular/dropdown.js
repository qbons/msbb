import Nav from './nav';
import {useState} from 'react';

const Dropdown = (props) => {
        const [active, setActive] = useState(false);
        const data = props.data;
        let classes = active ? 'dropmenu active' : 'dropmenu';
        classes = (typeof props.classes != 'undefined' && props.classes != '') ? classes + props.classes : classes;
        return(
                <div className={classes}>
                        <strong onClick={() => setActive(!active)}>{props.data.title}</strong>
                        {data.util.sidebarMenu.length > 0 && <Nav data={data} /> }
                </div>
        )
}

export default Dropdown;