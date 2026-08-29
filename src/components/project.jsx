import React, { Component } from 'react';

export default class Project extends Component {

    constructor(props) {
        super(props);
        const baseUrl = '';
        const thumbnails = Array.isArray(props.thumbnails)
            ? props.thumbnails
            : Array.isArray(props.thumbnail)
                ? props.thumbnail
                : [props.thumbnail].filter(Boolean);

        this.thumbnails = thumbnails.map((thumb) => `${baseUrl}images/${thumb}`);
        this.state = { currentIndex: 0, lightboxIndex: 0, isLightboxOpen: false };
        this.logo = `${baseUrl}images/${props.logo}`;
        this.technologies = props.technologies.map((technology) => {
            const key = `${props.title}${technology}`;
            return <li key={key} className="technology">{technology}</li>
        });
    }

    goToPrevious = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState((state) => ({
            currentIndex: (state.currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length,
        }));
    };

    goToNext = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState((state) => ({
            currentIndex: (state.currentIndex + 1) % this.thumbnails.length,
        }));
    };

    goToPreviousLightbox = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState((state) => ({
            lightboxIndex: (state.lightboxIndex - 1 + this.thumbnails.length) % this.thumbnails.length,
        }));
    };

    goToNextLightbox = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState((state) => ({
            lightboxIndex: (state.lightboxIndex + 1) % this.thumbnails.length,
        }));
    };

    openLightbox = () => {
        this.setState({
            isLightboxOpen: true,
            lightboxIndex: this.state.currentIndex,
        });
    };

    closeLightbox = () => {
        this.setState({ isLightboxOpen: false });
    };

    renderThumbnail() {
        if (!this.thumbnails.length) {
            return null;
        }

        if (this.thumbnails.length > 1) {
            const currentThumbnail = this.thumbnails[this.state.currentIndex];

            return (
                <button
                    type="button"
                    className="project-carousel"
                    onClick={this.openLightbox}
                    aria-label={`Open image gallery for ${this.props.title}`}
                >
                    <img src={currentThumbnail} className="image project-carousel-image" alt={`${this.props.title} preview ${this.state.currentIndex + 1}`} />
                    <div className="project-carousel-controls">
                        <button
                            type="button"
                            className="project-carousel-button"
                            aria-label={`Previous image for ${this.props.title}`}
                            onClick={this.goToPrevious}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M14.5 5.5L8 12l6.5 6.5" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="project-carousel-button"
                            aria-label={`Next image for ${this.props.title}`}
                            onClick={this.goToNext}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M9.5 5.5L16 12l-6.5 6.5" />
                            </svg>
                        </button>
                    </div>
                </button>
            );
        }

        return (
            <button type="button" className="project-image-button" onClick={this.openLightbox} aria-label={`Open image for ${this.props.title}`}>
                <img src={this.thumbnails[0]} className="image" alt={this.props.title} />
            </button>
        );
    }

    render() {
        return (
            <div className="project">
                <div className="project-image">
                    <div className="thumbnail" title={this.props.title}>
                        {this.renderThumbnail()}
                    </div>
                </div>
                <div className="project-title">
                    <span className="project-logo">
                      <img src={this.logo} className="image" alt="Logo"/>
                    </span>
                    <a className="thumbnail" href={this.props.link} target="_blank" rel="noreferrer">
                        {this.props.title}
                    </a>
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                <ul className="technologies">
                    {this.technologies}
                </ul>
                {this.state.isLightboxOpen && (
                    <div className="lightbox-overlay" onClick={this.closeLightbox} role="dialog" aria-modal="true" aria-label={`${this.props.title} gallery`}>
                        <div
                            className="lightbox-content"
                            onClick={(event) => {
                                if (event.target === event.currentTarget) {
                                    this.closeLightbox();
                                }
                            }}
                        >
                            <button
                                type="button"
                                className="lightbox-close"
                                onClick={this.closeLightbox}
                                aria-label={`Close ${this.props.title} image`}
                            >
                                ×
                            </button>
                            <div className="lightbox-image-shell">
                                {this.thumbnails.length > 1 && (
                                    <button
                                        type="button"
                                        className="lightbox-nav lightbox-prev"
                                        onClick={this.goToPreviousLightbox}
                                        aria-label={`Previous image for ${this.props.title}`}
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="M14.5 5.5L8 12l6.5 6.5" />
                                        </svg>
                                    </button>
                                )}
                                <img
                                    src={this.thumbnails[this.state.lightboxIndex]}
                                    className="lightbox-image"
                                    alt={`${this.props.title} preview ${this.state.lightboxIndex + 1}`}
                                />
                                {this.thumbnails.length > 1 && (
                                    <button
                                        type="button"
                                        className="lightbox-nav lightbox-next"
                                        onClick={this.goToNextLightbox}
                                        aria-label={`Next image for ${this.props.title}`}
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <path d="M9.5 5.5L16 12l-6.5 6.5" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
