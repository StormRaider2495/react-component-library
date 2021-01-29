import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme, name = "SR2495" }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1>Hello World!!!</h1>
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by {name}</h2>
  </div>
);

export default TestComponent;
