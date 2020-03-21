import React from 'react'
import WishInput from '../components/WishInput'
import Wishes from '../components/Wishes'

class WishesContainer extends React.Component {
    render() {
        return (
            <div>
                <WishInput category={this.props.category} />
                <Wishes wishes={this.props.category && this.props.category.wishes}/>
            </div>
        )
    }
}

export default WishesContainer