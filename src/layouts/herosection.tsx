import JoelImage from './../assets/images/Joel_T_George.png'
const HeroSection = () => {
    return (
        <>
        <div className="container h-[100vh] w-[92%]">
    	<div className="container grid grid-col-1  place-content-center item-center mt-[15%] md:mt-[5%]">
            <div className=" flex items-center pr-[5%] md:flex-row flex-col bg-opacity-20  hover:border-indigo-900 md:h-[70vh] h-[80vh] md:w-[70vw] w-[70vw] rounded-md">
                <div className="container text-center pb-[5%] md:text-left pl-[5%]">
                    <p className="text-white font-Poppins text-1xl"><span className="text-blue-300">I</span>'m <br/>
                        <h1 className="font-Poppins_bold text-4xl">Joel T George,</h1>  
                        <span className="text-2xl font-Poppins_normal">Transforming <span className="text-blue-500">Ideas</span> into</span> <br />
                        <h1 className="text-5xl text-blue-400"> Reality</h1>
                    </p>
                    <div className="w-full pt-[2%] md:pl-[2%]">
                        <button className="bg-blue-500 hover:bg-blue-800 text-white p-2 m-2 rounded-md">Download CV</button>
                        <button className="bg-gray-900 text-white p-2 m-2 rounded-md border hover:border-blue-400">Contact Him</button>
                    </div>
                </div>
                
                <img src={JoelImage} className="rounded-md size-60 md:size-80"alt="Logo" />                
            </div>
    		
    	</div>  
        <div className="bg-gray-100 w-[92%] mx-auto">
            
        </div>
        </div>
        </>      
    );
};


export default HeroSection;
