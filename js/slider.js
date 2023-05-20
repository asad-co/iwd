let thumbnails = document.getElementsByClassName("thumbnail")
let mainImg =  document.getElementById('featured')
let activeImgs = document.getElementsByClassName("active_slider");
console.log(thumbnails[0].src)

let changeImgSlide = (link) =>{
    mainImg.style.opacity=0
    setTimeout(function() {       
        mainImg.src=link
        mainImg.classList.add("fade-out");
        mainImg.style.opacity=1
      }, 500);
      
 
}


let changeSlide = ()=>{
    thumbnails = document.getElementsByClassName("thumbnail")
    activeImgs = document.getElementsByClassName("active_slider");
    
    for (var i=0; i<thumbnails.length; i++){
        if(hasClass(thumbnails[i],`active_slider`)){
            if(i === thumbnails.length - 1){
                thumbnails[i].classList.remove('active_slider')
                thumbnails[0].classList.add('active_slider')
                let newSrc = thumbnails[0].src
                changeImgSlide(newSrc)
                document.getElementById('slider').scrollLeft = 0
                break;
            }
            else{
                thumbnails[i].classList.remove('active_slider')
                thumbnails[i+1].classList.add('active_slider')
                let newSrc = thumbnails[i+1].src
                
                changeImgSlide(newSrc)
                if (i>2){
                    document.getElementById('slider').scrollLeft += 180
                }
                break;
            }
        }
    }
}


var changing = setInterval(changeSlide, 8000);

for (var i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        if (activeImgs.length>0){
            for (var j=0; j<activeImgs.length; j++){
                activeImgs[j].classList.remove('active_slider')
            }
        }

        this.classList.add('active_slider')
        
       let newSrc = this.src
       changeImgSlide(newSrc)
       clearInterval(changing)
    changing = setInterval(changeSlide, 8000);
    })
}


let buttonLeft = document.getElementById("slideLeft")
let buttonRight = document.getElementById("slideRight")

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}









