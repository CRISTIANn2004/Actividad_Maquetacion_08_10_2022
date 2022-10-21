addEventListener("DOMContentLoaded", (e)=>{
    let imgSlider = (anything)=>{
        document.querySelector(".starbucks").src = anything; 
    }
    document.querySelector(".thumb").addEventListener("click", (e)=>{
        if(e.target.nodeName != "UL"){
            imgSlider(e.target.dataset.img)
        }
    }) 
})