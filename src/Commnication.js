import React, {Component} from 'react';

const Commnication = ({call, counter}) =>{
		return(
			<div className="Commnication">
			hello i am{counter}
			<button onClick={call}>Clickme</button>
			
			</div>
		);
	}


export default Commnication;