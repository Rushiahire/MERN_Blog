import axios from "axios";

const userLogin = async(request) => {
  let response;

    let data = {
        ...request
    }
    console.log("data",data)

    await axios.post("http://localhost:8000/api/user/login",data)
    .then((res)=>{
        console.log("api res",res.data.message)
        response = res.data.message
    }).catch((err)=>{
        console.log(err)
    });
    return response;
};

const getUserLoginApi = (request) => userLogin(request)

export default getUserLoginApi;