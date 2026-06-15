const burger = document.getElementById("burger")
    const menu = document.getElementById("menu")

    burger.addEventListener("click", () => {
        menu.classList.toggle("actif")
    })


const listepanier = document.getElementById('liste-panier')
const total = document.getElementById('total')
let panier = JSON.parse(localStorage.getItem('panier')) || []

function afficherPanier() {
    listepanier.innerHTML = ''
    let totaldepart = 0
    panier.forEach((produit, index) => {
        const prix = parseFloat(produit.prix.replace('€', '').replace(',', '.').replace(/[^0-9.]/g, ''))
        const totalProduit = prix * produit.quantite
        totaldepart += totalProduit
        const ligne = document.createElement('tr')
        ligne.innerHTML = `
            <td>${produit.nom}</td>
            <td>${produit.prix}</td>
            <td>${produit.quantite}</td>
            <td>${totalProduit.toFixed(2)} €</td>
            <td><button onclick="supprimerProduit(${index})">Supprimer</button></td>
        `
        listepanier.appendChild(ligne)
    })
    total.textContent = `Total : ${totaldepart.toFixed(2)} €`
}

const countElement = document.querySelector("#count")
countElement.textContent = panier.reduce((acc, p) => acc + p.quantite, 0)

function supprimerProduit(index) {
    panier.splice(index, 1)
    localStorage.setItem('panier', JSON.stringify(panier))
    afficherPanier()
}
afficherPanier()