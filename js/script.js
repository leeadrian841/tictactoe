document.addEventListener('DOMContentLoaded', init)

function init () {
  // var numPlayer = 2
  var clickCount = 0
  var startPlayer = 1
  var currentPlayer
  var arrPlayer1 = []
  var arrPlayer2 = []
  var win = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9]]

  var boxes = document.querySelectorAll('.box')

  // if (clickCount > 9) {
  //
  // }

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClick)
    // boxes[i].addEventListener('click', clickCounter)
  }

  // function clickCounter () {
  //   clickCount++
  //   alert(clickCount)
  // }

  function boxClick () {
    if (currentPlayer === 1) {
      this.classList.add('clickX')
      arrPlayer1.push(this.id)
      alert("Player 1 = " + arrPlayer1)
    } else {
      this.classList.add('clickO')
      arrPlayer2.push(this.id)
      alert("Player 2 = " + arrPlayer2)
    }
    switchPlayer()
  }

  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }

  // function reset() {
  //
  // }
}
