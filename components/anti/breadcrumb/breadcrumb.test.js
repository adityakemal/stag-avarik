import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent, screen } from "@testing-library/react"

import { Breadcrumb } from "./breadcrumb"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Breadcrumb path="/development/retail" />, div)
})

it("renders breadcrumb correctly", () => {
  const { getByTestId } = render(<Breadcrumb path="/development/retail" />)
  expect(getByTestId("breadcrumb")).toHaveTextContent("retail")
})
