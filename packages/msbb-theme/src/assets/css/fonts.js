import JSSB2 from '../fonts/JosefinSans-Bold.woff2';
import JSSB from '../fonts/JosefinSans-Bold.woff2';
import JSSR2 from '../fonts/JosefinSans-Regular.woff2';
import JSSR from '../fonts/JosefinSans-Regular.woff';
import JSSS2 from '../fonts/JosefinSans-SemiBold.woff2';
import JSSS from '../fonts/JosefinSans-SemiBold.woff';
import RLW2 from '../fonts/Raleway-Regular.woff2';
import RLW from '../fonts/Raleway-Regular.woff';
import RLWI2 from '../fonts/Raleway-Italic.woff2';
import RLWI from '../fonts/Raleway-Italic.woff';
import RLWB2 from '../fonts/Raleway-Bold.woff2';
import RLWB from '../fonts/Raleway-Bold.woff';
import RLWSB2 from '../fonts/Raleway-SemiBold.woff2';
import RLWSB from '../fonts/Raleway-SemiBold.woff';
import RLWBI2 from '../fonts/Raleway-BlackItalic.woff2';
import RLWBI from '../fonts/Raleway-BlackItalic.woff';

const Fonts = `
	@font-face {
        	font-family: 'Josefin Sans';
        	src: url('${JSSB2}') format('woff2'),
            	url('${JSSB}') format('woff');
        	font-weight: 700;
        	font-style: normal;
	        font-display: swap;
    	}
    
    	@font-face {
        	font-family: 'Josefin Sans';
        	src: url('${JSSR2}') format('woff2'),
            	url('${JSSR}') format('woff');
        	font-weight: 400;
        	font-style: normal;
	        font-display: swap;
    	}
    
    	@font-face {
        	font-family: 'Josefin Sans';
        	src: url('${JSSS2}') format('woff2'),
            	url('${JSSS}') format('woff');
        	font-weight: 600;
        	font-style: normal;
        	font-display: swap;
    	}
    
    	@font-face {
        	font-family: 'Raleway';
        	src: url('${RLW2}') format('woff2'),
            	url('${RLW}') format('woff');
        	font-weight: 400;
	        font-style: normal;
        	font-display: swap;
    	}
    
    	@font-face {
		font-family: 'Raleway';
		src: url('${RLWI2}') format('woff2'),
            	url('${RLWI}') format('woff');
		font-weight: 400;
		font-style: italic;
		font-display: swap;
    	}	
    
    	@font-face {
		font-family: 'Raleway';
		src: url('${RLWB2}') format('woff2'),
            	url('${RLWB}') format('woff');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
    	}
    
    	@font-face {
		font-family: 'Raleway';
		src: url('${RLWSB2}') format('woff2'),
            	url('${RLWSB}') format('woff');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
    	}
    
    	@font-face {
		font-family: 'Raleway';
		src: url('${RLWBI2}') format('woff2'),
            	url('${RLWBI}') format('woff');
		font-weight: 900;
		font-style: italic;
		font-display: swap;
    	}
`;
export default Fonts;
