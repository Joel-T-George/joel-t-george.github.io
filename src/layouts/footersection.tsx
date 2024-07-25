
const FooterSection = () => {

    return (
    
        <footer className="text-slate-400 bg-zinc-900 font-Poppins_normal">
        	<div className="container text-[0.9rem] grid grid-cols-2 justify-items-start p-[1%]  h-fit">
               <ol>
                    <li><a href="/Services" target="_blank">Products</a></li>
                    <li><a href="/Services" target="_blank">Stories</a></li>
                    <li><a href="/Services" target="_blank">Projects</a></li>
                    <li><a href="/Services" target="_blank">Contact Us</a></li><br />
                    <li className="text-slate-300">Social Media.</li>
                    <li><a href="/Services" target="_blank">LinkedIn</a></li>
                    <li><a href="/Services" target="_blank">Instagram</a></li>
                    <li><a href="/Services" target="_blank">YouTube</a></li>
                    <li><a href="/Services" target="_blank">Facebook</a></li>
                    <li><a href="/Services" target="_blank">Freelancer</a></li>
                    <li><a href="/Services" target="_blank">Github</a></li>

               </ol>
               <div className="text-[0.8rem] self-center self-end">
                   <span className="text-slate-300">Address</span><br />
                   No 42, Mosque Street,<br/>
                   Vadapalani, <br />
                   Chennai, Tamil Nadu, India <br />
                   Ph:9342361225
               </div>
        		
        		
        	</div>
        	<div className="grid justify-items-center bg-zinc-950">
        		<p className="text-slate-600 text-[0.8rem] p-[0.5rem]">© 2024 Joel T George™</p>
        	</div>
        	
        </footer>
        
        	
        
    );
};

export default FooterSection;
