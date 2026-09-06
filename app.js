const names=["Aarav", "Ananya", "Vivaan", "Diya", "Kabir", "Isha", "Arjun", "Mira", "Rohan", "Sanya"]
let name=document.querySelector("#name")


function randIx(arr){
    let random=Math.floor(Math.random()*arr.length-1)+1
    return random
}
setInterval(()=>{
    let random=randIx(names)
    document.querySelector("#name").textContent= names[random]

},500)


