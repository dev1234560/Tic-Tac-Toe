

let turn  = "X"
let isgameover = false;
// Function to change the turn
const changeTurn =()=>{
  return turn == "X" ? "0":"X"
}

//  Function to change for a win
const checkWin = () =>{
  let boxtext = document.getElementsByClassName('boxText')
  let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
      isgameover = true
    }
  })
}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxText');
  element.addEventListener('click', ()=>{
    if(boxtext.innerText == ''){
      boxtext.innerText = turn;
      turn = changeTurn();
      document.getElementById('click').play()
      checkWin()
      if(isgameover == false)
      {
        document.querySelector('.info').innerText = " Turn for "  +  turn;
      }
      else{
        document.getElementById('WinImg').style.display = 'flex';
        document.getElementById('win').play()
      }
    }
  })
})      


// Reset and start a new game
const Reset = () => {
  Array.from(boxes).forEach(e => {
  let boxtext = e.querySelector('.boxText')
  let info = document.querySelector('.info')
  boxtext.innerText =''
  info.innerText = 'Turn for X'
  document.getElementById('WinImg').style.display = 'none';
  })
  
}


