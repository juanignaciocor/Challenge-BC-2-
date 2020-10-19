import axios from "axios"

export const fetchUser=async ()=>{
  try{
    const allUsers= await axios.get("http://localhost:8080/api/user")
    return allUsers
  }
  catch(err){
      console.log(err)
  }
}
