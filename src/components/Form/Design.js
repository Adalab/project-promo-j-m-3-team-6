import React from 'react';

class Design extends React.Component {
  constructor(props) {
    super(props);
    // this.collapsibleHandlerChild = this.collapsibleHandlerChild.bind(this);
  }
  // collapsibleHandlerChild() {
  //   this.props.collapsibleHandler();}

  render() {
    return (
      <div className="box__design">
        <div
          className="design__menu js-arrow arrow"
          // onClick={this.collapsibleHandlerChild()}
        >
          <div className="content__title">
            <i className="icon far fa-object-ungroup"></i>
            <h2 className="titleMenu">Diseña</h2>
          </div>
          <i className="fa fa-chevron-down js-arrowsTransform"></i>
        </div>
        <div className="design__content js-hidden hidden">
          <h3 className="design__content__title">colores</h3>
          <div className="design__content__form">
            <label htmlFor="color1">
              <div className="design__content__input">
                <input
                  className="inputDesign js-check"
                  id="color1"
                  type="radio"
                  value="1"
                  name="palette"
                />
                <div className="design__boxColor">
                  <div className="boxColor1"></div>
                  <div className="boxColor2"></div>
                  <div className="boxColor3"></div>
                </div>
              </div>
            </label>
            <label htmlFor="color2">
              <div className="design__content__input">
                <input
                  className="inputDesign js-check"
                  id="color2"
                  type="radio"
                  value="2"
                  name="palette"
                />
                <div className="design__boxColor">
                  <div className="boxColor4"></div>
                  <div className="boxColor5"></div>
                  <div className="boxColor6"></div>
                </div>
              </div>
            </label>
            <label htmlFor="color3">
              <div className="design__content__input">
                <input
                  className="inputDesign js-check"
                  id="color3"
                  type="radio"
                  value="3"
                  name="palette"
                />
                <div className="design__boxColor">
                  <div className="boxColor7"></div>
                  <div className="boxColor8"></div>
                  <div className="boxColor9"></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
