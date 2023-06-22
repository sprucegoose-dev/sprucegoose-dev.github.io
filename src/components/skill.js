import React, { Component } from 'react';

export default class Skill extends Component {

    constructor(props) {
        super(props);
        this.classes = `progress-circle ${props.name}-progress-circle`;
        this.imageSrc = `images/${props.image}`;
    }

    render() {
        return (
            <li className="skill">
                <div className={this.classes}>
                    <span>
                        <img className="logo" src={this.imageSrc} alt={this.props.name} title={this.props.name} />
                    </span>
                </div>
            </li>
        );
    }
}
