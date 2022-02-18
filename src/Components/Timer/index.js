/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import './style.css'
import PlaySVG from './play-circle.svg'
import PauseSVG from './pause-circle.svg'
import sector from './sector'

function Timer ({ cover, totalSeconds = 0 }) {
  const [seconds, setSeconds] = useState(totalSeconds)
  const [isRunning, setRunning] = useState(false)
  const [t, setT] = useState(null)
  const timerCanvas = useRef(null)
  const min = parseInt(seconds / 60)
  const sec = seconds % 60

  useEffect(() => {
    if (isRunning) {
      if (seconds > 0) {
        setT(setTimeout(() => {
          setSeconds(seconds - 1)
          // drawSectorCanvas(timerCanvas.current, step)        
        }, 100))
      } else {
        clearTimeout(t)
        setRunning(false)
      }
    } else {
      clearTimeout(t)
    }
  }, [isRunning, seconds])

  const onRunClick = () => {
    if (seconds === 0) {
      setSeconds(totalSeconds)
    }
    setRunning(!isRunning)
  }

  const step = parseFloat(seconds / totalSeconds, 2)
  return (
    <div className='timer-container'>
      {cover && <div style={{ backgroundImage: `url(${cover})` }} className='timer-cover' />}
      <div className='timer-container-inner'>
        <div className='timer-svg-container'>
          <svg viewBox="0 0 400 400" width="400" height="400" className='timer-svg'>
            <path id="sector" fill="#364fc7" stroke="none" fillRule="evenodd" d={sector.getSectorPath(step)} />
          </svg>
          {/* <canvas ref={timerCanvas} /> */}
        </div>
        <div className='timer-text'>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
        <div className='timer-button' onClick={onRunClick}>
          {isRunning ? <img src={PauseSVG} alt='pause' /> : <img src={PlaySVG} alt='play' />}
        </div>
      </div>
    </div>
  )
}

export default Timer