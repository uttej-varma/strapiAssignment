import "./cart.css";
import {Close} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../createContext";
import StripeCheckout from 'react-stripe-checkout';
const Cart=()=>{
   const cartContext=useContext(Context);
    const navigate=useNavigate();
    const clickHandler=()=>{
       navigate("/feed")
    }
    const removeHandler=(mainvalue)=>{
      const filtered=cartContext.urr.filter((value)=>{
         return value.attributes.name!=mainvalue.attributes.name
      })
      cartContext.seturr([...filtered]);
    }
    const onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
    // const checkoutHandler=()=>{
    // //    const onToken = (token) => {
    // //         fetch('/save-stripe-token', {
    // //           method: 'POST',
    // //           body: JSON.stringify(token),
    // //         }).then(response => {
    // //           response.json().then(data => {
    // //             alert(`We are in business, ${data.email}`);
    // //           });
    // //         });
    // //       }
    // console.log("yes");
    // }
    return(
        <>
        <div className="orderListContainer">
           <div className="orderListContainerTopPart">
              <Close className="xmark" onClick={clickHandler}/>
           </div>
        </div>
        <div className="feedListContainer">
            {
                
                cartContext.urr.map((value,index)=>{
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
                <button><StripeCheckout
        token={onToken}
        stripeKey="please place your own stripe key"
      /></button>
                <button onClick={()=>{removeHandler(value)}}>remove</button>
            </div>

        </div>
                    )
                })
            }
            </div>
        </>
    )
}
export default Cart;