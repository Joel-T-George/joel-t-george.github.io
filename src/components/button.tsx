

const Button = (props:any)  => {
    return (
    	<button type={props.type} className={props.className} >{props.name} </button>
        
    );
};

export default Button;
