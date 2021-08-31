import user from '../img/icon/user.svg';
import userHollow from '../img/icon/user-hollow.svg';
import mailRound from '../img/icon/mail-round.svg';
import mail from '../img/icon/mail.svg';
import search from '../img/icon/search.png';
import cart from '../img/icon/cart.svg';
import igRound from '../img/icon/ig-round.svg';
import wa from '../img/icon/wa.png';
import phoneRound from '../img/icon/phone-round.svg';
import credBg from '../img/icon/cred-bg.png';
import envelope from '../img/icon/envelope.png';
import catMenu from '../img/icon/cat-menu.png';
import close from '../img/icon/close.png';
import submenuBg from '../img/icon/submenu-bg.png';
import closeSmall from '../img/icon/close-small.png';
import angleLeft from '../img/icon/angle-left.png';
import slidyBg from '../img/icon/slidy-bg.jpg';
import arrowRight from '../img/icon/arrow-right.png';
import arrowLeft from '../img/icon/arrow-left.png';
import heartCircleHollow from '../img/icon/heart-circle-hollow.svg';
import heartCircleFill from '../img/icon/heart-circle-fill.svg';
import arrowLeftCircle from '../img/icon/arrow-left-circle.svg';
import arrowRightCircle from '../img/icon/arrow-right-circle.svg';
import closeBoldWhite from '../img/icon/close-bold-white.svg';
import IG from '../img/icon/ig.svg';
import cartBrown from '../img/icon/cart-brown.svg';
import reset from '../img/icon/reset.png';



const Style = `
#top{
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
        position: relative;
        z-index: 99;
}
.topbar{
        text-align: center;
        background: #ffedd0;
        color: #d37073;
        font-size: 12px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        font-family: 'Josefin Sans';
        font-weight: 600;
}
.topbar .wrapper .holder{
        padding-top: 12px;
        padding-bottom: 11px;
        position: relative;
        display: inline-block;
}
.topbar .wrapper .holder:after,
.topbar .wrapper .holder:before{
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        content: '';
        display: block;
        z-index: 2;
}
.topbar .wrapper .holder:before{
        left: -40px;
        background-image: linear-gradient(to left, rgba(239, 214, 215, 0) -8%, #ffedd0 72%);
}
.topbar .wrapper .holder:after{
        background-image: linear-gradient(to right, rgba(239, 214, 215, 0) -8%, #ffedd0 72%);
        right: -35px;
}
.midbar{
        padding-top: 10px;
        padding-bottom: 17px;
}
.midbar .midmenu{
        float: left;
}
.midmenu li{
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
}
.midmenu li:first-child{
        margin: 0;
}
.midbar .midml{
        float: right;
}
.popmenu .s li:last-child a:before,
.midbar .midml .cvr-bg-bf:before{
        width: 15.582px;
        height: 11.686px;
        background-image: url('${mail}');
        margin-right: 10px;
        position: relative;
        top: -2px;
}
.botline li a,
.midbar a{
        color: #464646;
        font-size: 14px;
        letter-spacing: 2.1px;
        text-transform: uppercase;
        font-family: 'Josefin Sans';
        font-weight: 400;
        transition:color 0.2s ease-in;
}
.botline li.current-menu-item > a,
.botline li:hover > a,
.botline li a:hover,
.midbar a:hover{
        color: #d37072;
}
.botbar{
        padding-top: 10px;
}
.page-checkout .botbar{
        padding-bottom: 15px;
}
#sticky-wrapper.is-sticky .botbar{
        background: #fff;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
        z-index: 99 !important;
}
.botbar .rowflex{
        justify-content: space-between;
        align-items: center;
        position: relative;
}
.botbar #popbrands .rowflex{
        align-items: inherit;
        justify-content: flex-start;
        padding: 0;
}
.botbar .logo{
        max-width: 14%;
        flex: 14%;
        position: relative;
        top: -3px;
}
.page-checkout .botbar .logo{
        max-width: 100%;
        flex: 100%;
        text-align: center;
}
.page-checkout .botbar .logo img{
        width: 170px;
}
.botbar .searchbar{
        max-width: 53%;
        flex: 53%;
        position: relative;
}
.botbar .layer .searchbar{
        max-width: 100%;
        flex: 100%;
}
.botbar .searchbar > a{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
}
#popbrands fieldset,
.botline .bname fieldset,
.product-util .search fieldset,
.product-util .search form,
.searchbar form{
        display: block;
        position: relative;
}
#popbrands fieldset input,
ul.brand-menu .bname fieldset input,
.product-util .search input,
.brand-filter input,
.banner-search form input,
.searchbar input{
        display: block;
        width: 100%;
        border-radius: 20px;
        padding-right: 45px;
        padding-left: 30px;
        height: 40px;
}
.product-util .search input{
        height: 35px;
        padding-left: 20px;
}
#popbrands fieldset .cvr-bg,
ul.brand-menu .bname fieldset .cvr-bg,
.dropselect.has-search .dropholder:after,
.product-util .search .cvr-bg,
.inner-product .proside .brand-filter:after,
.banner-search form .cvr-bg,
.searchbar .cvr-bg{
        width: 16px;
        height: 16px;
        display: block;
        cursor: pointer;
        background-image: url('${search}');
        position: absolute;
        top: 12px;
        right: 18px;
        border: none;
        background-color: rgba(0,0,0,0);
}
.product-util .search .cvr-bg{
        top: 9px;
}
.product-util .search fieldset.hasval .cvr-bg{
        background-image: url('${close}');
        top: 11px;
        right: 20px;
        width: 12px;
        height: 12px;
}
.botbar .util{
        max-width: 25%;
        flex: 25%;
        text-align: right;
}
.page-checkout .botbar .util{
        position: absolute;
        right: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
}
.botbar .util > *{
        display: inline-block;
        vertical-align: middle;
}
.botbar .ucart{
        margin-right: 35px;
        position: relative;
        top: 2px;
}
.page-checkout .botbar .ucart{
        margin: 0;
        top: auto;
}
.botbar .ucart a{
        display: inline-block;
        position: relative;
        color: #4b4b4b;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        font-family: 'Josefin Sans';
}
.botbar .ucart a.cvr-bg-af:after{
        width: 30px;
        height: 30px;
        position: relative;
        background-image: url('${cart}');
        top: -5px;
        margin-left: 5px;
}
.botbar .ucart a b{
        text-align: center;
        position: absolute;
        right: -3px;
        top: -2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        color: #fff;
        background: #ea0005;
        font-size: 11px;
        line-height: 18px;
        z-index: 2;
}
.botbar .uacc{
        position: relative;
}
.botbar .uacc .button{
        text-transform: uppercase;
        position: relative;
        z-index: 2;
}
.dropmenu ul,
.botbar .uacc div.drop{
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 0 0 10px 10px;
        border-top: none;
        padding: 35px 20px 10px;
        top: 50%;
        z-index: 1;
}
.botbar .uacc div.drop{
        padding: 0;
}
.botbar .uacc div.drop ul{
        padding: 35px 20px 10px;
}
#shell.unloaded .botbar .uacc div.drop,
.dropmenu ul{
        display: none;
}
.dropmenu ul li,
.botbar .uacc ul li{
        display: block;
        padding-top: 8px;
        margin-top: 8px;
        border-top: 1px solid #fff8f0;
}
.dropmenu ul li:first-child,
.botbar .uacc ul li:first-child{
        margin: 0;
        padding: 0;
        border: none;
}
.dropmenu ul li a,
.botbar .uacc ul a{
        text-transform: uppercase;
        color: #4b4b4b;
        font-size: 12px;
        letter-spacing: 1.8px;
        text-align: left;
        display: block;
        font-family: 'Raleway';
        font-weight: 600;
        transition:color 0.2s ease-in;
}
.botbar .uacc ul .current-menu-item > a,
.dropmenu ul li a:hover,
.botbar .uacc ul a:hover{
        color: #d37072;
}
.botbar .uacc .button.cvr-bg-bf:before{
        width: 16px;
        height: 18.286px;
        background-image: url('${user}');
        position: relative;
        margin-right: 12px;
        top: -3px;
}
.botbar .uacc .button.cvr-bg-bf.expanded:before{
        background-image: url('${userHollow}');
}
.botline{
        padding-top: 25px;
        padding-bottom: 12px;
        text-align: center;
        position: relative;
}
.botline li{
        display: inline-block;
        vertical-align: middle;
        margin: 0 15px;
}
.botline li a{
        color: #4b4b4b;
}

/** FOOTER **/
#bottom{
        background: #ffedd0;
}
.footer-widget{
        padding-top: 80px;
}
.footer-widget .col{
        padding: 0 20px 15px 40px;
        border-left: 1px solid #f8dadb;
        flex: 1.5;
}
.footer-widget .col:first-child{
        padding-left: 0;
        border: none;
        flex:1;
        padding-top: 67px;
}
.footer-widget .lastcol{
        flex: 2.8;
        padding-right: 0;
        padding-left: 75px;
}
.footer-widget li{
        display: block;
        line-height: 160%;
        margin-top: 35px;
}
.footer-widget li:first-child{
        margin: 0;
}
.widget-title,
.footer-widget a{
        color: #4b4b4b;
        font-size: 16px;
        letter-spacing: 2.4px;
        font-weight: 600;
        font-family: 'Josefin Sans';
        text-transform: uppercase;
        transition:color 0.2s ease-in;
}
.footer-widget a:hover{
        color: #d18d38;
}
.tribute{
        text-align: center;
        padding: 45px 0 30px;
        letter-spacing: 1.4px;
}
.widget-title{
        margin-bottom: 16px;
}
.footer-widget .duo{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.footer-widget .duo > *{
        max-width: 43%;
        flex: 43%;
        margin-bottom: 50px;
}
.widget_subscribe .form-basic input[type="email"]{
        background: #fff;
        border-radius: 20px;
        border: 1px solid #f4ca95;
        text-align: center;
        padding: 0 20px;
        border-radius: 30px;
        height: 40px;
}
.widget_subscribe [type='submit']{
        display: block;
        width: 100%;
}
.widget_subscribe [type='submit']:focus,
.widget_subscribe [type='submit']:active{
        border-radius: 20px;
}
.widget_social a{
        display: inline-block;
        vertical-align: middle;
        width: 50px;
        height: 50px;
        margin-left: 15px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.widget_social a:hover{
        opacity: .7;
}
.widget_social a:first-child{
        margin: 0;
}
.widget_social a.ig{
        background-image: url('${igRound}');
}
.widget_social a.ml{
        background-image: url('${mailRound}');
}
.widget_social a.ph{
        background-image: url('${phoneRound}');
}
.widget_payment{
        max-width: 400px;
}
.widget_payment figure{
        display: inline-block;
        vertical-align: middle;
        margin: 0 20px 20px 0;
}
/** INNER PAGE **/
.inner-page{
        padding: 60px 0 190px;
        font-size: 14px;
}
.inner-page.inner-login{
        padding-bottom: 60px;
}
.inner-page.half-page.with-bg{
        background: #fffbf5;
}
.inner-profile .wrapper.rowflex,
.inner-page.half-page .rowflex{
        justify-content: space-between;
        align-items: flex-start;
}
.inner-profile .prnav,
.inner-page.half-page .hentry .rowflex div,
.inner-page.half-page .pgnav{
        max-width: 18%;
        flex: 18%;
        position: relative;
        left: -60px;
}
.inner-profile .prnav,
.inner-page.half-page.with-bg .pgnav{
        max-width: 26%;
        flex: 26%;
        padding: 20px;
        background: #fff;
        border-radius: 10px;
}
.inner-profile .prnav *,
.inner-page.half-page.with-bg .pgnav *{
        position: relative;
        z-index: 2;
}
.inner-profile .prnav:after,
.inner-page.half-page.with-bg .pgnav:after{
        display: block;
        position: absolute;
        right: -25px;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #fff;
        content: '';
}
.inner-profile .prnav a,
.inner-page.half-page.with-bg .pgnav a{
        text-transform: uppercase;
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1.6px;
}
.inner-profile .prnav li,
.inner-page.half-page .pgnav li{
        display: block;
        margin-top: 35px;
        line-height: 160%;
}
.inner-profile .prnav li:first-child,
.inner-page.half-page .pgnav li:first-child{
        margin: 0;
}
.inner-profile .prnav li a,
.inner-page.half-page .pgnav li a{
        color: #4b4b4b;
        font-size: 18px;
        font-weight: 600;
        transition:color 0.2s ease-in;
}
.inner-profile .prnav li a{
        font-size: 16px;
}
.inner-profile .prnav li.current-menu-item a,
.inner-profile .prnav li a:hover,
.inner-page.half-page .pgnav li.current-menu-item a,
.inner-page.half-page .pgnav li a:hover{
        color: #d37072;
}
.inner-profile .prnav li.current-menu-item a,
.inner-page.half-page .pgnav li.current-menu-item a{
        font-weight: 700;
}
.inner-profile .prnav h3,
.inner-page.half-page .pgnav h2{
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: 'Josefin Sans';
        line-height: 100%;
        margin-bottom: 45px;
}
.inner-profile .prnav h3{
        margin-bottom: 40px;
}
.inner-page.half-page .pgmain{
        max-width: 72%;
        flex: 72%;
}
.inner-profile .prmain,
.inner-page.half-page .hentry .rowflex h2,
.inner-page.half-page.with-bg .pgmain{
        max-width: 74%;
        flex: 74%;
}
.inner-page.half-page .hentry .rowflex h2{
        font-size: 24px;
        text-transform: uppercase;
        margin-bottom: 15px;
}
/** FAQ **/
.faq-list {
        padding-top: 30px;
}
.faq-list .item{
        margin-top: 30px;
}
.faq-list .item:first-child{
        margin: 0;
}
.faq-list .item.hidden{
        display: none;
}
.faq-list .item h2{
        line-height: 130%;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
}
/** ABOUT **/
.block-list .block{
        margin-top: 100px;
}
.block-list .block:first-child{
        margin: 0;
}
.block-list .block .subtitle{
        text-align: center;
        color: #bc8300;
        font-size: 24px;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 20px;
        letter-spacing: 3.6px;
        text-transform: uppercase;
}
.block-list .block .format-text{
        font-size: 18px;
}
.block-list .block.fully .subtitle{
        margin-top: 40px;
}
.block-list .block.fully .format-text{
        color: #533104;
        
}
.block-list .block.halfy{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.block-list .block.halfy figure{
        flex: 50%;
        max-width: 50%;
}
.block-list .block.halfy .caption{
        flex: 46%;
        max-width: 46%;
}
.block-list .block.righty figure{
        order: 2;
}
.block-list .block.righty .caption{
        order: 1;
}
.block.slidy .slide{
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${slidyBg}');
        padding: 45px 15%;
        box-shadow: 0 3px 16px 0 rgba(106, 106, 106, 0.33);
        border-radius: 10px;
        position: relative;
}
.block.slidy .slide .item{
        display: flex !important;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
}
.block.slidy .slide .item .caption{
        flex: 100%;
        max-width: 100%;
        padding-top: 30px;
}
.block.slidy .slide .item figure{
        flex: 25%;
        max-width: 25%;
        text-align: center;
        padding: 15px;
}
.block.slidy .slide .item figure .rounder{
        width: 180px;
        height: 180px;
        background: #fffbf5;
        box-shadow: 0 3px 16px 0 rgba(106, 106, 106, 0.33);
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
}
.block.slidy .slide .item figure img{
        max-width: 50%;
        flex: 1;
}
.block.slidy .slide .item figure + .caption{
        flex: 70%;
        max-width: 70%;
        padding: 0;
}
.block.slidy .slide .item h3{
        font-weight: 700;
        font-size: 20px;
        text-transform:  uppercase;
        letter-spacing: 3px;
        margin-bottom: 15px;
        line-height: 120%;
}
.block.slidy .slide .item .format-text{
        font-size: 16px;
        font-weight: 600;
}
.block.slidy .slidenav{
        position: absolute;
        left: 0;
        width: 100%;
        height: 0;
        padding: 0 50px;
        top: 44%;
        -ms-transform: translateY(-44%);
        -webkit-transform: translateY(-44%);
        transform: translateY(-44%);
}
.block.slidy .slidenav a{
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        transition:all 0.2s ease-in;
}
.block.slidy .slidenav .prev{
        float: left;
        background-image: url('${arrowLeft}');
        left: 0;
}
.block.slidy .slidenav .prev:hover{
        left: -5px;
}
.block.slidy .slidenav .next{
        float: right;
        background-image: url('${arrowRight}');
        right: 0;
}
.block.slidy .slidenav .next:hover{
        right: -5px;
}
.inner-page .layer-wrap{
        background: #fff;
        border-radius: 10px;
        padding: 57px 38px 37px;;
}
.inner-page .layer-wrap.contact-wrap{
        padding: 60px 30px 80px;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
}
.contact-wrap .item{
        flex: 21%;
        max-width: 21%;
        padding: 0 10px;
}
.contact-wrap .item .caption h3{
        margin: 25px 0 10px;
        font-weight: 700;
        font-size: 14px;
}
.contact-wrap .item .caption a{
        color: #4b4b4b;
        font-size: 14px;
}
.contact-wrap .item .caption a.hasund{
        text-decoration: underline;
}
.inner-profile{
        background: #fffdfa;
        padding: 30px 0 80px;
}
.inner-profile.inner-beauty{
        background: #fff;
}
.inner-profile.nobg{
        background: none;
}
.inner-profile .prnav .item{
        margin-top: 60px;
}
.inner-profile .prnav .item:first-child{
        margin: 0;
}
.inner-profile .profile-info{
        background: #fff;
        border: 1px solid #fdf0dd;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        margin-bottom: 40px;
        padding: 75px 70px 35px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
}
.inner-profile .profile-info:after{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/profile-bg.png);
        background-color: #fff;
}
.inner-profile .profile-info .changepp{
        flex: 80px;
        max-width: 80px;
        position: relative;
        border-radius: 40px;
        cursor: pointer;
}
.inner-profile .profile-info .changepp:after{
        display: block;
        position: absolute;
        right: 2px;
        bottom: 4px;
        width: 20px;
        height: 20px;
        content: '';
        background-image: url(../img/icon/plus.png);
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 3;
}
.inner-profile .profile-info .changepp img{
        border-radius: 50%;
        height: auto !important;
}
.inner-profile .profile-info .changepp input{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: red;
        cursor: pointer;
        z-index: 4;
}
.inner-profile .profile-info .caption{
        max-width: calc(100% - 130px);
        flex: calc(100% - 130px);
}
.inner-profile .profile-info .format-text > *{
        margin-top: 12px;
}
.inner-profile .profile-info .format-text > *:first-child{
        margin: 0;
}
.profile-layer h2,
.inner-profile .profile-info h2{
        font-family: 'Josefin Sans';
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        margin-bottom: 10px;
}
.profile-layer{
        padding: 44px 28px 47px;
        background: #fff;
}
.profile-layer.no-bg{
        background: none;
}
.profile-layer h2{
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 20px;
}
.acc-wishlist .item,
.acc-review .item{
        border: 1px solid #e4e8ed;
        padding: 20px 30px 18px 15px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        flex-wrap: wrap;
}
.acc-wishlist .item{
        align-items: center;
}
.acc-wishllist .item:first-child,
.acc-review .item:first-child{
        margin: 0;
}
.acc-review .item figure{
        flex: 120px;
        max-width: 120px;
        padding: 0 5px 5px;
}
.acc-wishlist .item figure{
        flex: 100px;
        max-width: 100px;
        padding: 0 5px 5px;
        text-align: center;
}
.acc-review .item .info{
        max-width: 156px;
        flex: 156px;
        margin-top: 7px;
}
.acc-wishlist .item .info{
        max-width: calc(100% - 250px);
        flex: calc(100% - 250px);
}
.acc-review .item .caption{
        max-width: calc(100% - 320px );
        flex: calc(100% - 320px );
}
.acc-wishlist .item .subtotal{
        max-width: calc(100% - 530px );
        flex: calc(100% - 530px );
}
.acc-wishlist .item .action{
        max-width: 130px;
        flex: 130px;
}
#popsearch .pitem span.tagline,
.popcart .holder .item .tagline,
.inner-cart .basket .item .tagline,
.acc-order-detail .plist .owrap .oprod .item span.tagline,
.orderlist .oitem span.tagline,
.acc-wishlist .item span.tagline,
.acc-review .item span.tagline{
        display: block;
        font-family: 'Josefin Sans';
        font-size: 12px;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 10px;
}
#popsearch .pitem span.tagline,
.popcart .holder .item .tagline,
.inner-cart .basket .item .tagline,
.acc-order-detail .plist .owrap .oprod .item span.tagline,
.orderlist .oitem span.tagline,
.acc-wishlist .item span.tagline{
        margin-bottom: 5px;
}
#popsearch .pitem h3,
.popcart .holder .item h3,
.inner-cart .basket .item h3,
.acc-order-detail .plist .owrap .oprod .item h3,
.orderlist .oitem h3,
.acc-wishlist .item .info h3,
.acc-review .item h3{
        font-family: 'Josefin Sans';
        font-size: 16px;
        font-weight: 600;
        line-height: 120%;
        margin-bottom: 7px;
}
#popsearch .pitem h3,
.popcart .holder .item h3,
.inner-cart .basket .item h3,
.acc-order-detail .plist .owrap .oprod .item h3,
.orderlist .oitem h3,
.acc-wishlist .item .info h3{
        font-weight: 700;
}
#popsearch .pitem h3 a,
.popcart .holder .item h3 a,
.inner-cart .basket .item h3 a,
.acc-order-detail .plist .owrap .oprod .item h3 a,
.orderlist .oitem h3 a,
.orderlist .oitem h3 a,
.acc-wishlist .item h3 a,
.acc-review .item h3 a{
        color: #4b4b4b;
        transition:color 0.2s ease-in;
}
#popsearch .pitem h3 a:hover,
.popcart .holder .item h3 a:hover,
.inner-cart .basket .item h3 a:hover,
.acc-order-detail .plist .owrap .oprod .item h3 a:hover,
.orderlist .oitem h3 a:hover,
.acc-wishlist .item h3 a:hover,
.acc-review .item h3 a:hover{
        color: #d37072;
}
.acc-review .item .rate{
        margin: 30px 0 8px;
}
.acc-review .item span.ago{
        color: #000;
        font-size: 12px;
        display: block;
        line-height: 100%;
        margin-left: 3px;
}
.acc-review .item .format-text{
        line-height: 140%;
}
.acc-review .item .format-text + .gallery{
        margin-top: 15px;
}
.detail-product .review .item .gallery a,
.acc-review .item .gallery a{
        display: inline-block;
        vertical-align: middle;
        width: 70px;
        margin-left: 4px;
}
.detail-product .review .item .gallery a:first-child,
.acc-review .item .gallery a:first-child{
        margin-left: 0;
}
.detail-product .review .item .gallery a img,
.acc-review .item .gallery img{
        border: 1px solid #dedede;
}
#popsearch .pitem .meta > *,
.inner-cart .basket .item .meta > *,
.acc-order-detail .plist .owrap .meta > *,
.orderlist .oitem .meta > *,
.acc-wishlist .meta > *{
        display: inline-block;
        vertical-align: middle;
        margin-left: 9px;
        line-height: 100%;
}
#popsearch .pitem .meta > *,
.inner-cart .basket .item .meta > *,
.acc-order-detail .plist .owrap .meta > *{
        margin-left: 15px;
}
#popsearch .pitem .meta > *:first-child,
.inner-cart .basket .item .meta > *:first-child,
.acc-order-detail .plist .owrap .meta > *:first-child,
.orderlist .oitem .meta > *:first-child,
.acc-wishlist .meta > *:first-child{
        margin: 0;
}
.inner-cart .basket .item .meta > .price,
.acc-order-detail .plist .owrap .meta > .qty,
.acc-order-detail .plist .owrap .meta > .price,
.orderlist .oitem .meta > .qty,
.acc-wishlist .meta .price,
.acc-wishlist .meta .qty{
        font-family: 'Josefin Sans';
        font-weight: 600;
        position: relative;
        top: 2px;
}
.acc-order-detail .plist .owrap .meta > .qty,
.acc-order-detail .plist .owrap .meta > .price{
        font-family: 'Raleway';
        top: 1px;
}
.acc-wishlist .meta .qty{
        color: #d37072;
}
.acc-wishlist .subtotal h3{
        letter-spacing: 1.4px;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 10px;
}
.acc-wishlist .subtotal b{
        font-family: 'Josefin Sans';
        font-size: 16px;
        font-weight: 600;
}
.acc-wishlist .item .sold,
.acc-wishlist .item .atc{
        color: #d18d38;
        font-family: 'Josefin Sans';
        font-weight: 600;
}
.acc-wishlist .item .atc:before{
        width: 25.255px;
        height: 25.255px;
        background-image: url('${heartCircleHollow}');
        position: relative;
        margin-right: 5px;
        top: -4px;
}
.acc-wishlist .item .sold{
        color: #9f9f9f;
}
.acc-wishlist .item .sold:before{
        width: 16px;
        height: 14px;
        background-image: url(../img/icon/soldout.png);
        position: relative;
        margin-right: 9px;
        top: -3px;
}
.acc-profile .form-basic .dotdio{
        position: relative;
        top: 14px;
        left: 8px;
}
.acc-password .form-basic .centered,
.acc-address .form-basic .centered,
.acc-profile .form-basic .centered{
        position: relative;
        margin: 30px 0 -60px;
        bottom: -70px;
}
.acc-password.profile-layer,
.acc-address.edit-address.profile-layer,
.acc-profile.profile-layer{
        margin-bottom: 80px;
}
.acc-address .list .feat{
        margin-bottom: 16px;
}
.acc-address .list h3{
        font-weight: 600;
        font-size: 16px;
}
.acc-address .list .item{
        margin-top: 15px;
}
.acc-address .list .item .holder{
        padding: 15px;
        position: relative;
        border: 1px solid #eaeaea;
        border-radius: 5px;
}
.acc-address .list .feat .item .holder{
        border-color: #ffdcb1;
        background: #fffbf5;
}
.acc-address .list .feat .item .txt{
        font-weight: 600;
        font-size: 16px;
}
.acc-address .list .item a{
        font-family: 'Josefin Sans';
        font-size: 17px;
        color: #4b4b4b;
        transition:color 0.2s ease-in;
        font-weight: 600;
        float: right;
        position: relative;
        top: 14px;
        margin-right: 5px;
}
.acc-address .list .item.add-address{
        margin: 50px 0 0;
}
.acc-address .list .item.add-address a{
        float: none;
        margin: 0 0 0 17px;
        top: auto;
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 15px;
}
.acc-address .list .item a:hover{
        color: #d37072;
}
.acc-address .list .item .txt{
        max-width: calc(100% - 80px);
        font-size: 15px;
        line-height: 140%;
        float: left;
}
.acc-address .list .wrap .item{
        padding-left: 52px;
        position: relative;
}
.acc-address .list .wrap .item:before{
        position: absolute;
        left: 10px;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 13px;
        height: 13px;
        border: 1px solid #9f9f9f;
        background: #9f9f9f;
        box-shadow:inset 0px 0 0 1px #fff;
        content: '';
        display: block;
        border-radius: 50%;
}
.acc-address .list .item .cvr-bg-bf{
        width: 20px;
        height: 20px;
        background: #e0a459;
        border-radius: 50%;
        position: absolute;
        top: -9px;
        right: -9px;
        display: block;
        float: none;
        margin: 0;
}
.acc-address .list .item .cvr-bg-bf:before{
        width: 20px;
        height: 20px;
        background-image: url('${closeBoldWhite}');
}
.acc-address .form-basic textarea{
        min-height: 115px;
        padding: 15px;
}
.acc-address .form-basic .dropselect strong{
        height: 47px;
        line-height: 47px;
}
.acc-password .form-basic ,
.acc-address .form-basic ,
.acc-profile .form-basic {
        max-width: 740px;
        margin: 0 auto;
}
.profile-layer .form-basic input[type='password'],
.profile-layer .form-basic input[type='tel'],
.profile-layer .form-basic input[type='email'],
.profile-layer .form-basic input[type='text']{
        padding: 0 15px !important;
}
.acc-person .list{
        padding-top: 20px;
}
.acc-person .list .item{
        margin-top: 50px;
        text-align: center;
}
.acc-person .list .item:first-child{
        margin: 0;
}
.acc-person .list .item h3{
        color: #000;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 24px;
}
.acc-person .chklabel label{
        display: inline-block;
        vertical-align: middle;
        margin: 0 6px 16px;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
}
.acc-person .chkimg label input,
.acc-person .chklabel label input{
        display: none;
}
.acc-person .chklabel label span{
        height: 35px;
        background: #f9f9f9;
        border: 1px solid #ececec;
        border-radius: 17px;
        position: relative;
        display: block;
        padding: 0 15px;
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        color: #9f9f9f;
        line-height: 37px;
}
.acc-person .chklabel label span:before{
        width: 16px;
        height: 16px;
        content: '';
        background-image: url(../img/icon/plus-grey.png);
        margin-right: 7px;
        position: relative;
        top: -3px;
}
.acc-person .chklabel label input:checked + span{
        border-color: #e0a459;
        background: #fdf0dd;
        color: #e0a459;
}
.acc-person .chklabel label input:checked + span:before{
        background-image: url(../img/icon/check.png);
}
.acc-person .chkimg{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
}
.acc-person .chkimg label{
        flex: 20%;
        max-width: 20%;
        cursor: pointer;
}
.acc-person .chkimg label figure{
        border-radius: 50%;
        display: block;
        position: relative;
        width: 70px;
        margin: 0 auto 10px;
}
.acc-person .chkimg label input:checked + figure{
        box-shadow: 0px 0 0 3px #e0a459;
}
.acc-person .chkimg label figure:after{
        width: 19px;
        height: 19px;
        background-image: url(../img/icon/check-bg.png);
        position: absolute;
        right: 0;
        bottom: 0;
        opacity: 0;
}
.acc-person .chkimg label input:checked + figure:after{
        opacity: 1;
}
.acc-person .chkimg label img{
        border-radius: 50%;
}
.acc-person .chkimg label span{
        color: #000;
}
.acc-person form .centered{
        margin-top: 70px;
}
.ordernav{
        margin: -44px -28px 30px;
}
.ordernav .wrap{
        display: flex;
        flex-wrap: wrap;
}
.ordernav .wrap a{
        flex: 1;
        text-align: center;
        color: #c3c3c3;
        font-size: 16px;
        font-family: 'Josefin Sans';
        padding: 20px 0 18px;
        text-transform: uppercase;
        letter-spacing: 1.6px;
        transition:color 0.2s ease-in;
        border-bottom: 1px solid #c3c3c3;
        display: block;
        position: relative;
}
.ordernav .wrap a.current,
.ordernav .wrap a:hover{
        color: #d37072;
}
.ordernav .wrap a.current{
        font-weight: 700;
}
.ordernav .wrap a.current:after{
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 3px;
        background: #d37072;
        content: '';
        z-index: 2;
}
.orderlist .oitem{
        box-shadow: 0 3px 6px 0 rgba(128, 21, 22, 0.1);
        border: solid 1px #e4e8ed;
        overflow: hidden;
        border-radius: 10px;
        margin-top: 22px;
}
.orderlist .oitem:first-child{
        margin: 0;
}

.orderlist .oitem .obody,
.orderlist .oitem .ohead{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: #ffedd0;
        padding: 8px 20px 6px;
}
.orderlist .oitem .obody > *,
.orderlist .oitem .ohead > *{
        flex: 27%;
        max-width: 27%;
        color: #9d9d9d;
        font-size: 14px;
        font-family: 'Josefin Sans';
        font-weight: 400;
}
.orderlist .oitem .obody > *:first-child,
.orderlist .oitem .ohead > *:first-child{
        flex: 50%;
        max-width: 50%;
}
.orderlist .oitem .obody > *:last-child,
.orderlist .oitem .ohead > *:last-child{
        flex: 19%;
        max-width: 19%;
}
.orderlist .oitem .ohead > * b{
        color: #35405a;
        font-weight: 600;
}
.orderlist .oitem .ohead > * strong{
        color: #d37072;
        font-weight: 600;
        min-width: 92px;
        display: inline-block;
        position: relative;
}
#popvouch .info .period strong:before,
.orderlist .oitem .ohead > * strong:after{
        width: 14px;
        height: 14px;
        background-image: url(../img/icon/clock.png);
        position: absolute;
        right: 0;
        top: -1px;
}
.orderlist .oitem .obody{
        padding: 20px;
        background: none;
        align-items: center;
}
.orderlist .oitem .obody .item{
        margin-top: 25px;
        color: #4b4b4b;
        font-family: 'Raleway';
}
.orderlist .oitem .obody .item:first-child{
        margin: 0;
}
.acc-order-detail .plist .owrap .oprod figure,
.orderlist .oitem figure{
        max-width: 100px;
        padding: 0 15px;
        display: inline-block;
        vertical-align: middle;
}
.acc-order-detail .plist .owrap .oprod  .subtotal,
.acc-order-detail .plist .owrap .oprod .caption,
.orderlist .oitem .caption{
        width: calc(80% - 120px);
        display: inline-block;
        vertical-align: middle;
        padding-left: 10px;
}
.orderlist .oitem .ototal{
        color: #4b4b4b;
        font-weight: 600;
        letter-spacing: 1.2px;
        font-family: 'Raleway';
        padding-left: 30px;
}
.orderlist .oitem .ototal b{
        display: block;
        font-family: 'Josefin Sans';
        margin-top: 10px;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0;
}
.orderlist .oitem .oact{
        text-align: center;
}
.acc-order-detail .package .stat a,
.orderlist .oitem .opay,
.orderlist .oitem .odetail,
.orderlist .oitem .otrack,
.orderlist .oitem .oinv{
        color: #d18d38;
        font-weight: 600;
        margin-bottom: 30px;
        display: inline-block;
        font-family: 'Raleway';
}
.acc-order-detail .package .stat a:before,
.orderlist .oitem .otrack:before{
        width: 16px;
        height: 16px;
        background-image: url(../img/icon/lacak.png);
        position: relative;
        margin-right: 8px;
        top: -1px;
}
.orderlist .oitem .odetail:before,
.orderlist .oitem .oinv:before{
        width: 13px;
        height: 17px;
        background-image: url(../img/icon/inv.png);
        position: relative;
        margin-right: 8px;
        top: -2px;
}
.orderlist .oitem .odetail:before{
        background-image: url(../img/icon/detail.png);
}
.orderlist .oitem .opay,
.orderlist .oitem .odetail{
        margin: 0;
        color: #774713;
}
.orderlist .oitem .opay:before{
        width: 16px;
        height: 10px;
        background-image: url(../img/icon/money.png);
        position: relative;
        margin-right: 8px;
        top: -1px;
}
/** POPUP TRACK **/
#poptrack{
        padding: 0;
        max-width: 745px;
        width: 100%;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        overflow: hidden;
}
#poptrack .holder{
        display: flex;
        flex-wrap: wrap;
}
#poptrack .detail{
        max-width: 40%;
        flex: 40%;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/track-bg.jpg);
        padding: 65px 20px 75px;
}
#poptrack .journey h3,
#poptrack .detail h2{
        padding-left: 17px;
        font-family: 'Josefin Sans';
        font-weight: 700;
        font-size: 22px;
        color: #d18d38;
        text-transform: uppercase;
        margin-bottom: 40px;
        line-height: 110%;
}
#poptrack .detail .tbl-item{
        margin-top: 18px;
        padding: 18px 0 0 17px;
        border-top: 1px solid rgba(159,159,159,.25);
}
#poptrack .detail h2 + .tbl-item{
        padding-top: 0;
        margin: 0;
        border: none;
}
#poptrack .detail .tbl-item table{
        width: 100%;
}
#poptrack .detail table td{
        padding-top: 5px;
        font-size: 12px;
        line-height: 160%;
}
#poptrack .detail .tbl-item.last-one tr:nth-child(even) td{
        padding-bottom: 7px;
}
#poptrack .detail table tr:first-child td{
        padding: 0;
}
#poptrack .detail table td strong,
#poptrack .detail table td b{
        font-weight: 600;
        font-size: 14px;
}
#poptrack .detail table td strong{
        font-weight: 700;
}
#poptrack .detail table td a{
        color: #4b4b4b;
        font-size: 12px;
        text-decoration: underline;
}
#poptrack .journey{
        max-width: 60%;
        flex: 60%;
        padding: 75px 27px 20px 33px;
}
#poptrack .journey h3{
        text-align: center;
        padding: 0;
        margin: 0 0 25px;
        font-size: 16px;
}
#poptrack .journey figure{
        text-align: center;
        margin-bottom: 40px;
}
#poptrack .journey figure figcaption{
        display: block;
        margin-top: 25px;
        font-size: 12px;
}
#poptrack .journey figure figcaption b{
        font-size: 14px;
        font-weight: 700;
}
#poptrack .journey .timeline{
        border: 1px solid #ffdcb1;
        background: #fffbf5;
        border-radius: 10px;
        padding: 20px 0 0;
}
#poptrack .journey .scrollbar-inner{
        padding: 20px 20px 0 10px;
        height: 320px;
        margin-bottom: 20px;
}
#poptrack .journey ul{
        display: block;
}
#poptrack .journey li{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        font-size: 12px;
        line-height: 150%;
        color: #9f9f9f;
}
#poptrack .journey li:first-child{
        color: #4b4b4b;
}
#poptrack .journey li b{
        flex: 25%;
        max-width: 25%;
        text-align: right;
}
#poptrack .journey li strong{
        flex: 75%;
        max-width: 75%;
        position: relative;
        display: block;
        padding-left: 50px;
        font-weight: 600;
        line-height: 150%;
        padding-bottom: 20px;
        min-height: 100px;
}
#poptrack .journey li strong:before{
        width: 13px;
        height: 13px;
        border: 1px solid #9f9f9f;
        box-shadow:inset 0px 0 0 1px #fff;
        background: #9f9f9f;
        content: '';
        border-radius: 50%;
        margin: 0 16px;
        position: absolute;
        top: 2px;
        left: 4px;
}
#poptrack .journey li:first-child strong:before{
        border: 1px solid #4b4b4b;
        background: #4b4b4b;
}
#poptrack .journey li:last-child strong{
        min-height: 80px;
}
#poptrack .journey li strong:after{
        display: block;
        position: absolute;
        left: 26px;
        bottom: 9px;
        background: #9f9f9f;
        width: 1px;
        height: calc(100% - 35px);
        content: '';
}
#poptrack .journey li:last-child strong:after{
        display: none;
}
#poptrack .journey li:last-child strong{
        padding-bottom: 0;
}
.acc-order-detail{
        padding-top: 50px;
}
.acc-order-detail .navorder{
        margin-bottom: 35px;
}
.acc-order-detail .navorder .crumb{
        float: left;
}
.acc-order-detail .navorder .crumb > *{
        display: inline-block;
        vertical-align: middle;
}
.acc-order-detail .navorder .crumb a{
        color: #be8687;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 3.6px;
        text-transform: uppercase;
}
.acc-order-detail .navorder .crumb span{
        color: #be8687;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2.4px;
        text-transform: uppercase;
}
.acc-order-detail .navorder .crumb i{
        color: #be8687;
        font-size: 30px;
        margin: 0 15px;
        position: relative;
        top: -1px;
}
.acc-order-detail .navorder .bck{
        float: right;
        color: #9d9d9d;
        font-size: 14px;
        font-family: 'Josefin Sans';
        font-weight: 400;
        margin-right: 30px;
}
.acc-order-detail .navorder .bck:before{
        width: 16px;
        height: 12px;
        background-image: url(../img/icon/panah-left.png);
        position: relative;
        top: -1px;
        margin-right: 8px;
        left: 0;
        transition:left 0.2s ease-in;
}
.acc-order-detail .navorder .bck:hover:before{
        left: -5px;
}
.acc-order-detail .rowflex{
        justify-content: space-between;
}
.acc-order-detail .info{
        max-width: 57%;
        flex: 57%;
}
.acc-order-detail .util{
        margin-bottom: 30px;
}
.acc-order-detail .util table{
        width: 100%;
        max-width: 600px;
}
.acc-order-detail .util table tbody{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.acc-order-detail .util table tr{
        flex: 43%;
        max-width: 43%;
}
.acc-order-detail .util table tr:first-child{
        max-width: 32%;
        max-width: 32%;
}
.acc-order-detail .util table tr:last-child{
        max-width: 25%;
        flex: 25%;
}
.acc-order-detail .util table td:first-child{
        color: #9d9d9d;
        font-family: 'Josefin Sans';
        padding-bottom: 10px;
        width: 100%;
        display: block;
}
.acc-order-detail .util table td{
        color: #35405a;
        font-family: 'Raleway';
        font-weight: 600;
}
.acc-order-detail .plist{
        margin-bottom: 40px;
}
.acc-order-detail .plist h2{
        font-family: 'Josefin Sans';
        margin-bottom: 15px;
        line-height: 120%;
        color: #9d9d9d;
}
.acc-order-detail .plist .owrap{
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #9f9f9f;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
}
.acc-order-detail .plist .owrap .oprod{
        flex: 75%;
        max-width: 75%;
}
.acc-order-detail .plist .owrap .oprod .item{
        margin-top: 25px;
}
.acc-order-detail .plist .owrap .oprod .item:first-child{
        margin: 0;
}
.acc-order-detail .plist .owrap .oprod .item h3{
        max-width: 220px;
        font-size: 14px;
        line-height: 160%;
        font-family: 'Raleway';
}
.acc-order-detail .plist .owrap .oprod  .subtotal{
        width: 20%;
        padding: 0;
        text-align: right;
        font-weight: 600;
}
.acc-order-detail .plist .owrap .ototal{
        flex:17%;
        max-width: 17%;
        font-weight: 600;
        letter-spacing: 1.4px;
}
.acc-order-detail .plist .owrap .ototal b{
        display: block;
        color: #774713;
        font-size: 16px;
        letter-spacing: 0;
        padding-top: 8px;
}
.acc-order-detail .package{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        align-items: center;
}
.acc-order-detail .package .stat{
        flex: 55%;
}
.acc-order-detail .package .stat > *{
        display: inline-block;
        vertical-align: middle;
}
.acc-order-detail .package .stat strong{
        color: #be8687;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        margin-right: 30px;
}
.acc-order-detail .package .stat span{
        font-weight: 600;
}
.acc-order-detail .package .stat a{
        margin: 0;
}
.acc-order-detail .package .act{
        flex: 43%;
        text-align: right;
}
.acc-order-detail .package .act .button{
        height: 36px;
        line-height: 36px;
        font-weight: 600;
        font-size: 14px;
        min-width: 145px;
}
.acc-order-detail .package .act .button:first-child{
        margin-right: 5px;
}
.acc-order-detail .summary{
        max-width: 35%;
        flex: 35%;
}
.acc-order-detail .tbl-holder{
        margin-top: 30px;
}
.acc-order-detail .tbl-holder:first-child{
        margin: 0;
}
.acc-order-detail .tbl-holder h3{
        color: #be8687;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        margin-bottom: 15px;
}
.acc-order-detail .tbl-holder table{
        width: 100%;
}
.acc-order-detail .tbl-holder td{
        color: #9d9d9d;
        font-family: 'Josefin Sans';
        padding-bottom: 7px;
}
.acc-order-detail .tbl-holder.payment-detail td,
.acc-order-detail .tbl-holder td b{
        font-family: 'Raleway';
        font-weight: 600;
        color: #232729;
        line-height: 170%;
}
.acc-order-detail .tbl-holder.payment-detail td:last-child{
        text-align: right;
}
.acc-order-detail .tbl-holder.payment-detail td{
        padding-top: 10px;
}
.acc-order-detail .tbl-holder.payment-detail tr:first-child td{
        padding: 0;
}
.acc-order-detail .tbl-holder.payment-detail tr:last-child td b{
        font-weight: 700;
}
/** INNER PRODUCT **/
.inner-product {
        padding: 60px 0 100px;
}
.inner-product.fetching{
        position: relative;
}
.inner-product.fetching:after{
        display: block;
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: rgba(255,255,255,.7);
        content: '';
}
.inner-product .rowflex{
        justify-content: space-between;
}
.inner-product .rowflex .proside{
        max-width: 23.5%;
        flex: 23.5%;
}
.inner-product .proside .item{
        margin-top: 40px;
        padding-top: 40px;
        border-top: 2px solid rgba(255,213,203,.25);
}
.inner-product .proside .item .scrollbar-inner{
        max-height: 326px !important;
}
.inner-product .proside:not(.first-has-border) .item:first-child{
        margin: 0;
        padding: 0;
        border: 0;
}
.inner-product .proside.first-has-border .item:first-child{
        margin: 0;
}
.inner-product .proside .item h3{
        font-family: 'Josefin Sans';
        font-size: 24px;
        font-weight: 600;
        line-height: 120%;
        text-transform: uppercase;
        margin:0 0 20px;
}
.inner-product .proside li{
        display: block;
        margin-top: 18px;
}
.inner-product .proside li.hidden{
        display: none;
}
.inner-product .proside li:first-child{
        margin: 0;
}
.inner-product .proside li a,
.inner-product .proside li label{
        display: block;
        cursor: pointer;
        letter-spacing: 1.4px;
        font-weight: 600;
        position: relative;
}
.popmfilter .fbody li a,
.inner-product .proside li a{
        color: #4b4b4b;
        transition:color 0.2s ease-in;
        position: relative;
        display: block;
        padding-left: 17px;
}
.popmfilter .fbody li a:before,
.inner-product .proside li a:before{
        position: absolute;
        left: 0;
        top: 4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        content: '';
        background: #d37073;
}
.popmfilter .fbody li a:hover,
.popmfilter .fbody li.current-menu-item a,
.inner-product .proside li.current-menu-item a,
.inner-product .proside li a:hover{
        color: #d37073;
}
.inner-product .proside li label:after{
        display: block;
        height: 0;
        width: 100%;
        content: '';
        clear: both;
        float: none;
}
.checky label{
        cursor: pointer;
}
.checky input,
.inner-product .proside li label input{
        display: none;
}
.checky label span:before,
.inner-product .proside li label span:before{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        width: 14px;
        height: 14px;
        border: 1px solid #d18d38;
        border-radius: 2px;
        box-shadow: inset 0px 0 0 3px #fff;
        content: '';
        margin: 0 20px 0 0;
        top: -2px;
}
.checky label input:checked + span:before,
.inner-product .proside li label input:checked + span:before{
        background: #d18d38;
}
.checky label span:before{
        margin-right: 10px;
}
.inner-product .proside li label .rate{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -3px;
        left: -5px;
}
.inner-product .proside li label b{
        float: right;
}
.inner-product .proside .brand-filter{
        position: relative;
        margin-bottom: 25px;
}
.inner-product .proside .brand-filter:after{
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
}
.inner-product .rowflex .promain{
        max-width: 69%;
        flex: 69%;
}
.inner-product .promain .product-util{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        position: relative;
        z-index: 3;
}
.inner-product .promain .product-util > *{
        flex: 1;
        margin-left: 12px;
}
.inner-product .promain .product-util > *:first-child{
        margin: 0;
}
.inner-product .promain .product-util > *:last-child{
        flex: 1.7;
}
.product-util .filter label{
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        width: 45%;
        text-align: center;
}
.product-util .filter label:first-child{
        margin-right: 11px;
}
.inner-product .promain .product-util .dropselect .scrollbar-inner.scroll-content{
        max-height: 240px !important;
}
.popmfilter ul li input,
.product-util .filter label input{
        display: none;
}
.popmfilter ul li span,
.dropselect.greyed strong,
.product-util .filter label span{
        background: #f9f9f9;
        border: 1px solid #ececec;
        display: block;
        height: 35px;
        line-height: 37px;
        color: #9f9f9f;
        font-family: 'Josefin Sans';
        font-weight: 600;
        border-radius: 17px;
        font-size: 16px;
}
.popmfilter ul li input:checked + span,
.product-util .filter label input:checked + span{
        border-color: #e0a459;
        background: #fdf0dd;
        color: #e0a459;
}
.dropselect.greyed strong:after{
        color: #9f9f9f;
        top: -1px;
}
/** DETAIL PRODUCT **/
.detail-product{
        padding: 60px 0 80px;
}
#poprod .the-product,
.detail-product .the-product{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 60px;
}
.the-product .gallery{
        max-width: 35%;
        flex: 35%;
}
.the-product .gallery .big{
        margin-bottom: 20px;
}
.the-product .gallery img{
        width: 100%;
}
.the-product .gallery .thumb{
        max-width: 70%;
        margin: 0 auto;
        position: relative;
}
.the-product .gallery .thumb .item{
        padding: 0 3px;
}
.the-product .gallery .thumb .item img{
        border: 1px solid #dedede;
}
.the-product .gallery .thumb .slidenav a{
        position: absolute;
        display: block;
        height: 100%;
        z-index: 2;
        top: 0;
}
.the-product .gallery .thumb .slidenav {
        display: none !important;
}
.the-product .gallery .thumb .slidenav a.prev{
        left: -20px;
        text-align: left;
}
.the-product .gallery .thumb .slidenav a.next{
        right: 0;
        text-align: right;
}
.the-product .gallery .thumb .slidenav a i{
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #282b2d;
        font-size: 22px;
        display: block;
        width: 100%;
        text-align: center;
        padding: 0;
        line-height: 100%;
}
.the-product .main{
        max-width: 59%;
        flex: 59%;
}
.the-product .main h1{
        position: relative;
        font-family: 'Josefin Sans';
        font-weight: 700;
        font-size: 32px;
        line-height: 120%;
        margin: 0 0 20px;
        padding-right: 30%;
}
.the-product .main h1 .add-to-wish{
        position: absolute;
        right: 0;
        top: 10px;
}
.the-product .main .add-to-wish{
        width: 40px;
        height: 40px;
        background-image: url('${heartCircleHollow}');
        display: inline-block;
}
.the-product .main .add-to-wish.wished{
        background-image: url('${heartCircleFill}');
}
.the-product .main .meta{
        margin-bottom: 25px;
}
.the-product .main .meta > *{
        display: inline-block;
        vertical-align: middle;
        position: relative;
}
.the-product .main .meta .cat{
        margin-right: 21px;
        padding-right: 21px;
        border-right: 2px solid #c7c7c7;
        line-height: 100%;
}
.the-product .main .meta .cat a{
        color: #4b4b4b;
        transition:color 0.2s ease-in;
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        display: inline-block;
        margin-left: 5px;
}
.the-product .main .meta .cat a:first-child{
        margin-left: 0;
}
.the-product .main .meta .cat a:hover{
        color: #d37073;
}
.the-product .main .meta .prorate{
        top: -1px;
        margin-right: 15px;
}
.the-product .main .meta strong a{
        color: #707070;
        font-size: 12px;
}
.the-product .main .meta strong a:hover{
        text-decoration: underline;
}
.the-product .main .nominal{
        margin-bottom: 35px;
}
.the-product .main .nominal .disc{
        position: relative;
        left: auto;
        top: auto;
        vertical-align: middle;
}
.the-product .main .nominal .disc + .pricing{
        margin-left: 15px;
}
.the-product .main .nominal .pricing{
        display: inline-block;
        vertical-align: middle;
}
.the-product .main .tab-basic{
        margin-bottom: 45px;
}
.the-product .action > *{
        display: inline-block;
        vertical-align: middle;
        margin-left: 25px;
}
.the-product .action .quantity.hidden + .button,
.the-product .action > *:first-child{
        margin: 0;
}
.the-product .action .button{
        height: 44px;
        line-height: 44px;
        min-width: 160px;
        border-radius: 22px;
        font-size: 16px;
        font-weight: 600;
}
#poprod .action .btn-atc,
.the-product .action .btn-atc{
        color: #d18d38;
        font-size: 16px;
        font-weight: 600;
        margin-left: 30px;
}
#poprod .action .btn-atc:before,
.the-product .action .btn-atc:before{
        width: 40px;
        height: 40px;
        background-image: url('${cartBrown}');
        display: inline-block;
        position: relative;
        margin-right: 2px;
        top: -5px;
}
.detail-product .score{
        margin: 0 0 60px;
}
.detail-product .score .rowflex{
        justify-content: space-between;
}
.detail-product .score .rating{
        max-width: 18%;
        flex: 18%;
}
.detail-product .score .rating .bar{
        margin-top: 6px;
}
.detail-product .score .rating .bar:first-child{
        margin: 0;
}
.detail-product .score .write{
        max-width: 78.5%;
        flex: 78.5%;
}
.detail-product .score h2{
        font-family: 'Josefin Sans';
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 13px;
        text-transform: uppercase;
}
.detail-product .score h2 span{
        display: inline-block;
        padding-bottom: 7px;
        border-bottom: 2px solid rgba(255,233,147,.25);
        padding-right: 10px;
}
.detail-product .score .rating .bar > *{
        display: inline-block;
        vertical-align: middle;
}
.detail-product .score .rating .bar .rate{
        position: relative;
        top: -1px;
}
.detail-product .score .rating .bar .sb{
        width: calc(100% - 120px);
        margin: 0 8px 0 12px;
        position: relative;
        height: 10px;
        border: 1px solid #e0a459;
        border-radius: 5px;
        top: 1px;
}
.detail-product .score .rating .bar .sb span{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: 5px;
        background: #e0a459;
}
.detail-product .score .rating .bar .sp{
        text-align: right;
        width: 20px;
}
.detail-product .score .rating .bar .sp b{
        font-family: 'Josefin Sans';
        font-size: 12px;
        font-weight: 600;
}
.detail-product .score textarea{
        padding: 12px 19px;
        min-height: 110px;
        font-size: 12px;
}
.detail-product .score .left{
        float: left;
}
.detail-product .score .form-rate > *,
.detail-product .score .left > *{
        display: inline-block;
        vertical-align: middle;
        margin-left: 17px;
}
.detail-product .score .form-rate > *:first-child,
.detail-product .score .left > *:first-child{
        margin: 0;
}
.detail-product .score .dropselect.greyed strong{
        border-radius: 10px;
        width: 155px;
}
.detail-product .score .dummy-upload{
        width: 155px;
        position: relative;
}
.detail-product .score .dummy-upload input{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0;
}
.detail-product .score .dummy-upload span{
        display: block;
        border: 1px solid #ececec;
        background: #f9f9f9;
        color: #9f9f9f;
        font-size: 16px;
        font-family: 'Josefin Sans';
        height: 35px;
        line-height: 37px;
        border-radius: 10px;
        padding: 0 15px;
}
.detail-product .score .dummy-upload span:before{
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
        position: relative;
        width: 15px;
        height: 20px;
        background-image: url(../img/icon/pict.png);
        top: -3px;
}
.detail-product .score .form-rate b{
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        position: relative;
        top: 1px;
}
.detail-product .score .form-rate .rate-field{
        position: relative;
        top: 1px;
}
.detail-product .score .right{
        float: right;
}
.detail-product .score .right .button{
        height: 35px;
        line-height: 35px;
}
.detail-product .score .uploaded-img{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -7px;
}
.detail-product .score .uploaded-img > *{
        max-width: calc(20% - 14px);
        flex : calc(20% - 14px);
        margin: 15px 7px 10px;
        position: relative;
        padding: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
}
.detail-product .score .uploaded-img img{
        border-radius: 5px;
        width: 100%;
        vertical-align: top;
}
.detail-product .score .uploaded-img a{
        display: block;
        position: absolute;
        top: -8px;
        right: -8px;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${closeBoldWhite}');
        border-radius: 50%;
        background-color: #d18d38;
        box-shadow: 0px 0 2px rgba(30, 30, 30, .3);
}
.detail-product .review{
        margin-bottom: 45px;
}
.detail-product .review .revnav{
        border-bottom: 1px solid #d0d0d0;
        margin-bottom: 34px;
}
.detail-product .review .revnav a{
        display: inline-block;
        vertical-align: middle;
        padding: 0 45px 12px;
        position: relative;
        color: #d3d3d3;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
        font-family: 'Josefin Sans';
        transition:color 0.2s ease-in;
}
.detail-product .review .revnav a:after{
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        content: '';
        width: 100%;
        height: 3px;
        background: #be8687;
        border-radius: 2px;
        display: none;
}
.detail-product .review .revnav a:hover,
.detail-product .review .revnav a.active{
        color: #be8687;
}
.detail-product .review .revnav a.active:after{
        display: block;
}
.detail-product .review .item{
        border: 1px solid #e4e8ed;
        border-radius: 10px;
        padding: 25px 21px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.detail-product .review .item:first-child{
        margin: 0;
}
.detail-product .review .item figure{
        flex: 53px;
        max-width: 53px;
}
.detail-product .review .item figure img{
        border-radius: 50%;
}
.detail-product .review .item .info{
        flex: 130px;
        max-width: 130px;
}
.detail-product .review .item h3{
        color: #be8687;
        font-size: 18px;
        line-height: 120%;
        margin: 0 0 5px;
        font-family: 'Josefin Sans';
}
.detail-product .review .item strong{
        display: block;
        line-height: 100%;
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 7px;
}
.detail-product .review .item small{
        display: block;
        color: #000;
        font-size: 12px;
        line-height: 100%;
        margin: 10px 0 0;
}
.detail-product .review .item .caption{
        flex : calc(100% - 230px );
        max-width:  calc(100% - 230px );
}
.detail-product .review .item .format-text + *{
        margin-top: 25px;
}
.detail-product .related .product-list{
        margin: 0 -25px;
}
.detail-product .related .product-list .product-item{
        flex: calc(20% - 50px);
        max-width: calc(20% - 50px);
        margin: 0 25px;
}
#poprod{
        max-width: 900px;
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 3px 66px 0 rgba(0, 0, 0, 0.14);
        padding: 40px 30px 20px;
}
#popsearch .fancybox-close-small,
#popvouch .fancybox-close-small ,
#poprod .fancybox-close-small {
        width: 19px;
        height: 19px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${close}');
        opacity: 1;
        right: 20px;
        top: 20px;
}
#poprod .the-product{
        align-items: center;
        margin-bottom: 28px;
}
#popsearch .fancybox-close-small svg,
#popvouch .fancybox-close-small svg,
#poprod .fancybox-close-small svg{
        display: none;
}
#poprod .the-product .main h1{
        padding-right: 20%;
}
#poprod .the-product .util{
        margin-top: 80px;
}
#poprod .the-product .util > *{
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;
}
#poprod .the-product .util > *:first-child{
        margin: 0;
}
#poprod .the-product .util > strong{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1.6px;
}
#poprod .the-product .gallery{
        max-width: 30%;
        flex: 30%;
        height: auto;
        overflow: auto;
}
#poprod .the-product .main{
        max-width: 65%;
        flex: 65%;
}
#poprod .action{
        padding-top: 23px;
        border-top: 1px solid #bebebe;
}
#poprod .action .left{
        float: left;
}
#poprod .action .left a{
        text-decoration: underline;
        display: inline-block;
        position: relative;
        font-size: 16px;
        color: #000;
        font-weight: 600;
        top: 9px;
}
#poprod .action .right{
        float: right;
}
#poprod .action .right > *{
        display: inline-block;
        vertical-align: middle;
}
#poprod .action .btn-atc{
        margin-right: 30px;
        position: relative;
        top:2px;
}
#poprod .action .button{
        width: 155px;
        font-weight: 600;
}
#poprod .the-product .main .add-to-wish{
        width: 48px;
        height: 48px;
}
/** INNER CART **/
.inner-cart{
        padding: 60px 0 100px;
}
.inner-cart .rowflex{
        justify-content: space-between;
}
.inner-cart .basket{
        max-width: 68%;
        flex: 68%;
}
.inner-cart .basket .item{
        margin-top: 16px;
        padding: 16px 22px;
        border: 1px solid #e4e8ed;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
}
.inner-cart .basket .item:first-child{
        margin: 0;
}
.inner-cart .basket .item .rmv{
        flex: 35px;
        max-width: 35px;
}
.inner-cart .basket .item .rmv a{
        display: block;
        width: 35px;
        height:35px;
        background-image: url(../img/icon/bin.png);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 50%;
}
.inner-cart .basket .item .modif{
        flex: 140px;
        max-width: 140px;
        text-align: center;
}
.inner-cart .basket .item .modif strong{
        font-weight: 700;
        font-size: 18px;
        font-family: 'Josefin Sans';
        display: block;
        margin: 0 0 15px;
}
.inner-cart .basket .item .info{
        max-width: calc(100% - 220px);
        flex: calc(100% - 220px);
}
.inner-cart .basket .item .info > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-cart .basket .item .info figure{
        width: 90px;
}
.inner-cart .basket .item .info .caption{
        width: calc(100% - 100px);
        padding-left: 20px;
}
.inner-cart .basket .item h3{
        max-width: 220px;
}
.inner-cart .action{
        max-width: 29%;
        flex: 29%;
}
.inner-cart .action figure{
        display: block;
        margin-bottom: 35px;
}
.inner-cart .action h2{
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        font-family: 'Josefin Sans';
        line-height: 120%;
        margin-bottom: 15px;
        padding-left: 6px;
}
.inner-cart .action table{
        width: 100%;
        margin-bottom: 35px;
}
.inner-cart .action table td{
        padding: 0 6px 18px;
        font-size: 16px;
        font-weight: 600;
        font-size: 16px;
        font-family: 'Josefin Sans';
}
.inner-cart .action table td:last-child{
        text-align: right;
}
.inner-cart .action table tr:last-child td{
        font-weight: 700;
        background: #ffedd0;
        padding: 10px 6px 8px;
}
.inner-cart .action .button{
        display: block;
        margin: 0 auto;
        max-width: calc(100% - 28px);
}
/** INNER GIFT **/
.inner-gift{
        padding: 60px 0 80px;
}
.inner-gift .big-title{
        text-align: center;
        margin: 0 0 55px;
}
.inner-gift .product-list{
        max-width: 650px;
        margin: 0 auto;
}
.inner-gift .product-list .product-item{
        max-width: calc(33.33333333333% - 32px);
        flex: calc(33.33333333333% - 32px);
        margin: 0 16px 32px;
}
/** INNER THANK **/
.inner-thank{
        padding: 30px 0;
        background: #fffdfa;
}
.inner-thank .layer{
        max-width: 530px;
        margin: 0 auto;
        background: #fff;
        border-radius: 10px;
        text-align: center;
        padding: 35px 65px 25px;
}
.inner-thank .layer figure{
        display: block;
        margin: 0 0 20px;
}
.inner-thank .layer .payment figure{
        margin: 0;
}
.inner-thank .layer figure figcaption{
        display: block;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Josefin Sans';
        padding: 23px 0 0;
}
.inner-thank .layer .expired{
        margin-bottom: 23px;
}
.inner-thank .layer .expired p{
        margin: 0 0 15px;
}
.inner-thank .layer .timer{
        display: inline-block;
        padding: 10px 23px 2px;
        border: 1px solid #fdf0dd;
        border-radius: 10px;
        font-size: 39px;
        font-weight: 700;
        font-family: 'Josefin Sans';
        margin: 0 0 20px;
}
.inner-thank .layer .expired strong{
        font-family: 'Josefin Sans';
        font-size: 16px;
        font-weight: 600;
        color: #232729;
}
.inner-thank .layer .payment{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border: 1px solid #fdf0dd;
        border-radius: 10px;
        margin: 0 0 35px;
        padding: 15px 15px 7px;
}
.inner-thank .layer .payment > *{
        flex: 32%;
        max-width: 32%;
        text-align: center;
}
.inner-thank .layer .payment h3{
        color: #000;
        font-size: 12px;
        line-height: 100%;
        margin: 0 0 13px;
}
.inner-thank .layer .payment b{
        color: #232729;
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin: 0 0 7px;
        line-height: 100%;
        word-wrap: break-word;
}
.inner-thank .layer .payment a{
        color: #000;
        font-size: 12px;
        text-decoration: underline;
}
.inner-thank .action .button{
        margin: 0 6px;
        font-weight: 600;
}
.popmsort,
.popmfilter,
.popcart{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(255,255,255,.7);
        overflow: hidden;
        display: block;
}
.popcart .list{
        padding-right: 15px;
}
.popmsort .xholder,
.popmfilter .xholder,
.popcart .holder{
        position: absolute;
        right: -150px;
        top: 0;
        width: 395px;
        height: 100%;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background: #fff;
        opacity: 0;
        transition:all 0.2s ease-in;
        padding: 30px 15px 27px 24px;

        right: 0;
        opacity: 1;
        transition:all 0s ease-in;
}
.edit-address.profile-layer.form-inner.fetching,
.detail-product .review.fetching,
.acc-person .list.fetching,
.acc-order.profile-layer.fetching,
.inner-checkout .info .addr .form-inner.fetching,
#filter-product-mobile.fetching{
        position: relative;
}
.edit-address.profile-layer.form-inner.fetching:after,
.detail-product .review.fetching:after,
.acc-person .list.fetching:after,
.acc-order.profile-layer.fetching:after,
.inner-checkout .info .addr .form-inner.fetching:after,
.popmsort.showing .xholder.fetching:after,
#filter-product-mobile.fetching:after,
.popcart .holder.fetching:after{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(255,255,255,.7);
        content: '';
}
.popmsort .xholder,
.popmfilter .xholder{
        width: 330px;
        overflow-y: scroll;
        padding: 30px 17px;
}
.popmsort.showing .xholder,
.popmfilter.showing .xholder,
.popcart.showing .holder{
        right: 0;
        opacity: 1;
}
.popmsort .fhead,
.popmfilter .fhead,
.popcart .holder .chead{
        padding-bottom: 27px;
        border-bottom: 1px solid rgba(255,213,203,.25);
}
.popmsort .fhead a,
.popmfilter .fhead a,
.popcart .holder .chead a{
        color: #d18d38;
        font-size: 20px;
        font-weight: 700;
        display: block;
        position: relative;
        line-height: 100%;
        letter-spacing: 1px;
}
.popmsort .fhead a,
.popmfilter .fhead a{
        font-size: 16px;
}
.popmsort .fhead a b,
.popmfilter .fhead a b,
.popcart .holder .chead a b{
        position: absolute;
        width: 9px;
        height: 14px;
        background-image: url('${angleLeft}');
        right: 0;
        top: 3px;
        transition:right 0.2s ease-in;
}
.popcart .holder .chead a:hover b{
        right: 5px;
}
.popcart .holder .cbody{
        padding: 24px 0 13px;
        margin-right: -15px;
}
.popcart .holder .item{
        margin-bottom: 24px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255,213,203,.25);
}
.popcart .holder .item:last-child{
        margin-bottom: 5px;
}
.popcart .holder .item figure{
        width: 70px;
        display: inline-block;
        vertical-align: middle;
}
.popcart .holder .item .caption{
        width: calc(100% - 70px);
        padding-left: 20px;
        display: inline-block;
        vertical-align: middle;
        padding-right: 40px;
        position: relative;
}
.popcart .holder .item .caption .rmv{
        position: absolute;
        right: 0;
        top: 0;
        background-image: url('${closeSmall}');
        width: 8px;
        height: 8px;
}
.popcart .holder .item .util > *{
        display: inline-block;
        vertical-align: middle;
}
.popcart .holder .item .util strong{
        font-size: 16px;
        font-weight: 600;
}
.popcart .holder .item .util .calc + strong{
        margin-left: 13px;
}
.popcart .holder .item h3{
        font-size: 14px;
        margin-bottom: 8px;
        line-height: 130%;
}
.popcart .subtotal{
        background: #ffedd0;
        padding: 11px 10px 7px 6px;
        margin-bottom: 50px;
}
.popcart .cfoot .btn-gift,
.popcart .subtotal b{
        float: right;
        font-weight: 600;
        font-size: 16px;
        font-family: 'Josefin Sans';
}
.popcart .subtotal b:first-child{
        float: left;
}
.popcart .cfoot{
        text-align: center;
}
.popcart .cfoot .btn-white{
        margin-bottom: 15px;
        border: 1px solid #fdf0dd;
}
.popcart .cfoot .btn-gift{
        display: block;
        color: #533104;
        float: none;
        margin-bottom: 20px;
}
.popcart .cfoot .button{
        font-size: 18px;
        height: 46px;
        line-height: 46px;
        border-radius: 23px;
}
.popcart .scrollbar-inner{
        height: calc(100vh - 360px);
        padding-right: 15px;
}
.popcart .scrollbar-inner > .scroll-element.scroll-y{
        right: 3px;
}
/** INNER CHECKOUT **/
.inner-checkout{
        padding: 70px 0 120px;
}
.inner-checkout .big-title{
        margin-bottom: 55px;
}
.inner-checkout .prompt-login{
        font-family: 'Josefin Sans';
        font-size: 19px;
        letter-spacing: 2.4px;
        margin-bottom: 24px;
        line-height: 100%;
}
.inner-checkout .prompt-login a{
        color: #4b4b4b;
        font-weight: 700;
}
.inner-checkout .prompt-login a:hover{
        text-decoration: underline;
}
.inner-checkout .mainrow{
        justify-content: space-between;
}
.inner-checkout .info{
        max-width: 68%;
        flex: 68%;
}
.inner-checkout .info .addr{
        padding: 30px 30px 30px 40px;
        border: 1px solid #e4e8ed;
        border-radius: 10px;
}
.inner-checkout .info .addr h2{
        font-family: 'Josefin Sans';
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 120%;
}
.inner-checkout .info .addr .dropselect strong{
        height: 47px;
        line-height: 47px;
}
.inner-checkout .form-basic textarea{
        min-height: 115px;
}
.inner-checkout .action{
        max-width: 29%;
        flex: 29%;
}
.inner-checkout .action .item{
        margin-top: 40px;
}
.inner-checkout .action .item:first-child{
        margin: 0;
}
.inner-checkout .action h3{
        font-family: 'Josefin Sans';
        font-size: 20px;
        text-transform: uppercase;
        line-height: 120%;
        margin-bottom: 12px;
        font-weight: 700;
        text-transform: uppercase;
}
.inner-checkout .action .cprod h3{
        margin-bottom: 20px;
}
.inner-checkout .action table{
        width: 100%;
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
}
.inner-checkout .action .cprod td{
        width: 35%;
        padding: 0 0 15px;
}
.inner-checkout .action .cprod td:nth-child(2):not(:last-child){
        width: 10%;
        text-align: center;
        color: #d37072;
}
.inner-checkout .action .cprod td:first-child{
        width: 50%;
}
.inner-checkout .action .cprod td:last-child{
        text-align: right;
}
.inner-checkout .action .cprod tfoot td{
        padding: 11px 5px 8px;
        background: #ffedd0;
}
.inner-checkout .action .dropselect strong{
        height: 58px;
        line-height: 58px;
        color: #232729;
        font-family: 'Josefin Sans';
        font-size: 16px;
        padding: 0 18px;
}
.inner-checkout .action .cship .clearfix{
        padding: 11px 5px 8px;
        background: #ffedd0;
        display: block;
        margin-top: 16px;
}
.inner-checkout .action .cship .clearfix b{
        float: right;
        font-size: 16px;
        font-family: 'Josefin Sans';
        font-weight: 600;
}
.inner-checkout .action .cship .clearfix b:first-child{
        float: left;
}
.cvoucher input{
        border-color: #ececec;
        height: 35px;
        padding: 0 10px;
        font-size: 12px;
        font-family: 'Josefin Sans';
        font-weight: 600;
        border-radius: 10px;
        width: calc(100% - 80px);
        float: left;
}
.cvoucher .button{
        height: 35px;
        line-height: 36px;
        padding: 0;
        width: 70px;
        text-align: center;
        font-family: 'Josefin Sans';
        font-weight: 600;
        font-size: 16px;
        float: right;
}
.cvoucher p{
        font-family: 'Josefin Sans';
        font-size: 12px;
        position: relative;
        top: -3px;
        margin: 0 0 10px;
}
.inner-checkout .action .item.csummary{
        margin: 15px 0 60px;
}
.csummary table{
        width: 100%;
}
.csummary table td{
        padding-bottom: 13px;
        color: #4b4b4b;
        font-weight: 600;
        font-family: 'Josefin Sans';
}
.csummary table td:last-child{
        text-align: right;
}
.csummary table tr:last-child td{
        font-weight: 700;
}
.csummary table td em{
        display: block;
        background: #ffdbae;
        padding: 11px 13px 8px;
}
.csummary table tr:first-child td em{
        background: #ffedd0;
}
.csummary table tr:first-child + tr td em{
        background: #ffe2be;
}
/** POPUP VOUCHER **/
#popvouch{
        padding: 0;
        max-width: 965px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
#popvouch .rowflex{
        justify-content: space-between;
}
#popvouch .caption{
        max-width: 66%;
        flex: 66%;
        padding: 35px;
}
#popvouch  h2{
        color: #d18d38;
        font-size: 24px;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 1.2px;
        margin: 0 0 25px;
}
#popvouch .caption .txt{
        color: #000;
        font-size: 14px;
        line-height: 150%;
}
#popvouch .caption .txt > *{
        margin-top: 20px;
}
#popvouch .caption .txt > h6 + *,
#popvouch .caption .txt > h5 + *,
#popvouch .caption .txt > h4 + *,
#popvouch .caption .txt > h3 + *,
#popvouch .caption .txt > h2 + *,
#popvouch .caption .txt > h1 + *{
        margin-top: 3px;
}
#popvouch .caption .txt  h6,
#popvouch .caption .txt  h5,
#popvouch .caption .txt  h4,
#popvouch .caption .txt  h3,
#popvouch .caption .txt  h2,
#popvouch .caption .txt  h1{
        font-weight: 600;
        font-family: 'Josefin Sans';
}
#popvouch .caption .txt  h6{
        font-size: 10px;
}
#popvouch .caption .txt  h5{
        font-size: 12px;
}
#popvouch .caption .txt  h4{
        font-size: 14px;
}
#popvouch .caption .txt  h3{
        font-size: 16px;
}
#popvouch .caption .txt  h2{
        font-size: 24px;
}
#popvouch .caption .txt  h1{
        font-size: 30px;
}
#popvouch .caption .txt > *:first-child{
        margin: 0 !important;
}
#popvouch .caption .txt  li{
        display: block;
        margin-top: 3px;
        line-height: 160%;
        padding-left: 22px;
        position: relative;
}
#popvouch .caption .txt  li:first-child{
        margin-top: 0;
}
#popvouch .caption .txt  li:before{
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        width: 11px;
        height: 11px;
        border: 1px solid #9f9f9f;
        background: #9f9f9f;
        box-shadow: inset 0px 0 0 1px #fff;
        content: '';
        border-radius: 50%;
}
#popvouch .info{
        max-width: 33.5%;
        flex: 33.5%;
        background: #fffbf5;
        padding: 70px 25px 35px;
        text-align: center;
}
#popvouch .info h3{
        font-weight: 600;
        font-family: 'Josefin Sans';
        font-size: 16px;
        margin: 0 0 15px;
}
#popvouch .info .code{
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/voucher-bg.png);
        border-radius: 10px;
        overflow: hidden;
        padding: 20px 10px;
        margin-bottom: 50px;
}
#popvouch .info .code strong{
        color: #b26818;
        font-size: 35px;
        font-weight: 600;
        display: block;
        margin: 0 0 12px;
        line-height: 100%;
}
#popvouch .info .code a{
        display: inline-block;
        color: #d18d38;
        font-size: 12px;
        font-weight: 600;
        height: 23px;
        line-height: 23px;
        padding: 0 10px;
        border: 1px solid #d18d38;
        background: #fdf0dd;
        border-radius: 10px;
}
#popvouch .info .code a:before{
        width: 14px;
        height: 15px;
        background-image: url(../img/icon/copy.png);
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -1px;
        margin-right: 4px;
}
#popvouch .info .period strong{
        display: inline-block;
        font-family: 'Josefin Sans';
        font-size: 16px;
        font-weight: 600;
        line-height: 100%;
        position: relative;
}
#popvouch .info .period strong:before{
        left: -22px;
}
#popvouch .info .period b{
        display: block;
        color: #b26818;
        font-weight: 700;
        margin-top: 15px;
        line-height: 100%;
}
/** INNER HOME **/
.inner-home .slider{
        position: relative;
}
.inner-home .slider .slidenav{
        position: absolute;
        height: 0;
        width: 100%;
        position: absolute;
        left: 0;
        top: calc(50% - 20px);
        -ms-transform: translateY(calc(50% - 20px););
        -webkit-transform: translateY(calc(50% - 20px););
        transform: translateY(calc(50% - 20px););
}
.inner-home .slider .slidenav a{
        display: inline-block;
        width: 50px;
        height: 50px;
        position: relative;
}
.inner-home .slider a.prev{
        float: left;
        background-image: url('${arrowLeftCircle}');
}
.inner-home .slider a.next{
        float: right;
        background-image: url('${arrowRightCircle}');
}
.inner-home .hero{
        position: relative;
}
.inner-home .hero .animate-loading{
        position: absolute;
}
.inner-home .hero .slider a.prev{
        margin-left: 40px;
}
.inner-home .hero .slider a.next{
        margin-right: 40px;
}
.inner-home .hero .item{
        position: relative
}
.inner-home .hero .caption{
        position: absolute;
        left: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
}
.inner-home .hero .holder{
        width: 50%;
        float: right;
        text-align: left;
}
.inner-home .hero a{
        display: block;
        position: relative;
        color: #4b4b4b;
}
.inner-home .hero h2{
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 4.8px;
        text-transform: uppercase;
        line-height: 120%;
        margin-bottom: 10px;
}
.inner-home .hero p{
        font-size: 25px;
        line-height: 120%;
}
.inner-home .hero img{
        display: block;
        width: 100%;
}
.inner-home .hero .slider.unloaded{
        opacity: 0;
        height: 550px;
        overflow: hidden;
}
.inner-home .offer{
        padding-top: 80px;
        margin-bottom: 100px;
}
.inner-home .flash .rowflex,
.inner-home .offer .rowflex{
        justify-content: space-between;
        align-items: center;
}
.inner-home .offer .feat{
        max-width: 30%;
        flex: 30%;
        text-align: center;
}
.inner-home .offer .list{
        max-width: 60%;
        flex: 60%;
}
.inner-home .offer .slider{
        margin: 0 -16px;
}
.inner-home .offer .product-item{
        margin: 0 16px;
}
.inner-home .offer .slidenav a.prev{
        left: -60px;
}
.inner-home .offer .slidenav a.next{
        right: -50px;
}
.inner-home .sectitle{
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        color: #d18d38;
        font-size: 32px;
        line-height: 120%;
        letter-spacing: 4.8px;
        margin-bottom: 50px;
}
.inner-home .flash{
        background-repeat: no-repeat;
        background-position: left bottom;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/sale-bg.jpg);
        padding: 90px 0 110px;
}
.inner-home .flash .tema{
        max-width: 20%;
        flex: 20%;
}
.inner-home .flash .tema figure{
        position: relative;
        left: -50px;
        text-align: center;
}
.inner-home .flash .mtema figure figcaption,
.inner-home .flash .tema figure figcaption{
        color: #d18d38;
        font-size: 24px;
        font-weight: 700;
        line-height: 120%;
        display: block;
        text-align: center;
        margin-top: 30px;
}
.inner-home .flash .detail{
        max-width: 75%;
        flex: 75%;
}
.inner-home .flash .no-current .detail{
        max-width: 100%;
        flex: 100%;
}
.inner-home .flash .slider{
        margin: 0 -10px;
}
.inner-home .review .slick-track,
.inner-home .flash .slider .slick-track{
        display: flex;
}
.inner-home .review .item,
.inner-home .flash .slider .product-item{
        margin: 0 10px;
        background: #fff;
        float: none;
        flex: 1;
        height: auto;
        border-radius: 10px;
        overflow: hidden;
}
.inner-home .flash .slidenav a.prev{
        left: -70px;
}
.inner-home .flash .slidenav a.next{
        right: -60px;
}
.inner-home .flash  .product-item figure:after{
        background: rgba(254,191,80,.2);
}
.inner-home .flash .timing{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 35px;
}
.inner-home .flash .no-current .timing{
        margin-bottom: 0;
}
.inner-home .flash .timing > *{
        flex:39%;
        max-width: 39%;
}
.inner-home .flash .timing > .button{
        flex: 21%;
        max-width: 21%;
}
.inner-home .flash .countdown{
        background: #fff;
        border: 1px solid #dbba95;
        padding: 15px 20px;
        border-radius: 5px;
        text-align: center;
}
.inner-home .flash .no-current .timing > *,
.inner-home .flash .no-current .countdown{
        max-width: 100%;
        flex: 100%;
        text-align: center;
}
.inner-home .flash .no-current .countdown{
        max-width: 40%;
        margin: 0 auto 30px;
}
.inner-home .flash .countdown > *{
        display: inline-block;
        vertical-align: middle;
        font-weight: 700;
        font-size: 20px;
        line-height: 100%;
        margin-left: 13px;
}
.inner-home .flash .countdown strong{
        color: #d18d38;
        margin: 0 12px 0 0;
}
.inner-home .flash .period{
        position: relative;
        top: 8px;
}
.inner-home .flash .period span{
        margin-bottom: 16px;
}
.inner-home .flash .period > *{
        display: inline-block;
        vertical-align: middle;
        background: rgba(255,255,255,.3);
        border: 1px solid rgba(219,186,149,.3);
        border-radius: 5px;
        color: #72491b;
        font-size: 20px;
        padding: 13px 15px;
        margin: 0 8px;
}
.inner-home .flash .period > .current{
        background: #fff;
        border: 1px solid #dbba95;
        font-weight: 700;
        color: #d18d38;
}
.inner-home .best{
        padding-top: 60px;
        margin-bottom: 120px;
}
.inner-home .best .slider{
        margin: 0 -14px;
}
.inner-home .best .product-item{
        margin: 0 14px;
}
.inner-home .review a.prev,
.inner-home .best a.prev{
        left: -70px;
}
.inner-home .review a.next,
.inner-home .best a.next{
        right: -70px;
}
.inner-home .value{
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/value-bg.jpg);
        padding: 85px 0 170px;
}
.inner-home .value .sectitle{
        margin-bottom: 70px;
}
.inner-home .value figure{
        text-align: center;
}
.inner-home .review{
        padding-top: 100px;
}
.inner-home .review .sectitle{
        margin-bottom: 60px;
}
.inner-home .review .slider{
        margin: 0 -11px;
}
.inner-home .review .item{
        margin: 0 11px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 15px;
        padding: 40px 25px;
}
.inner-home .review .caption{
        float: left;
        width: 60%;
        position: relative;
}
.inner-home .review .caption:before{
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/quote.png);
        display: block;
        position: absolute;
        right: -15px;
        top: -20px;
        width: 82px;
        height: 59px;
        content: '';
}
.inner-home .review .caption > *{
        position: relative;
        z-index: 2;
}
.inner-home .review .feat{
        float: right;
        text-align: center;
        width: 25%;
}
.inner-home .review .hrev{
        margin-bottom: 20px;
}
.inner-home .review .hrev > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-home .review .hrev figure img{
        border-radius: 50%;
}
.inner-home .review .hrev h3{
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        margin-left: 15px;
        max-width: 120px;
}
.inner-home .review .txt{
        font-size: 16px;
        line-height: 130%;
        margin-bottom: 20px;
}
.inner-home .review .starate > *{
        display: inline-block;
        vertical-align: middle;
        font-size: 24px;
        margin-right: 3px;
}
.inner-home .review .starate i{
        color: #ffb400;
}
.inner-home .review .starate small{
        color: #a5a5a5;
        font-size: 16px;
        position: relative;
        top: 0;
}
.inner-home .insta{
        padding: 175px 0 160px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/ig-bg.png);
}
.inner-home .insta .centered{
        margin-top: 60px;
}
.inner-home .insta .button:before{
        width: 20px;
        height: 20px;
        background-image: url('${IG}');
        position: relative;
        top: -2px;
        margin-right: 15px;
}
.inner-home .insta img{
        display: block;
        width: 100%;
}
/** POPUP CRREDENTIAL **/
.fancybox-bg{
        background: rgba(255,255,255,.7);
}
.fancybox-is-open .fancybox-bg{
        opacity: 1;
}
.popup-credential{
        width: 100%;
        max-width: 470px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        padding: 25px 40px 0;
        overflow: hidden;
}
.inner-login .popup-credential{
        margin: 0 auto;
}
.popup-credential .hentry{
        text-align: center;
        margin-bottom: 30px;
}
.popup-credential .hentry h2{
        text-transform: uppercase;
        font-weight: 700;
        line-height: 100%;
        margin-top: 30px;
        letter-spacing: 0.8px;
        font-size: 16px;
}
.popup-credential .hentry p{
        font-size: 12px;
        max-width: 340px;
        margin: 10px auto 0;
        line-height: 150%;
}
.popup-credential .button{
        height: 48px;
        line-height: 48px;
        border-radius: 10px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2.1px;
        font-weight: 700;
}
.popup-credential a.forgot{
        display: inline-block;
        color: #e0a459;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2.1px;
        margin-bottom: 10px;
}
.popup-credential .botcred{
        margin: 35px -40px 0;
        padding: 20px 10px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${credBg}');
        text-align: center;
        font-family: 'Josefin Sans';
        font-weight: 600;
        letter-spacing: 2.1px;
}
.popup-credential .botcred a{
        font-weight: 700;
        color: #4b4b4b;
}
.popup-credential a.forgot:hover,
.popup-credential .botcred a:hover{
        text-decoration: underline;
}
#popforgot .fgroup{
        display: none;
}
#popforgot .fgroup.active{
        display: block;
}
#popforgot .tmethod{
        margin-bottom: 20px;
        text-align: center;
        position: relative;
}
#popforgot .tmethod:after{
        display: block;
        position: absolute;
        left: calc(50% - 2px);
        top: 1px;
        width: 1px;
        height: 100%;
        content: '';
        background: #ededed;
        display: none !important; /** ::TEMP:: until phone used **/
}
#popforgot .tmethod a{
        display: inline-block;
        vertical-align: middle;
        margin: 0 13px;
        opacity: .1;
}
#popforgot .tmethod a.active{
        opacity: 1;
}
#popforgot .tmethod a.bp{
        width: 12px;
        height: 12px;
        background-image: url(../img/icon/phone.png);
        position: relative;
        top: -1px;
        left: 1px;
}
#popforgot .tmethod a.bm{
        width: 16px;
        height: 12px;
        background-image: url('${envelope}');
}
#popsubs.popup-credential{
        max-width: 640px;
        padding: 25px 130px 50px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(../img/icon/subs-bg.jpg);
}
#popsubs.popup-credential p{
        font-size: 14px;
        max-width: 200px;
}
.popup-credential .hentry h2{
        font-size: 18px;
        letter-spacing: 2.7px;
}
#popsubs.popup-credential input[type='email']{
        background: #fff;
}
/** POP SEARCH **/
#popsearch{
        width: 100%;
        max-width:540px;
        background: none;
        padding: 30px;
}
#popsearch .layer{
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        background: #fff;
        overflow: hidden;
}
#popsearch .fancybox-close-small{
        right: 5px;
        top: 5px;
}
#popsearch .item{
        margin-top: 30px;
        padding: 0 25px;
}
#popsearch .item h2{
        color: #d18d38;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 120%;
        margin-bottom: 20px;
}
#popsearch .item.voucher p{
        margin-top: 17px;
}
#popsearch .item.voucher h2 + p{
        margin: 0;
}
#popsearch .item.voucher a{
        color: #4b4b4b;
        font-family: 'Josefin Sans';
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        position: relative;
        padding-left: 84px;
        display: block;
        line-height: 140%;
}
#popsearch .item.voucher a span{
        display: inline-block;
        height: 18px;
        line-height: 21px;
        width: 74px;
        text-align: center;
        color: #fff;
        font-family: 'Josefin Sans';
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        background: #d37072;
        border-radius: 5px 0 5px 0;
        position: absolute;
        left: 0;
        top: 0;
}
#popsearch .item.voucher .ppromo a span{
        background: #febf50;
}
#popsearch .item.brand a{
        text-align: center;
}
#popsearch .item.brand a img{
        display: inline-block;
}
#popsearch .pitem{
        border: 1px solid #fff5e5;
        border-radius: 10px;
        padding: 10px 15px;
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
}
#popsearch .pitem:first-child{
        margin: 0;
}
#popsearch .pitem figure{
        max-width: 68px;
        flex: 68px;
}
#popsearch .pitem .action a{
        text-align: center;
}
#popsearch .pitem .action{
        flex: 90px;
        max-width: 90px;
        text-align: right;
}
#popsearch .pitem .action a:after{
        width: 22px !important;
        height: 22px !important;
        top: 7px !important;
}
#popsearch .pitem .caption{
        flex: calc(100% - 160px);
        max-width: calc(100% - 160px);
        padding: 0 10px;
}
#popsearch .pitem h3{
        font-size: 14px;
        line-height: 130%;
        margin-bottom: 3px;
}
#popsearch .pitem .meta > *{
        font-size: 12px;
}
#popsearch .pitem .meta > .price{
        font-weight: 600;
}
#popsearch .scrollbar-inner{
        height: 550px !important;
}
#popsearch .scrollbar-inner > .scroll-element.scroll-y{
        right: 2px;
}
/** DROPDOWN BRAND MENU **/
ul.brand-menu{
        position: absolute;
        right: 50px;
        display: block;
        padding-top: 17px;
        text-align: left;
        opacity: 0;
        visibility: hidden;
        transition:all 0.2s ease-in;
}
li:hover ul.brand-menu{
        opacity: 1;
        visibility: visible;
        padding-top: 12px;
}
ul.brand-menu > li{
        display: block;
        width: 900px;
        background: #fff;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 0 0 10px 10px;
        padding: 30px 45px;
}
ul.brand-menu .hentry{
        margin-bottom: 15px;
}
ul.brand-menu h2{
        color: #d18d38;
        font-size: 24px;
        line-height: 130%;
        font-weight: 700;
        letter-spacing: 1.2px;
}
ul.brand-menu  .bitem{
        margin-top: 40px;
}
ul.brand-menu .bitem:first-child{
        margin: 0;
}
ul.brand-menu .bname h2{
        float: left;
}
ul.brand-menu .bname fieldset{
        float: right;
        width: 325px;
        top: -5px;
}
ul.brand-menu .blogo .rowflex{
        margin: 0 -5px;
        justify-content: inherit;
}
ul.brand-menu .blogo a{
        max-width: calc(20% - 10px);
        flex: calc(20% - 10px);
        display: block;
        margin: 0 5px 10px;
}
ul.brand-menu .bname .rowflex{
        justify-content: inherit;
        margin: 0 25px;
        align-items: inherit;
}
ul.brand-menu .bname .item{
        flex: calc(33.3333333333333333% - 30px);
        max-width:  calc(33.3333333333333333% - 30px);
        margin: 0 15px 40px;
        text-align: left;
}
#popbrands  h4,
ul.brand-menu .bname h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        margin-bottom: 15px;
}
#popbrands .bname li,
ul.brand-menu .bname li{
        display: block;
        margin: 10px 0 0;
        line-height: 180%;
}
#popbrands .bname li:first-child,
ul.brand-menu .bname li:first-child{
        margin: 0;
}
#popbrands .bname .item.hidden,
#popbrands .bname li.hidden,
ul.brand-menu .bname .item.hidden,
ul.brand-menu .bname li.hidden{
        display: none !important;
}
#popbrands .bname li a,
ul.brand-menu .bname li a{
        text-transform: none;
        letter-spacing: 0;
        font-size: 16px;
        font-family: 'Josefin Sans';
        font-weight: 400;
}
ul.brand-menu .scrollbar-inner{
        height: 250px !important;
}
/** CAT MENU **/
.botbar ul.cat-menu .rowflex{
        align-items: initial;
}
ul.cat-menu{
        position: absolute;
        left: 0;
        width: 100%;
        display: block;
        padding-top: 17px;
        opacity: 0;
        visibility: hidden;
        transition:all 0.2s ease-in;
}
li:hover ul.cat-menu{
        padding-top: 12px;
        opacity: 1;
        visibility: visible;
}
ul.cat-menu > li{
        display: block;
        background: #fff;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
ul.cat-menu .navtab{
        max-width: 25%;
        flex: 25%;
        background-repeat: no-repeat;
        background-position: bottom left;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${catMenu}');
        padding: 35px 14px;
}
ul.cat-menu .navtab li{
        display: block;
        text-align: left;
        margin: 5px 0 0;
}
ul.cat-menu .navtab li:first-child{
        margin: 0;
}
ul.cat-menu .navtab li a{
        color: #4b4b4b;
        font-size: 16px;
        font-weight: 600;
        display: block;
        text-transform: uppercase;
        padding: 17px 10px 15px 40px;
        line-height: 100%;
        border-radius: 5px;
        letter-spacing: 0;
        transition:all 0.2s ease-in;
}
ul.cat-menu .navtab li.current > a,
ul.cat-menu .navtab li a:hover{
        color: #d18d38;
}
ul.cat-menu .navtab li.current > a{
        background: #ffdcb1;
}
ul.cat-menu .navholder{
        max-width: 71.5%;
        flex: 71.5%;
        padding: 30px 30px 30px 0;
}
ul.cat-menu .navholder .item{
        display: none;
}
ul.cat-menu .navholder .item.active{
        display: flex;
}
ul.cat-menu .item{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -20px;
}
ul.cat-menu .item > ul{
        flex: calc(25% - 40px);
        max-width: calc(25% - 40px);
        text-align: left;
        margin: 0 20px;
}
ul.cat-menu .item > ul a{
        text-transform: none;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 1.4px;
}
ul.cat-menu .item li{
        display: block;
        margin: 0;
}
ul.cat-menu .item > ul > li > ul > li > ul,
ul.cat-menu .item > ul > li > ul {
        display: block;
        padding: 18px 0 0;
}
ul.cat-menu .item > ul > li > a{
        color: #d18d38;
        font-size: 16px;
        letter-spacing: 0.8px;
        font-weight: 700;
}
ul.cat-menu .item > ul > li > ul > li > a{
        font-weight: 600;
}
ul.cat-menu .item > ul > li > ul > li li{
        display: block;
        margin: 15px 0 0;
}
ul.cat-menu .item > ul > li,
ul.cat-menu .item > ul > li > ul > li{
        margin-top: 30px;
}
ul.cat-menu .item > ul > li:first-child,
ul.cat-menu .item > ul > li > ul > li:first-child,
ul.cat-menu .item > ul > li > ul > li li:first-child{
        margin: 0;
}
.watrig{
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: inline-block;
        z-index: 99;
}
.watrig a{
        display: block;
        box-shadow: 0 3px 6px 0 rgba(211, 112, 114, 0.42);
        background-color: #e0a459;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 80px;
}
.watrig a:after{
        width: 31px;
        height: 31px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${wa}');
        content: '';
        position: relative;
        display: inline-block;
}
/** POP MENU **/
.popmenu{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(255,255,255,.7);
        overflow: hidden;
}
.popmenu .cls{
        position: absolute;
        right: 15px;
        top: 15px;
        display: block;
        width: 19px;
        height: 19px;
        background-image: url('${close}');
}
.popmenu .holder{
        width: 310px;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
        background: #fff;
        opacity: 0;
        transition: all 0.2s ease-in;
}
.popmenu.showing .holder{
        opacity: 1;
        left: 0;
}
.popmenu figure{
        display: block;
        text-align: center;
        padding: 40px 0 60px;
}
.popmenu figure img{
        max-width: 130px;
}
.popmenu .wrap{
        overflow-y: scroll;
}
.popmenu .wrap a{
        font-family: 'Josefin Sans';
        font-weight: 400;
        letter-spacing: 2.1px;
        color: #4b4b4b;
        font-size: 14px;
        text-transform: uppercase;
}
.popmenu .wrap a:hover{
        color: #d37072;
}
.popmenu .m{
        padding: 0 17px;
}
.popmenu .m li{
        display: block;
        margin-bottom: 17px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255,213,203,.2);
}
.popmenu .m li a{
        letter-spacing: 2.8px;
}
.popmenu .s{
        padding: 50px 17px 60px;
}
.popmenu .s ul{
        display: block;
        max-width: 240px;
        margin: 0 auto;
}
.popmenu .s li{
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        width: 49%;
}
.popmenu .s li:last-child{
        display: block;
        width: 100%;
        margin-top: 50px;
}
.popmenu .s li a{
        display: block;
        position: relative;
}
.popmenu .s li:last-child a:before{
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: inline-block;
        width: 16px;
        height: 12px;
        top:1px;
}
.popmenu .c{
        text-align: center;
        position: relative;
}
.popmenu .c:after{
        width: 2px;
        height: 13px;
        background: #4b4b4b;
        content: '';
        display: block;
        position: absolute;
        left: calc(50% - 9px);
        top: 2px;
}
.popmenu .c.no-border:after{
        display: none;
}
.popmenu .c a{
        text-transform: none;
        font-weight: 700;
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;
}
/** POP SUBMENU **/
.popsubmenu {
        padding: 35px 25px 60px;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 99999;
        background: #fff;
        left: 0;
        top: 0;
        overflow-y: scroll;
}
.popsubmenu:before{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 162px;
        height: 121px;
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${submenuBg}');
        z-index: 1;
}
.popsubmenu .holder{
        position: relative;
        z-index: 2;
}
.popsubmenu h2{
        text-align: center;
        color: #d18d38;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 30px;
        letter-spacing: 0.8px;
}
.popsubmenu .holder a{
        color: #4b4b4b;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.6px;
}
.popsubmenu .holder > ul > li > a{
        color: #be8687;
        font-size: 16px;
        letter-spacing: 0.8px;
}
.popsubmenu .holder > ul > li > ul{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -5px;
        padding: 15px 0 0;
}
.popsubmenu .holder > ul > li > ul > li{
        flex: calc(33.3333333333333333% - 10px);
        max-width: calc(33.3333333333333333% - 10px);
        margin: 0 5px 30px;
}
.popsubmenu .holder > ul > li > ul > li > a{
        font-size: 14px;
}
.popsubmenu .holder > ul > li > ul > li ul li{
        display: block;
        padding-top: 15px;
}
#popbrands .blogo a{
        flex: 33.33333333333333333333333%;
        max-width: 33.33333333333333333333333%;
        margin: 0 0 10px;
        padding: 0 10px;
}
#popbrands h3{
        color: #d18d38;
        font-size: 16px;
        font-weight: 700;
        margin: 35px 0 20px;
}
#popbrands .bname .rowflex{
        margin: 0 -10px;
}
#popbrands .bname .item{
        flex: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 0 10px 30px;
        padding-left: 20px;
}
.popmsort .fbody,
.popmfilter .fbody{
        padding: 25px 0 40px;
}
.popmfilter .fbody .item{
        margin-top: 20px;
}
.popmfilter .fbody .item:first-child{
        margin: 0;
}
.popmfilter .fbody h3{
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 15px;
}
.popmfilter .fbody li{
        display: inline-block;
        vertical-align: middle;
        margin: 0 4px 8px 0;
}
.popmfilter .fbody li span{
        display: block;
        font-size: 14px;
        padding: 0 13px;
        height: 28px;
        line-height: 30px;
}
.popmfilter .fbody .frate li span{
        line-height: 25px;
        padding: 0 5px;
}
.popmfilter .fbody .frate li{
        margin: 0 5px 0 0;
}
.popmfilter .fbody .frate li span .rate i{
        margin: 0;
}
.popmsort .ic-reset,
.popmfilter .ic-reset{
        color: #d18d38;
        font-size: 14px;
        font-weight: 600;
        display: block;
        width: 100px;
        margin: 0 auto 17px;
        height:30px;
        line-height: 30px;
        background: #fffbf5;
        border-radius: 15px;
        text-align: center;
}
.popmsort .ic-reset:before,
.popmfilter .ic-reset:before{
        width: 13px;
        height: 13px;
        background-image: url('${reset}');
        position: relative;
        top: -1px;
        margin-right: 6px;
}
.popmsort .dotdio.blocky label{
        margin-top: 25px;
        padding-left: 20px;
}
.popmsort .dotdio.blocky label:first-child{
        margin: 0;
}
.popmsort .dotdio.blocky label span{
        font-size: 16px;
        font-weight: 600;
        color: #9f9f9f;
        font-family: 'Josefin Sans';
}
.popmsort .dotdio.blocky label input:checked + span{
        color: #d18d38;
        font-weight: 700;
}
.popmsort .dotdio.blocky label span:before{
        margin-right:40px;
        top: -3px;
}
/** POPUP ULASAN **/
#populasan .rowflex{
        margin: 0 -12px;
        justify-content: inherit;
}
#populasan .rowflex .item{
        margin: 0 12px 24px;
        max-width: calc(25% - 24px);
        flex: calc(25% - 24px);
        text-align: center;
}
#populasan .rowflex .item h3{
        margin: 15px 0 ;
        font-weight: 600;
        color: #4b4b4b;
        font-size: 14px;
        line-height: 130%;
}
#populasan.generic-popup{
        padding-bottom: 10px;
        padding-top: 50px;
}
#populasan.generic-popup .button{
        font-weight: 600;
        font-size: 12px;
        padding: 0 5px;
}

/** WAITLIST**/
.wcwl_elements.bound{
        margin-top: 20px;
}
.wcwl_elements.bound .wcwl_email_elements{
        margin-top: 8px;
}

.popup-layer{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        z-index: 9999;
        background: rgba(255,255,255,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
}
.popup-layer > *{
        background: #fff;
        position: relative;
}
.popsubmenu .close-popup,
.popup-layer .close-popup{
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        position: absolute;
        top:10px;
        right:10px;
        width: 30px;
        height:30px;
        font-size: 20px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.popup-layer #popsearch .close-popup{
        top: -5px;
        right: 5px;
        font-size: 34px;
}
.popsubmenu .close-popup:hover,
.popup-layer .close-popup:hover{
        opacity: .7;
}
.popsubmenu .close-popup:after,
.popup-layer .close-popup:after{
        font-family: 'qbons';
        position: absolute;
        top: 5px;
        left: 6px;
        display: block;
        color: #4b4b4b;
}
.real-atc{
        display: none;
}
#popsearch .rcs-custom-scroll{
        padding-bottom: 30px;
}
.rcs-custom-scroll .rcs-custom-scrollbar{
        width: 3px;
}
.rcs-custom-scroll .rcs-inner-handle{
        background: #9f9f9f;
}
/** SELECT DROP **/
.selectdrop .drop__control{
        background: #f9f9f9;
        border: 1px solid #ececec !important;
        height: 35px;
        line-height: 25px;
        color: #9f9f9f;
        font-family: 'Josefin Sans';
        font-weight: 600;
        border-radius: 17px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 0 0 0 rgba(0,0,0,0) !important;
        padding: 0 5px;
        min-height:1px;
}
.selectdrop .drop__indicator-separator{
        display: none;
}
.selectdrop .drop__dropdown-indicator{
        position: relative;
        top: -2px;
}
.selectdrop  .drop__single-value{
        color: #9f9f9f;
}
/* MEDIA QUERY FOR WEBKIT BASED BROWSER **/
@media screen and (-webkit-min-device-pixel-ratio:0) {

}

/* MEDIA QUERY FOR GECKO BASED BROWSER **/
@-moz-document url-prefix(){
        
}

`
export default Style;