import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shopping from "./Shopping";

describe("Shopping component", () => {
  it("renders correct title page", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Shopping />
      </MemoryRouter>
    );
    const heading = screen.getByText(/This is the shopping page/i);
    expect(heading).toBeInTheDocument();
  });
});
