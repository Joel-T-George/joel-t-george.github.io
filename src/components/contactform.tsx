import { useState } from 'react'
import Button from './button.tsx'
import InputLabel from './inputwithlabel.tsx'

const ContactForm = () => {
    const [name,setName] =useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone] =useState('');
    const [message, setMessage]= useState('');


    const handleSubmit =(e:any)=>{
        e!.preventDefault();

        console.log("Sucessfully Sended message");

    }

    return (
        <div className="w-[100%]">
            <form onSubmit={handleSubmit} >
                
                <InputLabel label="Name" type="text" id = "name" placeholder = "Your Name" value={name} onChange={(e:any) => { setName(e.target.value)}}/>

                <InputLabel label="Email" type="email" id = "email" placeholder = "founder@company.com" value={email} onChange={(e:any) => { setEmail(e.target.value)}}/>
                <InputLabel label="Phone Number (Optional)" type="text" id="Phone" placeholder="+91 99999 77777" value={phone} onChange={(e:any)=>{
                    setPhone(e.target.value)
                }}/>
                <label htmlFor="message">Message</label>
                <textarea id="message" className="text-black w-[100%] border-2 border-blue-900 rounded-lg p-2 mb-[3%]" placeholder="Message" rows={4} value={message} onChange={(e:any)=>{setMessage(e.target.value)}}></textarea>

                <Button type="submit" name="Send" className="w-full bg-purple-600 rounded-md p-2 mt-2" />
            </form>
        </div>
    );
};




export default ContactForm;
