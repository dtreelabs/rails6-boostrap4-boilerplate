import React from "react"
import PropTypes from "prop-types"
class Hello extends React.Component {
  render () {
    return (
      <div>
        Name: {this.props.name}
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string
};
export default Hello
