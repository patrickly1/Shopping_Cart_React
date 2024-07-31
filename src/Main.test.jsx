import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./Home";

describe("Home component", () => {
  it("renders correct Home heading", () => {
    render(<Home />);
    const heading = screen.getByText(/This is the home page/i);
    expect(heading).toBeInTheDocument();
  });
});

describe("App component", () => {
  it("renders correct App heading", () => {
    render(<App />);
    const heading = screen.getByText(/Hello/i)
    expect(heading).toBeInTheDocument();
  });
});
