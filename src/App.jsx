import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TestComponent from './TestComponent.jsx'
import Header from './Header.jsx'
import feedbackData from './Data/feedback.js'
import FeedbackItem from './FeedbackItem.jsx'

function App() {
    const [count, setCount] = useState(0)
    const [feedback, setFeedback] = useState(feedbackData);
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <Header/>
            <Header text={'header from component'}/>
            {feedback.map((feed,index)=>(
                <FeedbackItem key={index} feedback={feed} />
            ))}

            <TestComponent/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
