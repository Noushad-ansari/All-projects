import React, { Component } from 'react'

import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import { config } from "react-spring";

import "./liveConsultation.css"


export default class LiveConsultation extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 3,
        showNavigation: true,
        config: config.slow
    };

    slides = [
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/501/?random" alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/502/?random" alt="2" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/503/?random" alt="3" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/500/?random" alt="4" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/504/?random" alt="5" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/500/?random" alt="6" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/800/500/?random" alt="7" />
        },
        {
            key: uuidv4(),
            content: <img src="https://picsum.photos/805/500/?random" alt="8" />
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });



    render() {
        return (
            <div>
                <div className="container">
                    <h2>Concept Videos</h2>
                    <h6>Select a number</h6>

                    <div style={{ width: "70%", height: "270px", margin: "0 auto" }}>
                        <Carousel
                            slides={this.slides}
                            goToSlide={this.state.goToSlide}
                            offsetRadius={this.state.offsetRadius}
                            showNavigation={this.state.showNavigation}
                            animationConfig={this.state.config}
                        />
                    </div>
                </div>
                <section className="section">
                    <h2>Live Classes</h2>
                    <h6>Select a number</h6>
                </section>
                <div className="pagination">
                    <div className="pageNoBox">
                       <div className="pageNo">5</div>
                       <div className="pageNo">6</div>
                       <div className="pageNo">7</div>
                       <div className="pageNo">8</div>
                       <div className="pageNo">9</div>
                        </div>
                    <div className="rest">
                        </div>
                </div>
            </div>
        )
    }
}
