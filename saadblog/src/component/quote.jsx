import React, {useState,useEffect} from "react"
import sanityClient from "../client.js";
import { Link } from "react-router-dom";


function Quotes(){

    const [quote,setquote] = useState([])

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type=='quote']{
            _id,
            quote,
            author}`
        ).then((data)=>{
            setquote(data)
        }).catch((error)=>{
            console.log(error)});},
    [])



    return(<div className = "bg-green-200 min-h-screen p-12">
        <h1 className = "text-5xl flex justify-center textstyle1">My fav Quotes</h1>

        <div>
            {quote.map((quote,index)=>{
                return(
                <Link to = {`/singlequote/${quote._id}`} 
                key={quote._id || index}>

                    {/* background */}

                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">

                            {/* Quote */}
                            <div className="mb-6">
                                <p className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-relaxed mb-8">
                                    "{quote.quote}"
                                </p>
                            </div>

                            {/* Author */}
                            <div>
                                <p className="text-gray-500 font-semibold">
                                    — {quote.author}
                                </p>
                            </div>

                        </div>

                    </Link>
                );
            })}

        </div>

    </div>
);}

export default Quotes