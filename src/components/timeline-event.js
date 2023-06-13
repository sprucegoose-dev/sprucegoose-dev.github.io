import React, { Component } from 'react';

export default class TimelineEvent extends Component {

    constructor(props) {
        super(props);
        this.classes = `event event-${props.side}`;
        this.placeholderEvent = <div className="event"></div>;
        this.markerImg = `${props.markerImg}`;
    }

    render() {
        return (
            <div className="event-pair">
                {this.props.side === 'right' ? this.placeholderEvent : ''}
                <div className={this.classes}>
                    <div className="event-title">{this.props.title}</div>
                    <div className="event-subtitle">{this.props.subtitle}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="event-description">
                        {this.props.description}
                    </div>
                    <span className="marker">
                        <img src={this.markerImg} className="image"/>
                      </span>
                </div>
                {this.props.side === 'left' ? this.placeholderEvent : ''}
            </div>
        );
    }
}
