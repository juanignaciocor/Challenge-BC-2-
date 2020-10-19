import React,{useEffect,useState} from 'react';
import Header from "../../Components/Header"
import h from './home.module.scss'
import PassagerTable from './components/passager'
import {fetchUser,AgreedPackage,RetiredPackage,sendUser} from "../../Services/user"

const Home=()=> {
  const [passager,setPassager]=useState([])
  const [userPackage,setPackage]=useState([])
  useEffect(()=>{
    getAllUser()
  },[])

  useEffect(()=>{

  },[passager])

  const getAllUser=async ()=>{
    const getUsers= await fetchUser()
    setPassager(getUsers)
  }

  const sendPackage = async (sendBody)=>{
    const send= await AgreedPackage(sendBody)
    getAllUser()
  }

  const removePackage = async (id)=>{
    const send= await RetiredPackage(id)
    getAllUser()
  }
 
  const postUser= async (dataUser)=>{
    const createUser= await sendUser(dataUser)
    getAllUser()
  }
  
  return (
    <div>
      <Header></Header>
      <div className={h.container}>
    <PassagerTable
    removePackage={removePackage}
    userPackage={userPackage}
    passager={passager}
    sendPackage={sendPackage}
    postUser={postUser}
    />      </div>
    </div>
  );
}

export default Home;
