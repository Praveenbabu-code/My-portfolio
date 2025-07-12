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

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  let params = {
    from_name: document.getElementById('full_name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  };

  emailjs.send("SERVICE_ID", "TEMPLATE_ID", params)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
});
