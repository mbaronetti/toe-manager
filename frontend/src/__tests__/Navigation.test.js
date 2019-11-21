import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "../components/Navigation/Navigation";

it("Navigation test", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  expect(getByText("Notes")).toBeInTheDocument();
  expect(getByText("Create Note")).toBeInTheDocument();
  expect(getByText("Create User")).toBeInTheDocument();
});
