// mouse circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x,y)=>{
    mouseCircle.style.cssText= `top:${y}px;left:${x}px; opacity:1`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
}
// end of mouse circle
// animated circle
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;

const animateCircles = (e,x,y) => {
    if(x < mX){
        circles.forEach((circle) =>{
            circle.style.left=`100px`;
        });
        mainImg.style.left = `100px`;
    }else if(x > mX){
        circles.forEach((circle) =>{
            circle.style.left=`-100px`;
        });
        mainImg.style.left = `-100px`;

    }
    


    if ( y < mY){
        circles.forEach((circle) =>{
            circle.style.top=`100px`;
        });
        mainImg.style.top=`100px`;
    }
        else if (y>mY){
            circles.forEach((circle) =>{
                circle.style.top=`-100px`;
        });
        mainImg.style.top = `-100px`;

    }
    
    mX = e.clientX
    mY = e.clientY
    
};

// end of animated circle

document.body.addEventListener("mousemove",(e)=>{
    let x=e.clientX;
    let y = e.clientY;
    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});
document.body.addEventListener("mouseleave",()=>{
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity="0";
})
// main button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach(btn => {
    let ripple;

btn.addEventListener("mouseenter",(e)=>{
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left= `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
});

btn.addEventListener("mouseleave",()=>{
    btn.removeChild(ripple);
})
})
// end of main button

// progress bar

const ProgressBar = document.querySelector(".progress-bar")
const halfCircles = document.querySelectorAll(".half-circle")
const halfCircleTop = document.querySelector('.half-circle-top')
const progressBarCircle = document.querySelectorAll('.progress-bar-circle')

const progressBarFn = ()=>{
    const pageViewportHeight = window.innerHeight
    const pageHeight = document.documentElement.scrollHeight
    const scrollPortion = window.pageYOffset

    const scrolledPortionDegree = (scrollPortion / (pageHeight - pageViewportHeight))*360;


    halfCircles.forEach((el) => {
        el.style.transform = `rotate(${scrolledPortionDegree}deg)`;


        if (scrolledPortionDegree >= 180) {
            halfCircles[0].style.transform = "rotate(180deg)";
            halfCircleTop.style.opacity = "0";
        }else{
            halfCircleTop.style.opacity = "1";
        }
    });

    // progress Bar click
    progressBarCircle.onclick = e => {
        e.preventDefault()
    }
    // end of progress bar click 
};
// end of progressbar

// navigation
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll",() => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");

    if(window.scrollY === 0){
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }

    progressBarFn();
});

menuIcon.addEventListener("clic",() => {
    menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
});
menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
})
// end of navigation
 
// about me text
const aboutMeText = document.querySelector(".about-me-text")
const aboutMeTextContent = "Iam a designer & I create websites with the best user experience & I do not talk much, just contact me. :)";

Array.from(aboutMeTextContent).forEach(char =>{
    const span = document.createElement('span')
    span.textContent = char;
    aboutMeText.appendChild(span);


    span.addEventListener("mouseenter",(e) =>{
        e.target.style.animation = "aboutmeTextAnim 10s infinite ";
    });
})
// end of about me text

// projects
const container = document.querySelector(".container")
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn")

projects.forEach((project,i) => {
    project.addEventListener("mouseenter",()=>{
        project.firstElementChild.style.top = `-${
            project.firstElementChild.offsetHeight - project.
            offsetHeight + 10
        }px`;    
    });
project.addEventListener("mouseleave", () => {
project.firstElementChild.style.top = "2rem";
});

// big project image
project.addEventListener('click',() => {
 const bigImgWrapper = document.createElement("div");
 bigImgWrapper.className = "project-img-wrapper";  
 container.appendChild(bigImgWrapper); 

 const bigImg = document.createElement("img");
 bigImg.className = "project-img";
 const imgpath = project.firstElementChild.getAttribute
 ("src").split(".")[0];
//  bigImg.setAttribute("src",`${imgpath}-replace2.jpg`);
 bigImgWrapper.appendChild(bigImg);

 projectHideBtn.classList.add("change");

 projectHideBtn.onclick =() =>{
    projectHideBtn.classList.remove("change");
    bigImgWrapper.remove();
    document.body.style.overflowY = "scroll";
 };
});

// end of big project image
// hide projects
i>=6 && (project.style.cssText = "display:none; opacity:0" );
// end of hide projects

});
// projects button

const section3 = document.querySelector(".section-3")
const projectsBtn = document.querySelector(".projects-btn");
const projectsBtnText = document.querySelector(".projects-btn span");
let showHideBool = true;
const showProjects = (project,i) => {
    setTimeout(()=>{
        project.style.display = "flex";
        section3.scrollIntoView({block:"end"});
    },600);

    setTimeout(()=>{
        project.style.opacity = "1"
    },i*200);
};

const hideProjects = (project,i) => {
    setTimeout(()=> {
        project.style.display = "none";
        section3.scrollIntoView({block:"end"});
    },1200);

    setTimeout(()=> {
        project.style.opacity = "0";
    },i*100);
}

projectsBtn.addEventListener('click',(e)=> {
    e.preventDefault();

    projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

    showHideBool 
    ? (projectsBtnText.textContent = "Show Less") 
    : (projectsBtnText.textContent = "Show More");

    projects.forEach((project,i) => {
        i>=6 &&
         (showHideBool ? showProjects(project,i):
        hideProjects(project,i));            
    });
    showHideBool = !showHideBool;
});
// end of projects button
// end of projects

// section 4
document.querySelectorAll(".service-btn").forEach
(service =>{
    service.addEventListener("click",e=>{
        e.preventDefault();

        const serviceText = service.nextElementSibling
        serviceText.classList.toggle("change");

        const rightposition = serviceText.classList.contains
        ("change") 
        ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
        :0;

        service.firstElementChild.style.right = rightposition;
    });
})
// end of section 4
// section 5
// form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input)=>{
    input.addEventListener("focus",()=>{
        formHeading.style.opacity="0"
        setTimeout(()=>{
            formHeading.textContent = `your ${input.placeholder}`;
            formHeading.style.opacity="1"
        },300);        
    });


input.addEventListener("blur",()=>{
    formHeading.style.opacity="0"
    setTimeout(()=>{
        formHeading.textContent = `Let's Talk`;
        formHeading.style.opacity="1"
    },300);        
});
});
// end of form
// slideshow
const slideshow = document.querySelector(".slideshow");
setInterval(()=> {
    const firstIcon = slideshow.firstElementChild;

    firstIcon.classList.add("faded-out");

    const thirdIcon = slideshow.children[3];

    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");

    setTimeout(()=> {
        slideshow.removeChild(firstIcon);

        slideshow.appendChild(firstIcon);

        setTimeout(()=>{
        firstIcon.classList.remove("faded-out");
        },500);    
    },500);
},3000)
// end of slideshow
// end of section 5