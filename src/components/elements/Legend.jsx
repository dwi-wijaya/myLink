import React from 'react'

const Legend = ({ title, className, children }) => {
    return (
        <div className={`relative border mb-6 border-slate-500 border-slate-500 p-4 py-5 rounded-lg ${className}`}>
            <div className="text-lg absolute -top-4 bg-background px-2 font-semibold tracking-wide">{title}</div>
            {children}
        </div>
    )
}

export default Legend