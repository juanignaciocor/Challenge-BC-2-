import React,{useEffect,useState} from 'react';
import Header from "../../Components/Header"
import h from './home.module.scss'
import PassagerTable from './components/passager'
import {fetchUser} from "../../Services/user"

const Home=()=> {
  const [passager,setPassager]=useState([])

  useEffect(()=>{
    getAllUser()
  },[])

  const getAllUser=async ()=>{
    const getUsers= await fetchUser()
    setPassager(getUsers)
  }
  return (
    <div>
      <Header></Header>
      <div className={h.container}>
    <PassagerTable></PassagerTable>
      </div>
    </div>
  );
}

export default Home;
