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

palette2.style.backgroundColor = 'blue'
palette3.style.backgroundColor = 'yellow'
palette4.style.backgroundColor = 'green'
black.style.backgroundColor = 'black'

pallete2Input.addEventListener('change', function(){
    let color = pallete2Input.value
    palette2.style.backgroundColor = color
})
pallete3Input.addEventListener('change', function(){
    let color = pallete3Input.value
    palette3.style.backgroundColor = color
})
pallete4Input.addEventListener('change', function(){
    let color = pallete4Input.value
    palette4.style.backgroundColor = color
})

function boardSize(){
    generateMatriz.addEventListener('click', function (event){
        divPai.innerHTML=''
    creatPixels(boardSizeMatriz.value)
    
    })
}
boardSize()

function creatPixels(tableSize){

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


