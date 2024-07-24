import ContactForm from './../components/contactform.tsx'


const ContactSection = () => {
        return (
        <section className="bg-[#000007] h-fit text-white">
            <div className="container p-[2rem]">
                <h1 className="font-Poppins_bold text-4xl ">Contact Me</h1>
                <p>Let's Transform <span className="text-blue-800"> Ideas </span>into <span className="text-blue-300 text-2xl">Reality</span>, Get in Touch and Follow on <span className="text-purple-500">Social Media!</span></p>
            
            <div className=" grid grid-col-1 md:grid-cols-2 gap-4 place-items-center pt-[2%]" >
            <ContactForm />
            
                
            </div>
            </div>
            
        </section>
            
        
    );
};

export default ContactSection;
