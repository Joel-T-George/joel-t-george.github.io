

const InputLabel = (props:any) => {
    return (
    	<>
    		<label htmlFor={props.id}>{props.label}</label>
            <input 
            	type={props.type} 
            	id={props.id} 
            	value={props.value} 
            	placeholder={props.placeholder} 
            	className="text-black w-[100%] border-2 border-blue-900 rounded-lg p-2 mb-[3%]"

            	onChange={props.onChange } />

    	</>
        
    );
};


export default InputLabel;
