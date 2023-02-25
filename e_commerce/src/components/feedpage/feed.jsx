import {ShoppingCart} from "@mui/icons-material";
import { useEffect } from "react";
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../createContext";
import "./feed.css"
const Feed=()=>{
    const feedContext=useContext(Context)
    const navigate=useNavigate();
    const [data,setData]=useState([]);
useEffect( ()=>{
     axios.get("http://localhost:1337/api/products?populate=*",{
        headers:{
            Authorization:"bearer f06d5524e335efa400965894853a66b284a6d5bd778837d02ddbe563cc70dee336bb679063cd3edaba2919af6591297d4e6f563e19d6c99cb2b6122bac9cbb6cb7d53adcffe9e1097136f1a52cc7c2e5359e56e566b5ed2333f7f0581bde01c0534a8c25c580b432c498421df5a9d03c2197b625a3bb84fc99d044fafdd59f3f"
        }
    }).then((response)=>{setData([...data,...response.data.data])}).catch((err)=>{console.log(err)})
},[])
// console.log(data);
const clickHandler=()=>{
    navigate("/cart");
}
const addtoCartClick=(value)=>{
       feedContext.seturr([...feedContext.urr,value]);
       alert("added to cart successfully")
}

    return(
        <>
        <div className="feedmainContainer">
            <div className="feedtopBarContainer">
               <h2>WebSeriezzz!</h2> 
               <ShoppingCart className="cartSymbol" onClick={clickHandler}/>
            </div>
            <div className="feedListContainer">
            {
                
                data.map((value,index)=>{
                    return(
                        <div className="feedContainer" key={index}>
            <div className="feddContainertopPart">
                <h3>{value.attributes.name}</h3>
                <h3 className="priceField">{value.attributes.price}Rs.</h3>
            </div>
            <div className="feedContainerBody">
                 <p>{value.attributes.description}</p>
                 <img src={"http://localhost:1337"+value.attributes.image.data.attributes.formats.thumbnail.url} alt="img" className="image"/>  
            </div>
            <div>
                <button onClick={()=>{addtoCartClick(value)}}>Add to cart</button>
            </div>

        </div>
                    )
                })
            }
            </div>
            
            

        </div>
        </>
    )
}
export default Feed;
//`http://localhost:1337/uploads/thumbnail_81r_Ehhwbub_L_e964dbfc76.jpg?width=1400&height=2100`