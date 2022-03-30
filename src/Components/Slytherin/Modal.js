import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '20px',
    left: '20%',
    transform: 'translate (-50%, -50%)',
    backgroundColor :'#000',
    color :'white',
    padding: '10px',
    border: '4px solid #155715',
    zIndex: '1000',
    fontsize: '20px',
}

export default function Modal ({open, children, onClose}){
    if (!open) return null

return (
    <div style={MODAL_STYLES}>
        <button onClick={onClose}> X </button>
        {children}
    </div>
)
}