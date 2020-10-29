function lightbox(){
    let imgs = document.querySelectorAll(".galery img");
    let back = document.querySelector(".darkback");
    let box = document.querySelector(".lightimg");
    let next = document.querySelector(".right");
    let prev = document.querySelector(".left")
    function openLightBox(ev){
        let target = ev.target||ev.srcElement;
        back.style.display = "block";
        box.style.display = "block";
        let img = document.createElement("img");
        img.src =`img/` + target.src.split("-").slice(-1);
        img.alt = "Cat"
        box.prepend(img);        
    }
    function close(ev){
        let target = ev.target||ev.srcElement;
        if(target.nodeName !== "IMG" && target.nodeName !== "SPAN"){
            box.firstChild.remove();
            back.style.display = "none";
            box.style.display = "none";
        }
    }
    function nextImg(){
        let Tmp = document.querySelector(".lightimg img");
        let img = document.createElement("img");
        let t = `${+Tmp.src[Tmp.src.length - 5]+1}`
        box.firstChild.remove();
        box.prepend(img)
        if(t>imgs.length){
            t = `1`
            img.src = `img/` + t + `.jpg`
        }else{
        img.src = `img/` + t + `.jpg`
        }
    }
    function prevImg(){
        let Tmp = document.querySelector(".lightimg img");
        let img = document.createElement("img");
        let t = `${+Tmp.src[Tmp.src.length - 5]-1}`
        box.firstChild.remove();
        box.prepend(img)
        if(t<1){
            t = `${imgs.length}`
            img.src = `img/` + t + `.jpg`
        }else{
        img.src = `img/` + t + `.jpg`
        }
    }
    for(let i = 0; i<imgs.length; i++){
        imgs[i].addEventListener("click", openLightBox)
    }
    document.body.addEventListener("click", close)
    next.addEventListener("click", nextImg)
    prev.addEventListener("click", prevImg)
}