import React, {Component} from 'react';

class LifeCycle extends Component{

	constructor(props){
    super(props);
    console.log('This is constructor');
    this.state={counter: 1, name:false};
  }

	incrementFun = () =>{
		console.log('this is incrementFun');
		const tempCount=this.state.counter;
		this.setState({counter:tempCount + 1});

		if(tempCount>5){
			this.setState({name:true});
		}
	}

	componentWillMount(){
		console.log('this is Will Mount')
	}

	componentDidMount(){
		console.log('this is Did Mount')
	}

	componentWillReceiveProps(props){
		console.log('this is componentWillReceiveProps ')
		
	}

	shouldComponentUpdate(){
		console.log('this is Shoul Component update');
		console.log(this.state.name);
		return this.state.name;
	}

	componentWillUpdate(){
		console.log('this is Will Update')
	}

	componentDidUpdate(){
		console.log('this is Did update')
	}

	componentWillUnmount(){
		console.log('this is Will unMount')
	}

	render(){
		console.log('this is render');
		return(
			<div>
				<h1>This is lifeCycle of React </h1><br/>
				<h2>This is counter {this.state.counter}</h2>
				<button onClick={this.incrementFun}>counter</button>
			</div>
		);
	}
}

export default LifeCycle;