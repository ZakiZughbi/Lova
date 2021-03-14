
const menuBars = document.querySelector('.menuBars');
const navLinks = document.querySelector('.navlinks');
const translateBtn = document.querySelector('.translateContainer img');
const lan = document.querySelector('.lanContainer');
const arabic = document.querySelector('.lan').children[0];
const spainsh = document.querySelector('.lan').children[1];
const english = document.querySelector('.lan').children[2];
const homeHeader = document.querySelector('.homeImg1 h2')
let clicked = 0;
let lanClicked = 0;
const headerList = ['Creativity', 'Simplicity', 'Modernity'];

const contactBtn = document.querySelector('.navlinks').children[2];


menuBars.addEventListener('click', ()=>{
    clicked ++;
    if (clicked == 1){
        menuBars.children[0].style.animation="bar1In 0.5s forwards";
        menuBars.children[1].style.animation="bar2In 0.5s forwards";
        menuBars.children[2].style.width="0";
        navLinks.style.width="100%";
    } else{
        clicked = 0;
        menuBars.children[0].style.animation="bar1out 0.5s forwards";
        menuBars.children[1].style.animation="bar2out 0.5s forwards";
        menuBars.children[2].style.width="30px";
        navLinks.style.width="0%";
    }
});

translateBtn.addEventListener('click', ()=>{
    lanClicked ++;
    if (lanClicked == 1){
        //lanClicked = 0;
        lan.style.display="block";
    } else{
        lanClicked = 0;
        lan.style.display="none";
    }


});


// setTimeout(()=>{
//     for(let i=0; i<headerList.length; i++){
//         homeHeader.innerHTML=''
//         homeHeader.innerHTML=headerList[i]
//     }
// }, 5000)

// for(let i=0; i<headerList.length; i++){
//     setTimeout(()=>{
//         homeHeader.innerHTML='';
//         homeHeader.innerHTML=headerList[i];
//     }, 3000)
// }

contactBtn.addEventListener('click', ()=>{
    window.location.replace("./contact.html");
    console.log('yes');
});
