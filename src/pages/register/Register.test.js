import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createUserWithEmailAndPassword as realCreateUserWithEmailAndPassword } from "firebase/auth";
import Register from "./Register";
import "@testing-library/jest-dom";

// Mock auth from ../../firebase
jest.mock("../../firebase", () => ({
  auth: {},
}));

// Mock createUserWithEmailAndPassword from firebase/auth
jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: {} })),
}));

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("Register", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<Register />);

    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("calls the register function when the form is submitted", () => {
    const { getByPlaceholderText, getByRole } = render(<Register />);

    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
    fireEvent.click(getByRole("button", { name: /register/i }));

    expect(realCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      "test@test.com",
      "password"
    );
  });
});
