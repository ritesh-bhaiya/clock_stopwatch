function updateClock(){
 let now=new Date();
 let hours=now.getHours().toString().padStart(2,'0');
 let minutes=now.getMinutes().toString().padStart(2,'0');
 let seconds=now.getSeconds().toString().padStart(2,'0');
// padstart(2,0) ensures that at least 2 digits must be present say 9 it will replace it by 09

let clock=document.getElementById('clock');
if(clock){ 
     clock.textContent=`${hours}:${minutes}:${seconds}`;
}
}


setInterval(updateClock,1000);
updateClock();// if we remove this then  also the clock will work properly 
// but as the page will load it will take 1 second to display the time 


let timerdisplay=document.querySelector('.stp');
let startbutton=document.getElementById('start');
let stopbutton=document.getElementById('stop');
let resetbutton=document.getElementById('reset');

let ms=0;
let s=0;
let m=0;
let timerid=null;// this we will used to reset the timer 
function starttimer(){
     ms++;
     if(ms==100){//100ms= 1s //we are taking
          ms=0;
          s++;
          if(s==60){
            s=0;
            m++;
          }
     }
  let msstr=   ms.toString().padStart(2,'0');
     let sstr=s.toString().padStart(2,'0');
      let mstr= m.toString().padStart(2,'0');
       timerdisplay.innerHTML=`${mstr}:${sstr}:${msstr}`;

}
startbutton.addEventListener('click',function(){
     if(timerid!=null){
           clearInterval(timerid);
     }
     timerid=setInterval(starttimer,10);


});
stopbutton.addEventListener('click',function(){
      clearInterval(timerid);

});

resetbutton.addEventListener('click',function(){
    clearInterval(timerid);
    timerid=null;
    ms=0;
    s=0;
    m=0;
    timerdisplay.innerHTML=`00:00:00`;
});

