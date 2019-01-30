import React, { Component } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
library.add(faEllipsisV);

class headerComponent extends Component {
  render() {
    return (
      <div className="headerStyle">
        <h1>headerComponent</h1>
      </div>
    );
  }
}
export default headerComponent;