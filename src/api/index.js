import axios from "axios"
let base_url ="https://api.magicindi.com";
let local_url="http://localhost:9000"

export const getList = async () => {
    try {
      const response = await axios.get(`${base_url}/get-list`);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  };


  export const login = async (body) => {
    try {
    
      const response = await axios.post(`${base_url}/admin/login`,body);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  };


  export const fetchUser = async()=>{
    try {
    
      const response = await axios.get(`${base_url}/admin/fetchUser`);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  }

  export const addEmployee = async(data)=>{
    try {
    
      const response = await axios.post(`${base_url}/admin/submitUser`,data);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  }

  export const addCategoryData=async(data)=>{
    try{
      const response = await axios.post(`${base_url}/admin/addCategory`,data);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component

    }catch(err){
      throw new Error(err.message); 
    }
  }