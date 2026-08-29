import React, { Component } from 'react';

export default class TimelineEvent extends Component {

    constructor(props) {
        super(props);
        this.classes = `event event-${props.side}`;
        this.markerImg = `images/${props.markerImg}`;
    }

    render() {
        return (
            <div className="event-pair">
                <div className={this.classes}>
                    <div className="event-title">{this.props.title}</div>
                    <div className="event-subtitle">{this.props.subtitle}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="event-description">
                        {this.props.description}
                    </div>
                    <span className="marker">
                        <img src={this.markerImg} className="image" alt="Marker" data-attribution={this.props.attribution || ''}/>
                      </span>
                </div>
            </div>
        );
    }
}
