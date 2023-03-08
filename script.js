const imgarray=['images/crazy2.jpg','images/crazy.jpg','images/light.jpg','images/lin.jpg','images/n.jpg','images/nn.jpg','images/n1.jpg','images/road.jpg','images/rrr.jpeg','images/s.jpg']

/*   
#project session  syntax
let index=Math.floor(Math.random()*(imgarray.length))

const display=document.getElementById('images')
const Btn=document.getElementById('generate')
Btn.addEventListener('click',(e)=>{RandomImg()})

const RandomImg=()=>
{
 let index=Math.floor(Math.random()*(imgarray.length))
 display.innerHTML=`<img src="${imgarray[index]}" alt='img not avail'/>`
}   */

//document.write(index)
function imgdisplay()
{   
    let index=Math.floor(Math.random()*(imgarray.length))
    //lert(imgarray[index])
    document.getElementById('images').innerHTML=`<img src="${imgarray[index]}" alt='imag not'/>`
}