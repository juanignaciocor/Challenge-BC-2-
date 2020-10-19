import axios from "axios"

export const fetchUser=async ()=>{
  try{
    const res= await axios.get("http://localhost:8080/api/user")
    return res.data
  }
  catch(err){
      console.log(err)
  }
}


export const AgreedPackage=async (body)=>{
    try{
      const res= await axios.post(`http://localhost:8080/api/package`,body)
      return res.data
    }
    catch(err){
        console.log(err)
    }
  }
  
  
export const RetiredPackage=async (id)=>{
    let query=`?userId=${id}`
    try{
      const res= await axios.put(`http://localhost:8080/api/package/retired${query}`)
      return res.data
    }
    catch(err){
        console.log(err)
    }
  }
  

  export const sendUser= async (body)=>{
    try{
        const res= await axios.post(`http://localhost:8080/api/user`,body)
        return res.data
      }
      catch(err){
          console.log(err)
      }

  }