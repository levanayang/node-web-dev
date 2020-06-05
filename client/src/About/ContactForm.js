// a form to contact me via email
import React from 'react'
import axios from 'axios'

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initFormState

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initFormState = {
        name: '',
        email: '',
        message: ''
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

    resetForm() {
        this.setState(this.initFormState)
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: 'POST',
            url: "http://localhost:5000/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert ("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <div className="contact-form">
                <h2>Contact Me</h2>
                <form onSubmit={this.handleSubmit}
                          method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"
                               value={this.state.name} onChange={this.onNameChange}
                               placeholder="John Smith"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                               value={this.state.email} onChange={this.onEmailChange}
                               placeholder="you@email.ca"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="contact-message" rows="10"
                                  value={this.state.message} onChange={this.onMessageChange}
                                  placeholder="Please type here..."
                        />
                    </div>
                    <button type="submit" className="btn-submit-message">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;