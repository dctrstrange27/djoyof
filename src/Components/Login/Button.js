import React from 'react'
import PropTypes from 'prop-types'
export const Button = ({onClick}) => {
  return (
    <>
    <button class="text-slate-50 bg-cyan-900 px-5 py-1 rounded-md m-2" onClick={onClick}>
     Add
    </button>
    </>
 
  )
}
export default Button

Button.propTypes = {
onClick: PropTypes.func
}
