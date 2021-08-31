import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from "../../../assets/css/slick.css" ;
import { styled } from "frontity";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next(e) {
                e.preventDefault();
		this.slider.slickNext();
	}
	previous(e) {
                e.preventDefault();
		this.slider.slickPrev();
	}
	render() {
		const settings = {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        speed: 500,
                        fade: true,
                        autoplaySpeed: 5000,
                        variableWidth: false
		};
		return (
                        <SliderElem className="slide">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                                {this.props.slider > 1 && <div className="slidenav"><a href="#" className="prev cvr-bg" onClick={this.previous}></a><a href="#" className="next cvr-bg" onClick={this.next}></a></div>}
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`