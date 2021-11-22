let pallete2Input=document.getElementById('pallete2Input')
let pallete3Input=document.getElementById('pallete3Input')
let pallete4Input=document.getElementById('pallete4Input')
let palette2=document.getElementById('palette2')
let palette3=document.getElementById('palette3')
let palette4=document.getElementById('palette4')
let black=document.getElementById('black')
let clearBackground=document.getElementById('clear-board')
let colorPen = ''
let boardSizeMatriz = document.getElementById('board-size')
let generateMatriz = document.getElementById('generate-board')
let tableSize = 5
let divPai = document.getElementById('pixel-board')


black.style.backgroundColor = 'black'


pallete2Input.addEventListener('click', corRandomPalette2)
function corRandomPalette2(){ //referencia: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    palette2.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
}
corRandomPalette2()

pallete3Input.addEventListener('click', corRandomPalette3)
function corRandomPalette3(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    palette3.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
}
corRandomPalette3()

pallete4Input.addEventListener('click', corRandomPalette4)
function corRandomPalette4(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    palette4.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
}
corRandomPalette4()



function boardSize(){
    generateMatriz.addEventListener('click', function (event){
        divPai.innerHTML=''
    creatPixels(boardSizeMatriz.value)
    
    })
}
boardSize()

function creatPixels(tableSize){
    if(tableSize == ""){
        alert("Board inválido!");
    } else if (tableSize<5){
        tableSize =5;
        
    }else if (tableSize>50){
        tableSize=50;
    }
    
    for(i=1;i<=tableSize;i++){
            for(j=1;j<=tableSize;j++){
                let elementosPixels = document.createElement('div')
                elementosPixels.className='pixel'
                divPai.appendChild(elementosPixels)
            }
            let br = document.createElement('br')
            divPai.appendChild(br)
    }

}
creatPixels(tableSize)

function colorBlack(){
    let element = document.querySelectorAll('.color')
        if(element[0].classList.contains('selected')){
            colorPen = 'black'
        } 
}

colorBlack()
pixelColor()

function colorSelected(){
    let element = document.querySelectorAll('.color')
    for(i=0;i<element.length;i++){
      element[i].addEventListener('click', function(event){
            let element = document.querySelectorAll('.color')
            for(i=0;i<element.length;i++){
                element[i].classList.remove('selected')
            }
            event.target.classList.add('selected')
            colorPen = event.target.style.backgroundColor
        })
    }
    
}
colorSelected()

function pixelColor(){

    let pixel = document.querySelectorAll('.pixel')
    for(i=0;i<pixel.length;i++){
        pixel[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = colorPen
        })
    }
}
pixelColor()

function clearBoard(){
    let pixel = document.querySelectorAll('.pixel')
        clearBackground.addEventListener('click', function(){
            for(i=0;i<pixel.length;i++){
            pixel[i].style.backgroundColor = 'white'
        }
    })
}
clearBoard()

