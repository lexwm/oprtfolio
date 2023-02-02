import React from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import portfolioOne from '../assets/portfolio/portfolio-1.jpg';
import portfolioTwo from '../assets/portfolio/portfolio-2.jpg';

const filters = [
    {
        name: "All",
        filter: "*"
    },
    {
        name: "App",
        filter: ".filter-app"
    },
    {
        name: "Card",
        filter: ".filter-card"
    },
    {
        name: "Web",
        filter: ".filter-web"
    }
];

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.portfolioContainer = null;
        this.portfolioIsotope = null;
        this.portfolioFilters = null;
    }

    handleClick(e) {
        e.preventDefault();
        this.setActive(e);

        this.portfolioIsotope.arrange({
            filter: e.target.dataset.filter
        });

        this.portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
        });
    }

    setActive(e) {
        this.portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
        });
        e.currentTarget.classList.toggle('filter-active');
    }

    componentDidMount() {
        this.portfolioContainer = this.select('.portfolio-container');
        this.portfolioFilters = this.select('#portfolio-flters li', true);
        this.portfolioIsotope = new Isotope(this.portfolioContainer, {
            itemSelector: '.portfolio-item'
        });
    }

    select(el, all = false) {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                {
                                    filters.map(item => (
                                        <li key={item.name} data-filter={item.filter} onClick={this.handleClick}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={portfolioOne} className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href={portfolioOne} data-gallery="portfolioGallery"
                                       className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={portfolioTwo} className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href={portfolioTwo} data-gallery="portfolioGallery"
                                       className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-app"*/}
                        {/*     style="position: absolute; left: 380px; top: 0px; display: none;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-card"*/}
                        {/*     style="position: absolute; left: 0px; top: 0px; display: none;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-web"*/}
                        {/*     style="position: absolute; left: 380px; top: 0px;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-app"*/}
                        {/*     style="position: absolute; left: 760px; top: 0px; display: none;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-card"*/}
                        {/*     style="position: absolute; left: 380px; top: 0px; display: none;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-card"*/}
                        {/*     style="position: absolute; left: 760px; top: 0px; display: none;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4 col-md-6 portfolio-item filter-web"*/}
                        {/*     style="position: absolute; left: 760px; top: 0px;">*/}
                        {/*    <div className="portfolio-wrap">*/}
                        {/*        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />*/}
                        {/*            <div className="portfolio-links">*/}
                        {/*                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"*/}
                        {/*                   className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>*/}
                        {/*                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>

                </div>
            </section>
        );
    }
}

export default PortfolioPage;