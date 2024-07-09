import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../context/AuthContext";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "@testing-library/react";

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: {} })),
}));

jest.mock("../../firebase", () => ({
  auth: {},
}));

describe("Login", () => {
  it("calls the login function when the form is submitted", async () => {
    const mockDispatch = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <AuthContext.Provider value={{ dispatch: mockDispatch }}>
        <Router>
          <Login />
        </Router>
      </AuthContext.Provider>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(getByRole("button", { name: /login/i }));
    });

    await new Promise((r) => setTimeout(r, 1000)); // wait for async actions to complete

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "LOGIN",
      payload: {},
    });
  });
});
