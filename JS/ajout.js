document.addEventListener("DOMContentLoaded", () => {

    
    const burger = document.getElementById("burger")
    const menu = document.getElementById("menu")
    burger.addEventListener("click", () => {
        menu.classList.toggle("actif")
    })

    
    let count = 0
    const countElement = document.querySelector("#count")
    const bouttons = document.querySelectorAll(".ajouter-au-panier")
    bouttons.forEach((boutton) => {
        boutton.addEventListener("click", () => {
            const produit = boutton.closest(".produit")
            const nom = produit.querySelector("h2").textContent
            const prix = produit.querySelectorAll("p")[1].textContent
            let panier = JSON.parse(localStorage.getItem("panier")) || []
            const index = panier.findIndex(p => p.nom === nom)
            if (index !== -1) {
                panier[index].quantite++
            } else {
                panier.push({ nom, prix, quantite: 1 })
            }
            localStorage.setItem("panier", JSON.stringify(panier))
            count++
            countElement.textContent = count
        })
    })

    
    let favorisList = JSON.parse(localStorage.getItem("favoris")) || []
    let favoris = favorisList.length
    const favorisElement = document.querySelector("#favoris")
    favorisElement.textContent = favoris

    const bouttonsFavoris = document.querySelectorAll(".ajouter-au-favoris")
    bouttonsFavoris.forEach((boutton) => {
        const produit = boutton.closest(".produit")
        const nom = produit.querySelector("h2").textContent

        // Si déjà en favori → changer le bouton
        if (favorisList.some(f => f.nom === nom)) {
            boutton.style.backgroundColor = "red"
            boutton.innerHTML = "❤️"
        }

        boutton.addEventListener("click", () => {
            favorisList = JSON.parse(localStorage.getItem("favoris")) || []
            const prix = produit.querySelectorAll("p")[1].textContent

            if (!favorisList.some(f => f.nom === nom)) {
                favorisList.push({ nom, prix })
                localStorage.setItem("favoris", JSON.stringify(favorisList))
                favoris++
                favorisElement.textContent = favoris
                boutton.style.backgroundColor = "red"
                boutton.innerHTML = "❤️"
            }
        })
    })

})