import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    let [arr,setArr]=useState([])
     
    useEffect(()=>{getData()},[])
const getData=async()=>{
    const res=await fetch("https://dummyjson.com/carts")
    const data =await res.json()
    console.log(data.carts);
    
}
return(
   <>
    <div className="main">
        <Link to={"/Product"}>
            <div className="card">
                <div className="photo">
                    <img src="cart.thumbnail" alt="" />
                </div>
            </div>
        </Link>
    </div>
   </>
)
}
export default Home