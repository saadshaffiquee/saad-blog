import React, {useState,useEffect} from "react"
import SanityClient from "../client.js"
import {useParams} from 'react-router-dom'
import {PortableText} from "@portabletext/react"  

// becuse body contains alot of diffenct type of text like paragraphs, heading etc so we need portabletext




function Singleblog(){

    const [singlepost, setsinglepost] = useState(null);

    const {slug} = useParams();

    useEffect(()=>{
        SanityClient.fetch(
            `*[_type == 'post' && slug.current == $slug][0]{
            title,
            slug,
            mainImage{   
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name" : author->name ,
            "author": author->image.asset->url
            }`,{slug}

            
        ).then((data)=> setsinglepost(data))
        .catch((error)=>{
            console.log("Error loading Blog")
        })

    },[slug]);

    if (!singlepost) return <div className="p-12">Loading blog...</div>;



        return (
    <div className="bg-green-200 min-h-screen p-6 md:p-12">

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

            {/* Blog Image */}
            {singlepost.mainImage?.asset?.url && (
                <img
                    src={singlepost.mainImage.asset.url}
                    alt={singlepost.title}
                    className="w-full h-64 md:h-96 object-cover"
                />
            )}

            <div className="p-8 md:p-12">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {singlepost.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 mb-8">

                    {singlepost.author && (
                        <img
                            src={singlepost.author}
                            alt={singlepost.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    )}

                    <p className="text-gray-600">
                        By {singlepost.name}
                    </p>

                </div>

                {/* BLOG BODY */}
                <div className="prose prose-lg max-w-none text-gray-700">
                    <PortableText value={singlepost.body} />
                </div>

            </div>

        </article>

    </div>
);


}
export default Singleblog
