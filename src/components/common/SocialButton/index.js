import React from 'react';
import SocialLogin from 'react-social-login';

class SocialButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.triggerLogin} className={this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
