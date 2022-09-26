import {useState} from "react";

function TestComponent() {
    const comments = [
        {id: 1, text: 'text comment 1'},
        {id: 2, text: 'text comment 2'},
        {id: 3, text: 'text comment 3'},
        {id: 4, text: 'text comment 4'},
    ]
    const show_comments = true

    const commentAssVariable = (

        <div>

            <h1> counts : {comments.length} </h1>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}> {comment.text}</li>
                ))}
            </ul>
        </div>
    )
    const [count, setCount] = useState(0)
    const incremntCount = () => {

        setCount(count + 1);
    }
    return (<div>
        <h1>Test component </h1>
        <h1> count is {count}</h1>
        <button onClick={incremntCount}> incment count</button>
        <button onClick={()=>{setCount((prevValue)=>prevValue+1)}}> incment count {count}</button>

        {show_comments ? (
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}> {comment.text}</li>
                ))}
            </ul>
        ) : (' No')}
        {/*if we want use if with out else*/}
        {show_comments && (
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}> {comment.text}</li>
                ))}
            </ul>
        )}

        {/*use varable */}
        {show_comments && commentAssVariable}

    </div>);
}

export default TestComponent