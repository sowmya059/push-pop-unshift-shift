let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

function sorting(){
    largeCountries.pop("Monaco")
    largeCountries.push("China")
    console.log(largeCountries)
      
    largeCountries.shift("Tuvalu")
    largeCountries.unshift("Pakisthan")  
    console.log(largeCountries)
    
}
sorting()
