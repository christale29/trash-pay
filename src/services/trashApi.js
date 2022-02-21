import axios from "axios";

import store from "store"

const  TRASH_API_URL="http://localhost:4040";


 var config ={
     headers:{
         "Content-Type":"application/json",

         "x-api-key":'${store.get("x-api-key")}'


        
       },
 };
 class Application {
    async SigninAccount(data){
        try{
            const response =await axios.post(
                TRASH_API_URL+"/user/login",
            data,config
            );
            store.set("x-api-key",response.data.token);
            return response;

        }catch(error){
            console.log(error.response)
            return error.response
           }
    }
     async createAccount(data){
         try{
             const response =await axios.post(
                 TRASH_API_URL+"/user/register",
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
        
            async signin (data){
           try{
               const response =await axios.post(
                TRASH_API_URL + 'user/login',
                data,
                config  
               );
               store.set('x-api-key',response.data.token);
               return response;
           } catch(error){
               //console.log(error.response);
               return error.response;
           }
            }
        
       
 }
 export default new Application();