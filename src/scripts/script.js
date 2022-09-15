let show = true

const menuSection = document.querySelector('.menu')
const botoesMenu = menuSection.querySelector('.botoes_menu')
const botoeToggle = botoesMenu.querySelector('.menu_toggle')

botoeToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'
  menuSection.classList.toggle('on', show)
  show = !show
})
