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
    
      const response = await axios.post(`${local_url}/login`,body);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  };


  export const fetchUser = async()=>{
    try {
    
      const response = await axios.get(`${local_url}/fetchUser`);
      
      const result =  response.data;
      return result;  // Return the data to be used by the component
    } catch (err) {
      throw new Error(err.message);  // Throw an error if something goes wrong
    }
  }