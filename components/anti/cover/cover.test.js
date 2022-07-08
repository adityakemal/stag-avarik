import React from "react"
import ReactDOM from "react-dom"
import { render, cleanup, fireEvent } from "@testing-library/react"

import { Cover, CoverContent } from "./cover"

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Cover />, div)
})

it("renders cover content without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CoverContent />, div)
})

it("renders type video correctly", () => {
  const { getByTestId } = render(
    <Cover
      videoType="video"
      videoSrc="https://www.youtube.com/watch?v=yWfUg5ja90k"
    />
  )
  expect(getByTestId("basic-video")).toBeInTheDocument()
})

it("renders type video pop-up correctly", () => {
  const { getByTestId } = render(
    <Cover
      videoType="video-popup"
      videoSrc="https://www.youtube.com/watch?v=yWfUg5ja90k"
    />
  )
  expect(getByTestId("video-popup")).toBeInTheDocument()
})

it("opens modal", () => {
  const { getByTestId } = render(
    <Cover
      videoType="video-popup"
      videoSrc="https://www.youtube.com/watch?v=yWfUg5ja90k"
    />
  )
  const bodyEl = document.querySelector("body")

  fireEvent.click(getByTestId("modal-btn"))

  expect(bodyEl.classList.contains("ReactModal__Body--open")).toBe(true)
})
