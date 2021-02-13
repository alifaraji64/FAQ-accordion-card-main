const up1=document.querySelector(".up1");
const up2=document.querySelector(".up2");
const up3=document.querySelector(".up3");
const up4=document.querySelector(".up4");
const up5=document.querySelector(".up5");
const answer1=document.querySelector(".answer1");
const answer2=document.querySelector(".answer2");
const answer3=document.querySelector(".answer3");
const answer4=document.querySelector(".answer4");
const answer5=document.querySelector(".answer5");
const qu1=document.querySelector(".qu1");
const qu2=document.querySelector(".qu2");
const qu3=document.querySelector(".qu3");
const qu4=document.querySelector(".qu4");
const qu5=document.querySelector(".qu5");
const arrow1=document.querySelector(".arrow1");
const arrow2=document.querySelector(".arrow2");
const arrow3=document.querySelector(".arrow3");
const arrow4=document.querySelector(".arrow4");
const arrow5=document.querySelector(".arrow5");
up1.addEventListener('click', function(){
    answer1.style.display="inline";
    qu1.style.fontWeight="700";
    arrow1.style.transform="rotate(180deg)";

});
up1.addEventListener('dblclick', function(){
    answer1.style.display="none";
    qu1.style.fontWeight="400";
    arrow1.style.transform="rotate(0deg)";
});
up2.addEventListener('click', function(){
    answer2.style.display="inline";
    qu2.style.fontWeight="700";
    arrow2.style.transform="rotate(180deg)";

});
up2.addEventListener('dblclick', function(){
    answer2.style.display="none";
    qu2.style.fontWeight="400";
    arrow2.style.transform="rotate(0deg)";
});
up3.addEventListener('click', function(){
    answer3.style.display="inline";
    qu3.style.fontWeight="700";
    arrow3.style.transform="rotate(180deg)";

});
up3.addEventListener('dblclick', function(){
    answer3.style.display="none";
    qu3.style.fontWeight="400";
    arrow3.style.transform="rotate(0deg)";
});
up4.addEventListener('click', function(){
    answer4.style.display="inline";
    qu4.style.fontWeight="700";
    arrow4.style.transform="rotate(180deg)";

});
up4.addEventListener('dblclick', function(){
    answer4.style.display="none";
    qu4.style.fontWeight="400";
    arrow4.style.transform="rotate(0deg)";
});
up5.addEventListener('click', function(){
    answer5.style.display="inline";
    qu5.style.fontWeight="700";
    arrow5.style.transform="rotate(180deg)";

});
up5.addEventListener('dblclick', function(){
    answer5.style.display="none";
    qu5.style.fontWeight="400";
    arrow5.style.transform="rotate(0deg)";
});