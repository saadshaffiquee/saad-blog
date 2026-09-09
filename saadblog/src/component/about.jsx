import React from "react"
import dp from "../assets/dp.png";


function About() {
    return (
        <div className="bg-green-200 min-h-screen p-6 md:p-12">

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">

                <div className="flex items-center gap-10">

                    {/* Small Image on Left */}
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center">
                        <p className="text-gray-400 text-sm">
                            <img src={dp} alt="" />
                        </p>
                    </div>

                    {/* Text on Right */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                            Hi, I am Saad...
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            All I do is read, write, speak, code, create and think.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About