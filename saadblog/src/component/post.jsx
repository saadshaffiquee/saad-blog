import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

function Posts() {
    const [content, setContent] = useState([]);
    
    const [error, setError] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setContent(data || []))
            .catch((fetchError) => {
                console.error(fetchError);
                setError("Unable to load blogs. Please try again later.");
            })
            
    }, []);

    return (
        <div className="bg-green-200 min-h-screen p-12">
           <section  className="container mx-auto ">
            <h1 className="text-5xl flex justify-center textstyle1">Blogs</h1>
            
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.map((post, index)=>(
                <Link to={`/singleblog/${post.slug?.current}`} key={post._id || post.slug?.current || index}>
                
                <article>
                    {/* Article box */}
                    <span className="block h-64 relative rounded shadow leading-sung bg-white border-green-400 " 
                    key={index}>
                        {/* backgroud image of artice */}
                        {post.mainImage?.asset?.url && <img src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title || "Blog image"}
                        className="w-full h-full rounded-r object-cover absolute"/>}
                    

                    {/* title of article */}
                    <span className="block relative h-full flex justify-end items-end pr-3 pb-3">
                        <h3 className="text-white text-lg font-blog px-3 py-4 bg-red-500 text-red-100  bg-opacity-70 rounded-lg" >{post.title}</h3>
                    </span>
                    
                    </span>
                </article>
                
                
                </Link> )) }</div>
            
           </section>
        </div>
    ) ;
}

export default Posts;
