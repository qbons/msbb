import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from '../../../../../assets/css/slick.css';
import { styled } from "frontity";
import Image from "@frontity/components/image";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
                this.slider = props.data.slider;
		this.state = {
                        big: null,
                        thumb: null
                };
	}
        componentDidMount() {
                this.setState({
                        big: this.sliderBig,
                        thumb: this.sliderTHumb
                });
        }
	render() {
		return (
                        <>
                                {this.slider.big.length > 0 &&
                                        <SliderElem className="gallery">
                                                <div className="big">
                                                        <Slider
                                                                asNavFor={this.state.thumb}
                                                                ref={slider => (this.sliderBig = slider)}
                                                                arrows={false}
                                                        >
                                                                {this.slider.big.map((v,k) => {
                                                                        return(
                                                                                <div key={k} className="item">
                                                                                        <Image src={v}/>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </Slider>
                                                </div>
                                                {this.slider.thumbnail.length > 0 &&
                                                        <div className="thumb">
                                                                <Slider
                                                                        asNavFor={this.state.big}
                                                                        ref={slider => (this.sliderThumb = slider)}
                                                                        slidesToShow={this.slider.thumbnail.length > 2 ? 3 : this.slider.thumbnail.length}
                                                                        swipeToSlide={true}
                                                                        focusOnSelect={true}
                                                                        arrows={false}
                                                                >
                                                                        {this.slider.thumbnail.map((v, k) => {
                                                                                return(
                                                                                        <div key={k} className="item">
                                                                                                <Image src={v} />
                                                                                        </div>
                                                                                )
                                                                        })}
                                                                </Slider>
                                                        </div>
                                                }
                                        </SliderElem>
                                }
                        </>
		);
	}
}

const SliderElem = styled.div `${SlickCSS}`