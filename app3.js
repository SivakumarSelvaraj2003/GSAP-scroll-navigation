gsap.registerPlugin(ScrollToPlugin);

const navItems = document.querySelectorAll(".item");
const sectionItems = document.querySelectorAll("section");


navItems.forEach((navItem1, link) => {
  navItem1.addEventListener("click", () => {
    
    sectionItems[link].style.filter = "grayscale(0%)";
  });
});

navItems.forEach((navItem,idx) => {
    navItem.addEventListener("click",()=>{
        gsap.to(window,{
            duration:0.5,
            scrollTo:{y:"#section-" + (idx + 1),
                autoKill:true
            },
        });
    });
}); 





