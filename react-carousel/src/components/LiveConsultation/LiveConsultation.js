import React, { Component } from 'react'
import Pagination from "../Pagination/Pagination"

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
            content:
                <iframe allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/6Af6b_wyiwI">
                </iframe>

        },
        {
            key: uuidv4(),
            content:
                <iframe className="iframe" width="420" height="270" src="https://www.youtube.com/embed/AL08YZCYShc">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe className="iframe" width="420" height="270" src="https://www.youtube.com/embed/eI4an8aSsgw">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe className="iframe" width="420" height="270" src="https://www.youtube.com/embed/eIho2S0ZahI">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe className="iframe" width="420" height="270" src="https://www.youtube.com/embed/ZVO8Wt_PCgE">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe className="iframe" width="420" height="270" src="https://www.youtube.com/embed/TQMbvJNRpLE">
                </iframe>
        },
        {
            key: uuidv4(),
            content: <div style={{ height: "300px", width: "420px" }}>
                <iframe className="iframe" height="270" width="400" src="https://www.youtube.com/embed/-ki9-oaPwHs">
                </iframe>
            </div>
        },

    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });



    render() {
        return (
            <div>
                <div className="wrapper">
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
                {/* <div className="pagination">
                    <div className="pageNoBox">
                        <div className="pageNo">5</div>
                        <div className="pageNo">6</div>
                        <div className="pageNo">7</div>
                        <div className="pageNo">8</div>
                        <div className="pageNo">9</div>
                    </div>
                    <div className="rest">
                    </div>
                </div> */}
                <Pagination/>
            </div>
        )
    }
}
