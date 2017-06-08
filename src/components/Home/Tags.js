import React from 'react';
import agent from '../../agent';

const Tags = props => {
  const tags = props.tags;
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://placehold.it/1600x400?text=IMAGE" alt="Image"/>
              <div className="carousel-caption">
                <h3>Sell $</h3>
                <p>Money Money.</p>
              </div>
            </div>

            <div className="item">
              <img src="https://placehold.it/1600x400?text=Another Image Maybe" alt="Image" />
              <div className="carousel-caption">
                <h3>More Sell $</h3>
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
};

export default Tags;
