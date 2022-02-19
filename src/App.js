import Timer from './Components/TimerSingle'
import TimerMultiple from './Components/TimerMultiple'

function App () {
  return (
    <div className="App">
      <Timer totalSeconds={1200} />
      <Timer 
        totalSeconds={600} 
        cover={'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      />
      <TimerMultiple
        cover={'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        config={[
          { id: 1, totalSeconds: 120, title: '正方', color: '#364fc7' },
          { id: 2, totalSeconds: 240, title: '反方', color: '#0b7285' }
        ]}
      />
    </div>
  )
}

export default App
