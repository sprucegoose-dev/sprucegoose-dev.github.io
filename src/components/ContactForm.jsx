import React, { Component } from 'react';
import $ from 'jquery';
import ReactTouchEvents from "react-touch-events";
import axios from 'axios';

export default class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                email: '',
                message: '',
            },
            captcha: false,
            submitted: false,
            explanation: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cloneFox = this.cloneFox.bind(this);
    }

    componentDidMount() {
        const intervalId = setInterval(this.cloneFox, 13200);
        // // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    cloneFox() {
        const $fox = $('.fox').removeClass('fox').addClass('fox')
        const $clone = $fox.clone();
        $clone.on('click touchend', this.validateCaptcha.bind(this));
        $fox.replaceWith($clone);
    }

    handleChange(event) {
        const form = { ...this.state.form };
        form[event.target.name] = event.target.value;
        this.setState({ form });
    }

    validateCaptcha() {
        if (!this.state.captcha) {
            this.setState({
                captcha: true,
                explanation: false
            });
        }
    }

    explainCaptcha() {
        if (!this.state.captcha && !this.state.explanation) {
            this.setState({ explanation: true });
        }
    }

    resetForm() {
        const self = this;

        self.setState({
            form: {
                name: '',
                email: '',
                message: '',
            },
            captcha: false,
        });

        setTimeout(function() {
            self.setState({
               submitted: false,
            });
        }, 3000);
    }

    handleSubmit(event) {
        event.preventDefault();

        const self = this;

        if (!this.state.captcha) {
            // show captcha alert
            console.log('Invalid captcha');
            return;
        }

        axios.post('http://35.158.122.245/api/sendMail', this.state.form)
            .then(function (response) {
                // alert success
                self.setState({ submitted: true });
                self.resetForm();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const overlayClass = 'overlay' + (this.state.captcha ? ' visible' : '');
        const confirmationClass = 'confirmation' + (this.state.submitted ? ' visible' : '');
        const explanationClass = 'explanation' + (this.state.explanation ? ' visible' : '');

        return (
            <form id="contact-us" onSubmit={this.handleSubmit}>
                <div className={confirmationClass}>Sent <img className="checkmark" src="checkmark-white.png" alt="checkmark" /></div>
                <input name="name" className="form-input" placeholder="Name" autoComplete="off" value={this.state.form.name} onChange={this.handleChange} required />
                <input name="email" type="email" className="form-input" placeholder="Email" autoComplete="off" value={this.state.form.email} onChange={this.handleChange} required />
                <textarea name="message" className="form-input" placeholder="Message" autoComplete="off" value={this.state.form.message} onChange={this.handleChange} />
                <div className="stage">
                    <div className={explanationClass}>
                        Catch the fox
                    </div>
                    <div className={overlayClass}>
                        <div className="checkmark" >
                            <img src="images/checkmark.png" alt="checkmark" />
                        </div>
                    </div>
                    <span className="element sun">
                        <img src="images/sun2.png" className="image" alt="Sun" />
                    </span>
                    <span className="element cloud2">
                                <img src="images/cloud2.png" className="image" alt="Cloud"  />
                            </span>
                    <span className="element cloud3">
                                <img src="images/cloud2.png" className="image" alt="Cloud"/>
                            </span>
                    <span className="element scenery tree1">
                                <img src="images/tree01.png" className="image" alt="Tree" />
                            </span>
                    <span className="element scenery tree2">
                                <img src="images/tree02.png" className="image" alt="Tree"/>
                            </span>
                    <span className="element scenery rock1">
                                <img src="images/rock01.png" className="image" alt="Rock" />
                            </span>
                    <ReactTouchEvents onTap={ this.validateCaptcha.bind(this)}>
                        <div className="fox" onClick={this.validateCaptcha.bind(this)}>
                        </div>
                    </ReactTouchEvents>

                </div>

                <ReactTouchEvents onTap={ this.explainCaptcha.bind(this) }>
                    <button className="submit-btn" onClick={this.explainCaptcha.bind(this)}>
                        Send
                    </button>
                </ReactTouchEvents>

                <div className="instructions">Pssst... Catch the fox to prove you're human.</div>
            </form>
        );
    }
}
