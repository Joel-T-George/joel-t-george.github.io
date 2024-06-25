import SvgButton from './toggleButton.tsx'
import { useState } from 'react'

var menupath ="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
var closepath = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"


const ToggleFunction =(toggle:any,settoggle:any)=>{
	
	const toggleWindow = document.querySelector('.toggle-link')!
	toggleWindow.classList!.toggle('top-[11%]')
	
	if(toggle){
		
        settoggle(false)
        
	}
    else{
        settoggle(true)
        
    }

}
const Navbar = () => {
	const [toggle,settoggle] = useState(false)
    return (
    	
        <nav className="flex justify-between items-center bg-gray-900 w-[96%] mx-auto mt-[1%] p-3 rounded-md">
        	<div>
        		<a href="#" className="text-white text-2xl font-semibold tracking-wide">Joel T George</a>
        	</div>
        	<div className="duration-300 toggle-link md:static absolute md:min-h-fit min-h-[30vh] left-[3%]  top-[-100%] bg-gray-900 opacity-90 md:opacity-100 w-[94%] rounded-[1%] flex px-3 md:w-auto duratation-150 ease-in">
        		<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 pt-2 md:pt-0">
        			<li >
        				<a href="#" className="text-white hover:text-blue-500 font-medium tracking-wide">Home</a>
        			</li>
        			<li>
        				<a href="#" className="text-white hover:text-blue-500 font-medium tracking-wide">Projects</a>
        			</li>
        			<li>
        				<a href="#" className="text-white hover:text-blue-500 font-medium tracking-wide">Read Me</a>
        			</li>
        			<li>		
        				<a href="#" className="text-white hover:text-blue-500 font-medium tracking-wide">Contact</a>
        			</li>
        		</ul>
        	</div>
        	<div className="flex">
        		<button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-800 font-semibold tracking-wide" >Resume</button> 
        		<button className="md:hidden block" onClick={ ()=>{
        			ToggleFunction(toggle,settoggle)
        		}
        		}> {toggle ? <SvgButton path={closepath}/> : <SvgButton path={menupath}/>}</button>
        		
        		


        	</div>

        </nav>	
    );
};




export default Navbar;
