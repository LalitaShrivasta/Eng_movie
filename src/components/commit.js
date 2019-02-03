import React, {Component} from 'react';
import './commit.css';

class Input extends Component{
    constructor() {
        super();

        this.state = {
            data: [],
            value: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value : event.target.value
        });
    }

    add = (e) => {
        const data = this.state.data;
        const value = this.state.value;
        data.push(value);
        console.log(data)
        this.setState({
            data,
            value: ''
        });
		}
			
   

    render() {
        return (
        <div className="body">
           <h1 className="header-text" style={{marginTop:"24px",marginLeft:"254px"}}>Please Give Feedback</h1>
            <input type="text" className="input-field" value={this.state.value}
            onChange={this.handleChange}/>
            <br/>
    
            <button className="btn" onClick={this.add}> 
            Comment </button>
            
            <ul className = "ul">
			{this.state.data === [] ? null : this.state.data.map((todo, index) => {
			return <div key={index}>
				<li style={{color:"white"}}>{todo}</li> 
				</div>
			})}
			</ul>
        </div>
        )
        
    }
}

export default Input