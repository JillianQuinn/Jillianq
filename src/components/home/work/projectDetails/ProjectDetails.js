import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import parse from "html-react-parser";
import Label from "../Label";

import "./projectDetails.css";

import ReactGA from "react-ga";

class ProjectDetails extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);

        const logPageView = () => {
            ReactGA.set({
                page: window.location.pathname + window.location.search,
            });
            ReactGA.pageview(window.location.pathname + window.location.search);
        };
        logPageView();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 27) this.close();
    };

    close = () => {
        this.props.history.push("");

        const logPageView = () => {
            ReactGA.set({
                page: window.location.pathname + window.location.search,
            });
            ReactGA.pageview(window.location.pathname + window.location.search);
        };
        logPageView();
    };

    render() {
        const projectId = this.props.location.pathname.substring(1);
        const project = this.props.projects.find(
            (project) => project.id === projectId
        );

        return (
            <div className="project-details-dialog-container margin home-section">
                <div
                    className="project-details-navigate-back-button padding clickable text-unselectable"
                    onClick={this.close}
                >
                    <i
                        className="fa fa-arrow-left project-details-icon"
                        aria-hidden="true"
                    />
                    <span>show all projects</span>
                </div>
                {project ? (
                    <ProjectDetailsCard project={project} />
                ) : (
                    <div className="project-not-found">Project Not Found</div>
                )}
            </div>
        );
    }
}
const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const ProjectDetailsCard = ({ project, onClick }) => {
    return (
        <div className="project-details-card" onClick={onClick}>
            <img
                className="project-details-image size"
                alt={project.name}
                src={project.img}
            />

            <div className="project-details-text padding">
                <div className="project-details-title">{project.name}</div>
                <div className="project-details-subtitle">
                    {project.subtitle}
                </div>
                <div className="project-details-labels ">
                    {project.labels.map((label) => (
                        <Label minimalStyle="true" key={label} label={label} />
                    ))}
                </div>
                <div className="project-details-secondary-links">
                    {project.secondaryLinks && project.secondaryLinks.length
                        ? project.secondaryLinks.map((link) => (
                              <a
                                  className="project-details-link"
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <i
                                      className={
                                          link.icon + " project-details-icon"
                                      }
                                      aria-hidden="true"
                                  />
                                  <span>{link.name}</span>
                              </a>
                          ))
                        : null}
                </div>

                {/* <div className="project-details-description">
                    <MultilineText text={project.description} />
                </div> */}

                <div className="project-details-description">
                    <MultilineText text={project.description}></MultilineText>
                    {project.demoVideo ? (
                        <div>
                            <div className="project-details-demo">
                                View the Demo Video:
                            </div>
                            <iframe
                                width="560"
                                height="315"
                                src={project.demoVideo}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    ) : null}
                </div>

                {project.imageDescription.length ? (
                    <div className="project-details-image-layout">
                        {project.conclusion ? <div className="project-details-header">Heuristic Evaluation</div> : <div className="project-details-header">Layout</div>}
                        {project.imageDescription.map((image, key) => (
                            <div className={`images-${key % 2 == 0}`}>
                                <img
                                    src={image.url}
                                    alt="Dashboard"
                                    className={`project-image-${key % 2 == 0}`}
                                />
                                <div className="project-details-caption">
                                <MultilineText text={image.caption}></MultilineText>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}

                {project.conclusion ? (
                    <div>
                        <div className="project-details-header">Conclusion</div>
                            <div className="project-details-caption">
                                <MultilineText text={project.conclusion}></MultilineText>
                            </div>
                         </div>       
                ) : null}

                <div className="project-details-main-links">
                    {project.secondaryLinks && project.secondaryLinks.length
                        ? project.secondaryLinks.map((link) => (
                              <a
                                  className="project-details-link"
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <i
                                      className={
                                          link.icon + " project-details-icon"
                                      }
                                      aria-hidden="true"
                                  />
                                  <span>{link.name}</span>
                              </a>
                          ))
                        : null}
                </div>
                <div
                    className="project-details-navigate-back-button padding clickable text-unselectable"
                    onClick={scrollToTop}
                >
                    <i
                        className="fa fa-arrow-up project-details-icon"
                        aria-hidden="true"
                    />
                    <span>scroll to top</span>
                </div>
            </div>
        </div>
    );
};

const MultilineText = ({ text }) => {
    return (
        <div>
            {text.split("<br/>").map((textLine, index) => (
                <span key={index}>
                    {textLine}
                    <br />
                </span>
            ))}
        </div>
    );
};

const mapStateToProps = (store) => ({
    projects: store.projects,
});

export default withRouter(connect(mapStateToProps)(ProjectDetails));
