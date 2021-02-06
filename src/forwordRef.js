import React, { Component } from 'react';

const EmailInput = React.forwardRef((props, ref) => {
    // console.log('ref', ref);
    return (
        <input ref={ref} {...props} type="email" className="AppEmailInput" />
    )
});

class EmailRef extends Component {
    emailRef = React.createRef();
    render() {
        // console.log('email ref', this.emailRef);
        return (
            <div>
                <EmailInput ref={this.emailRef} />
                <button onClick={() => this.onClickButton()}>
                    Click me to focus email
          </button>
            </div>
        );
    }

    onClickButton() {
        this.emailRef.current.focus();
    }
}
export default EmailRef;