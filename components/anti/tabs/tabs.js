// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Tabs
// ========================================================================================================================================

import React, { useEffect } from "react"
import PropTypes from "prop-types"

// ==========================================================================
// Nav Tabs
// ==========================================================================

export const NavTabs = ({
  variant,
  data,
  scrollable,
  scrollableFade,
  className,
  wrapperClassName,
  identifier,
}) => {
  useEffect(() => {
    const tabs = document.querySelectorAll(
      `${identifier ? `.${identifier}` : ""}[data-tab-target]`
    )
    const tabContents = document.querySelectorAll(
      `${identifier ? `.${identifier}` : ""}[data-tab-content]`
    )
    const classRemove = e => {
      e.classList.remove("active")
    }

    const buttonLeft =
      document.getElementById("slideLeft") ||
      document.getElementById(`${identifier}Left`)

    const buttonRight =
      document.getElementById("slideRight") ||
      document.getElementById(`${identifier}Right`)

    if (buttonRight) {
      buttonRight.onclick = () => {
        scrollLeft(
          document.querySelector(
            `${identifier ? `.${identifier}` : ""}.nav-scrollable`
          ),
          300,
          500
        )
      }
    }

    if (buttonLeft) {
      buttonLeft.onclick = () => {
        scrollLeft(
          document.querySelector(
            `${identifier ? `.${identifier}` : ""}.nav-scrollable`
          ),
          -300,
          500
        )
      }
    }

    const scrollLeft = (element, change, duration) => {
      var start = element.scrollLeft,
        currentTime = 0,
        increment = 20

      var animateScroll = () => {
        currentTime += increment
        var val = Math.easeInOutQuad(currentTime, start, change, duration)
        element.scrollLeft = val
        if (currentTime < duration) {
          setTimeout(animateScroll, increment)
        }
      }
      animateScroll()
    }

    //t = current time, b = start value, c = change in value, d = duration
    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        if (target) {
          tabContents.forEach(classRemove)
          tabs.forEach(classRemove)
          tab.classList.add("active")
          target.classList.add("active")
        }
      })
    })

    return () => {
      tabs.forEach(tab => {
        tab.removeEventListener("click", () => {
          const target = document.querySelector(tab.dataset.tabTarget)

          if (target) {
            tabContents.forEach(classRemove)
            tabs.forEach(classRemove)
            tab.classList.add("active")
            target.classList.add("active")
          }
        })
      })
    }
  }, [])

  return (
    <>
      <div
        className={`nav-${variant}-wrapper 
        ${scrollable && "nav-scrollable-wrapper"}
        ${scrollableFade && "scrollable-fade"}
        ${wrapperClassName} `}
      >
        <div className={`${scrollable && "nav-scrollable"}`}>
          <ul className={`nav nav-${variant} ${className}`} role="tablist">
            {data.map((item, i) => {
              return (
                <li className="nav-item" key={item.name}>
                  <div
                    className={`nav-link ${i === 0 ? "active" : ""}`}
                    data-tab-target={`#${item.target}`}
                    role="tab"
                  >
                    {item.name}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
NavTabs.propTypes = {
  variant: PropTypes.oneOf("tabs", "pills"), // Set nav tabs data
  data: PropTypes.any, // Set nav tabs data
  scrollable: PropTypes.string, // Set scrollable status
  scrollableFade: PropTypes.string, // Set scrollable status
  className: PropTypes.string, // Set nav tabs / pills optional classes
  wrapperClassName: PropTypes.string, // Set nav tabs / pills wrapper optional classes
}
NavTabs.defaultProps = {
  variant: "tabs",
  scrollable: "",
  scrollableFade: "",
  navClassName: "",
  className: "",
  wrapperClassName: "",
}

// ==========================================================================
// Tab Content
// ==========================================================================

export const TabContent = ({ children, className, id }) => {
  return (
    <div id={id} className={`tab-content ${className}`}>
      {children}
    </div>
  )
}
TabContent.propTypes = {
  className: PropTypes.string, // Set tab content optional classes
  children: PropTypes.any,
}
TabContent.defaultProps = {
  className: "",
}

// Tab Pane
export const TabPane = ({ id, children, className, identifier }) => {
  return (
    <div
      className={`tab-pane fade show ${className} ${
        identifier ? identifier : ""
      }`}
      id={id}
      role="tabpanel"
      aria-labelledby={id}
      data-tab-content
    >
      {children}
    </div>
  )
}
TabPane.propTypes = {
  className: PropTypes.string, // Set tab pane optional classes
  children: PropTypes.any,
}
TabPane.defaultProps = {
  className: "",
}

// █░█ █▀█ █░█░█   ▀█▀ █▀█   █░█ █▀ █▀▀
// █▀█ █▄█ ▀▄▀▄▀   ░█░ █▄█   █▄█ ▄█ ██▄

{/* <NavTabs
 data={[
   { name: "Tab 1", target: "tab-1" },
   { name: "Tab 2", target: "tab-2" },
 ]}
/>
<TabContent>
 <TabPane id="tab-1" className="active">
   Content 1
 </TabPane>
 <TabPane id="tab-1">
   Content 2
 </TabPane>
</TabContent> */}
