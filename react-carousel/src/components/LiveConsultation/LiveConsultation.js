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
                <iframe title="motivation1" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/6Af6b_wyiwI">
                </iframe>

        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation2" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/AL08YZCYShc">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation3" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/eI4an8aSsgw">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation4" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/eIho2S0ZahI">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation5" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/ZVO8Wt_PCgE">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation6" allowFullScreen="allowfullscreen" className="iframe" width="420" height="270" src="https://www.youtube.com/embed/TQMbvJNRpLE">
                </iframe>
        },
        {
            key: uuidv4(),
            content:
                <iframe title="motivation7" allowFullScreen="allowfullscreen" className="iframe" height="270" width="400" src="https://www.youtube.com/embed/-ki9-oaPwHs">
                </iframe>
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

                <Pagination />
            </div>
        )
    }
}
