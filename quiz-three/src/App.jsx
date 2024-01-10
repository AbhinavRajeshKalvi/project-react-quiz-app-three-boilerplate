import React,{useState} from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Result from './components/Result'
import Start from './components/Start'
import QuestionBox from './components/QuestionBox'

const App = () => {
  const [correctAns, setCorrect] = useState(0);
  const [wrongAns, setWrong] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/Quiz" element={<QuestionBox correctAns={correctAns} setCorrect={setCorrect} wrongAns={wrongAns} setWrong={setWrong} />}></Route>
        <Route path="/Result" element={<Result correctAns={correctAns} wrongAns={wrongAns} setCorrect={setCorrect} setWrong={setWrong}/>}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App