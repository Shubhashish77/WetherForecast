const form = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details"); 
const time = document.querySelector('img.time');
const icon = document.querySelector(".icon img");
const updateUI = (data)=>{

   const cityDets = data.cityDets;
   const wether = data.wether;

   console.log(wether); 
   details.innerHTML = `
     
   <h5 class="my-3">${cityDets.EnglishName}</h5>
   <div class="my-3">${wether.WeatherText}</div>
   <div class="display-4 my-4">
   <span>${wether.Temperature.Metric.Value}</span>
   <span>&deg;c</span>          
   </div> 
   `
   const icondis = `img/icons/${wether.WeatherIcon}.svg`
   icon.setAttribute("src",icondis);
   if(card.classList.contains("d-none"))
   {
        card.classList.remove("d-none");
   }

   if(wether.IsDayTime)
   {
    time.setAttribute("src","img/day.svg");
   }
   else
   {
    time.setAttribute("src","img/night.svg");
   }

};





const updatecity = async (city)=>{
      
        const cityDets = await getcity(city);
        const wether = await getwether(cityDets.Key);

        return {cityDets,wether};  
  
}

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const query = form.city.value.trim();
    form.reset(); 

    updatecity(query).then(data=>{

        updateUI(data);
    }).catch(err=>console.log(err));
});

