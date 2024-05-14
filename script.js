const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}

const navLink = Array.from(document.querySelector(".nav-link"))

navLink.forEach(n => n.addEventListener("click", closeMenu))

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const elements = Array.from(document.getElementsByClassName("letterEffect"))
elements.forEach(e => {
    
    const originalWord = e.innerText
        e.onmouseover = event => {
            
            let iteration = 0
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) => {
                        
                        if (index < iteration){
                            return originalWord[index]
                        }
                        return alphabet[Math.floor(Math.random() * 26)]
                       
                    }).join("")

                if(iteration > originalWord.length){
                    clearInterval(interval)
                }
                iteration++
            }, 30)
                
            
        }   

}
    

)





