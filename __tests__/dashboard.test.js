import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Dashboard from "../src/components/Dashboard/Dashboard";

it("renders without crashing", () => {
  render(<Dashboard />);
});
