import React from 'react'
import {connect} from 'react-redux'

class WishInput extends React.Component {

    state = {
        content: '',
        fulfilled: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <label>Wish Fulfilled</label>
                    <select name="fulfilled" value={this.state.fulfilled} onChange={this.handleChange}>
                        <option>Fulfilled</option>
                        <option>Not fulfilled</option>
                    </select>
                    <label>Add a wish</label>
                    <input type="text"content="content" value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null)(WishInput) 