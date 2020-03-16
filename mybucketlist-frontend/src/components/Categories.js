import React from 'react'
import CategoryShow from './CategoryShow'

const Categories = (props) => {
    return (
        <div>
            {props.categories.map(category =>
                <div key={category.id}><CategoryShow category={category} /></div>)}
        </div>
    )
}

export default Categories