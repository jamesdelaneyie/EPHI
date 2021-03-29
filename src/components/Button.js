import React from 'react';

var buttonStyle = {
  display: 'block',
  padding: '10px 20px',
  backgroundColor: 'red'
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Add" 
    }
  }
  render(props) {
    return (
      <a
        className="button"
        style={buttonStyle}
        onClick={this.props.onClick}>{this.props.label}</a>
    );
  }
}

export default Button;