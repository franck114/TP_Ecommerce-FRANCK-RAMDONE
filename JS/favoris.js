const burger = document.getElementById("burger")
    const menu = document.getElementById("menu")

    burger.addEventListener("click", () => {
        menu.classList.toggle("actif")
    })




let favorisList = JSON.parse(localStorage.getItem("favoris")) || []

const favorisListElement = document.getElementById("favoris-list")
const favorisElement = document.getElementById("favoris")

favorisElement.textContent = favorisList.length

function afficherFavoris() {
    favorisListElement.innerHTML = ""

    if (favorisList.length === 0) {
        favorisListElement.innerHTML = `
            <tr>
                <td colspan="3">Vous n'avez pas encore de favoris ❤️</td>
            </tr>
        `
        return
    }

    favorisList.forEach((produit, index) => {
        const ligne = document.createElement("tr")
        ligne.innerHTML = `
            <td>${produit.nom}</td>
            <td>${produit.prix}</td>
            <td>
                <button onclick="supprimerFavori(${index})">🗑️ Supprimer</button>
                <button onclick="ajouterAuPanier(${index})">🛒 Ajouter au panier</button>
            </td>
        `
        favorisListElement.appendChild(ligne)
    })
}


function supprimerFavori(index) {
    favorisList.splice(index, 1)
    localStorage.setItem("favoris", JSON.stringify(favorisList))
    favorisElement.textContent = favorisList.length
    afficherFavoris()
}



let count = 0
const countElement = document.querySelector("#count")

function ajouterAuPanier(index) {
    const produit = favorisList[index]
    let panier = JSON.parse(localStorage.getItem("panier")) || []
    const i = panier.findIndex(p => p.nom === produit.nom)
    if (i !== -1) {
        panier[i].quantite++
    } else {
        panier.push({ nom: produit.nom, prix: produit.prix, quantite: 1 })
    }
    localStorage.setItem("panier", JSON.stringify(panier))
    count++
    countElement.textContent = count
    
}

afficherFavoris()

