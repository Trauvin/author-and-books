const show = document.querySelectorAll('.js-according dt')

show.forEach((item) => {
  item.addEventListener('click', function() {
    item.classList.toggle('ativo')
    item.nextElementSibling.classList.toggle('ativo')
  })
})

