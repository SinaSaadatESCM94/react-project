import React, { Component } from "react";
import { HookTest, Message } from "../../component";
export default class Presentation extends Component {
  render() {
    return (
      <div className="w-100 vh-100 overflow-hidden d-flex align-items-center justify-content-center">
        <HookTest />
      </div>
    );
  }
}
