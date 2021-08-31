import eyeWhite from '../img/icon/eye-white.svg';
import cartWhite from '../img/icon/cart-white.svg';
import heartFill from '../img/icon/heart-fill.svg';
import heartHollow from '../img/icon/heart-hollow.svg';
import closeBold from '../img/icon/close-bold.svg';
import bannerSearch from '../img/icon/banner-search.jpg';
import btnLoading from '../img/btn-loading.gif';
import wishLoad from '../img/wish-load.gif';
import paginatePrev from '../img/icon/prev.svg';
import paginateNext from '../img/icon/next.svg';


const Generic = `

:before,:after,html *{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-moz-osx-font-smoothing: grayscale; /*(For Firefox)*/-webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/}
.clearfix:after,
.clear{clear: both;display: block;height: 0;width: 100%;float: none !important;}
.clearfix:after{content: ''}
input::-moz-focus-inner /*Remove button padding in FF*/{ border: 0;padding: 0;}
a{text-decoration: none;outline: 0 !important;}
a:hover{color: inherit;text-decoration: none;}
img{max-width: 100%;vertical-align: top;}
*:focus ,
textarea,
input,
textarea:focus, input:focus{outline: none;border-radius: 0}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {-webkit-appearance: none !important;margin: 0;}
input[type=number] {-moz-appearance:textfield !important;}
input::placeholder{ 
	color: #9f9f9f;
	opacity:1;
}
textarea::placeholder{ 
	color: #9f9f9f;
	opacity: 1;
}
.generic-popup{
	max-width: 700px;
	width: 100%;
	box-shadow: 0px 0 2px rgba(30, 30, 30, .3);
	border-radius: 10px;
	padding: 30px 20px
}
::-moz-placeholder {
	opacity: 1;
}
body{
        background: #fff;
        color: #4b4b4b;
	font-size: 14px;
	font-family: 'Raleway';
	font-weight:  400;
	position: static;
	overflow-y:auto
}
body.compensate-for-scrollbar{
	margin: 0;	
}
body.has-no-scroll,
body.fancybox-active{
	height: 100vh;
	overflow: hidden;
	margin-right: 17px;
}

.wrapper{
	max-width: 1150px;
	width: 100%;
	margin: 0 auto;
}
.wider.wrapper{
        max-width: 1260px;
}
.inner-checkout .wrapper,
#bottom .wrapper{
	max-width: 1180px;
}
.rowflex{
	display: flex;
	flex-wrap: wrap;
}
.rowflex > *{
	flex: 1;
}
.wcwl_email_elements input[type='email'],
#popbrands fieldset input,
ul.brand-menu .bname fieldset input,
.cvoucher input,
.product-util .search input,
.brand-filter input,
.banner-search form input,
.searchbar input,
.multiple-field .xscroll,
.clicked.dropselect.has-search input,
.form-basic .date-field,
.dropselect strong,
.dropdown select,
.form-basic input[type="number"],
.form-basic input[type="text"],
.form-basic input[type="tel"],
.form-basic input[type="email"],
.form-basic input[type="password"],
.form-basic textarea{
	/* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 10px;
	display: block;
	width: 100%;
	background: rgba(0,0,0,0);
	color: #4b4b4b;
	border: solid 1px #d9d9d9;
	font-size: 14px;
	font-family: 'Raleway';
	font-weight: 400;
	height: 47px;
	padding: 0 24px;
}
.form-basic input[type="number"]:focus,
.form-basic input[type="text"]:focus,
.form-basic input[type="tel"]:focus,
.form-basic input[type="email"]:focus,
.form-basic input[type="password"]:focus,
.form-basic textarea:focus{
	border-color: #ffdcb1;
}
.form-basic textarea{
	min-height: 75px;
	padding: 15px 24px;
	resize: vertical;
	line-height: 180%;
}
.form-inner > *,
.form-basic form > * {
	display: block;
	margin-top: 16px;
}
.form-inner > .gap,
.form-basic form > .rowflex{
	justify-content: space-between;
	display: flex;
	flex-wrap: wrap;
}
.form-inner > .gap > *,
.form-basic form > .rowflex > *{
	max-width: 49%;
	flex: 49%;
}
.form-inner > *:first-child,
.form-basic form > .rowflex:first-child,
.form-basic form > *:first-child{
	margin-top: 0;
}
.form-basic .pass-field{
	position: relative;
}
.form-basic .pass-field b{
	position: absolute;
	display: block;
	right: 13px;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 15px;
	height: 10px;
	cursor: pointer;
	z-index: 2;
}
.form-basic .pass-field b:after{
	display: block;
	width: 100%;
	height: 100%;
	content: '\e8f4';
	font-family: 'qbons';
	color: #ededed;
	font-size: 19px;
	position: relative;
	top: -5px;
}
.form-basic .pass-field b.merem:after{
	content: '\e8f5';
}
.form-basic .fgroup > label{
	display: block;
	margin-bottom: 9px;
	color: #4b4b4b;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 1.6px;
}
.form-basic .fgroup > label sup{
	line-height: 100%;
	position: relative;
	top: 7px;
	right: -5px;
	color: #ea0b18;
	font-size: 23px;
	font-weight: 700;
}
.form-basic .forgot-field{
	text-align: right;
	padding-top: 10px;
}
.form-basic .forgot-field a{
	color: #00562b;
}
.form-basic .forgot-field a:hover{
	text-decoration: underline;
}
.form-basic .rate-field > input { display: none; } 
.form-basic .rate-field > label:before { 
	margin: 2px;
	font-size: 13px;
	font-family: 'qbons';
	display: inline-block;
	content: "\\f005";
}

.form-basic .rate-field > .half:before { 
	content: "\\f089";
	position: absolute;
}
.form-basic .rate-field > label { 
	color: #e1dfd8; 
       float: right;
       cursor: pointer;
}
.form-basic .rate-field > input:checked ~ label, /* show gold star when clicked */
.form-basic .rate-field:not(:checked) > label:hover, /* hover current star */
.form-basic .rate-field:not(:checked) > label:hover ~ label { color: #f9d14e;  } /* hover previous stars in list */
.form-basic .rate-field > input:checked + label:hover, /* hover current star when changing rating */
.form-basic .rate-field > input:checked ~ label:hover,
.form-basic .rate-field > label:hover ~ input:checked ~ label, /* lighten current selection */
.form-basic .rate-field > input:checked ~ label:hover ~ label { color: #f9d14e;  }
.format-text img,
.format-text .gallery img{
	vertical-align: top;
	height: auto !important;
}
/** DROPDOWN **/
.dropselect{
	position: relative;
	-webkit-user-select: none; /* Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
.dropselect select{
	display:none;
}
.dropselect.has-search input{
	margin: 9px;
	width: calc(100% - 18px) !important;
	background: #fff !important;
	border: 1px solid #ececec;
	padding: 0 15px;
	display: block;
	height: 40px !important;
	border-radius: 20px !important;
}
.dropselect strong{
	display: block;
	border: 1px solid #f4ca95;
	padding: 0 15px;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	z-index: 2;
	position: relative;
	background: #fffbf5;
}
.clicked.dropselect.has-search strong{
	border-bottom: none;
	border-radius: 10px 10px 0 0 ;
}
.clicked.dropselect strong{
	z-index: 10;
}
.bigger .dropselect strong{
	line-height: 48px;
}
.form-basic.smaller .dropselect strong{
	height: 40px;
	line-height: 40px;
}
.dropselect.activated strong{
	opacity: 1;
}
.dropdown{
	position: relative;
	display: block;
}
.dropdown i{
	display: inline-block;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 0;
	width: 10px;
	height: 18px;
}
.dropmenu strong:after,
.dropdown i:after,
.dropselect strong:after{
	display: block;
	position: absolute;
	right:8px;
	font-size: 20px;
	top: 0;
	content: '\e313';
	font-family: 'qbons';
	color: #4b4b4b;
	font-weight: 700;
}
.dropmenu.active strong:after,
.dropselect.clicked strong:after{
	content: '\e316';
}
.dropselect .scrollbar-inner.scroll-content{
	max-height: 200px;
}
.dropselect .dropholder{
	list-style: none;
	position: absolute;
	left: 0;
	width: 100%;
	opacity: 0;
	visibility: hidden;
	display: block;
	background: #fffbf5;
	border-radius: 0 0 10px 10px;
	border: 1px solid #f4ca95;
	border-top: none;
	margin-top: -15px;
	padding-top: 20px;
}
.greyed.dropselect .dropholder{
	background: #f9f9f9;
	border: 1px solid #ececec;
}
.has-search.dropselect .dropholder{
	padding-top: 5px;
	margin-top: 0;
}
.dropselect.has-search .dropholder:after{
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	content: '';
	top: 25px !important;
	right: 25px !important;
}
.dropselect.ontop .dropholder{
	bottom: 100%;
}
.dropselect.clicked .dropholder{
	opacity: 1;
	visibility: visible;
	z-index: 9;
}
.dropselect.ontop.clicked .dropholder{
	margin: 0 0 5px;
}
.dropselect .scrollbar-inner{
	padding: 2px 15px;
}
.dropselect .scrollbar-inner > .scroll-element.scroll-y{
	width: 3px;
}
.dropselect li{
	display:block;
	cursor: pointer;
	padding: 15px 0;
	position: relative;
	border-top: 1px solid #f3f3f3;
}
.dropselect li.current:after{
	content: '\e86c';
	font-family: 'qbons';
	color: #d37072;
	display: block;
	position: absolute;
	top: 13px;
	right: 0px;
	font-size: 20px;
}
.has-img.dropselect li.current:after{
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.dropselect li:hover{
	color: #d37072;
}
.dropselect li:first-child{
	border: none;
}
.dropselect.has-img li.hidden,
.dropselect li.hidden,
.dropselect li.empty{
	display: none;
}
.dropselect.has-img strong,
.dropselect.has-img li{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
}
.img-choosed.dropselect.has-img strong{
	height: auto !important;
	line-height: normal !important;
	padding: 8.7px 18px !important;
}
.img-choosed.dropselect.has-img strong:after{
	top: 17px;
}
.dropselect.has-img strong img,
.dropselect.has-img li img{
	flex: 78px;
	max-width: 78px;
}
.dropselect.has-img strong em,
.dropselect.has-img li em{
	flex: calc(100% - 83px);
	max-width:  calc(100% - 83px);
	font-size: 16px;
	color: #232729;
	font-weight: 600;
	font-family: 'Josefin Sans';
	padding-left: 10px;
}
.dropselect.has-img strong em b,
.dropselect.has-img li em b{
	display: block;
	font-family: 'Raleway';
	font-weight: 400;
	font-size: 11px;
	color: #000;
	line-height: 100%;
	padding: 4px 0 0;
}
.dropselect.has-img strong em b{
	padding: 3px 0 0;
}
.inline-date{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.inline-date > *{
	flex: 30%;
	max-width: 30%;
}
.inline-date > *:nth-child(2){
	max-width: 36%;
	flex: 36%;
}
.inline-date .dropdown select{
	border-radius: 5px;
	border: 1px solid #f4ca95;
	background: #fffbf5;
	padding: 0 15px;
	cursor: pointer;
}
/** RADIO **/
.dotdio label{
	display: inline-block;
	cursor: pointer;
	margin: 0 0 0 15px;
}
.dotdio.blocky label{
	display: block;
	margin: 10px 0 0;
}
.dotdio label:first-child,
.dotdio.blocky label:first-child{
	margin: 0;
}
.dotdio input{
	display: none;
}
.dotdio span{
	display: inline-block;
	position: relative;
	vertical-align: middle;
	color: #000;
}
.dotdio span:before{
	display: inline-block;
	vertical-align: middle;
	content: '';
	width: 16px;
	height: 16px;
	background: #fff;
	border: 1px solid rgba(0,0,0,.3);
	margin-right: 10px;
	-moz-border-radius: 50% ;
	-webkit-border-radius: 50% ;
	border-radius: 50% ;
	position: relative;
	top: -2px;
	box-shadow: inset 0px 0 0 2px #fff;
}
.dotdio input:checked + span:before{
	border: 1px solid #e0a459;
	background: #e0a459;
}
.accord-item {
	position: relative;
	padding: 16px 30px;
	background: #fffbf5;
}
.accord-item .acc-head{
	cursor: pointer;
	position: relative;
	padding-right: 20px;
}
.accord-item .acc-head:before{
	position: absolute;
	right: -20px;
	top: -5px;
	display: block;
	content: '\e313';
	text-align: center;
	font-family:'qbons';
	color: #4b4b4b;
	font-size: 30px;
}
.accord-item.expanded .acc-head:before{
	content: "\\e316";
}
.accord-item .acc-head h3{
	color: #9f9f9f;
	font-size: 16px;
	font-weight: 600;
	-webkit-user-select: none; /* Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}

.accord-item .format-text {
	font-size: 12px;
	padding: 35px 20px 0 0;
}
.accord-item .format-text ul{
	list-style: none;
	padding: 0;
}
.accord-item .format-text ul li{
	padding-left: 15px;
	padding-bottom: 11px;
}
.accord-item .format-text ul h3{
	margin-bottom: 5px;
	left: -15px;
	position: relative;
}
.tab-basic .tab-head{
	margin-bottom: 20px;
	border-bottom: 1px solid #d0d0d0;
}
.tab-basic .tab-head a{
	display: inline-block;
	vertical-align: middle;
	color: #9f9f9f;	
	position: relative;
	font-weight: 600;
	text-transform: uppercase;
	padding: 0 25px 15px;
	font-size: 14px;
	letter-spacing: .5px;
	transition:color 0.2s ease-in;
}
.tab-basic .tab-head a:after{
	display: block;
	position: absolute;
	left: 0;
	bottom: -2px;
	width: 100%;
	height: 2px;
	content: '';
	opacity: 0;
	background: #4b4b4b;
}
.tab-basic .tab-head a:first-child{
	margin: 0;
}
.tab-basic .tab-head a:hover,
.tab-basic .tab-head a.active{
	color: #4b4b4b;
}
.tab-basic .tab-head a.active:after{
	opacity: 1;
}
.tab-basic .tab-item{
	display: none;
}
.tab-basic .tab-item.active{
	display: block;
}
.page-pagination{
	padding-top: 30px;
}
.page-pagination .wrap{
	display: inline-block;
}
.page-pagination .wrap > *{
        display: inline-block;
        vertical-align: middle;
        color: #4b4b4b;
	font-size: 14px;
	min-width: 40px;
	height: 40px;
	line-height: 40px;
	font-family: 'Josefin Sans';
	font-weight: 400;
	text-align: center;
	border: 1px solid #e4e8ed;
	border-left: none;
	transition:background 0.2s ease-in;
	float: left;
}
.page-pagination .wrap > *:first-child{
	border-left: 1px solid #e4e8ed;
	border-radius: 5px 0 0 5px;
}
.page-pagination .wrap > *:last-child{ 
	border-radius: 0 5px 5px 0;
}
.page-pagination span,
.page-pagination a:hover,
.page-pagination span.dots{
        background: #ffedd0;
}
.page-pagination .prev i,
.page-pagination .next i{
	width: 18px;
	height: 18px;
	position: relative;
	display: inline-block;
	top: 5px;
	transition:all 0.2s ease-in;
}
.page-pagination .prev i{
	background-image: url('${paginatePrev}');
	left: 0;
}
.page-pagination .prev:hover i{
	left: -2px;
}
.page-pagination .next i{
        background-image: url('${paginateNext}');
	right: 0;
}
.page-pagination .next:hover i{
	right: -2px;
}
.format-text{
	line-height: 175%;
}
.format-text > *{
	margin-top: 25px;
}
.format-text > *:first-child{
	margin-top: 0;
}
.format-text b,
.format-text strong{
	font-weight: 700;
}
.format-text em,
.format-text i:not(.fa){
	font-style: italic;
}
.format-text h1 + *,
.format-text h2 + *,
.format-text h3 + *,
.format-text h4 + *,
.format-text h5 + *,
.format-text h6 + *{
	margin-top: 5px;
}
.format-text h1,
.format-text h2,
.format-text h3,
.format-text h4,
.format-text h5,
.format-text h6{
	font-weight:700;
	line-height: 160%;
}
.format-text h1{
	font-size: 30px;
}
.format-text h2{
	font-size: 20px;
}
.format-text h3{
	font-size: 14px;
}
.format-text h4{
	font-size: 12px;
}
.format-text h5{
	font-size: 10px;
}
.format-text h6{
	font-size: 8px;
}
.format-text a:not(.button){
	color: #4b4b4b;
}
.format-text a:not(.button):hover{
	text-decoration: underline;
}
.format-text ul{
	list-style: disc;
	padding-left: 40px;
}
.format-text ul li,
.format-text ol li{
	padding-bottom: 25px;
}
.format-text ol li:last-child{
	padding-bottom: 10px;
}
.format-text ol{
	list-style: decimal;
	padding-left: 15px;
}
.format-text sup{
	color: #d90000;
	position: relative;
	top: 0;
	line-height: 100%;
}
.format-text blockquote{
	font-size: 19px;
	line-height: 200%;
}
.centered{
	text-align: center;
}
.rightned{
	text-align: right;
}
.leftned{
	text-align: left;
}
.jconfirm .jconfirm-box{
	max-width: 340px;
	margin: 0 auto;
}
.jconfirm .jconfirm-box div.jconfirm-title-c .jconfirm-title{
	font-weight: 600;
	font-size: 16px;
	color: #3f4e38;
}
.jconfirm .jconfirm-box div.jconfirm-content-pane .jconfirm-content{
	font-size: 14px;
	line-height: 160%;
	font-weight: 400;
}
.jconfirm .jconfirm-box div.jconfirm-title-c{
	padding-bottom: 10px;
}
.jconfirm .jconfirm-box div.jconfirm-content-pane{
	margin-bottom: 10px;
}
/** LOADING STUFF **/
.animate-loading{
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.8);
}
.animate-loading .centered{
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
}
.animate-loading .ldr {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
}
.animate-loading .ldr div {
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #d18d38;
        animation: animate-loading-grid 1.2s linear infinite;
}
.animate-loading .ldr div:nth-child(1) {
        top: 6px;
        left: 6px;
        animation-delay: 0s;
}
.animate-loading .ldr div:nth-child(2) {
        top: 6px;
        left: 26px;
        animation-delay: -0.4s;
}
.animate-loading .ldr div:nth-child(3) {
        top: 6px;
        left: 45px;
        animation-delay: -0.8s;
}
.animate-loading .ldr div:nth-child(4) {
        top: 26px;
        left: 6px;
        animation-delay: -0.4s;
}
.animate-loading .ldr div:nth-child(5) {
        top: 26px;
        left: 26px;
        animation-delay: -0.8s;
}
.animate-loading .ldr div:nth-child(6) {
        top: 26px;
        left: 45px;
        animation-delay: -1.2s;
}
.animate-loading .ldr div:nth-child(7) {
        top: 45px;
        left: 6px;
        animation-delay: -0.8s;
}
.animate-loading .ldr div:nth-child(8) {
        top: 45px;
        left: 26px;
        animation-delay: -1.2s;
}
.animate-loading .ldr div:nth-child(9) {
        top: 45px;
        left: 45px;
        animation-delay: -1.6s;
}
@keyframes animate-loading-grid{
        0%, 100% {
                opacity: 1;
        }
        50% {
                opacity: 0.5;
        }
}
.button{
	/* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 20px;
	display: inline-block;
	color: #fff;
	background: #d18d38;
	font-family: 'Raleway';
	font-weight: 700;
	font-size: 14px;
	height: 40px;
	line-height: 40px;
	padding: 0 30px;
	text-align: center;
	cursor: pointer;
	border: none;
	outline: none !important;
	transition:background 0.2s ease-in;
}

.button.lilwide{
	padding: 0 50px;
}
.button.medwide{
	padding: 0 75px;
}
.button.sowide{
	padding: 0 100px;
}
.button.lilslim{
	padding: 0 17px;
}
.button.medslim{
	padding: 0 25px;
}
.button.smalltall{
	height: 34px;
	line-height: 34px;
}
.button.tinytall{
	height: 25px;
	line-height: 25px;
}
.button.bigger{
	height: 56px;
	line-height: 56px;
	border-radius: 28px;
	font-size: 23px;
}
.button.disabled:hover,
.button.disabled{
	cursor: default;
	background: #ccc;
	color: #fff;
}
.button:active,
.button:focus{
	
}
.button.btn-fullwidth{
	display: block;
	width: 100%;
}
.button.btn-orange{
	background: #f4ca95;
}
.button.btn-white{
	background: #fffbf5;
	color: #d18d38;
}
.button.btn-brown{
	background: #fdf0dd;
	color: #774713;
}
.button.btn-white:hover,
.button.btn-brown:hover,
.button.btn-orange:hover,
.button:hover{
	color: #fff;
	background: #a06925;
	border-color: #a06925;
}
.button.has-loading{
	position: relative;
	overflow: hidden;
}
.button.has-loading.fetching{
	color: rgba(0,0,0,0);
	cursor: default;
}
.button.has-loading.fetching:before{
	display: none;
	position: absolute !important;
	left: 0 !important;
	top: 0 !important;
	margin: 0 !important;
	width: 100% !important;
	height: 100% !important;
	background: rgba(255,255,255,.8) !important;
	content: '';
	z-index: 1;
}
.button.has-loading.fetching:after{
	display: none;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	left: calc(50% - 8px);
	width: 16px;
	height: 11px;
	background: url('${btnLoading}') no-repeat;
	content: '';
	z-index: 2;
}
.button.has-loading.fetching:after,
.button.has-loading.fetching:before{
	display: block;
}
.btn-hide{
	display: none !important;
}
.calc{	
	text-align: center;
}
.calc > *{
	display: inline-block;
	vertical-align: middle;
	color: rgba(0, 0, 0, 0.5);
	line-height: 100%;
	font-size: 14px;
}
.calc > input{
	color: #d18d38;
	width: 60px;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	font-family: 'Josefin Sans';
	background: #ffedd0;
	border: none;
	height: 44px;
}
.smaller.calc > input{
	height: 26px;
	width: 34px;
	font-size: 12px;
}
.calc a{
	background: #d18d38;
	height: 44px;
	line-height: 48px;
	width: 38px;
}
.smaller.calc a{
	height: 26px;
	line-height: 27px;
	width: 26px;
}
.calc a.plus{
	border-radius: 0 22px 22px 0;
	padding-right: 2px;
}
.smaller.calc a.plus{
	border-radius: 0 13px 13px 0;
}
.calc a.min{
	border-radius: 22px 0 0 22px;
	padding-left: 2px;
}
.smaller.calc a.min{
	border-radius: 13px 0 0 13px;
}
.calc a:before{
	display: inline-block;
	content: '';
	font-family: 'qbons';
	color: #fff;
	font-size: 17px;
	line-height: 100%;
}
.smaller.calc a:before{
	font-size: 13px;
}
.calc a.plus:before{
	content: '\e145';
}
.calc a.min:before{
	content: '\e15b';
}
.calc a.inactive:hover,
.calc a.inactive{
	background:  #c4c6c3;
	cursor:default;
}
.slick-dots{
	display: block;
	z-index: 2;
	width: 100%;
	text-align: center;
	position: absolute;
	left: 0;
	width: 100%;
	bottom: 22px;
}
.slick-dots li{
	display: inline-block;
	vertical-align: middle;
	margin: 0 4px;
}
.slick-dots li button{
	display: block;
	width: 8px;
	height: 8px;
	cursor: pointer;
	border: 1px solid #e0a459;
	color: rgba(0,0,0,0);
	background: rgba(0,0,0,0);
	padding: 0;
	border-radius: 50%;
}
.slick-dots li.slick-active button{
	background: #e0a459;
	width: 16px;
	height: 16px;
}
.rate i{
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 1px;
	color: #d8d8d8;
}
.rate i:first-child{
        margin: 0;
}
.rate.rscore5 i,
.rate.rscore4 i:nth-child(4),
.rate.rscore4 i:nth-child(3),
.rate.rscore4 i:nth-child(2),
.rate.rscore4 i:nth-child(1),
.rate.rscore3 i:nth-child(3),
.rate.rscore3 i:nth-child(2),
.rate.rscore3 i:nth-child(1),
.rate.rscore2 i:nth-child(2),
.rate.rscore2 i:nth-child(1),
.rate.rscore1 i:nth-child(1){
	color: #f9d14e;
}
.cvr-bg-bf:before,
.cvr-bg-af:after,
.cvr-bg{
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.cvr-bg-bf:before,
.cvr-bg-af:after{
	content: '';
	display: inline-block;
        vertical-align: middle;
}
.the-title{
	text-align: center;
	font-family: 'Josefin Sans';
	font-size: 36px;
	font-weight: 700;
	line-height: 130%;
	margin-bottom: 40px;
	position: relative;
	top: -3px;
}
.the-title.brown{
	color: #774713;
	font-size: 32px;
	font-family: 'Raleway';
	letter-spacing: 4.8px;
}
.banner-search{
	padding: 110px 0 95px;
	background-image: url('${bannerSearch}');
	background-repeat: no-repeat;
	background-position: center bottom;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	text-align: center;
}
.banner-search h2{
	font-family: 'Josefin Sans';
	font-size: 36px;
	line-height: 120%;
	font-weight: 700;
}
.banner-search form{
	display: block;
	max-width: 480px;
	margin: 25px auto 0;
	position: relative;
}
.banner-search form input{
	background: #fff;
	border-color: #e1b178;
}
.subhentry{
	text-align: center;
	margin-bottom: 30px;
}
.subhentry h2{
	color: #d37072;
	font-size: 18px;
	font-family: 'Josefin Sans';
	font-weight: 700;
	text-transform: uppercase;
	line-height: 120%;
}
.subhentry h2 + .format-text{
	margin-top: 13px;
}

.range .ui-corner-all{
	border-radius: 0;
}
.range .ui-widget-header{
	background: #e0a459;
}
.range .ui-widget-header + .ui-slider-handle{
	margin: 0;
}
.range .ui-widget-content{
	background: #c9c9c9;
	height: 5px;
	border-radius: 2.5px;
	border: none;
}
.range .ui-widget-content .ui-state-default{
	background: none;
	border: none;
}
.range .ui-slider-horizontal .ui-slider-handle{
	width: 24px;
	height: 24px;
	cursor: w-resize;
	background: #e0a459;
	border: 1px solid #e0a459;
	border-radius: 50%;
	box-shadow:inset 0px 0 0 3px #fff;
	top: -9px;
}
.range .ui-slider-horizontal .ui-slider-handle + .ui-slider-handle{
	margin-left: -19px;
}
.price-widget .pricing{
	margin-bottom: 25px;
}
.price-widget .pricing:after{
	clear: both;
	display: block;
	height: 1px;
	width: 100%;
	content: '';
}
.price-widget .pricing b{
	color: #4b4b4b;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1.4px;
}
.product-list{
	display: flex;
	flex-wrap: wrap;
	margin-left: -14px;
	margin-right: -14px;
}
.product-list .product-item{
	flex: calc(25% - 28px);
	max-width: calc(25% - 28px);
	margin: 0 14px 35px;
}
.product-item figure{
	display: block;
	position: relative;
	border-radius: 10px 10px 0 0;
	overflow: hidden;
}
.product-item figure:after{
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0,0,0,.2);
	content: '';
	opacity: 0;
	visibility: hidden;
	transition:all 0.2s ease-in;
}
.product-item figure:hover:after{
	opacity:1;
	visibility: visible;
}
.product-item figure.nostock:after{
	display: none;
}
.product-item figure img{
	height: auto;
}
.product-item figure .stockinfo{
	text-align: center;
	display: block;
	left: 0;
	top: 50%;
	width: 100%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	position: absolute;
}
.product-item figure .stockinfo span{
	display: inline-block;
	padding: 0 12px;
	height: 29px;
	line-height: 29px;
	border-radius: 10px 0 10px 0;
	color: #fff;
	font-weight: 600;
	background: #dcba93;
}
.the-product .main .nominal .disc,
.product-item figure .disc{
	position: absolute;
	left: 0;
	top: 0;
	display: inline-block;
	height: 29px;
	line-height: 28px;
	width: 50px;
	text-align: center;
	color: #d37072;
	font-weight: 600;
	border-radius: 10px 0 10px 0;
	background: #ffdbae;
}
.product-item figure .add-to-wish{
	width: 26px;
	height: 26px;
	background-image: url('${heartHollow}');
	position: absolute;
	right: 5px;
	top: 2px;
	z-index: 2;
}
.product-item figure .add-to-wish.wished{
	background-image: url('${heartFill}');
}
.acc-wishlist .item .btn-atc.fetching:before,
#popsearch .pitem .action a.atc.fetching:after,
#poprod .action .btn-atc.fetching:before,
.the-product .main .add-to-wish.fetching.wished,
.the-product .main .add-to-wish.fetching,
#poprod .the-product .main .add-to-wish.fetching,
.product-item figure .add-to-wish.fetching,
.product-item figure .add-to-wish.wished.fetching{
	background-color: #fff;
	border-radius: 50%;
	background-image: url('${wishLoad}');
	background-position: center center;
	background-size: auto;
}
#poprod .action .btn-atc.fetching:before{
	top: -2px;
}
.product-item figure .action{
	text-align: center;
	position: absolute;
	left: 0;
	bottom: 25px;
	width: 100%;
	z-index: 3;
	opacity: 0;
	visibility: hidden;
	transition:all 0.2s ease-in;
}
.product-item figure:hover .action{
	opacity: 1;
	visibility: visible;
	bottom: 30px;
}
.product-item .mact a.ic-view,
#popsearch .pitem .action a,
.product-item figure .action a{
	display: inline-block;
	vertical-align: middle;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin: 0 3px;
	background: #e0a459;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.product-item .mact a.ic-cart:before,
.product-item .mact a.ic-view:after,
#popsearch .pitem .action a.atc:after,
#popsearch .pitem .action a.view:after,
.product-item figure .action a.ico-cart:after,
.product-item figure .action a.ico-view:after{
	width: 25.255px;
	height: 25.255px;
	background-image: url('${eyeWhite}');
	position: relative;
	top: 5px;
}
.product-item .mact a.ic-view.fetching,
.product-item figure .action a.ico-view.fetching{
	background-color: #fff;
}
.product-item .mact a.ic-view.fetching:after,
.product-item figure .action a.ico-view.fetching:after{
	background-color: #fff;
	border-radius: 50%;
	background-image: url('${wishLoad}');
	background-position: center center;
	background-size: auto;
}
.product-item .mact a.ic-cart:before,
#popsearch .pitem .action a.atc:after,
.product-item figure .action a.ico-cart:after{
	background-image: url('${cartWhite}');
}
.product-item figure .action a.ico-cart.fetching{
	position: relative;
}
.product-item figure .action a.ico-cart.fetching:after{
	background-image: url('${wishLoad}');
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 50%;
	background-size: auto;
	background-position: center center;
	background-color: #fff;
}
.product-item .mact.disabled a{
	background: #eaeaea !important;
	box-shadow: 0px 0 2px rgba(30, 30, 30, 0) !important;
}
.product-item .mact.disabled{
	position: relative;
}
.product-item .mact.disabled:after{
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	content: '';
}
.product-item .caption{
	padding: 8px 9px 0;
}
.product-item .caption .cat{
	margin-bottom: 8px;
}
.product-item .caption .cat a{
	display: inline-block;
	vertical-align: middle;
	margin-right: 5px;
	color: #4b4b4b;
	font-size: 12px;
	font-family: 'Josefin Sans';
	text-transform: uppercase;
}
.product-item .caption .cat a:hover{
	text-decoration: underline;
}
.product-item .caption h3{
	font-family: 'Josefin Sans';
	font-weight: 600;
	letter-spacing: 1.4px;
	margin-bottom: 8px;
	line-height: 130%;
	text-transform: uppercase;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.product-item .caption h3 a{
	color: #4b4b4b;
	transition:color 0.2s ease-in;
}
.product-item .caption h3 a:hover{
	color: #d37073;
}
.product-item .pricing{
	margin-bottom: 10px;
}
.the-product .main .nominal .pricing > ins,
.the-product .main .nominal .pricing > span,
.product-item .pricing > ins,
.product-item .pricing > span{
	color: #d37072;
	font-weight: 700;
	font-size: 16px;
	display: inline-block;
	vertical-align: middle;
	text-decoration: none;
}
.the-product .main .nominal .pricing > ins,
.the-product .main .nominal .pricing > span{
	font-size: 24px;
}
.the-product .main .nominal .pricing > *:first-child + *,
.product-item .pricing > *:first-child + *{
	margin-left: 9px;
}
.the-product .main .nominal .pricing > del,
.product-item .pricing > del{
	color: #e5b3b4;
	font-size: 12px;
	font-weight: 700;
	text-decoration: line-through;
	display: inline-block;
	vertical-align: middle;
	position: relative;
	top: -1px;
}
.the-product .main .nominal .pricing > del{
	font-size: 16px;
}
.the-product .prorate > *,
.product-item .prorate > *{
	display: inline-block;
	vertical-align: middle;
}
.the-product .prorate small,
.product-item .prorate small{
	color: #707070;
	font-size: 12px;
	margin-left: 6px;
	position: relative;
	top: 2px;
}
.product-item .stockbar{
	margin-top: 40px;
	padding: 0 3px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.product-item .stockbar span{
	position: relative;
	max-width: 67%;
	flex: 67%;
	height: 10px;
	background: #f0f0f0;
	border-radius: 10px;
	overflow: hidden;
}
.product-item .stockbar span b{
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	background: #e0a459;
	border-radius: 10px;
}
.product-item .stockbar em{
	flex: 28%;
	max-width: 28%;
	font-family: 'Josefin Sans';
	font-size: 12px;
	text-align: right;
}
.product-item .mact{
	margin-top: 20px;
}
.product-item .mact a{
	display: inline-block;
	position: relative;
	vertical-align: middle;
}
.product-item .mact a.ic-view{
	width: 30px;
	height: 30px;
	text-align: center;
	margin: 0;
}
.product-item .mact a.ic-view:after{
	width: 18px;
	height: 18px;
	top: 6px;
}
.product-item .mact a.ic-cart{
	padding: 0 5px;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	font-weight: 600;
	width: calc(100% - 35px);
	margin-left: 5px;
	text-align: center;
}
.product-item .mact a.ic-cart:before{
	width: 18px;
	height: 18px;
	top: -2px;
	margin-right: 1px;
}
.product-item .mact a.ic-view{
	background: #d18d38;
	box-shadow:         0px 0 2px rgba(30, 30, 30, 0);
}
.line-title{
	font-size: 20px;
	line-height: 120%;
	font-weight: 600;
	font-family: 'Josefin Sans';
	margin-bottom: 25px;
	text-transform: uppercase;
}
.line-title span{
	display: inline-block;
	padding: 0 50px 7px 0;
	border-bottom: 2px solid rgba(255,233,147,.25);
}
.product-banner img{
	width: 100%;
}
.product-banner .line-title{
	margin-top: 45px;
}
.product-banner {
	margin-bottom: 50px;
}
.product-banner.unexpand .format-text *,
.product-banner.unexpand .morepost,
.product-banner.unexpand .format-text{
	display: inline;
}
.product-popular{
	margin-bottom: 10px;
}
.morepost{
	color: #d18d38;
	font-size: 14px;
	font-weight: 600;
}
.morepost:hover{
	text-decoration: underline;
}
.product-voucher{
	margin-bottom: 40px;
}
.product-voucher .navivo{
	text-align: center;
	margin-bottom: 40px;
	padding: 40px 0 0;
}
.product-voucher .navivo a{
	display: inline-block;
	vertical-align: middle;
	color: #d8d8d8;
	font-size: 20px;
	font-family: 'Josefin Sans';
	line-height: 120%;
	text-transform: uppercase;
	font-weight: 600;
	margin: 0 10px;
	padding-bottom: 7px;
	border-bottom: 2px solid rgba(0,0,0,0);
	transition:color 0.2s ease-in;
}
.product-voucher .navivo a.current,
.product-voucher .navivo a:hover{
	color: #4b4b4b;
}
.product-voucher .navivo a.current{
	border-bottom: 2px solid rgba(255,233,147,.25);
}
.product-voucher .listvo{
	display: none;
	flex-wrap: wrap;
	margin: 0 -8px;
}
.product-voucher .listvo.current{
	display: flex;
}
.product-voucher .listvo .item{
	flex: calc(33.333333333333333333% - 16px);
	max-width:  calc(33.333333333333333333% - 16px);
	margin: 0 8px 16px;
}
.product-voucher .listvo .item a{
	background-repeat: no-repeat;
	background-position: left top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: block;
	background-image: url(../img/icon/voucher.png);
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	color: #b26818;
	font-weight: 600;
	padding: 30px 20px 30px 95px;
}
.product-voucher .listvo .item .holder > *{
	display: block;
	line-height: 100%;
}
.product-voucher .listvo .item b{
	font-size: 16px;
}
.product-voucher .listvo .item p{
	font-size: 14px;
}
.product-voucher .listvo .item strong{
	font-size: 32px;
	font-weight: 700;
	font-family: 'Josefin Sans';
	margin: 13px 0 2px;
}
.product-voucher .listvo .item strong span{
	font-weight: 400;
}
.crumb{
	margin-bottom: 20px;
}
.crumb > *{
	display: inline-block;
	vertical-align: middle;
	color: #4b4b4b;
	font-size: 12px;
	letter-spacing: 1.8px;
}
.crumb i{
	margin: 0 12px;
	position: relative;
	top: -1px;
}
.crumb a:hover{
	text-decoration: underline;
}
.big-title{
	color: #be8687;
	font-size: 26px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 3.9px;
	margin-bottom: 40px;
}
.msbb-msg.notice,
.msbb-msg.error,
.msbb-msg{
	position: relative;
	line-height: 160%;
	padding: 10px 25px 10px 15px;
	color: #fff;
	background: #a06925;
	font-size: 14px !important;
	text-align: left;
}
.msbb-msg em{
	color: inherit;
	display: block;
	position: absolute;
	right: 10px;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	font-size: 17px;
	line-height: 95%;
	cursor: pointer;
}
.msbb-msg em:after{
	content: '\e5cd';
	font-family: 'qbons';
	display: block;
}
.woocommerce-message .msbb-msg,
.woocommerce-error .msbb-msg,
.woocommerce-notices-wrapper .msbb-msg{
	margin: 0 0 30px;
}
.msbb-msg b{
	font-weight: 700;
}
.woocommerce-notices-wrapper > *{
	display: none;
}
.woocommerce-notices-wrapper > *:first-child{
	display: block;
}
.msbb-msg + *{
	margin-top: 25px;
}
.msbb-msg .button:hover,
.msbb-msg .button{
	margin-right: 5px;
	border-color: #fff;
	color: #fff;
	line-height: 40px;
}
.msbb-msg .button:hover{
	background: #fff;
	color: #a06925;
}
.msbb-msg a:not(.button){
	color: #fff;
	font-weight: 600;
}
.woocommerce-message .msbb-msg,
.woocommerce-form-coupon-toggle,
p.cart-empty.woocommerce-info{
	display: none !important;
}
/*.single-product .woocommerce-message .msbb-msg,*/
.inner-checkout .woocommerce-message .msbb-msg{
	display: block !important;
}
.single-product .woocommerce-message .msbb-msg{
	position: relative;
	bottom: -50px;
}
.cart-discount .cart-coupon{
	position: relative;
	display: inline-block;
	padding-left: 20px;
}
.cart-discount .cart-coupon .woocommerce-remove-coupon{
	position: absolute;
	color: rgba(0,0,0,0);
	width: 15px;
	height: 15px;
	display: block;
	left: 0;
	top: 1px;
	background-image: url('${closeBold}');
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	overflow: hidden;
}
#popayinfo .fancybox-close-small{
	padding: 0;
	top: -5px;
	right: -5px;
	transform: scale(.5);
}
.variations_form table {
	width: 100%;
	margin-bottom: 20px;
}
.variations_form table tr td {
	padding-bottom: 15px;
}
.variations_form .woocommerce-variation-add-to-cart-disabled a.btn-atc,
.variations_form .woocommerce-variation-add-to-cart-disabled button.button,
.variations_form span.button {
	display: none;
}
.variations_form .woocommerce-variation-add-to-cart-disabled span.button {
	display: inline-block;
}
div.woocommerce-password-strength,
small.woocommerce-password-hint{
	font-size: 12px;
	line-height: 160%;
}
div.woocommerce-password-strength{
	margin: 10px 0;
	padding: 5px 10px;
	background: #e74c3c;
	color: #fff;
	border-radius: 7px;
}
div.woocommerce-password-strength.bad{
	background: #e67e22;
}
div.woocommerce-password-strength.good{
	background: #f39c12;
}
div.woocommerce-password-strength.strong{
	background: #2ecc71;
}
img.lazy{
	height: auto !important;
}
`
export default Generic;