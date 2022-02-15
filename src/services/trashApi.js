import axios from "axios";

const  TRASH_API_URL="http://192.168.1.77:4040";


 var config ={
     headers:{
         "Content-Type":"application/json",

       },
 };
 class Application {
     async createAccount(data){
         try{
             const response =await axios.post(TRASH_API_URL+"/user/register",
             data,config
             );
             return response;

         }catch(error){
             console.log(error.response)
             return error.response
            }
     }
     async   getAllUsers(){
         try{
             const response =await axios.get(
                TRASH_API_URL +"/user/getusers",
                 config
             );
             return response;
         }
         catch(error) {
             console.log(error);
         }
        }
       
 }
 export default new Application();