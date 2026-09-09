import React, {useState, useEffect} from "react"
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

function Project(){
    const [project, setproject] = useState([])

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type== "project"]{
            _id,
            title,
            date,
            category,
            number,
            link,
            body

            }`
        ).then((data)=>{
            setproject(data)
        })
        .catch((fetcherror)=>{
            console.log(fetcherror)

        })
    },[])


    
    return(<div className="bg-green-200 min-h-screen p-12"> 
    <section className="container mx-auto ">
        <h1 className="text-5xl flex justify-center textstyle1">
            Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {project.map((project,index)=>{
                return(
                <Link to = {`/singleproject/${project._id}`} key={project._id}>
                                                <article className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">

                                <h2 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h2>

                                <div className="space-y-2 text-gray-600">

                                    <p>
                                        <span className="font-semibold">Date:</span>{" "}
                                        {project.date}
                                    </p>

                                    <p>
                                        <span className="font-semibold">Team:</span>{" "}
                                        {project.number}
                                    </p>

                                    <p>
                                        <span className="font-semibold">Category:</span>{" "}
                                        {project.category}
                                    </p>

                                </div>

                                <div className="mt-6">
                                    <span className="text-blue-600 font-semibold">
                                        View Project →
                                    </span>
                                </div>

                            </article>
                        </Link>
                    );
                })}

            </div>

        </section>

    </div>
)}

export default Project