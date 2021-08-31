// ::PASS::
import Topbar from './topbar';
import Midbar from './midbar';
import BotBar from './botbar';

const Header = () => {
        return(
                <>
                        <header id="top">
                                <Topbar/>
                                <Midbar/>
                                <BotBar/>
                        </header>
                </>
        )
}

export default Header;