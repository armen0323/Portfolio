import {useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
const  usePreloader=()=>{
    const location = useLocation();
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },1500)
    },[location])
    return{
        loading
    }
}
export default usePreloader