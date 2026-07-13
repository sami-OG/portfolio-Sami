const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
const logo = document.querySelector(".logo");


// Mobile menu

if(menuIcon){

menuIcon.addEventListener("click",()=>{

    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

});

}



// Navigation

function changeSection(index){

    navLinks.forEach(link=>{
        link.classList.remove("active");
    });

    navLinks[index].classList.add("active");



    sections.forEach(section=>{
        section.classList.remove("active");
    });



    setTimeout(()=>{

        if(sections[index]){
            sections[index].classList.add("active");
        }

    },100);



    navbar.classList.remove("active");

    if(menuIcon){
        menuIcon.classList.remove("bx-x");
    }

}




navLinks.forEach((link,index)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        changeSection(index);

    });

});





// Logo go back Home

if(logo){

logo.addEventListener("click",(e)=>{

    e.preventDefault();

    changeSection(0);

});

}






// Resume buttons

const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");


resumeBtns.forEach((btn,index)=>{


btn.addEventListener("click",()=>{


    resumeBtns.forEach(button=>{

        button.classList.remove("active");

    });


    btn.classList.add("active");



    resumeDetails.forEach(detail=>{

        detail.classList.remove("active");

    });



    if(resumeDetails[index]){

        resumeDetails[index].classList.add("active");

    }


});


});








// Portfolio slider

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

const imgSlide = document.querySelector(".img-slide");
const portfolioDetails = document.querySelectorAll(".portfolio-detail");


let portfolioIndex = 0;



function updatePortfolio(){


if(imgSlide){

imgSlide.style.transform =
`translateX(-${portfolioIndex * 100}%)`;

}



portfolioDetails.forEach(detail=>{

    detail.classList.remove("active");

});



if(portfolioDetails[portfolioIndex]){

portfolioDetails[portfolioIndex].classList.add("active");

}



}



// Next button

if(arrowRight){

arrowRight.addEventListener("click",()=>{


if(portfolioIndex < portfolioDetails.length - 1){

portfolioIndex++;

updatePortfolio();

}


});

}



// Previous button

if(arrowLeft){

arrowLeft.addEventListener("click",()=>{


if(portfolioIndex > 0){

portfolioIndex--;

updatePortfolio();

}


});

}







// Contact form

const form = document.querySelector("form");


if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Your message has been sent!");

form.reset();


});

}