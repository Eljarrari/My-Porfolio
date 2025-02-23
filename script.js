/*====================== EMAIL JS ======================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message');

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_k5y8w57','template_gelwnpd','#contact-form','WubucbSHKFEW9-YEX')

    .then(() =>{
        //show sent message
        contactMessage.textContent = 'message sent successfully ✅'

        //remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000)

        //clear input fields 
        contactForm.reset() 
    }, () =>{
        //show error message
        contactMessage.textContent = 'message not sent (service erreur) ❌'
    })
}
contactForm.addEventListener('submit',sendEmail)

/*====================== SHOW SCROLL UP ======================*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*====================== SCROLLSECTION ACTIVE LINK ======================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <=sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*====================== SCROL REVEAL ANIMATION  ======================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})