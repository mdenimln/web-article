const tombolMenu = document.querySelector('.menu-mobile');
const back = document.querySelector('.back');
const navigasi = document.querySelector('.nav-list');
const aktip = document.querySelectorAll('.active');
window.onload = () => {
    tombolMenu.onclick = () => {
       navigasi.classList.add('arise')
       
    }
    aktip.forEach((item) => {
        item.onclick = () => {
            navigasi.classList.remove('arise')
        }
    })
    back.onclick = () => {
        navigasi.classList.remove('arise')
    }
    // Smooth ketika scroll otomatis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior : "smooth"
            })
        })
    }) 
  }