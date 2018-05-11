import React, {PureComponent} from 'react';
import './Animation.scss';

export default class Animation extends PureComponent {
  render() {
    return (
    <div>
      <div className="changeColor">
      </div>
      <div className="fourColors">
      </div>
      <div className="move">
        <div className="move" id="div1"></div>
        <div className="move" id="div2"></div>
        <div className="move" id="div3"></div>
        <div className="move" id="div4"></div>
      </div>
    </div>
    )
  }
}
