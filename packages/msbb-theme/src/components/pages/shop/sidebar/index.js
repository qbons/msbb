
import Purpose from './purpose';
import Category from './category';
import Rating from './rating';
import Brands from './brands';
import Price from './price';

const Sidebar = (props) => {
        const data = props.data;
        return(
                <aside className="proside">
                        <Purpose data={data} setArgs={props.setArgs} />
                        <Category data={data} setArgs={props.setArgs} />
                        <Rating data={data} setArgs={props.setArgs} />
                        <Brands data={data} setArgs={props.setArgs} />
                        <Price data={data} setArgs={props.setArgs} />
                </aside>
        )
}

export default Sidebar;