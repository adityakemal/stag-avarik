// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Hooks
// ========================================================================================================================================

import { useState, useEffect, useCallback, useLayoutEffect } from "react"
import moment from "moment-timezone"
import { useInView } from "react-intersection-observer"

// ==========================================================================
// Count Down
// ==========================================================================

const prependZero = (number, limit) => {
  return number < limit ? `0${number}` : number
}

export const useCountdown = ({ startDate, endDate }) => {
  const [isStart, setStart] = useState(false)
  const [isEnded, setEnded] = useState(false)
  const [countdown, setCountdown] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const eventStart = moment(startDate)
      const eventEnded = moment(endDate)
      const now = moment()

      const duration = moment.duration(eventStart.diff(now))
      const days = prependZero(duration.days(), 10)
      const hours = prependZero(duration.hours(), 10)
      const minutes = prependZero(duration.minutes(), 10)
      const seconds = prependZero(duration.seconds(), 10)

      if (eventEnded.valueOf() < now.valueOf()) {
        setEnded(true)
      } else if (eventStart.valueOf() < now.valueOf()) {
        setStart(true)
      } else {
        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return [isStart, isEnded, countdown]
}

// ==========================================================================
// Scroll Anim
// ==========================================================================

/**
 *
 * @param {*} animation
 * @returns
 *
 * e.g .fadeInUp, .fadeInDown, etc.
 * Please check base/animations.scss for complete list of animations
 */

export const useScrollAnim = (animation = "fadeInUp") => {
  const [ref, inView] = useInView({
    threshold: [0.125, 0.5, 0.75],
    triggerOnce: true,
  })

  const [animate, setAnimate] = useState(() => {
    return {
      text: `scroll-${animation}`,
      hasSet: false,
    }
  })

  const anim = useCallback(
    (delay, replaceAnim = null) => {
      if (replaceAnim) {
        return animate.hasSet
          ? `scroll-${replaceAnim} ${replaceAnim}` + ` d${delay}`
          : `scroll-${replaceAnim}`
      } else {
        return animate.hasSet
          ? `${animate.text} ${animation}` + ` d${delay}`
          : animate.text
      }
    },
    [animate]
  )

  useEffect(() => {
    if (inView) {
      setAnimate(prevState => {
        return {
          ...prevState,
          hasSet: true,
        }
      })
    }
  }, [inView])

  return [ref, anim]
}

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect
