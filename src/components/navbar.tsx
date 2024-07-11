import SvgButton from './toggleButton.tsx'
import MenuList from './menulist.tsx'
import ResumeButton from './resumeButton.tsx'
import { useState } from 'react'

var menupath ="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
var closepath = "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"


const ToggleFunction =(toggle:any,settoggle:any)=>{
	console.log("joel")
	//const toggleWindow = document.querySelector('.toggle-link')!
	//toggleWindow.classList!.toggle('top-[11%]')
	
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
    	<>
        <nav className="flex  bg-gray-900 bg-opacity-60	 justify-between items-center  w-[96%] mx-auto mt-[1%] p-3 rounded-md">
        	<div>
        		<a href="#" className="text-white md:text-3xl text-2xl  tracking-wide">Joel T George</a>
        	</div>
        	<div className="md:block hidden">
        		<MenuList />
        	</div>
        	<div className="flex">
                <ResumeButton className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-800 tracking-wide" name="Resume"/>
        		<button className="md:hidden" onClick={ ()=>{ ToggleFunction(toggle,settoggle)}}> 
        			{toggle ? <SvgButton path={closepath}/> : <SvgButton path={menupath}/>}
        		</button> 
        	</div>
        </nav>
        { toggle ? 
        <div className="h-[40vh] bg-gray-900 bg-opacity-60 mt-[2%] container w-[92%] px-2 md:hidden">
        		<MenuList />        	
        </div>	: ""}
        </>

        

    );
};




export default Navbar;
