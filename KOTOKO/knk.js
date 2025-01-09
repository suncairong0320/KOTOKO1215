const {createApp,ref} = Vue;

createApp({
    data() {
        return{
            badvue:[
                {imgUrl:'image/Mayoi.jpg',igh:"圖片",},
                {imgUrl:'image/ktk.jpg',igh:"圖片"},
                {imgUrl:'image/Mayoi2.jpg',igh:"圖片"},
                {imgUrl:'image/hallo.jpg',igh:"圖片"},
                {imgUrl:'image/kanako.jpg',igh:"圖片"},
                {imgUrl:'image/magic.jpg',igh:"圖片"},

            ]
        }
    }
}).mount("#work")



gsap.from("#fles",{
    scrollTrigger:{
        trigger: "#self",
        start: "-200",
        end: "-100",
        scrub: 2,
        markers: false
      },
  scale: 0.5,
  opacity: 0,
  duration: 1
});

gsap.from("#work",{
    scrollTrigger:{
        trigger: "#work",
        start: "-1200",
        end: "-600",
        scrub: 2,
        markers:false
      },
  scale: 0.5,
  opacity: 0,
  duration: 1
});