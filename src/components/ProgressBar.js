import React from 'react'

const ProgressBar = ({ number, label }) => {
    let percent = number > 100 ? 100 : number
    let style = {
        width: `${percent}%`
    }
    return (
        <div className="progress-bar d-flex justify-content-start">
            <label>{label}</label>
            <div className="progress-border">
                <div className="progress-content" style={style}></div>
            </div>
        </div>
    )
}

export default ProgressBar