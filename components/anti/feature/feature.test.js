import React from "react"
import ReactDOM from "react-dom"
import { render, cleanup } from "@testing-library/react"

import { Feature } from "./feature"

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Feature />, div)
})

it("renders image correctly", () => {
  const { getByTestId } = render(
    <Feature img="https://cdn-1.motorsport.com/images/amp/6D1kz5w0/s6/aston-martin-amr21-1.jpg" />
  )
  expect(getByTestId("image-elmnt")).toHaveAttribute(
    "src",
    "https://cdn-1.motorsport.com/images/amp/6D1kz5w0/s6/aston-martin-amr21-1.jpg"
  )
})

it("renders title correctly", () => {
  const { getByTestId } = render(<Feature title="This is title" />)

  expect(getByTestId("title")).toHaveTextContent("This is title")
})

it("renders title correctly", () => {
  const { getByTestId } = render(<Feature text="This is text" />)

  expect(getByTestId("text")).toHaveTextContent("This is text")
})
