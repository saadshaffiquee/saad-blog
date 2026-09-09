import React, {useState,useEffect} from "react";
import SanityClient from "../client.js";
import { useParams } from "react-router-dom";
import {PortableText} from "@portabletext/react"  



function Singleproject(){

    const [singleproject, setsingleproject] = useState(null)

    const {id} =useParams()

    useEffect(()=>{
        SanityClient.fetch(
            `*[_type == 'project' && _id == $id][0]{
            title,
            category,
            number,
            body
    }`,{id}).then((data)=>{
        setsingleproject(data)
    }).catch((error)=>{
        console.log(error)
    })


    },[id])

    if(!singleproject){
        return <p>Project loading</p>
    }

    return (
    <div className="bg-green-200 min-h-screen p-6 md:p-12">

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {singleproject.title}
            </h1>

            {/* Project Information */}
            <div className="flex flex-wrap gap-4 mb-10">

                <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                    {singleproject.category}
                </span>

                <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                    {singleproject.number} Developers
                </span>

            </div>

            {/* Project Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-8">
                <PortableText value={singleproject.body} />
            </div>

        </article>

    </div>
)




}

export default Singleproject