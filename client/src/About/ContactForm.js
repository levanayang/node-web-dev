// a form to contact me via email
import React from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initFormState

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: '',
        email: '',
        message: '',
        showAlert: false
    }

    initFormState = {
        name: '',
        email: '',
        message: '',
        showAlert: false
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    resetFormAfterSuccess() {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
        this.onShowAlert();
    }

    onShowAlert = () => {
        this.setState({showAlert: true}, () => {
            window.setTimeout(() => {
                this.setState({showAlert: false})
            }, 2000)
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let formSendUrl = (process.env.NODE_ENV === 'production')?
            "https://my-website-lvy-2020.herokuapp.com/send"
            : "http://localhost:5000/send";

        axios({
            method: 'POST',
            url: formSendUrl,
            data: this.state
        }).then((response) => {
            console.log("Axios has sent POST request. Response:");
            console.log(response);
            if (response.data.status === 'success') {
                // alert("Message sent.");
                this.resetFormAfterSuccess();
            } else if (response.data.status === 'fail'){
                alert ("Message failed to send.");
            }
        }).catch((err) => {
            if (err.response) {
                console.log("There was an error when submitting the form - Axios");
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error when submitting the form - axios: ', err.message);
            }
            console.log(err.config);
        })
    }

    render() {
        return (
            <div className="contact-form">
                <h2>Contact Me</h2>
                <form onSubmit={this.handleSubmit}
                          method="POST">
                    <div className="contact-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"
                               value={this.state.name} onChange={this.onNameChange}
                               placeholder="John Smith"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                               value={this.state.email} onChange={this.onEmailChange}
                               placeholder="example@email.ca"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message">Message</label>
                        {/*TODO: Make contact form text keep its formatting*/}
                        <textarea className="form-control" id="contact-message" rows="10"
                                  value={this.state.message} onChange={this.onMessageChange}
                                  placeholder="Please type here..."
                        />
                    </div>
                    {/*TODO: Add CAPTCHA test*/}
                    <Alert isOpen={this.state.showAlert}> Email sent successfully</Alert>
                    <button type="submit" className="btn-submit-message">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;