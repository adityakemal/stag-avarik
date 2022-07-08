import React from "react"
import ReactDOM from "react-dom"
import { render, cleanup, fireEvent } from "@testing-library/react"

import { Link } from "./link"

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Link />, div)
})

it("renders internal link", () => {
  render(<Link to="/home">Click</Link>)

  const element = document.querySelector("a")

  expect(element).toHaveAttribute("href", "/home")
  expect(element).not.toHaveAttribute("target")
})

it("renders external link", () => {
  render(<Link to="https://google.com">Click</Link>)

  const element = document.querySelector("a")

  expect(element).toHaveAttribute("href", "https://google.com")
  expect(element).toHaveAttribute("target", "_blank")
})

it("renders youtube link", () => {
  const { getByTestId } = render(
    <Link to="https://www.youtube.com/watch?v=6nUqEI_4plM">Click</Link>
  )

  const bodyEl = document.querySelector("body")
  fireEvent.click(getByTestId("youtube-link"))

  expect(bodyEl.classList.contains("ReactModal__Body--open")).toBe(true)
})
