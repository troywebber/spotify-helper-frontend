import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../src/components/Login/Login";
import React from "react";

it("renders without crashing", () => {
  render(<Login />);
});

it("contains a login button with the text 'Login with Spotify'", async () => {
  render(<Login />);
  await waitFor(() => {
    expect(screen.getByText("Login with Spotify")).toBeInTheDocument();
  });
});

it("contains EMAIL and PASSWORD text on the login page", async () => {
  render(<Login />);
  await waitFor(() => {
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/password:/i)).toBeInTheDocument();
  });
});
