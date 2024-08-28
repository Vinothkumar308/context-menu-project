const con = document.getElementById("container")

window.addEventListener("contextmenu",function(e){
    e.preventDefault()
    con.style.display="block"
    const height = this.window.innerHeight
    const width =this.window.innerWidth

    const top = (e.y + con.offsetHeight)>height?height-con.offsetHeight:e.y
    const left = (e.x + con.offsetWidth)>width?width-con.offsetWidth:e.x
    con.style.top=top+"px"
    con.style.left=left+"px"
    
    
})

window.addEventListener("click",()=>{
   con.style.display="none"
})
