import menu from '../img/icon/menu.svg';
import filter from '../img/icon/filter.svg';
import sort from '../img/icon/sort.svg';

const Mobile = `
.inner-home .flash .mtema,
.detail-product .the-product .main .nominal .add-to-wish,
.hentry-mobile,
.product-item .mact,
#popvouch .info h2,
.dropmenu,
.mobile-trigger{
	display: none;
}
@media (max-width: 1800px) {

}
@media (max-width: 1350px) {
	.inner-home .review a.next, .inner-home .best a.next,
	.inner-home .flash .slidenav a.next,
	.inner-home .offer .slidenav a.next{
		right: 0;
	}
	.inner-home .review a.prev, .inner-home .best a.prev,
	.inner-home .flash .tema figure{
		left: 0;
	}
}
@media (max-width: 1289px) {
	.inner-checkout .wrapper,
	#bottom .wrapper,
	.wider.wrapper{
		max-width: 100%;
		padding-left: 30px;
		padding-right: 30px;
	}
	.inner-profile .prnav,
	.inner-page.half-page .hentry .rowflex div,
	.inner-page.half-page .pgnav{
		left: 0;
	}
	.inner-profile .prnav,
	.inner-page.half-page.with-bg .pgnav{
		max-width: 22%;
		flex: 22%;
	}
	.acc-wishlist .item .subtotal {
		max-width: calc(100% - 400px );
		flex: calc(100% - 400px );
	}
	
	.inner-home .flash .tema figure img{
		max-width: 80%;
	}
}
@media (max-width: 1259px) {
	.wrapper{
		max-width: 100%;
		padding-left: 30px;
		padding-right: 30px;
	}	
	.botbar .searchbar{
		max-width: 40%;
		flex: 40%;
	}
	.botbar .util{
		flex: 38%;
		max-width: 38%;
	}
	.inner-profile .prnav,
	.inner-page.half-page.with-bg .pgnav,
	.inner-page.half-page .pgnav{
		flex: 30%;
		max-width: 30%;
	}
	.inner-profile .prmain,
	.inner-page.half-page.with-bg .pgmain,
	.inner-page.half-page .pgmain{
		max-width: 65%;
		flex: 65%;
	}
	.footer-widget .col:first-child{
		flex: 100%;
		max-width: none;
		padding: 0;
		text-align: center;
		margin: 0 0 50px;
	}
	.footer-widget .col:first-child + .col{
		padding-left: 0;
		border: none;
	}
	.footer-widget .lastcol{
		padding-left: 40px;
	}
	ul.brand-menu{
		right: auto;
		left: 0;
		width: 100%;
	}
	ul.brand-menu > li{
		width: 100%;
		margin: 0;
	}
	.topbar .wrapper .holder:before{
		left: 0;
		opacity: .4;
	}
	.topbar .wrapper .holder:after{
		right: 0;
		opacity: .4;
	}
	.inner-page .layer-wrap.contact-wrap{
		padding: 40px 10px 60px;
		justify-content: space-between;
	}
	.contact-wrap .item{
		flex: 24%;
		max-width: 24%;
	}
	.orderlist .oitem .caption{
		width: calc(100% - 120px);
	}
	.acc-order-detail .package .act,
	.acc-order-detail .package .stat{
		flex: 100%;
		max-width: 100%;
		text-align: left;
	}
	.acc-order-detail .package .stat{
		margin-bottom: 20px;
	}
	.acc-order-detail .plist .owrap .oprod .subtotal{
		display: none;
	}
	.acc-order-detail .plist .owrap .oprod .caption{
		width: calc(100% - 105px);
	}
	.acc-order-detail .plist .owrap .oprod{
		flex: 70%;
		max-width: 70%;
	}
	.acc-order-detail .plist .owrap .ototal{
		flex: 22%;
		max-width: 22%;
	}
	.inner-checkout .info{
		max-width: 62%;
		flex:62%;
	}
	.inner-product .promain .product-util > *:last-child{
		flex:1;
	}
	.inner-home .flash .tema{
		display: none;
	}
	.inner-home .flash .mtema{
		display: block;
	}
	.inner-home .flash .detail{
		flex: 100%;
		max-width: 100%;
	}
	.inner-home .flash .mtema{
		padding: 40px 0;
	}
	.inner-home .flash .mtema figure{
		text-align: center;
	}
	.inner-home .flash .mtema figure img{
		max-width: 30%;
	}
	.inner-home .flash .slidenav a.prev{
		left: 0;
	}
	.product-voucher .listvo .item a {
		padding: 30px 15px 30px 105px;
	}
	.inner-home .flash .no-current .countdown{
		max-width: 61%;
	}
}

@media (max-width: 991px) {
	.footer-widget .duo > *{
		max-width: 48%;
		flex: 48%;
	}
	.acc-review .item .caption{
		max-width: 100%;
		flex: 100%;
		margin: 20px 0 0;
	}
	.acc-review .item figure{
		flex: 100px;
		max-width: 100px;
	}
	.acc-review .item .rate{
		margin-top: 10px;
	}
	.acc-review .item .info{
		flex: calc(100% - 100px);
		max-width:  calc(100% - 100px);
		margin: 0;
		padding: 0 0 0 20px;
	}
	.inner-profile .profile-info{
		padding: 75px 30px 35px;
	}
	.inner-profile .profile-info .caption{
		max-width: calc(100% - 80px);
		flex: calc(100% - 80px);
		padding-left: 30px;
	}
	.acc-wishlist .item .subtotal {
		max-width: 100%;
		flex: 100%;
		text-align: center;
		padding: 0;
	}
	.acc-wishlist .item .subtotal > *{
		display: inline-block;
		vertical-align: middle;
		margin: 0 2px;
	}
	.orderlist .oitem .ohead{
		padding: 8px 10px 6px;
	}
	.orderlist .oitem .ohead > * strong,
	.orderlist .oitem .ohead > *,
	.orderlist .oitem .ohead > * b{
		display: block;
		text-align: center;
	}
	.orderlist .oitem .ohead > *:last-child,
	.orderlist .oitem .ohead > *:first-child,
	.orderlist .oitem .ohead > *{
		flex: 33%;
		max-width: 33%;
		font-size: 12px;
		line-height: 150%;
	}
	.orderlist .oitem .obody > *:first-child,
	.orderlist .oitem .obody > *:last-child,
	.orderlist .oitem .oact,
	.orderlist .oitem .ototal{
		flex: 100%;
		max-width: 100%;
		padding: 0;
		text-align: center;
		margin: 0;
	}
	.orderlist .oitem .ototal{
		padding: 20px 0 25px;
	}
	.orderlist .oitem .obody > *:first-child{
		text-align: left;
	}
	.orderlist .oitem .oact > *,
	.orderlist .oitem .ototal > *{
		display: inline-block !important;
		vertical-align: middle !important;
		margin: 0 5px;
	}
	.ordernav .wrap a{
		font-size: 14px;
	}
	
	#poptrack{
		max-width: calc(100% - 30px);
	}
	.product-list .product-item{
		flex: calc(50% - 28px);
		max-width: calc(50% - 28px);
	}
	.inner-product .promain .product-util > *:last-child{
		flex: 100%;
		margin: 15px 0 0;
	}
	.detail-product .tab-basic .tab-head a{
		padding: 0 20px  15px;
	}
	.detail-product .score .left > .form-rate{
		display: block;
		margin: 20px 0 0;
		width: 100%;
	}
	.detail-product .score .rating{
		flex: 30%;
		max-width: 30%;
	}
	.detail-product .score .write{
		flex: 65%;
		max-width: 65%;
	}
	.detail-product .related .product-list .product-item{
		flex: calc(33.333333333333333% - 50px);
		max-width: calc(33.333333333333333% - 50px);
		margin: 0 25px 50px;
	}
	.inner-home .hero .holder{
		width: 60%;
	}
	.inner-home .flash .timing > *{
		flex: 50%;
		max-width: 50%;
	}
	.inner-home .flash .timing > .button{
		flex: 150px;
		max-width: 150px;
		margin: 30px auto 0;
		font-size: 14px;
		padding: 0 5px;
		height: 30px;
		line-height: 30px;
	}
	.inner-home .value .rowflex{
		justify-content: center;
	}
	.inner-home .value figure{
		flex: 30%;
		max-width: 30%;
	}
	.acc-wishlist .item .action{
		max-width: 100%;
		flex: 100%;
		padding-left: 120px;
		margin: 10px 0 0;
	}
	.acc-wishlist .item .info {
		max-width: calc(100% - 120px);
		flex: calc(100% - 120px);
	}
	
	.product-voucher .listvo .item {
		flex: calc(50% - 16px);
		max-width: calc(50% - 16px);
	}
}
@media only screen and (min-width: 769px) and (max-width: 991px)  {

}
@media (max-width: 768px) {
	.wrapper,
	.inner-checkout .wrapper,
	#bottom .wrapper,
	.wider.wrapper{
		padding-left: 20px;
		padding-right: 20px;
	}
	.inner-home div:not(.hero) .slider .slidenav,
	.inner-home .offer .feat,
	.detail-product .the-product .main h1 .add-to-wish,
	.detail-product .crumb,
	.detail-product  .the-product .gallery .thumb .slidenav,
	#poprod .the-product .main .meta > *,
	.product-item figure:after,
	.product-item figure .action,
	.inner-product .promain .product-util,
	.inner-product .rowflex .proside,
	.acc-order-detail .navorder .crumb a,
	.acc-order-detail .navorder .crumb i,
	 .orderlist .oitem .ohead > * strong:after,
	.inner-profile .prnav,
	#popvouch .caption h2,
	.inner-page.half-page .pgnav,
	.midbar,
	.botbar .ucart a span,
	.botbar .uacc,
	.botline{
		display: none;
	}
	.topbar .wrapper .txt{
		overflow-x: scroll;
	}
	.topbar .wrapper .holder{
		width: 1000px;
		text-align: left;
	}
	.botbar .searchbar{
		flex: 100%;
		max-width: 100%;
		order: 3;
		padding: 12px 0 15px;
	}
	.botbar .popup-layer .searchbar{
		padding-top: 0;
	}
	.botbar .util{
		order: 2;
	}
	.botbar .util,
	.mobile-trigger{
		max-width: 35px;
		flex: 35px;
		display: block;
	}
	.mobile-trigger a{
		width: 18px;
		flex: 18px;
		max-width: 18px;
		height: 14px;
		background-image: url('${menu}');
		display: block;
	}
	.botbar .logo{
		max-width: calc(100% - 90px);
		flex:  calc(100% - 90px);
		text-align: center;
	}
	.page-checkout .botbar .logo img,
	.botbar .logo img{
		width: 100px;
	}
	#popbrands fieldset input,
	.searchbar input{
	       height: 33px;
	       padding: 0 20px;
	}
	#popbrands fieldset .cvr-bg,
	.searchbar .cvr-bg{
	       transform: scale(.7,.7);
	       opacity: .5;
	       top: 8px;
	       right: 12px;
	}
	.botbar .rowflex{
	       padding-left: 10px;
	       padding-right: 10px;
	}
	.botbar .ucart a.cvr-bg-af{
	       width: 30px;
	       height: 30px;
	       border: 1px solid #4b4b4b;
	       border-radius: 50%;
	       line-height: 25px;
	}
	.botbar .ucart a.cvr-bg-af:after{
	       width: 21px;
	       height: 21px;
	       top: 0;
	       left: -2px;
	}
	.botbar .ucart a b{
	       top: -5px;
	       right: -6px;
	}
	.popcart .holder,
	.popcart.showing .holder{
	       width: 320px;
	       overflow-y: scroll;
	}
	.popcart .holder .chead a b{
		transform: scale(.7,.7);
		top: 0;
	}
	.popcart .holder .item figure{
		width: 60px;
	}
	.popcart .holder .item .caption{
		width: calc(100% - 60px);
		padding-left: 10px;
		padding-right: 20px;
	}
	.popcart .scrollbar-inner{
		height: auto !important;
		max-height: none !important;
	}
	.popcart .holder .item h3{
		max-width: 190px;
	}
	.popcart .rcs-custom-scroll{
		height: auto !important;
	}
	#popsearch{
		padding: 30px 10px;
	}
	#popsearch .fancybox-close-small{
		top: 1px;
		transform: scale(0.5);
		top: 5px;
		right: 8px;
	}
	#popsearch .layer{
		overflow: visible;
	}
	#popsearch .item{
		margin-top: 10px;
		padding-left: 20px;
		padding-right: 20px;
	}
	#popsearch .item.voucher a span{
		width: 65px;
	}
	#popsearch .item.brand a{
		width: 120px !important;
	}
	#popsearch .item.voucher p a{
		letter-spacing: 0;
		padding-left: 75px;
	}
	#popsearch .pitem .action,
	#popsearch .pitem figure{
		flex: 50px;
		max-width: 50px;
	}
	#popsearch .pitem .action a{
		width: 22px;
		height: 22px;
		margin: 0;
	}
	#popsearch .pitem .action a:first-child{
		margin-right: 3px;
	}
	#popsearch .pitem .action a:after {
		width: 14px !important;
		height: 14px !important;
		top: 1px !important;
	}
	#popsearch .pitem .caption {
		flex: calc(100% - 110px);
		max-width: calc(100% - 110px);
		padding: 0 5px;
	}
	.fancybox-slide--html{
		padding: 0;
	}
	.popup-credential:not(#popsubs):not(.on-inner-login){
		width: 100%;
		max-width: none;
		height: 100%;
		border-radius: 0;
		padding: 80px 15px 0;
	}
	.popup-credential.on-inner-login{
		padding: 25px 15px 0;
	}
	.popup-credential:not(#popsubs):not(.on-inner-login) .botcred{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		margin: 0;
	}
	.popup-credential.focused:not(#popsubs):not(.on-inner-login) .botcred{
		display: none;
	}
	.popup-credential .hentry img{
		max-width: 130px;
	}
	#popsubs.popup-credential{
		padding: 25px 30px 30px;
		max-width: calc(100% - 30px);
	}
	#popsubs.popup-credential .hentry img{
		max-width: 80px;
	}
	#popsubs .form-basic input,
	#popsubs .form-basic .button{
		height: 35px;
		line-height: 37px;
		padding: 0 15px;
		font-size: 14px;
	}
	.watrig{
		bottom: 15px;
		right: 15px;
	}
	.watrig a{
		width: 40px;
		height: 40px;
		line-height: 44px;
	}
	.watrig a:after{
		width: 14px;
		height: 14px;
	}
	.detail-product .score .rating,
	.detail-product .score .write,
	.inner-product .rowflex .promain,
	.inner-checkout .action ,
	.inner-checkout .info,
	.inner-profile .prmain,
	.inner-page.half-page .hentry .rowflex h2,
	.inner-page.half-page.with-bg .pgmain,
	.inner-page.half-page .pgmain{
		max-width: 100%;
		flex: 100%;
	
	}
	.detail-product .the-product,
	.detail-product .score .rating,
	.the-title{
		margin-bottom: 30px;
	}
	.inner-page{
		padding: 30px 0 60px;
	}
	.dropmenu{
		display: block;
		margin: 0 0 35px;
		position: relative;
		z-index: 3;
	}
	.dropmenu strong{
		display: block;
		position: relative;
		background: #fffbf5;
		border: 1px solid #f4ca95;
		border-radius: 10px;
		height: 42px;
		line-height: 40px;
		padding: 0 20px;
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.7px;
		z-index: 2;
	}
	.dropmenu.darker strong{
		border-color: #f4ca95;
		background: #fff3e2;
		text-transform: uppercase;
	}
	.dropmenu.active ul{
		display: block;
		z-index: 1;
	}
	.footer-widget .duo > *,
	.footer-widget .col:first-child ,
	.footer-widget .col:first-child + .col,
	.footer-widget .col{
		padding: 0;
		margin: 0 0 40px;
		border: none;
		flex: 100%;
		max-width: 100%;
	}
	.footer-widget .col ul{
		text-align: center;
	}
	.footer-widget li{
		margin-top: 15px;
	}
	.footer-widget{
		padding-top: 35px;
		position: relative;
	}
	.widget-title{
		text-align: center;
		font-weight: 700;
		letter-spacing: 2.1px;
	}
	.widget_subscribe form{
		display: block;
		margin: 0 auto;
		max-width: 240px;
		padding-bottom: 15px;
	}
	.widget_social{
		text-align: center;
		position: absolute;
		bottom: -85px;
		left: 0;
		width: 100%;
	}
	.widget_social a:first-child,
	.widget_social a{
		width: 30px;
		height: 30px;
		margin: 0 4px;
	}
	.widget_payment{
		margin: 0 auto;
		text-align: center;
	}
	.tribute{
		letter-spacing: 1px;
		padding-top: 85px;
	}
	.footer-widget a{
		letter-spacing: 2px;
	}
	.widget_payment figure{
	       margin: 0 1px 20px;
	}
	.widget_payment figure img{
		max-width: 90%;
	}
	.accord-item .acc-head h3{
		line-height: 160%;
	}
	.accord-item{
		padding: 15px 12px;
	}
	.accord-item .acc-head:before{
		right: -7px;
		top: -6px;
		transform: scale(0.7);
	}
	.accord-item .acc-body{
		padding-top: 20px;
		padding-right: 5px;
	}
	.block-list .block.halfy{
		display: block;
	}
	.block-list .block.halfy > *{
		max-width: none !important;
	}
	.block-list .block.halfy > *:first-child{
		margin-bottom: 40px;
	}
	.block-list .block{
		margin-top: 40px;
	}
	.the-title.brown{
		position: relative;
		bottom: -7px;
		top: auto;
	}
	.block.slidy .slide .item figure{
		flex:80px;
		max-width: 80px;
		padding: 10px;
	}
	.block.slidy .slide .item figure .rounder{
		width: 60px;
		height: 60px;
	}
	.block.slidy .slide .item figure + .caption{
		flex: calc(100% - 80px);
		max-width:  calc(100% - 80px);
		padding-left: 10px;
	}
	.block.slidy .slidenav{
		top: 42%;
		-ms-transform: translateY(-42%);
		-webkit-transform: translateY(-42%);
		transform: translateY(-42%);
		padding: 0 10px;
	}
	.block.slidy .slidenav a{
		width: 25px;
		height: 25px;
	}
	.block.slidy .slide{
		padding: 20px 50px;
		background: #fffbf5;
	}
	.block.slidy .slide .item .caption{
		padding-top: 15px;
	}
	.block.slidy .slide .item h3{
		margin-bottom: 5px;
	}
	.contact-wrap .item{
		flex: 50%;
		max-width:50%;
		margin: 0 0 30px;
	}
	.inner-page .layer-wrap.contact-wrap{
		padding-bottom: 10px;
	}
	.contact-wrap .item img{
		width: 64px;
	}
	.inner-page.half-page .hentry .rowflex h2{
		margin: 0;
		background: #fff;
		position: relative;
		padding-top: 27px;
		border-radius: 10px 10px 0 0;
		bottom: -5px;
		top: auto;
	}
	.inner-page.half-page.with-bg .dropmenu{
		margin-bottom: 0;
	}
	.banner-search{
		padding: 60px 0 45px;
	}
	.banner-search form {
		max-width: 250px;
		margin: 0 auto;
	}
	.banner-search form input{
		height: 26px;
		padding: 0 15px;
		font-size: 12px;
	}
	.banner-search form .cvr-bg{
		transform: scale(0.6);
		top: 5px;
		right: 9px;
	}
	.banner-search h2{
		margin-bottom: 15px;
	}
	.inner-page .layer-wrap.resell-wrap{
		padding: 25px 15px 50px;
	}
	.form-inner > .gap > *,
	.form-basic form > .rowflex > *{
		max-width: none;
		flex: 100%;
		margin-top: 16px;
	}
	.subhentry h2 + .format-text{
		margin-top: 5px;
	}
	#popvouch .info .period b{
		margin-top: 10px;
	}
	#popvouch .caption,
	#popvouch .info{
		flex: 100%;
		max-width: 100%;
		order: 1;
	}
	#popvouch .caption{
		order:2;
	}
	#popvouch{
		max-width: 310px;
	}
	#popvouch .info h2{
		display: block;
		font-size: 16px;
	}
	#popvouch .info{
		padding: 35px 30px 15px;
	}
	#popvouch .fancybox-close-small{
		transform: scale(0.5);
		right: 10px;
		top: 10px;
	}
	#popvouch .info .code{
		max-width: 200px;
		margin: 0 auto 20px;
		padding: 13px 10px;
	}
	#popvouch .caption{
		padding: 30px;
	}
	#popvouch .caption .txt li:before{
		top: 3px;
	}
	.inner-profile .profile-info .caption{
		flex: 100%;
		max-width: 100%;
		padding: 0;
	}
	.inner-profile .profile-info{
		padding: 95px 20px 15px;
		margin-bottom: 24px;
	}
	.inner-profile .profile-info .changepp{
		width: 65px;
		height: 65px;
		flex: 65px;
		max-width: 65px;
		position: absolute;
		top: 50px;
		left: 10px;
		z-index: 2;
	}
	.inner-profile .profile-info .changepp img{
		width: 65px;
	}
	.inner-profile .profile-info .changepp:after{
		right: 0;
		bottom: 1px;
	}
	.inner-profile .profile-info:after{
		height: 80px;
		background-image: url(../img/icon/profile-bg-mobile.png);
	}
	.inner-profile .profile-info h2{
		position: relative;
		left: 70px;
		font-size: 18px;
	}
	.inner-profile .profile-info h2 + .format-text{
		padding-top: 5px;
		font-weight: 600;
	}
	.acc-review .item figure {
		flex: 100%;
		max-width: none;
		text-align: center;
	}
	.acc-review .item .info {
		flex: 100%;
		max-width: none;
		padding: 0;
		margin: 20px 0 0;
	}
	.acc-review .item span.ago,
	.acc-review .item .rate{
		display: inline-block;
		margin: 0;
	}
	.acc-review .item .rate{
		margin: 0 10px;
	}
	.acc-wishlist .item,
	.acc-review .item{
		padding: 20px 10px 18px;
	}
	.profile-layer h2{
		font-weight: 700;
	}
	.profile-layer{
		padding: 25px 15px;
	}
	.acc-review .item .format-text{
		line-height: 160%;
	}
	.acc-wishlist .item .subtotal{
		padding: 15px 0 10px;
	}
	.acc-wishlist .item figure {
		flex: 70px;
		max-width: 70px;
		padding: 0;
	}
	.acc-wishlist .item .info {
		max-width: calc(100% - 70px);
		flex: calc(100% - 70px);
		padding-left: 20px;
	}
	.acc-profile .form-basic .dotdio{
		top: 5px;
		left: auto;
	}
	.inner-checkout .info .addr .dropselect strong,
	.dropselect.has-search input,
	.form-basic .date-field,
	.dropselect strong,
	.dropdown select,
	.form-basic input[type="number"],
	.form-basic input[type="text"],
	.form-basic input[type="tel"],
	.form-basic input[type="email"],
	.form-basic input[type="password"], 
	.profile-layer .form-basic select,
	.profile-layer .form-basic input[type='password'],
	.profile-layer .form-basic input[type='tel'],
	.profile-layer .form-basic input[type='email'],
	.profile-layer .form-basic input[type='text']{
		height: 43px;
		border-radius: 10px;
		line-height: 43px;
		padding: 0 15px;
	}
	.form-basic textarea{
		padding: 10px 15px;
	}
	.inner-checkout .info .addr .clicked.dropselect strong,
	.clicked.dropselect.has-search strong{
		border-radius: 10px 10px 0 0;
	}
	.acc-password .form-basic .centered,
	.acc-address .form-basic .centered,
	.acc-profile .form-basic .centered{
		bottom: -30px;
		margin-bottom: -60px;
	}
	.acc-address .list .item .txt{
		font-weight: 400 !important;
		float: none;
		max-width: calc(100% - 35px);
	}
	.acc-address .list .item .txt + a{
		font-size: 12px;
		top: 50%;
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		position: absolute;
		right: 5px;
	}
	.acc-address .list .item .holder{
		padding: 10px 15px;
	}
	#poptrack .journey figure figcaption,
	.acc-address .list .item .txt span{
		display: block;
		margin-top: 15px;
	}
	.acc-address .list .item.add-address{
		margin: 25px 0 0;
	}
	.acc-address .list .wrap .item{
		padding-left: 30px;
	}
	.acc-address .list .wrap .item:before{
		left: 0;
	}
	.acc-person .list .item{
		text-align: left;
	}
	.acc-person .chklabel label{
		margin: 0 5px 14px 0;
	}
	.acc-person .chklabel label span{
		font-size: 12px;
		height: 28px;
		line-height: 28px;
		padding: 0 10px;
	}
	.acc-person .chklabel label span:before{
		width: 14px;
		height: 14px;
		top: -2px;
	}
	.acc-person .list .item h3{
		font-size: 14px;
		margin-bottom: 15px;
	}
	.inner-profile.inner-beauty{
		background: #fffdfa;
	}
	.acc-person.profile-layer.no-bg{
		background: #fff;
	}
	.acc-person .list .item{
		margin-top: 25px;
	}
	.acc-person .chkimg{
		text-align: center;
	}
	.acc-person .chkimg label{
		max-width: 25%;
		flex: 25%;
	}
	.acc-person .penta .chkimg label{
		max-width: 33%;
		flex: 33%;
		margin-bottom: 25px;
	}
	.acc-person .penta + *{
		margin: 0 !important;
	}
	.orderlist .oitem .ototal b{
		position: relative;
		top: -3px;
	}
	.acc-order-detail .plist .owrap .oprod figure,
	.orderlist .oitem figure{
	       max-width: 60px;
	       padding: 0;
	}
	.acc-order-detail .plist .owrap .oprod .caption,
	.orderlist .oitem .caption{
	       width: calc(100% - 65px);
	}
	.orderlist .oitem .obody{
	       padding: 20px 15px;
	}
	.ordernav{
		margin: -20px -15px 30px;
	}
	#poptrack{
		max-width: 320px;
		margin: 15px 0;
	}
	
	#poptrack .detail,
	#poptrack .journey{
		flex:100%;
		max-width: 100%;
		font-size: 12px;
	}
	#poptrack .detail{
		padding: 30px 15px;
	}
	#poptrack .detail h2{
		padding: 0;
		font-size: 16px;
		margin-bottom: 15px;
		text-align: center;
	}
	#poptrack .journey{
		padding: 20px 20px 20px;
	}
	#poptrack .journey h3,
	#poptrack .journey figure{
		margin-bottom: 15px;
	}
	#poptrack .journey figure img{
		max-width: 30px;
	}
	#poptrack .journey .scrollbar-inner{
		height: 160px;
	}
	#poptrack  .scrollbar-inner > .scroll-element.scroll-y{
		opacity: 1;
	}
	#poptrack .journey li strong{
		min-height: 70px;
	}
	#poptrack .journey li strong:before{
		width: 9px;
		height: 9px;
		left: 6px;
	}
	#poptrack .journey li strong:after{
		height: calc(100% - 28px);
	}
	.acc-order-detail .navorder .crumb{
		float: none;
		text-align: center;
	}
	.acc-order-detail .navorder .crumb span{
		display: block;
		color: #774713;
		font-size: 16px;
		font-weight: 700;
		font-family: 'Raleway';
	}
	.acc-order-detail .navorder{
		position: relative;
	}
	.acc-order-detail .navorder .bck{
		float: none;
		position: absolute;
		left: 0;
		top: 3px;
		margin: 0;
	}
	.acc-order-detail .info,
	.acc-order-detail .summary{
		max-width: 100%;
		flex: 100%;
	}
	.acc-order-detail .plist h2{
		color: #be8687;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 16px;
		line-height: 120%;
		margin-bottom: 15px;
	}
	.acc-order-detail .rowflex{
		position: relative;
		padding-bottom: 150px;
	}
	.acc-order-detail div.package{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
	}
	.acc-order-detail .package .act, .acc-order-detail .package .stat{
		text-align: center;
	}
	.inner-checkout .action .item.cvoucher,
	.acc-order-detail .package .stat {
		margin-bottom: 30px;
	}
	.acc-order-detail .package .stat strong{
		text-align: left;
		display: block;
		margin-bottom: 30px;
	}
	.acc-order-detail .package .act .button:first-child,
	.acc-order-detail .package .act .button{
		margin: 0 7px;
	}
	.acc-order-detail .util table tr,
	.acc-order-detail .util table tr:first-child{
		flex: 49%;
		max-width: 49%;
	}
	.acc-order-detail .util table tr:last-child{
		flex: 100%;
		max-width:100%;
		padding-top: 15px;
	}
	.acc-order-detail .util table tr:last-child td:first-child{
		padding-bottom: 5px;
	}
	.inner-home .offer .list,
	.inner-cart .action,
	.inner-cart .basket,
	.acc-order-detail .plist .owrap .ototal,
	.acc-order-detail .plist .owrap .oprod{
		flex: 100%;
		max-width: 100%;
	}
	.inner-cart .basket .item h3,
	.acc-order-detail .plist .owrap .oprod .item h3{
		max-width: none;
	}
	.acc-order-detail .plist .owrap .ototal{
		text-align: center;
		padding-top: 35px;
	}
	.acc-order-detail .package .act .button{
		min-width: 1px;
	}
	.acc-order-detail .summary .tbl-holder{
		margin-top: 15px;
	}
	.inner-checkout .big-title,
	.inner-cart .big-title{
		text-align: center;
		font-size: 16px;
		margin-bottom: 25px;
		color: #774713;
		letter-spacing: 2.4px;
	}
	.inner-cart .basket{
		margin-bottom: 50px;
	}
	.inner-cart .action h2{
		text-align: center;
		font-size: 14px;
	}
	.inner-cart .calc{
		display: inline-block;
	}
	#poprod .calc a,
	.inner-cart .calc a{
		width: 20px;
		height: 20px;
		line-height: 23px;
	}
	#poprod .calc > input,
	.inner-cart .calc > input{
		height: 20px;
		width: 30px;
	}
	.inner-cart .basket .item .modif{
		flex: 70px;
		max-width: 70px;
	}
	.inner-cart .basket .item .info {
		max-width: calc(100% - 100px);
		flex: calc(100% - 100px);
	}
	.inner-cart .basket .item .info figure{
		width: 50px;
	}
	.inner-cart .basket .item .info .caption{
		width: calc(100% - 55px);
		padding-left: 10px;
		padding-right: 10px;
	}
	.inner-cart .basket .item{
		padding: 15px 10px;
	}
	.inner-cart .basket .item .rmv {
		flex:20px;
		max-width: 20px;
	}
	.inner-cart .basket .item .rmv a{
		width: 20px;
		height: 20px;
	}
	.inner-cart .basket .item .modif strong{
		margin: 0 0 10px;
	}
	.inner-cart .basket .item .tagline,
	.inner-cart .basket .item h3{
	       margin-bottom: 3px;
	}
	.inner-cart{
	       padding: 30px 0 80px;
	}
	.inner-checkout .button.bigger,
	.inner-cart .button.bigger{
		max-width: 120px;
		margin: 0 auto;
		height: 33px;
		line-height: 35px;
		font-size: 12px;
		padding: 0 5px;
	}
	.detail-product .related .product-list .product-item,
	.product-list .product-item,
	.inner-gift .product-list .product-item{
		max-width: calc(50% - 16px);
		flex: calc(50% - 16px);
		margin: 0 8px 30px;
	}
	.detail-product .related .product-list ,
	.product-list,
	.inner-gift .product-list {
		margin: 0 -8px;
	}
	.product-item .caption h3{
		letter-spacing: .7px;
	}
	.inner-gift .big-title{
		margin: 0 0 35px;
		letter-spacing: 2.1px;
	}
	.inner-gift{
		padding: 40px 0 60px;
	}
	.inner-gift .product-list .product-item .button.tinytall{
		padding: 0 5px;	
	}
	.product-item .pricing > *:first-child + *{
	       margin-left: 5px;
	}
	.inner-thank .layer{
		padding: 24px 22px;
	}
	.inner-thank .layer .payment > *{
		flex: 42%;
		max-width: 42%;
	}
	.inner-thank .layer .payment > *:last-child{
		max-width: 32%;
		flex: 32%;
	}
	.inner-thank .layer .payment > *:first-child{
		max-width: 26%;
		flex: 26%;
	}
	.inner-thank .layer figure img{
		max-width: 43px;
	}
	.inner-thank .layer .payment figure img{
		max-width: 70%;
		position: relative;
		top: 5px;
	}
	.inner-thank .action .button{
		padding: 0 20px;
		font-size: 12px;
		height: 25px;
		line-height: 27px;
		border-radius: 15px;
	}
	.inner-thank .layer .timer{
		min-width: 170px;
		padding-bottom: 5px;
		padding-top: 9px;
	}
	.inner-checkout .prompt-login{
		text-align: center;
		font-size: 14px;
		letter-spacing: 2.1px;
	}
	.inner-checkout .action h3,
	.inner-checkout .info .addr h2{
		text-align: center;
		font-size: 16px;
	}
	.inner-checkout .info .addr{
		padding: 25px 15px;
		margin-bottom: 50px;
	}
	.inner-checkout .info .addr h2{
		text-transform: none;
	}
	.inner-checkout .action .item.csummary{
		margin-bottom: 20px;
	}
	.inner-checkout{
		padding: 45px 0 80px;
	}
	.page-checkout .botbar .util{
		right: 10px;
	}
	.hentry-mobile,
	.product-item .mact{
		display: block;
	}
	.inner-product{
		padding: 45px 0 60px;
	}
	.hentry-mobile{
		margin-bottom: 40px;
	}
	.hentry-mobile h2{
		float: left;
		color: #774713;
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		position: relative;
		top: 6px;
	}
	.hentry-mobile .act{
		float: right;
	}
	.hentry-mobile .act a{
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 30px;
		margin-left: 5px;
	}
	.hentry-mobile .act a.trigger-filter{
		background-image: url('${filter}');
	}
	.hentry-mobile .act a.trigger-sort{
		background-image: url('${sort}');
	}
	#poprod{
		width: calc(100% - 30px);
		padding: 30px 15px 20px;
		border-radius: 10px;
	}
	#poprod .fancybox-close-small{
		transform: scale(0.5);
		top: 10px;
		right: 10px;
	}
	#poprod .the-product .gallery{
		max-width: 30%;
		flex: 30%;
	}
	#poprod .the-product .main{
		max-width: 70%;
		flex: 70%;
		padding-left: 10px;
	}
	#poprod .the-product .main h1{
		margin: 0 0 5px;
	}
	#poprod .the-product .main .prorate{
		display: block;
	}
	#poprod .the-product .main .meta{
		margin-bottom: 15px;
	}
	.detail-product .the-product .main .nominal .disc,
	#poprod .the-product .main .nominal .disc{
		width: 30px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
	}
	.detail-product .the-product .main .nominal .disc{
		width: 35px;
	}
	#poprod .the-product .util{
		margin: 25px 0 0;
	}
	#poprod .the-product .main .add-to-wish{
		width: 25px;
		height: 25px;
	}
	#poprod .the-product .util > *{
		margin-left: 10px;
	}
	#poprod .action .btn-atc{
		margin: 0 7px 0 0;
		top: 2px;
	}
	#poprod .action .btn-atc:before{
		width: 24px;
		height: 24px;
		top: -4px;
	}
	#poprod .action .button{
		height: 30px;
		line-height: 30px;
		width: 80px;
		padding: 0 5px;
	}
	#poprod .action{
		padding-top: 15px;
	}
	#poprod .the-product{
		margin-bottom: 20px;
	}
	#poprod .the-product .main .nominal .pricing > *:first-child + *,
	#poprod .the-product .main .nominal .pricing{
		margin-left: 5px;
	}
	#poprod .action .left a{
		top: 6px;
	}
	.line-title{
		text-align: center;
	}
	.line-title span{
		padding: 0 0 5px;
	}
	.generic-popup{
		max-width: calc(100% - 30px);
		padding: 40px 20px 20px;
	}
	.hentry-mobile.on-sale-page + .line-title{
		display: none;
	}
	.hentry-mobile.on-sale-page{
		margin: 25px 0;
	}
	.product-voucher .listvo{
		width: 1000px;
		margin: 0;
	}
	.product-voucher .listvo.current{
		display: inline-block;
	}
	.product-voucher .navivo{
		padding: 0;
		margin: 0 0 20px;
	}
	.product-voucher .listvo .item{
		max-width: none;
		width: 200px;
		margin: 0 6px 0 0;
		display: inline-block;
		vertical-align: middle;
	}
	.product-voucher .xscroll{
		overflow-x: scroll;
		margin-right: -20px;
		padding-bottom: 10px;
	}
	.detail-product .the-product .main,
	.detail-product .the-product .gallery{
		flex: 100%;
		max-width: 100%;
	}
	.detail-product{
		padding: 25px 0 60px;
	}
	.detail-product .the-product .gallery{
		margin-bottom: 30px;
	}
	.detail-product .the-product .gallery > *{
		max-width: 200px;
		margin: 20px auto 0;
	}
	.detail-product .the-product .main h1{
		padding-right: 0;
		margin: 0 0 7px;
		line-height: 140%;
	}
	.detail-product .the-product .main .meta .cat{
		border: none;
	}
	.detail-product .the-product .main .meta .cat,
	.detail-product .the-product .main .meta .prorate{
		margin-right: 7px;
		padding-right: 7px;
	}
	.detail-product .the-product .main .meta .cat:after,
	.detail-product .the-product .main .meta .prorate:after{
		display: block;
		position: absolute;
		right: -3px;
		top: 5px;
		width: 1px;
		height: 10px;
		content: '';
		background: #c7c7c7;
	}
	.detail-product .the-product .main .meta .cat:after{
		top: 4px;
	}
	.detail-product .the-product .main .meta strong a{
		font-size: 10px;
	}
	.detail-product .the-product .prorate small{
		margin-left: 3px;
	}
	.detail-product .the-product .main .nominal{
		position: relative;
	}
	.detail-product .the-product .main .nominal .add-to-wish{
		display: block;
		position: absolute;
		right: 0;
		top: 2px;
		width: 25px;
		height: 25px;
	}
	.detail-product .willswitch{
		display: flex;
		flex-wrap: wrap;
	}
	.detail-product .willswitch > *{
		flex: 100%;
	}
	.detail-product .willswitch form.cart{
		order: 1;
	}
	.detail-product .willswitch .tab-basic{
		order: 2;
		margin: 40px 0 0;
	}
	.detail-product .calc a{
		width: 30px;
		height: 33px;
		line-height: 36px;
	}
	.detail-product .calc input{
		height: 33px;
		width: 33px;
	}
	.detail-product .the-product .action .button{
		height: 33px;
		line-height: 33px;
		padding: 0 5px;
		font-size: 14px;
		min-width: 100px;
	}
	.detail-product .the-product .action > *{
		margin-left: 8px;
	}
	.detail-product  .the-product .action .btn-atc{
		font-size: 14px;
		position: relative;
		top: 2px;
	}
	.detail-product .the-product .action .btn-atc:before{
		width: 25px;
		height: 25px;
		top: -4px;
	}
	.detail-product .tab-basic .tab-head a{
		padding: 0 4px 15px;
	}
	.detail-product .score .left,
	.detail-product .score .right{
		float: none;
		text-align: center;
	}
	.detail-product .score .right{
		margin-top: 20px;
	}
	.detail-product .score .left .dummy-upload,
	.detail-product .score .left .dropselect{
		float: left;
		width: 48%;
		margin: 0;
		text-align: left;
		margin-bottom: 25px;
	}
	.detail-product .score .left .dummy-upload{
		float: right;
	}
	.detail-product .score .dropselect.greyed strong{
		width: 100%;
	}
	.detail-product .score .dummy-upload span,
	.detail-product .score .left .dropselect strong{
		height: 26px;
		line-height: 26px;
		font-size: 12px;
		padding: 0 10px;
		border-radius: 5px;
	}
	.detail-product .score .left .dropselect  li{
		font-size: 12px;
		padding: 10px 0;
	}
	.detail-product .score .dropselect .scrollbar-inner{
		padding: 2px 10px;
	}
	.detail-product .score  .dropselect li.current:after{
		transform: scale(.5);
		top: 7px;
	}
	.detail-product .score .dummy-upload span:before{
		transform: scale(0.7);
	}
	.detail-product .score .form-rate b{
		font-size: 12px;
		position: relative;
		top:2px
	}
	.detail-product .score textarea{
		min-height: 70px;
	}
	.detail-product .review .item .info{
		flex: calc(100% - 53px);
		max-width:  calc(100% - 53px);
		padding-left: 15px;
		position: relative;
	}
	.detail-product .review .item .info small{
		position: absolute;
		right: 0;
		top: 0;
	}
	.detail-product .review .item .caption{
		flex: 100%;
		max-width: 100%;
		margin: 30px 0 0;
	}
	.detail-product .review .revnav a{
		width: 49%;
		text-align: center;
		padding: 0 10px 12px;
	}
	.detail-product .review .item{
		padding: 20px 15px;
	}
	.detail-product .review .item strong{
		margin-bottom: 3px;
	}
	.inner-home .hero .holder{
		width: 100%;
		text-align: center;
	}
	.inner-home .hero .caption{
		top: auto;
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		bottom: 10%;
	}
	.slick-dots li button{
		width: 5px;
		height: 5px;
	}
	.slick-dots li.slick-active button{
		width: 10px;
		height: 10px;
	}
	.hero .slick-dots{
		bottom: 12px;
	}
	.inner-home .slider .slidenav a{
		width: 26px;
		height: 26px;
		background-repeat: no-repeat;
		background-position: center top;
		background-attachment: scroll;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
	.inner-home .hero .slider a.prev{
		margin-left: 10px;
	}
	.inner-home .hero .slider a.next{
		margin-right: 10px;
	}
	.inner-home .hero h2{
		letter-spacing: 2.7px;
	}
	.inner-home .offer .slidenav a.prev{
		left: 0;
	}
	.inner-home .best .slider .product-item,
	.inner-home .flash .slider .product-item,
	.inner-home .offer .product-item{
		width: 180px;
		max-width: 180px;
		margin: 0 5px 0 0;
	}
	.inner-home .best .slider .product-item,
	.inner-home .flash .slider .product-item{
		margin: 0 9px 0 0;
	}
	.inner-home .review .item{
		max-width: 310px;
		width: 310px;
		margin: 0 16px 0 0;
		padding: 40px 20px 20px;
	}
	.inner-home .review .slider,
	.inner-home .best .slider,
	.inner-home .flash .slider,
	.inner-home .offer .slider{
		margin: 0 -20px 0 0;
	}
	.inner-home .offer{
		padding: 45px 0 0;
		margin: 0 0 50px;
	}
	.inner-home .flash .sectitle{
		margin-bottom: 30px;
	}
	.inner-home .sectitle{
		letter-spacing: 2.4px;
	}
	.inner-home .flash .period > *{
		padding: 7px 4px;
	}
	.inner-home .flash .countdown{
		padding: 5px 4px 7px;
	}
	.inner-home .flash .countdown > *,
	.inner-home .flash .period > *{
		margin: 0 0 0 5px;
	}
	.inner-home .flash .timing > *{
		flex: 49%;
		max-width: 49%;
	}
	.inner-home .flash .timing > *:first-child{
		flex: 51%;
		max-width: 51%;
	}
	.inner-home .flash .no-current .countdown{
		max-width: 80%;	
	}
	.inner-home .flash{
		padding: 40px 0 60px;
	}
	.inner-home .flash .mtema{
		padding: 25px 0 35px;
	}
	.product-item .stockbar{
		margin-top: 20px;
	}
	.inner-home .best{
		padding: 50px 0 0;
		margin:  0 0 70px;
	}
	.inner-home .value figure{
		max-width: 50%;
		flex: 50%;
		margin: 0 0 20px;
	}
	.inner-home .value figure img{
		max-width: 80%;
	}
	.inner-home .value{
		padding: 50px 0 30px;
	}
	.inner-home .review .sectitle,
	.inner-home .value .sectitle{
		margin-bottom: 40px;
	}
	.inner-home .review{
		padding-top: 45px;
	}
	.inner-home .insta .rowflex a{
		flex: 50%;
		max-width: 50%;
	}
	.inner-home .insta{
		padding: 80px 0 100px;
	}
	.inner-home .insta .button{
		padding: 0 20px;
	}
	
	#poprod .the-product .gallery{
		height: 131px;
	}
	#poprod .the-product .gallery.initialized{
		height: auto;
	}
	.cart-discount .cart-coupon .woocommerce-remove-coupon{
		top: -1px;
	}
	.acc-wishlist .item .action{
		padding-left: 90px;
	}
	.product-voucher .listvo .item a {
		width: 200px;
		height: 99px;
		padding: 20px 5px 10px 65px;
		border-radius: 6px;
	}
	.product-voucher .listvo .item strong{
		margin: 8px 0 4px;
	}
	.detail-product .score .uploaded-img > *{
		padding: 5px;
	}
	#populasan .rowflex .item{
		max-width: calc(50% - 24px);
		flex: calc(50% - 24px);
	}
	.inner-thank .layer .payment > *:first-child + .item b{
		padding: 0 20px;
	}
	.inner-home .flash .period{
		top: 4px;
	}
	.inner-home .flash .period span{
		margin-bottom: 8px;
	}
	.acc-review .item .format-text + .gallery,
	.detail-product .review .item .gallery{
		margin-left: -3px;
		margin-right: -3px;
	}
	.acc-review .item .gallery a,
	.acc-review .item .gallery a:first-child,
	.detail-product .review .item .gallery a:first-child,
	.detail-product .review .item .gallery a{
		margin: 0 3px 6px;
	}
	.inner-home .review .hrev h3{
		max-width: 90px;
	}
	.popup-layer .close-popup:after{
		top: 2px;
		left: 0px;
	}
	.popup-layer .close-popup{
		right: 1px;
	}


	
	/** FONT SIZE **/
	#popvouch .info .code strong{
	       font-size: 26px;
	}
	.inner-thank .layer .timer{
		font-size: 25px;
	}
	.product-voucher .listvo .item strong,
	.inner-home .review .starate > *,
	.inner-home .hero h2,
	.detail-product .the-product .main .nominal .pricing > ins,
	.detail-product .the-product .main .nominal .pricing > span,
	.detail-product .the-product .main h1{
		font-size: 18px;
	}
	.inner-home .review .hrev h3,
	.inner-home .sectitle,
	.detail-product .score h2,
	.product-voucher .navivo a,
	.line-title,
	#poprod .the-product .main .nominal .pricing > ins,
	.profile-layer h2,
	.banner-search h2,
	.inner-page.half-page .hentry .rowflex h2,
	.the-title.brown,
	.format-text h1,
	.the-title,
	.popup-credential .hentry h2,
	.popcart .cfoot .button{
	       font-size: 16px;
	}
	.inner-home .flash .mtema figure figcaption,
	.inner-home .hero p,
	.detail-product .review .item h3,
	.detail-product .the-product .main .nominal .pricing > del,
	#poprod .the-product .main h1,
	.cvoucher .button,
	.inner-checkout .action .dropselect strong,
	.dropselect.has-img strong em, .dropselect.has-img li em,
	.inner-checkout .action .cship .clearfix b,
	.inner-checkout .action .cship .clearfix,
	.inner-checkout .action table,
	.inner-gift .big-title,
	.inner-cart .basket .item h3,
	.inner-cart .action table td,
	.acc-order-detail .tbl-holder h3,
	.acc-order-detail .package .stat strong,
	.acc-order-detail .plist h2,
	#poptrack .journey h3,
	.orderlist .oitem .ototal b,
	.orderlist .oitem h3,
	.acc-address .list h3,
	.acc-address .list .item .txt,
	.acc-address .list .feat .item .txt,
	.acc-wishlist .subtotal b,
	 .acc-wishlist .item .info h3,
	.acc-review .item h3,
	#popvouch .caption .txt h3,
	#popvouch .info .period strong,
	#popvouch .info h3,
	.subhentry h2,
	.form-basic .fgroup > label,
	.block-list .block .subtitle,
	.faq-list .item h2,
	.widget-title, .footer-widget a,
	.format-text h2,
	#popsubs.popup-credential .hentry h2,
	#popsearch .item h2,
	.popcart .cfoot .btn-gift, .popcart .subtotal b,
	.popcart .holder .item .util strong,
	.popcart .holder .chead a{
	       font-size: 14px;
	}
	.product-voucher .listvo .item b,
	.product-item figure .stockinfo span{
		font-size: 13px;
	}
	.inner-home .review .starate small,
	.inner-home .review .txt,
	.inner-home .flash .period > *,
	.inner-home .flash .countdown > *,
	.morepost,
	#poprod .action .left a,
	#poprod .action .button,
	#poprod .action .btn-atc, 
	#poprod .the-product .util > strong,
	#poprod .the-product .main .nominal .pricing > del,
	.the-product .main .meta .cat a,
	.inner-thank .layer .payment b,
	.inner-thank .layer .expired strong,
	.inner-thank .layer .expired p,
	.inner-gift .product-list .product-item .button.tinytall,
	#poprod .the-product .main .nominal .pricing > ins,
	#poprod .the-product .main .nominal .pricing > span,
	.product-item .pricing > ins, .product-item .pricing > span,
	.product-item .caption h3,
	.detail-product .calc a:before,
	.detail-product .calc > *,
	#poprod .calc a:before,
	#poprod .calc > *,
	.inner-cart .calc a:before,
	.inner-cart .calc > *,
	.inner-cart .basket .item .modif strong,
	.inner-cart .basket .item .info .caption .meta span,
	#poptrack .journey figure figcaption b,
	#poptrack .detail table td strong,
	#poptrack .detail table td b,
	.ordernav .wrap a,
	.orderlist .oitem .ototal,
	.acc-person .chkimg label span,
	.acc-address .list .item.add-address a,
	.acc-wishlist .meta > *,
	.acc-wishlist .subtotal h3,
	#popvouch .caption .txt,
	#popvouch .info .period b,
	.block.slidy .slide .item .format-text,
	.block.slidy .slide .item h3,
	.block-list .block .format-text,
	.accord-item .acc-head h3,
	.tribute,
	.format-text h3,
	.format-text,
	#popsubs.popup-credential p,
	#popsearch .item.voucher p,
	.popcart .holder .item h3{
	       font-size: 12px;
	}
	.product-voucher .listvo .item p,
	.product-item .stockbar em,
	.product-item .pricing > del,
	.product-item .caption .cat a,
	.format-text h4{
		font-size: 11px;
	}
	.detail-product .review .item .info small,
	.detail-product .review .item strong,
	.dropselect.has-img strong em b, .dropselect.has-img li em b,
	.format-text h5{
		font-size: 10px;
	}
	.format-text h6{
		font-size: 9px;
	}
	
	/** ZERO CLUB **/
	body.has-no-scroll,
	body.fancybox-active,
	.inner-home .flash .countdown > *:first-child,
	.detail-product .the-product .action > *:first-child,
	#poprod .the-product .main .nominal,
	.acc-order-detail .summary .tbl-holder:first-child,
	.acc-person .list .item:first-child,
	.acc-wishlist .item:first-child,
	.form-inner > .gap > *:first-child,
	.form-basic form > .rowflex > *:first-child,
	.block-list .block:first-child,
	.footer-widget li:first-child,
	.botbar .ucart{
		margin: 0;
	}
	.wrapper .wrapper,
	.acc-order-detail,
	 .acc-person .list,
	.faq-list{
		padding: 0;
	}
	.botbar .ucart{
		top: 0;
	 }
}
/* Custom mobile */
@media (max-width: 480px) {
	.block.slidy .slide .item figure + .caption,
	.block.slidy .slide .item figure{
		flex: 100%;
		max-width: none;
		margin: 0 0 15px;
		text-align: center;
	}
	.block.slidy .slide .item figure + .caption{
		margin: 0;
		padding: 0;
	}
	.block.slidy .slide .item figure .rounder{
		margin: 0 auto;
	}
	.block.slidy .slide .item .caption{
		text-align: center;
	}
	.acc-person .chkimg label figure,
	.acc-person .chkimg label img{
		max-width: 50px;
	}
	.acc-person .chkimg label figure:after{
		right: -5px;
	}
	.ordernav .wrap a{
		font-size: 11px;
		letter-spacing: 0;
		padding: 15px 0 10px;
	}
	.orderlist .oitem .ohead > *:first-child, .orderlist .oitem .ohead > *{
		flex:38%;
		max-width: 38%;
	}
	.orderlist .oitem .ohead > *:last-child{
		flex:24%;
		max-width: 24%;
		text-align: right;
		text-transform: uppercase;
	}
	 .orderlist .oitem .ohead > *:last-child b,
	.orderlist .oitem .ohead > * strong{
		min-width: 1px;
		text-align: right;
	}
}

@media (max-width: 360px) {
	
}
@media (min-width: 1230px) {

}

#responsive{
	display:block;
	width:10px;
	height: 10px;
	position: fixed;
	bottom:10px;
	left: 10px;
	z-index: 9999;
}
/** RESPONSIVE VIEWER **/
@media (max-width: 1259px) {  #responsive{background: blueViolet !important;}}
@media (max-width: 991px) {  #responsive{background: red !important;}}
@media (max-width: 768px) {  #responsive{background: blue !important;}}
@media (max-width: 480px) {  #responsive{background: cyan !important;}}
@media (max-width: 360px) {  #responsive{background: green !important;}}
`
export default Mobile;