import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
function Navbar(){
    return(<div>
        <header className="bg-red-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"  end 
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black text-5xl 
                    font-bold cursive tracking-widest transition-transform duration-200 hover:scale-105"
                    >
                        Saad's
                    </NavLink>
                    <NavLink to = '/post' className= "inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-black hover:scale-105 transition-transform duration-200 textstyle1 ">
                        Blogs
                    </NavLink>
                    <NavLink to = '/quote' className= "inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-black hover:scale-105 transition-transform duration-200 textstyle1">
                        Quotes
                    </NavLink>
                    <NavLink to = '/project' className= "inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-black hover:scale-105 transition-transform duration-200 textstyle1 ">
                        Projects
                    </NavLink>
                    <NavLink to = '/about' className= "inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-black hover:scale-105 transition-transform duration-200 textstyle1 "
                    activeClassName = "text-red-600">
                        About
                    </NavLink>
                </nav>
            

             {/* social icons */}

             <div className="inline-flex py-3 px-3 my-6 ">
                <SocialIcon url="https://x.com/saadshafiquee" className="mr-4" target="_blank" fgcolor = "#fff"  style = {{height:35, width:35}}>

                </SocialIcon>
                <SocialIcon url="https://www.instagram.com/" className="mr-4" target="_blank" fgcolor = "#fff" style = {{height:35, width:35}}>
                    
                </SocialIcon>
                <SocialIcon url="https://www.instagram.com/" className="mr-4" target="_blank" fgcolor = "#fff" style = {{height:35, width:35}}>

                </SocialIcon>
                <SocialIcon url ="https://www.instagram.com/" className="mr-4" target="_blank" fgcolor = "#fff" style = {{height:35, width:35}}>
                    
                </SocialIcon>
                </div>
                
                


            </div>
        </header>



    </div>)

}

export default Navbar
