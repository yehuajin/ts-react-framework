import { useState } from 'react'
import style from './app.module.scss'

function App() {
  const [count, setCount] = useState(0);
  // 静态变量__MODE__，环境变量import.meta.env.VITE_BASE_API
  if (__MODE__) {
    console.log(111, import.meta.env.VITE_BASE_API);
  }
  return (
    <div className={style.app}>
      1234
    </div>
  )
}

export default App
