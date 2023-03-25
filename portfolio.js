const Url="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const ke="Hp4kZvNGWfTtWkVEq/l8rQ==S6uwExmvK1QaCMy7";
insert=document.getElementById("insert");
const btn=document.getElementById("btn");
const options={
  method:"GET",
  headers:{
    "X-Api-Key":ke,
  },
};
async function hh(){
  try{
    insert.innerHTML="loading...."
  const response=await fetch(Url,options);
  data=await response.json()
  insert.innerText=data[0].joke;

  }
  catch(error){
    insert.innerHTML="an error happend"
    console.log(error);
  }

}
