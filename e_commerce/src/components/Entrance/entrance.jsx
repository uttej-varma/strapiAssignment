import "./entrance.css"
import { useNavigate } from "react-router-dom";
const Entrance=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
        navigate("/feed");
    }
    return(
        <div className="mainContainer">
        <div className="subContainer">
        <h1>Welcome</h1>
        <h1>To</h1>
        <h1>WebSeriezzzzzzz Store!</h1>
        </div>
        <button onClick={clickHandler}>Let's DigIn</button>
        </div>
    )
}
export default Entrance;