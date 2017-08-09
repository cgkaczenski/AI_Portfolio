import React from 'react';

class Album extends React.Component {
  render() {

    const thumbStyle = {
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    return (
    	<div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail" style={thumbStyle}>
              <img src="http://via.placeholder.com/242x200"></img>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail" style={thumbStyle}>
              <img src="http://via.placeholder.com/242x200"></img>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail" style={thumbStyle}>
              <img src="http://via.placeholder.com/242x200"></img>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail" style={thumbStyle}>
              <img src="http://via.placeholder.com/242x200"></img>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail" style={thumbStyle}>
              <img src="http://via.placeholder.com/242x200"></img>
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}

module.exports = Album;