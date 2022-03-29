import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

describe("FenceForm", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should test form submission", () => {
    
  }); 
  
  it("Should render the page correctly", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Infinity Euro Fencing Calculator" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "black rose" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
    expect(screen.getByText("Linear Feet:")).toBeInTheDocument(); 
  });
});
