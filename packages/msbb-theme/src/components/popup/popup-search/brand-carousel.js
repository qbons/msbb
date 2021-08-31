// ::PASS::

import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from "../../../assets/css/slick.css";
import { styled } from "frontity";

export default class BrandCarousel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const settings = {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        speed: 500,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        responsive: [
                                {
                                        breakpoint: 768,
                                        settings: {
                                                variableWidth: true,
                                        }
                                }
                        ]
		};
		return (
                        
                        <SliderElem className="slider">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`