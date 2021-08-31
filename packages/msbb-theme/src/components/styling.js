import { Global, css } from 'frontity';

import iconT from '../assets/fonts/qbons.ttf';
import iconW from '../assets/fonts/qbons.svg';
import iconS from '../assets/fonts/qbons.svg';

import Reset from '../assets/css/reset';
import Fonts from '../assets/css/fonts';
import Icon from '../assets/css/icon.css';
import IconContent from '../assets/css/icon-content.css';
import Fancy from '../assets/css/fancy.css';

import Generic from '../assets/css/generic';
import Style from '../assets/css/style';
import Mobile from '../assets/css/mobile';

const Styling = () => {
        return(
                <>
                        <Global styles = { css ` 
                                ${Reset}
                                ${Fonts}
                                ${Fancy}
                                @font-face {
                                        font-family: 'qbons';
                                        src:
                                        url('${iconT}') format('truetype'),
                                        url('${iconW}') format('woff'),
                                        url('${iconS}#qbons') format('svg');
                                        font-weight: normal;
                                        font-style: normal;
                                        font-display: block;
                                }
                                ${Icon}
                                ${Generic}
                                ${Style}
                                ${Mobile}
                                ${IconContent}
                        ` } />
                </>
        )
}

export default Styling;