let btnRef=document.querySelectorAll(".btn-move")
let popupRef=document.querySelector(".popup")
let newGameBTN=document.querySelector("#btn-new-game")
let message=document.querySelector("#message")
let turnX=document.querySelector(".X-turn")
let turnO=document.querySelector(".O-turn")
let wrapper=document.querySelector(".wrapper")
let btnRestart=document.querySelector("#btn-restart")
wrapper.classList.remove("hide")
turnX.classList.add("glow")
let xTurn=true
let count=0
let draw=false
let winningPattern=[[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]]
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        
        if(xTurn===true){
            xTurn=false
            element.innerHTML="X"
            turnX.classList.remove("glow")
            turnO.classList.add("glow")
        
    
        }
        else{
            xTurn=true
            element.innerHTML="O"
            turnX.classList.add("glow")
            turnO.classList.remove("glow")
        }

        element.disabled=true
        count++
        if(count===9)
        {
            drawFunction()
            return
        }
        else
        {
            winningFunction()
        }
        
    })
})
const winningFunction=()=>{
    for (const iterator of winningPattern) {
        let [first,second,third]=[btnRef[iterator[0]].innerText,btnRef[iterator[1]].innerText,btnRef[iterator[2]].innerText]
        console.log(first,second,third,"btnRef[iterator[0]].innerHTML");
        if(first!=""&&second!=""&&third!="")
        {
            if(first==second&&second==third)
            {
                winnerIs(first)
                break
            }
        }

    }
}

const winnerIs=(value)=>{
    draw=false
    setTimeout(()=>{
        buttonDisabled()
        message.innerHTML=`&#x1f3c6 <br> ${value} Wins`
    },400)

}

const buttonDisabled=()=>{
    btnRef.forEach((btn)=>{
        btn.disabled=true
    })
    popupRef.classList.remove("hide")
    wrapper.classList.add("hide")
}
const drawFunction=()=>{
    buttonDisabled()
    message.innerHTML=`&#x1f38A <br> It's a Draw`
}
newGameBTN.addEventListener("click",()=>{
    count=0
    draw=false
    xTurn=true
    popupRef.classList.add("hide")
    wrapper.classList.remove("hide")
    turnX.classList.add("glow")
    turnO.classList.remove("glow")
    enableButtons()
})
const enableButtons=()=>{
    btnRef.forEach((btn)=>{
        btn.disabled=false
        btn.innerText=""
    })
    popupRef.classList.add("hide")
}

btnRestart.addEventListener("click",()=>{
    count=0
    draw=false
    xTurn=true
    enableButtons()
    turnX.classList.add("glow")
    turnO.classList.remove("glow")

})

window.onload=enableButtons