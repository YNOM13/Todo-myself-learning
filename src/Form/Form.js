import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            value:'',
            date:new Date().toISOString().substring(0,10)
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit (e) {
        e.preventDefault()

        this.props.onSaveValue(this.state)
        this.setState({
            comment:'',
            value:'',
            date:new Date().toISOString().substring(0,10),

        })
    }
    onChange = (e) => {
        const {value, name} = e.target
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="comment" onChange={this.onChange} value={this.state.comment}/>
                <input type="number" name="value" onChange={this.onChange} value={this.state.value}/>
                <input type="date" name="date" onChange={this.onChange} value={this.state.date}/>
                <button>Add</button>
            </form>
        );
    }

}
export default Form