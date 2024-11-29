const navContainer=document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>500){
        navContainer.classList.add("scrolled");
    }else{
        navContainer.classList.remove("scrolled")
    }
})