import React,{useState,useEffect} from "react"
import SanityClient from "../client.js"
import { useParams } from "react-router-dom"
import { PortableText } from "@portabletext/react"

function SingleQuote(){

    const [singlequote, setsinglequote] = useState(null)

    const {id} = useParams()

    useEffect(()=>{
        SanityClient.fetch(
            `*[_type == 'quote' && _id == $id][0]{
            quote,
            author
        }`,{id}
        ).then((data)=>{
            setsinglequote(data)
        }).catch((error)=>{
            console.log(error)
        })



    }, [id])

    if(!singlequote){
        return <p>
            Loading...
        </p>
    }


    return (
        <div className="bg-green-200 min-h-screen p-6 md:p-12">

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">

                {/* Quote */}
                <p className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-relaxed mb-8">
                    "{singlequote.quote}"
                </p>

                {/* Author */}
                <p className="text-lg text-gray-500 text-right">
                    — {singlequote.author}
                </p>

            </div>

        </div>
    )
}



export default SingleQuote