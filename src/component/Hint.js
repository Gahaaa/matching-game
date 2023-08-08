import React from 'react'

const Hint = ({hint, setHint, setOpenAni, setAnimate}) => {

  //   힌트 노출
  const useHint = () =>{
    if(hint === 0){
        console.log('힌트소진');

        return false;
    }
    setHint(hint => hint-1);
    setOpenAni(true);
    setAnimate(true);
    setTimeout(()=>{
        setOpenAni(false);
        setAnimate(false);
    }, 2500);


  }

  return (
    <div className="hint_section">
        <button 
        className={`btn_hint ${hint === 0? 'off': ''}`}
        onClick={useHint} 
        >hint
        </button>
        <p>남은 힌트 : <strong>{hint}</strong></p>
    </div>
    
    
  )
}

export default Hint;