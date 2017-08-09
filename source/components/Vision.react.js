import React from 'react';
import MediaQuery from 'react-responsive';

import CanvasResize from './CanvasResize.react';
import Navbar from './Navbar.react';

class Vision extends React.Component {
  render() {
    const center = {
      textAlign: 'center'
    };

    return (
      <div>
        <Navbar/>
        <div style={center}>
        <div className="jumbotron">
          <h1>Draw a Letter <small> A,B,C,D,E,F,G,H,I,J</small></h1>
        </div>
        <MediaQuery minWidth={1200}>
          {(matches) => {
            if (matches) {
              return <div><CanvasResize height="600" width="600" lineWidth="50"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={1200} minWidth={992}>
          {(matches) => {
            if (matches) {
              return <div><CanvasResize height="450" width="450" lineWidth="25"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={992} minWidth={768}>
          {(matches) => {
            if (matches) {
              return <div><CanvasResize height="350" width="350" lineWidth="20"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          {(matches) => {
            if (matches) {
              return <div><CanvasResize height="250" width="250" lineWidth="15"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        </div>
      </div>
    );
  }
}

module.exports = Vision;