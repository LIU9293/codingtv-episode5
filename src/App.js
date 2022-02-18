import Timer from './Components/Timer'

function App () {
  return (
    <div className="App">
      <Timer totalSeconds={1200} />
      <Timer 
        totalSeconds={600} 
        cover={'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      />
    </div>
  )
}

export default App
