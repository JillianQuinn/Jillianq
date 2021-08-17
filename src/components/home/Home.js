import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import scrollToElement from "scroll-to-element";

import { fetchProjects } from "../../redux/actions/projects";
import { fetchExperience } from "../../redux/actions/experience";
import { fetchCourses } from "../../redux/actions/courses";

import Navbar from "./Navbar";

import homeSections from "./homeSections";

import "./home.css";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { currentScroll: 0, currentSection: "" };
    }

    componentWillMount = () => {
        this.props.fetchProjects();
        this.props.fetchExperience();
        this.props.fetchCourses();
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = (event) => {
        this._updateCurrentScroll();
        this._updateCurrentSection();
    };

    scrollToSection = (sectionName) => {
        const element = this._getPageElementFromKey(sectionName);

        // if(sectionName === "resume") {
        //     const win = window.open("https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/JillianQuinn.pdf?alt=media&token=04df45ff-7c0a-4780-bcb4-8e310b4128c3", '_blank');
        //     win.focus();
        // }

        if (!element) return;

        scrollToElement(element, {
            offset: (this._getNavBarHeight() - 1) * -1,
            ease: "inOutQuad",
            duration: 600,
        });
    };

    _updateCurrentScroll = () =>
        this.setState({ currentScroll: this._getCurrentScroll() });
    _getCurrentScroll = () =>
        window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
              ).scrollTop;

    _updateCurrentSection = () => {
        const { refs } = this;

        let inSection = false;
        for (let key in refs) {
            const boundingRect =
                this._getPageElementFromKey(key).getBoundingClientRect();

            if (boundingRect.top - this._getNavBarHeight() <= 0) {
                this._onEnterSection(key);
                inSection = true;
            }
        }

        if (this._isScrollBottom()) {
            this._onEnterSection("contact");
            inSection = true;
        }

        if (!inSection) this._onEnterSection("");
    };

    _isScrollBottom = () =>
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
    _onEnterSection = (sectionName) =>
        this.setState({ currentSection: sectionName });
    _getNavBarHeight = () => this.navbar.getBoundingClientRect().height;
    _getPageElementFromKey = (key) => this.refs[key];

    render = () => {
        const { currentSection, currentScroll } = this.state;
        return (
            <div className="root-home">
                <div ref={(element) => (this.navbar = element)}>
                    <Navbar
                        items={homeSections}
                        onItemClick={this.scrollToSection}
                        currentSection={currentSection}
                        currentScroll={currentScroll}
                    />
                </div>

                {homeSections
                    .filter((section) => section.component)
                    .map((section) => (
                        <div key={section.name} ref={section.name}>
                            {section.name === "Projects" ? (
                                <section.component
                                    onShowProjectDetails={() =>
                                        this.scrollToSection("Projects")
                                    }
                                />
                            ) : (
                                <section.component />
                            )}
                        </div>
                    ))}
            </div>
        );
    };
}

const mapStateToProps = (store) => ({
    projects: store.projects,
    experience: store.experience,
    courses: store.courses,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: (args) => dispatch(fetchProjects(args)),
    fetchExperience: (args) => dispatch(fetchExperience(args)),
    fetchCourses: (args) => dispatch(fetchCourses(args)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
