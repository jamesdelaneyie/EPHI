import React from 'react';
import EphiLogo from '../../public/images/ephi-logo.svg';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <img src={EphiLogo} alt="Logo" />
    );
  }
}

export default Logo