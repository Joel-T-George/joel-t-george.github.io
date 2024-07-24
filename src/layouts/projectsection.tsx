
import ProjectList from './../components/projectlist.tsx'


const ProjectSection = () => {
    return (
    	<div className="bg-[#000627]">
        <section className="container text-white p-[2rem]">
        	<h1 className="font-Poppins_bold text-4xl text-purple-500 p-[1%] pl-[0]">Top Projects</h1>
        	<p className="pt-[1%] pb-[1%]">Here, I showcase my expertise in leveraging modern technologies and my skills in software development and electronic product design. Each project reflects my commitment to solving real-world problems through innovative solutions.</p>

        	<ProjectList />
        </section>
        </div>

        
    );
};


export default ProjectSection;
