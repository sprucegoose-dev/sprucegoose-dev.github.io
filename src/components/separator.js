import React, { Component } from 'react';

export default class Separator extends Component {

    render() {
        return (
            <div className="separator">
                <span>{String.fromCharCode(8226)}</span>
                <span>{String.fromCharCode(8226)}</span>
                <span>{String.fromCharCode(8226)}</span>
            </div>
        );

    }
}