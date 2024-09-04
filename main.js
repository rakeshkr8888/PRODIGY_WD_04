// Navbar
const openMenu=document.querySelector('#menu_open_btn');
const closeMenu=document.querySelector("#menu_close_btn");
const menu=document.querySelector("nav .container ul");

        //show menu 
openMenu.addEventListener("click",()=>{
    openMenu.style.display='none';
    menu.style.display='block';
    closeMenu.style.display="inline-block";
})

        //hide menu
closeMenu.addEventListener("click",()=>{
    openMenu.style.display="inline-block";
    menu.style.display="none";
    closeMenu.style.display="none";
})

// nav box-shadow
window.addEventListener('scroll', ()=>{
    const nav=document.querySelector('nav');
    nav.classList.toggle('show-box-shadow', window.scrollY > 0);
})

// navbar active
const allAct=document.querySelectorAll('nav .container ul li a');
let currAct=allAct[0];
allAct.forEach((active)=>{
    // console.log("1 "+active + "        "+ currAct);
    active.addEventListener('click', ()=>{
        currAct.classList.remove('active');
        // console.log("2 "+active + "      "+ currAct);
        active.classList.add("active");
        currAct=active;
        // console.log("3 "+active + "             "+ currAct);
    })
})




// about section read more
const toggleBtn=document.querySelector('section.about .container .info .read-more');
const read=document.querySelector('section.about .container .info .read-more-content');

toggleBtn.addEventListener('click', ()=>{
    read.classList.toggle('show-content');
    if(toggleBtn.textContent=="Show more"){
        toggleBtn.textContent='Show less';
    }
    else{
        toggleBtn.textContent='Show more';
    }
});



// skills
const skill=document.querySelectorAll('section.skills .container .skill');
skill.forEach((actSkill)=>{
    actSkill.addEventListener("click",()=>{
         const items=actSkill.querySelector(".items");
         items.classList.toggle('show-items');
         const icon=actSkill.querySelector('.head .right span');
         if(icon.textContent=="expand_more"){
            icon.textContent="expand_less";
         }
         else{
            icon.textContent="expand_more";
         }
    })
})