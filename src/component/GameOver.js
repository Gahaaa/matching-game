import React from 'react'

const GameOver = ({reload}) => {

  return (
    <div className="fail_section">
        <h2>😥Game over😥</h2>
        <button 
        className="button"
        onClick={reload}>RETRY</button>
    </div>
  )
}

export default GameOver;