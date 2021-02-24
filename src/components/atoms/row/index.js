import React from 'react'
import PropTypes from 'prop-types'

export default (props) => {
    return(
        <div style = {{display : 'flex',flexDirection : 'row',alignItems : 'center'}} >
            {props.children}
        </div>
    )
}

