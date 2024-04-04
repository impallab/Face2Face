import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MeetingPage from './components/MeetingPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meeting/:username' element={<MeetingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
