import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://restcountries.eu/rest/v2/all"

function useDatas(searchTerm:string) {
  const [datas, setDatas] = useState<any[]>([]);
  const [filterData,setFilteredDatas] = useState<any[]>([])
  useEffect(() => {
    const hook = async () => {
      const response = await axios.get(baseURL);
      setDatas(response.data)
    };
    hook()
  }
  , []);
  useEffect(()=> {
    return localStorage.setItem('countries', JSON.stringify(datas))
  },[datas])
  useEffect(()=> {
    const hook = async () => {

      const data = localStorage.getItem('countries');
      if(data) {
        const result = JSON.parse(data)
        setFilteredDatas(result)
      }
    }
    hook()
  },[searchTerm])
    useEffect(()=>{
      function hook(){
        const results = datas.filter(
          f=>
          f.name.toLowerCase().includes(searchTerm.toLowerCase())
          || 
          f.region.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setFilteredDatas(results)
      };
     hook();
    }, [datas,searchTerm]);

  return filterData;
}

export default useDatas;;

