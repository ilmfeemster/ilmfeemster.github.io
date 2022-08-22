const sendButton = document.getElementById('sendButton')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
console.log(nameInput)

sendButton.addEventListener('click', function handleClick() {
  // 👇️ clear input field
  nameInput.value = ''
  emailInput.value = ''
  messageInput.value = ''

  alert('Thank You. \n -Immanuel')
})
console.log('holldasda')
