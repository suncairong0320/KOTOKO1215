const {createApp,ref} = Vue;

createApp({
    data() {
        return {
            badvue: []
        };
    },

    mounted() {
        fetch("/yee")
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
}).mount('.yee'); 

//把Vue原本儲存的資料透過server上繳給資料庫儲存起來。server被執行的同時會從資料庫把資料拿取，再以它原本設定好的路徑傳到Vue跟html。



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