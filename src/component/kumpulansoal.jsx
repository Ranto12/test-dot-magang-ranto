import React from 'react'

const Kumpulansoal = ({data, setJawaban, jawaban}) => {
    const handleInput =(e)=>{
        setJawaban(e.target.value);
    }
  return (
    <div className='m-4 font-monospace'>
        {/* <div className='nomerSOal' >no {data.nomor}</div> */}
        <div className='mt-5 nomerSOal' > {data.nomor}. {data.soal}</div>
        <div>
            <input type="text" value={jawaban}  className='OutLine ukuranInput' onChange={handleInput}/>
        </div>
    </div>
  )
}

export default Kumpulansoal
