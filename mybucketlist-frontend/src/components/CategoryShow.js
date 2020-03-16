import React from 'react'


const Category = (props) => {

    let category = props.categories[props.match.params.id -1]
    
    return (
        <li>
            {category ? category.name : null}
        </li>
    )
}

export default Category 