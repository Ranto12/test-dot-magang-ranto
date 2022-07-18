import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    useEffect(() => {
        axios.get(`https://62d53921d4406e523555c178.mockapi.io/api/ranto-dot/auth`)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.log(err)
            }
        )
    },[password, username])
   const handleSubmit = (e) => {
    e.preventDefault();
    const filterpw = data.filter(item => item.password === password && item.username === username );
    if (filterpw.length === 1) {
        localStorage.setItem('username', username);
        navigate('/soal');
    } else {
        alert("username atau password salah pw=ranto21 dan user=ranto21")
        console.log("Username atau Password salah");
    }
   }

  return (
    <div className='bgcolor-login' >
        <div className='card-login'>
            <div className='d-flex justify-content-center mt-5 font-monospace'>Login</div>
            <div className='d-flex justify-content-center flex-column align-items-center m-5 card-login-container'>
                <input type="text" placeholder='username' className='OutLine mb-2' onChange={onChangeUsername}/>
                <input type="text" placeholder='password' className='OutLine ' onChange={onChangePassword}/>
                <button className='btn btn-primary ms-3 me-3 d-flex justify-content-center mt-5 font-monospace' onClick={handleSubmit}>
                    submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login