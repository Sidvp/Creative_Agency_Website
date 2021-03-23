const toggle = document.querySelector('.toggle')   /*class list*/
const navigation = document.querySelector('.navigation')
                                       /*add Event Listener on toggle button; add 'click listener on it.'*/
toggle.addEventListener('click', () => {  /* if toggle button is clicked, function will be run */ /*arrow function*/
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')         /*method on the classlist object.*//*used to toggle the class.*/
})
