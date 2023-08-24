function time_refresh(){
    let time_server = new Date();
    let time_year = "Hozir " + time_server.getFullYear() + " yil davom etmoqda";
let time_month = "Hozirgi oy " + time_server.getMonth() + " davom etmoqda";
let time_day = "Bugungi kun " + time_server.getDay();
const hafta_kunlari = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
]
let time_hour = time_server.getHours();
let time_minut = time_server.getMinutes();
let time_second =  time_server.getSeconds()
let if_else = time_server.getMonth();
document.querySelector(".year").innerHTML = time_year;
if (if_else = 0) {
    document.querySelector(".month").innerHTML = "Yanvar";
}
else if(if_else = 1){
    document.querySelector(".month").innerHTML = "Fevral";  
}
else if(if_else = 2){
    document.querySelector(".month").innerHTML = "Mart";  
}
else if(if_else = 3){
    document.querySelector(".month").innerHTML = "Aprel";  
}
else if(if_else = 4){
    document.querySelector(".month").innerHTML = "May";  
}
else if(if_else = 5){
    document.querySelector(".month").innerHTML = "Iyun";  
}
else if(if_else = 6){
    document.querySelector(".month").innerHTML = "Iyul";  
}
else if(if_else = 7){
    document.querySelector(".month").innerHTML = "Avgust";  
}
else if(if_else = 8){
    document.querySelector(".month").innerHTML = "Santabr";  
}
else if(if_else = 9){
    document.querySelector(".month").innerHTML = "Oktabr";  
}
else if(if_else = 10){
    document.querySelector(".month").innerHTML = "Noyabr";  
}
else {
    document.querySelector(".month").innerHTML = "Dekabr";  
}
let kun = hafta_kunlari[time_server.getDay()]
document.querySelector(".day").innerHTML = kun;
let time_hour_if = "Bugungi vaqt " + "0" + time_hour + " : " + time_minut + " : " + time_second;
let time_time = "Bugungi vaqt " + time_hour + " : " + time_minut + " : " + time_second;
let time_if = "Bugungi vaqt " + time_hour + "0" + " : " + time_minut + " : " + time_second;
let time_second_if = "Bugungi vaqt " + time_hour + " : " + time_minut + " : 0" + time_second;
if(time_hour < 10){
    document.querySelector(".time").innerHTML = time_hour_if;
}
else{
    document.querySelector(".time").innerHTML = time_time;
}
if(time_minut < 10){
    document.querySelector(".time").innerHTML = time_if;
}
else{
    document.querySelector(".time").innerHTML = time_time;
}
if(time_second < 10){
    document.querySelector(".time").innerHTML = time_second_if;
}
else{
    document.querySelector(".time").innerHTML = time_time;
}
}
setInterval(time_refresh, 1000)
time_refresh()