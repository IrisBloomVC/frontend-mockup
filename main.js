const toggleSidemenu = () => {
  const target = document.getElementsByClassName('sidemenu')[0]
  target.classList.toggle('sidemenu--open')
}
const resizeTextarea = (textarea) => {
  textarea.style.height = 0
  textarea.style.height = textarea.scrollHeight + "px"
}
const sendMessage = () => {
  const textarea = document.getElementsByClassName('form__input')[0]
  if (textarea.value) {
    const messages = document.getElementsByClassName('content__messages')[0]
    const lastMessage = messages.lastElementChild
    const template = lastMessage.classList.contains('message--own')
        ? document.getElementById('messageText__template').content.cloneNode(true)
        : document.getElementById('message__template').content.cloneNode(true)
    template.querySelector('.message__text').textContent = textarea.value
    if (lastMessage.classList.contains('message--own')) {
      lastMessage.appendChild(template)
    } else {
      messages.appendChild(template)
    }
    textarea.value = null
    resizeTextarea(textarea)
  }
}
const openGroupDescription = () => {
  
}