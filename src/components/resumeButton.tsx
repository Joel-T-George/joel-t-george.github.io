import JoelResume from '/documents/Joel_T_George.pdf'



const ResumeButton = (props:any) => {
	function DownloadResume (){
        const atag = document.createElement('a');
        atag.href =JoelResume;
        atag.setAttribute('download', 'Joel_T_George_Resume');
        
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }
    return (
		<>
			<button onClick={DownloadResume} className={props.className}>{props.name}</button>
		</>
        
    );
};



export default ResumeButton;
