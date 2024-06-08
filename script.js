setInterval(function(){

   let h1 = document.querySelector('h1')

let time = new Date();
let hr = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let tZone = "  AM"

if(hr > 12){
    if(hr > 12){
        hr = hr - 12
    }
    tZone = "  PM"
}else{
    tZone = "  AM"
}

if(hr < 10){
    hr = "0" + hr
}else{
    hr
}


if(min < 10){
    min = "0" + min
}else{
    min
}



if(sec < 10){
    sec = "0" + sec
}else{
    sec
}







h1.textContent = hr + ":" + min + ":" + sec+ tZone
},1000)


