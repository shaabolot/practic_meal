import React from 'react'

const List = ({items, renderitem}) => {
    return <>{items.map(renderitem)}</>
}

export default List