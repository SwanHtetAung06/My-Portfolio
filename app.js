//DOM Manipulation




//about
const augustImg = document.getElementById("august");


//service
const cardBox = document.querySelector(".card-box");
const cardCmt = document.querySelector(".card-comment")

//My Work
const workContainer = document.querySelector(".work-container");

//contact 
const firstPart = document.getElementById('firstPart');
const secondPart = document.getElementById("secondPart");

//aboutMe Show up from sidebar Animation
window.addEventListener("wheel", () => {
         //img animation completed
    augustImg.classList.add('slider');


    //animated percent completed
    const percent = document.querySelectorAll(".percent");
    let speed = 200;
    percent.forEach((percent) => {
        const animatedCounter = () => {
            const data = +percent.getAttribute("data-target");
            let count = +percent.innerText;
            const inc = data / speed;
            if(count < data){
                let isPercent = Math.ceil(count + inc);
                percent.innerText = +isPercent;
                setTimeout(() => {
                percent.classList.add("widthSlider");
                    animatedCounter();
                },1);
            } else {
                count.innerText = data;
            }
        };
        animatedCounter();
    });
    //Service animation is completed
    serviceGenerator();

});
const serviceGenerator = () => {
    cardBox.classList.add("boxSlider");
    
};  

const portfolio = document.getElementById("portfolio");
window.addEventListener("scroll", () =>{
      //Work animation on progress
      const projectGenerator = () => {
        workContainer.classList.add("containerSlider");  
    };
      projectGenerator();
});

//Menu Icon
const menuIcon = document.getElementById("menuIcon");
const existIcon = document.getElementById("existIcon");
const header = document.getElementById("header");
const reveal = document.getElementById("reveal");

menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const toggleMenu = () => {
        
        if(reveal.style.display = "none"){

            header.style.cssText = `
                        position:relative;
                        left:-20px;
                    `;
            existIcon.style.cssText = `
                            display:block;
                            font-size:50px;
                            position:relative;
                            top:50px;
            `
            reveal.style.cssText = `
                font-size:50px;
                display:flex;
                flex-flow:column nowrap;
                justify-content:flex-start;
                align-items:center;
                position:fixed;
                left:580px;
                top:0;
                gap:2em;
                background-color:#131212;
                width:30%;
                height:100%;
                z-index:1;
            `;
          
            menuIcon.style.display = "none";
        } else if(reveal.style.display = "flex"){
            reveal.display= "none";
        };
        existIcon.addEventListener("click", () => {
            reveal.style.visibility = "hidden";
            menuIcon.style.display = "block";
            header.style.cssText = `
                            position:relative;
                            left:168px;
                        `;
        });
    };
    toggleMenu();
});


//Test 
let result =   10 / 5 * 2 +2;
console.log("Result",result);
