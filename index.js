
let video=document.querySelector('video')
video.addEventListener('click',()=>{
    let toggle=video.classList.toggle('vid')
    if(toggle){
        video.play()
    }
    else{
        video.pause()
    }
})