import backgroundImage from "../assets/bg.jpeg";

function Home(){
    return(<div>
        <img src={backgroundImage} alt="Background img" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center min-h-screen lg:pt-64 px-8">
            <h1 className="text-6xl text-black textstyle2 leading-none hover:scale-105 transition-transform duration-200">Hi I am Saad Shafique </h1>
        </section>
    </div>)
}

export default Home
