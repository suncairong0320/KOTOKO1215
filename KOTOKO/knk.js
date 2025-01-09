const {createApp,ref} = Vue;

createApp({
    data() {
        return {
            badvue: []
        };
    },

    mounted() {
        fetch("/portfolio-data")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Received data:", data); // 檢查返回資料
                this.badvue = data; // 將資料分配給 badvue
            })
            .catch((error) => {
                console.error("加載數據失敗:", error);
            });
    }
}).mount('.portfolio-data');



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