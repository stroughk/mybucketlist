import React from 'react'
import {connect} from 'react-redux'

import {createCategory} from '../actions/createCategory'

class CategoryInput extends React.Component {
    state = {name: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCategory(this.state)
        this.setState({
            name: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>My Bucket List Category</label>
                    <input type='text' placeholder="Category Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createCategory})(CategoryInput)