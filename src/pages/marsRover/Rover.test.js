import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Rover from "./Rover";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

test("renders Rover component without crashing", async () => {
  render(<Rover />);
  await waitFor(() =>
    expect(screen.getByText(/Mars Rover Curiosity Photos/i)).toBeInTheDocument()
  );
});
