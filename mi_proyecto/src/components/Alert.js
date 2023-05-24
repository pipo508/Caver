import React from 'react'

export const Alert = (props) => {
  return (
    <div>
        <div>
            <div className={props.color} role="alert">
                <h1>{props.texto}</h1>
            </div>
        </div>
    </div>
  )
}
