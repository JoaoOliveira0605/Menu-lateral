feather.replace()

const menu = document.getElementById('menu')
let selectedMenuId = 1
menu.addEventListener('click', changeContent)

function changeContent(event) {
  const target = event.target.id
  if (target === 'menu' || target === '' || target == selectedMenuId) {
    return
  }
  console.log(event.target.id)

  document.getElementById(target).classList.add('selected')
  document.getElementById(selectedMenuId).classList.remove('selected')

  selectedMenuId = target
}
