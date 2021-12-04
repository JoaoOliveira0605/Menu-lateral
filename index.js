feather.replace()
let selectedMenuId = 1

const menu = document.getElementById('menu')
const boardLeft = document.getElementById('board-left')
const boardRight = document.getElementById('board-right')

document.getElementById('bl-1').scrollIntoView()
menu.addEventListener('click', changeContent)

function changeContent(event) {
  const target = event.target.id
  if (target === 'menu' || target === '' || target == selectedMenuId) {
    return
  }
  console.log(event.target.id)

  // menu selection
  document.getElementById(target).classList.add('selected')
  document.getElementById(selectedMenuId).classList.remove('selected')

  // scroll
  const offset = selectedMenuId - target
  boardLeft.scrollTop -= offset * 370
  boardRight.scrollTop += offset * 370

  selectedMenuId = target
}
