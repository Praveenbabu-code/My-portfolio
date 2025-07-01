// imp! Navbar Active Script

let sections = document.querySelectorAll('section')

let Navlinks = document.querySelectorAll('.nav-link')

window.onscroll = () => {
    sections.forEach((sec) => {
        if (sec.id === 'hero-section' || sec.id === 'about-section' || sec.id === 'resume-section' || sec.id === 'services-section' || sec.id === 'portfolio' || sec.id === 'contact-us') {
            let top = window.scrollY
            let offset = sec.offsetTop
            let heigth = sec.offsetHeight
            let sectionid = sec.getAttribute
                ('id')
            if (top >= offset && top < offset + heigth) {
                Navlinks.forEach((links) => {
                    links.classList.remove('active')
                    document.querySelector(`.nav-link[href="#${sectionid}"]`).classList.add('active')
                })
            }
        }
    });
};

// imp! eamil js script

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let params = {
        form_name: document.getElementById('full_name').Value,
        eamil_id: document.getElementById('email_id').Value,
        message: document.getElementById('message').Value
    }
    
})
