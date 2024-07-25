

const MenuList = () => {
    return (
    	<ul className="flex md:flex-row  flex-col md:items-center md:gap-[4vw] gap-6 pt-2 md:pt-0">
			<li >
				<a href="#" className="text-white hover:text-blue-400  tracking-wide">Home</a>
			</li>
			<li>
				<a href="#" className="text-white hover:text-blue-500  tracking-wide">Projects</a>
			</li>
			<li>
				<a href="#" className="text-white hover:text-blue-500  tracking-wide">Stories</a>
			</li>
			<li>		
				<a href="#" className="text-white hover:text-blue-500  tracking-wide">Products</a>
			</li>
			<li>		
				<a href="#" className="text-white hover:text-blue-500  tracking-wide">Contact</a>
			</li>
        </ul>
        
    );
};



export default MenuList;
