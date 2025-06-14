// Vérifie si le panier existe déjà dans le localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Fonction pour ajouter un article
function ajouterAuPanier(nom, prix) {
  const article = { nom, prix };
  panier.push(article);
  localStorage.setItem("panier", JSON.stringify(panier));
  alert(nom + " ajouté au panier !");
}

// Si on est sur la page panier.html, afficher les articles
if (document.getElementById("contenu-panier")) {
  const contenuPanier = document.getElementById("contenu-panier");
  const totalElement = document.getElementById("total");
  let total = 0;

  if (panier.length === 0) {
    contenuPanier.innerHTML = "<p>Votre panier est vide.</p>";
  } else {
    panier.forEach((article, index) => {
      const item = document.createElement("div");
      item.className = "article-panier";
      item.innerHTML = `
        <p>${article.nom} - ${article.prix} FCFA</p>
        <button onclick="supprimerArticle(${index})">Supprimer</button>
      `;
      contenuPanier.appendChild(item);
      total += article.prix;
    });
    totalElement.innerText = "Total : " + total + " FCFA";
  }
}

// Supprimer un article du panier
function supprimerArticle(index) {
  panier.splice(index, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  location.reload(); // Recharge la page pour mettre à jour l'affichage
}
