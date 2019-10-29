import React ,{Component} from 'react';


class Scroll extends Component {
	render(){
		return (
		  <div style={{overflowY:'scroll', border:'1px solid blue', height:'800px'}}>
		  	{this.props.children}
		  </div>
			);
	}
}




export default Scroll;