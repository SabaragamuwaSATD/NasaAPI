import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";

test("renders Home component without crashing", async () => {
  render(<Home />);
  await waitFor(() =>
    expect(screen.getByText(/Photo of the Day/i)).toBeInTheDocument()
  );
});
