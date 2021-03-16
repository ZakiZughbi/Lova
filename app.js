
const menuBars = document.querySelector('.menuBars');
const navLinks = document.querySelector('.navlinks');
const translateBtn = document.querySelector('.translateContainer img');
const lan = document.querySelector('.lanContainer');
const arabic = document.querySelector('.lan').children[0];
const spainsh = document.querySelector('.lan').children[1];
const english = document.querySelector('.lan').children[2];
const homeHeader = document.querySelector('.homeImg1 h2');
let clicked = 0;
let lanClicked = 0;
const headerList = ['Creativity', 'Simplicity', 'Modernity'];
const logoLight = document.getElementById('logo');
const logoDark = document.querySelector('.logoContainer');
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


let i = 1;
function headerLoop(){
    setTimeout (()=> {
        homeHeader.innerHTML=headerList[i];
        i++;
        if (i ==3){
            i = 1;
        }
        if (i < 10) {
            headerLoop();
        }
    }, 5000);
}

headerLoop();

contactBtn.addEventListener('click', ()=>{
    window.location.replace("./contact.html");
});

logoDark.addEventListener('click', ()=>{
    window.location.replace("./index.html");
});

logoLight.addEventListener('click', ()=>{
    window.location.replace("./index.html");
});

let appearOptions = {
  rootMargin: '0px 0px -150px 0px',
  threshold: 1
};

let appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('fadeIn');
            appearOnScroll.unobserve(entry.target);
            entry.target.style.opacity="1";
        }
    });
}, appearOptions);


let slideOnScroll = new IntersectionObserver((entries, slideOnScroll)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('slide');
            appearOnScroll.unobserve(entry.target);
            entry.target.style.opacity="1";
            setTimeout(()=>{
                entry.target.style.transform="translate(15px)";
            }, 1000);

        }
    });
}, appearOptions);

let planScroll = new IntersectionObserver((entries, slideOnScroll)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('planeClass');
            appearOnScroll.unobserve(entry.target);
            setTimeout(()=>{
                entry.target.style.transform="translate(-35px, 33px)";
            }, 2000);
        }
    });
}, appearOptions);


let popOptions = {
  rootMargin: '0px',
  threshold: 1
};

let BtnScroll = new IntersectionObserver((entries, BtnScroll)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('pop');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, popOptions);



const pro = document.querySelector('.profile');
const msgService = document.querySelector('.msgContainer p');
const h2slogan1 = document.querySelectorAll('.h2Container h2')[0];
const h2slogan2 = document.querySelectorAll('.h2Container h2')[1];


const pContent = document.querySelector('.content p');
const h2Content = document.querySelector('.content h2');
const pSec1 = document.querySelector('.sec1 p');
const h2Sec1 = document.querySelector('.sec1 h2');
const pSec2 = document.querySelector('.sec2 p');
const h2Sec2 = document.querySelector('.sec2 h2');
const h2foot = document.querySelector('.footer h2');

const planeImg = document.querySelector('.imgContainer img');

const fadeArray = [pro, msgService, translateBtn, h2slogan1, h2slogan2];
const slideArray = [pContent, pSec1, h2Sec1, pSec2, h2Sec2, h2foot, h2Content];

const footerBtns = document.querySelectorAll('.media img');
fadeArray.forEach(e => {
    if(e == null){
        return;
    } else{
        appearOnScroll.observe(e);
    }
});

slideArray.forEach(e => {
    if(e == null){
        return;
    } else{
        slideOnScroll.observe(e);
    }
});

planScroll.observe(planeImg);


footerBtns.forEach(e => {
    if(e == null){
        return;
    } else{
        BtnScroll.observe(e);
    }
});
