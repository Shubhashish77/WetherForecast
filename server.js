const apikey = "eHb7pHWoj1Wm08paJ3BFox5CD1w3W9wm";

const getwether = async(id)=>{

     const  url = "http://dataservice.accuweather.com/currentconditions/v1/"
     const  query = `${id}?apikey=${apikey}`;
     const response = await fetch(url+query);
     const data = await response.json();

     return data[0];
};

const getcity = async (city) =>{
const url = "http://dataservice.accuweather.com/locations/v1/cities/search"
const query = `?apikey=${apikey}&q=${city}`;
const response = await fetch(url+query);
const data = await response.json();
return data[0];

};
   
// getcity("patna")
//     .then(data=>{
//         return getwether(data.Key);
//     }).then(data => {

//         console.log(data);
//     }) 
//     .catch(err=>console.log(err)); 
   
//http://dataservice.accuweather.com/locations/v1/cities/search