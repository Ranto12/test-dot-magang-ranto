import axios from "axios";
import { useEffect, useState } from "react";
import Kumpulansoal from "../component/kumpulansoal";
import {useNavigate} from 'react-router-dom';

const Soal = () => {
    const [data, setData] = useState([])
    const [nomersoal, setNomerSoal] = useState(1);
    const [length, setLength] = useState(0);
    const [salah, setSalah] = useState(0);
    const [benar, setBenar] = useState(0);
    const [jawaban, setJawaban] = useState("");
    const total =  100 / length* benar;
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
            }else{
                setSalah(salah + 1);
            }
        }else{
            navigate('/hasil', {state:{benar:benar, salah:salah, total:total}})
        }
        setJawaban("");
    }

    const handleSubmit =()=>{
        navigate('/hasil', {state:{benar:benar, salah:salah, total:total}})
    }
   
  return (
    <div className="">
        <div className="d-flex justify-content-center navbar navbar-light bg-light font-monospace">
            <div className="font-Navbar" >Ujian kelas matematika ranto dot magang</div>
        </div>
        {nomersoal !== length +1 ? (
            <div className="Kumpulan-soal  ">
            <Kumpulansoal 
            data={data} 
            setJawaban={setJawaban}
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