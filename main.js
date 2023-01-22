let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let NORA = document.querySelector('.NORA');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left= value + 'px';
   moon.style.top= value *2 + 'px';
  mountains3.style.top=value *1.5 +  'px';
mountains4.style.top= value *1.2 + 'px';
moon.style.top=value + 'px';
boat.style.top= value  + 'px';
   boat.style.left= value *3 + 'px';
   NORA.style.fontSize = value + 'px';
    if(scrollY >= 67){
        NORA.style.fontSize = 67 +'px';
        NORA.style.position = 'fixed';
    if (scrollY >= 478){
            NORA.style.display = 'none';
        }else{
            NORA.style.display = 'block';
        }
    }
    if(scrollY >= 67){
    
        moon.style.position = 'fixed';
    if (scrollY >= 478){
            moon.style.display = 'none';
        }else{
            moon.style.display = 'block';
        }
    }
}