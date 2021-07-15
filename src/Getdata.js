import axios from "axios"

const baseUrl = "https://api.shrtco.de/v2/shorten?"

export  const  getShorteddata = async (inputvalue) => {

    try{
        const {data} = await axios.get(baseUrl + `url=${inputvalue}`);
        return data ;
    }catch(error){
        console.log(error.message);
    }
}