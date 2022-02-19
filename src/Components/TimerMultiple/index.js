import { useState, useRef } from 'react'
import TimerController from '../TimerController'

const defaultConfig = [
  { id: 1, totalSeconds: 120, title: '正方', color: '#364fc7' },
  { id: 2, totalSeconds: 240, title: '反方', color: '#0b7285' }
]

function TimerMultiple ({ cover, config = defaultConfig }) {
  const [runningId, setRunningId] = useState(null)
  const timerRef = useRef([])

  const pauseTimer = id => {
    timerRef.current[id].stop()
  }

  const onRun = id => {
    if (runningId) {
      pauseTimer(runningId)
    }
    setRunningId(id)
  }

  const onPause = () => {

  }

  const onEnd = id => {
  
  }
  
  return (
    <div className='timer-container'>
      {cover && <div style={{ backgroundImage: `url(${cover})` }} className='timer-cover' />}
      {config.map(item => {
        return (
          <TimerController
            key={item.id}
            totalSeconds={item.totalSeconds}
            color={item.color}
            onRun={() => onRun(item.id)}
            onPause={() => onPause(item.id)}
            onEnd={() => onEnd(item.id)}
            ref={ref => { timerRef.current[item.id] = ref }}
          />
        )
      })}
    </div>
  )
}

export default TimerMultiple