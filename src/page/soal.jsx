import axios from "axios";
import { useEffect, useState } from "react";
import Kumpulansoal from "../component/kumpulansoal";
import {useNavigate} from 'react-router-dom';
import Timer from "../component/Timer";

const Soal = () => {
    const [data, setData] = useState([])
    const [nomersoal, setNomerSoal] = useState(1);
    const [length, setLength] = useState(0);
    const [salah, setSalah] = useState(0);
    const [benar, setBenar] = useState(0);
    const [jawaban, setJawaban] = useState("");
    const [timer, setTimer] = useState('00:00:00');
    const [tidakdikerjakan, setTidakdikerjakan] = useState(0);

    const total =  100 / length * benar;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://62d53921d4406e523555c178.mockapi.io/api/ranto-dot/soalEssai/${nomersoal}`)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.log(err)
            }
        )
    },[nomersoal])
    useEffect(() => {
        axios.get(`https://62d53921d4406e523555c178.mockapi.io/api/ranto-dot/soalEssai`)
            .then(res => {
                setLength(res.data.length)
            }).catch(err => {
                console.log(err)
            }
        )
    },[nomersoal])

    const handleNext = () => {
        if(nomersoal <= length+1){
            setNomerSoal(nomersoal + 1)
            if(jawaban === data.jawaban){
                setBenar(benar + 1);
                setJawaban("");
            }else{
                setSalah(salah + 1);
                setJawaban("");
            }
            setJawaban("");
        }else{
            navigate('/hasil', {state:{benar:benar, salah:salah, total:total, tidakdikerjakan: length - salah - benar}})
        }
        setJawaban("");
    }

    const handleSubmit =()=>{
        navigate('/hasil', {state:{benar:benar, salah:salah, total:total, tidakdikerjakan: length -  salah - benar}})
    }

    useEffect(()=>{
        if(timer === '00:00:01'){
            navigate('/hasil', {state:{benar:benar, salah:salah, total:total, tidakdikerjakan: length -  salah - benar}})
    }},[timer])
   
  return (
    <div className="">
        <div className="d-flex justify-content-center navbar navbar-light bg-light font-monospace">
            <div className="font-Navbar" >Ujian kelas matematika ranto dot magang</div>
        </div>
            <div className="d-block">
                <Timer timer={timer} setTimer={setTimer}/> 
            </div>
        {nomersoal !== length +1 ? (
            <div className="Kumpulan-soal  ">
            <Kumpulansoal 
            data={data} 
            setJawaban={setJawaban}
            jawaban={jawaban}
            />
          </div>
        ):(
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary ms-3 me-3" onClick={handleSubmit}>selesai</button>
            </div>
        )}

        <div className="position-absolute bottom-0 end-0 mb-1">
            <div className="">
                <span>
                    soal ke {nomersoal} / {length} 
                </span>
                {nomersoal !== length + 1 ?(
                    <button type="button" className="btn btn-primary ms-3 me-3" onClick={handleNext}>
                    next
                </button>
                ):(
                    null
                )}
            </div>
        </div>

    </div>
  )
}

export default Soal