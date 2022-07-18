import {useLocation, useNavigate} from 'react-router-dom';

const Hasil = () => {
    const location = useLocation();
    const benar = location.state.benar;
    const salah = location.state.salah;
    const total = location.state.total;
    const tidakdikerjakan = location.state.tidakdikerjakan;
    const navigate = useNavigate();
    const handleSelesai = () => {
        navigate('/')
    }
  const handlekeluar = () => {
    localStorage.removeItem('username');
    navigate('/login')
  }
  return (
    <div className=' flex-column hasil'>
        <div className='d-flex justify-content-center'>HASIL ANDA</div>
        <div className='d-flex justify-content-center'>benar = {benar}</div>
        <div className='d-flex justify-content-center'>salah = {salah}</div>
        <div className='d-flex justify-content-center'>tidak dikerjakan = {tidakdikerjakan}</div>
        <div className='d-flex justify-content-center'>Nilai = {total}</div>
        <div className='justify-content-center d-flex'>
        <button className='btn btn-primary ms-3 me-3' onClick={handleSelesai}>kembali ke soal</button>
        <button className='btn btn-primary ms-3 me-3' onClick={handlekeluar}>Keluar</button>
        </div>
    </div>
  )
}

export default Hasil