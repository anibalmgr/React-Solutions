import React from 'react';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <div style={{
          width: "50px",
          height: "50px",
          position: 'absolute',
          left: mouse.x -25,
          top: mouse.y -25,
          background: "pink",
          zIndex: "-1"
        }} />
      );
    }
}


class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        <Cat mouse={this.state} />
      </div>
    );
  }
}


class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </>
    );
  }
}

export default MouseTracker;
