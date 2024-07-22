
const AboutUs = () => {
    return (
        <section className="bg-[#0F1011] h-fit items-center mx-auto text-white ">
        <div className="container p-[2rem]">
            <h1 className="font-Poppins_bold text-4xl text-blue-400 pb-[1%] ">About Me</h1>
                <p>
                I am Joel T George, an engineer with a B.E. degree from Kings Engineering College. I have a strong interest in modern technologies and enjoy using them to solve real-world problems. With expertise in both software development and electronic product design, I have completed two significant research projects that provided valuable solutions using advanced technologies.
                <br/>
                <br/>
                I continually upgrade my skills to stay current with industry trends. I excel in developing innovative software applications, full-stack applications, and designing efficient electronic products. My portfolio includes projects like a continuous health monitoring wearable device, which uses IoT and GSM technology for real-time data and alerts, showcasing my ability to blend hardware and software effectively.
                <br/>
                <br/>
                I am eager to work with IT and research-based companies, where I can apply my knowledge and passion for technology to create impactful solutions.
                <br />
                <br />
                </p>
            
            <div className="flex md:flex-row flex-col gap-4">
                <div className="p-[1%] border border-blue-500 rounded-lg hover:border-white">Software Developer</div>
                <div className="p-[1%] border border-orange-400 rounded-lg hover:border-white">Electronic Engineer</div>
                <div className="p-[1%] border border-green-300 rounded-lg hover:border-white">Medical Device Engineer</div>
                <div className="p-[1%] border border-purple-400 rounded-lg hover:border-white">Technical Trainer</div>
                <div className="p-[1%] border border-yellow-500 rounded-lg hover:border-white">Freelancer</div>
            </div>

        	
        </div>
        </section>
    );
};


export default AboutUs;
