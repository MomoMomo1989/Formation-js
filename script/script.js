 alert('Bonjour tappez ok');
 console.log('bienvenu');
 // Attendre le chargement de la page
document.addEventListener(
    "DOMContentLoaded",
    function () {
      // Ajoute un gestionnaire d'évènement `change` sur la case à cocher
      document
        .getElementById("facturation-checkbox")
        .addEventListener("change", basculerFacturation);
    },
    false,
  );
  
  function basculerFacturation() {
    // On sélectionne les champs texte de l'adresse de facturation
    let champsFacturation = document.querySelectorAll(
      '#facturation input[type="text"]',
    );
    // On sélectionne les libellés de l'adresse de facturation
    let libellesFacturation = document.querySelectorAll(".libelle-facturation");
  
    // On active/désactive les champs et libellés
    for (let i = 0; i < champsFacturation.length; i++) {
      champsFacturation[i].disabled = !champsFacturation[i].disabled;
  
      if (
        libellesFacturation[i].getAttribute("class") ===
        "libelle-facturation libelle-desactive"
      ) {
        libellesFacturation[i].setAttribute("class", "libelle-facturation");
      } else {
        libellesFacturation[i].setAttribute(
          "class",
          "libelle-facturation libelle-desactive",
        );
      }
    }
  }
  const x = 12;
  x = 5555;
  console.log()