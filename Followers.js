let bobsFollowers = ["Jeremiah","Joe","Dave","Paul"]
let hannahsFollowers = ["Paul","Jane","James","Joe"]
for(let i = 0; i < bobsFollowers.length; i++){
    for(let x = 0; x<hannahsFollowers.length; x++){
        if (bobsFollowers[i]==hannahsFollowers[x]){
            console.log(bobsFollowers[i])
        }
    }
}