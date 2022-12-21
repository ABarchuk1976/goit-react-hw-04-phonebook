import React, {Component}  from "react";

class App extends Component
{
	static defaultProps = {};

	static propTypes = {};
	
	state = {
		good: 0,
		neutral: 0,
		bad:0,
	}

	onLeaveFeedback = evt =>
	{ 
		console.log(evt.props); 
		// this.setState(prevState => ({}) 
	};

	render(
		
	)
}

const App = () =>
{
  return <p></p>;
};
