


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){

    var conversion=JSON.parse(request.response);
    
    //a.Get all the countries from the Asia continent /region using the Filter function
    var out1=conversion.filter((element)=>element.region=="Asia").map((element)=>element.name);
    console.log(out1);


    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    var out2=conversion.filter((element)=>element.population<200000).map(element=>element.name);
    console.log(out2);

    //c. Print the following details name, capital, flag using forEach function
    var out3=conversion.forEach(element => {

     console.log(element.name,element.flag,element.capital);
    
   });
    

    //d. Print the total population of countries using reduce function
    var fil=conversion.filter(element=>element.population).map((element)=>element.population);
    var out4=fil.reduce((acc,element)=>acc+element);
    console.log(out4);              
    
    
    

    //e.Print the country which uses US Dollars as currency.
    var out5=conversion.filter((element)=>element.currencies[0].code=="USD");
    console.log(out5);
    
}






