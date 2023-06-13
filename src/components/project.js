import React, { Component } from 'react';

export default class Project extends Component {

    constructor(props) {
        super(props);
        const baseUrl = '';

        if (typeof props.thumbnail === 'string') {
            this.thumbnail = <img src={baseUrl + props.thumbnail} className="image" />;
        } else {
            this.thumbnail = props.thumbnail.map((thumb) => {
                return <img key={thumb} src={baseUrl + thumb} className="image multiple-3" />;
            });
        }
        this.logo = `${baseUrl}${props.logo}`;
        this.technologies = props.technologies.map((technology) => {
            const key = `${props.title}${technology}`;
            return <li key={key} className="technology">{technology}</li>
        });

    }

    render() {
        return (
            <div className="project">
                <div className="project-image">
                    <a className="thumbnail" href={this.props.link} title={this.props.title} target="_blank">
                        {this.thumbnail}
                    </a>
                </div>
                <div className="project-title">
                    <span className="project-logo">
                      <img src={this.logo} className="image"/>
                    </span>
                    <a className="thumbnail" href={this.props.link} target="_blank">
                        {this.props.title}
                    </a>
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                <ul className="technologies">
                    {this.technologies}
                </ul>
            </div>
        );
    }
}
