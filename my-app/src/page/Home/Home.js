import React,{useEffect,useState} from 'react';
import Header from "../../Components/Header"
import h from './home.module.scss'
import PassagerTable from './components/passager'
import {fetchUser,AgreedPackage,RetiredPackage,sendUser} from "../../Services/user"
import {  notification } from 'antd';

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
  const args={
      message: 'El packete se agrego , muchas gracias!',
      description:`Usted agrego ${sendBody.name}, que posee una categoria de clase ${sendBody.category}` ,
      duration: 3,
      
    }
    notification.open(args);
    getAllUser()
  }

  const removePackage = async (id)=>{
    const send= await RetiredPackage(id)
    const args={
      message: 'Se retiraron todos los packetes del usuario!',
      description:`Usted retiro todos sus packetes, actualmente estan en estado retired. Ahora puede agregar 3 nuevos packetes!` ,
      duration: 3,
      
    }
    notification.open(args);
    getAllUser()
  }
 
  const postUser= async (dataUser)=>{
    const createUser= await sendUser(dataUser)
    const args={
      message: `Hey hey , bienvenido a bordo ${dataUser.full_name}!`,
      duration: 3,
      
    }
    notification.open(args);
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
