# veen-app.github.io

Pages web publiques de Veen, servies par GitHub Pages (branche `main`, racine du dépôt).

- `i/index.html` : page d'invitation, `https://veen-app.github.io/i/#<pseudo>` (jalon 6.3).
  Le pseudo est lu dans le « # » par le navigateur : il n'est jamais envoyé au serveur. Aucune
  ressource externe, aucun appel réseau, aucune donnée personnelle. Le bouton « Ouvrir dans
  Veen » ouvre l'appli par `veen://ami/<pseudo>`.
- `index.html` : page d'accueil minimale.
- `confidentialite/`, `conditions/`, `assistance/` : textes légaux en français (jalon 9.4), qui
  font foi ; traductions (jalon 10.7) sous `en/`, `de/`, `nl/` aux mêmes chemins dans chaque
  langue : `privacy/`, `terms/`, `support/`. Nom de l'éditeur (Thomas LÖFFLER) écrit en dur dans chaque page (audit avant la bêta).

Le code de l'appli est dans le dépôt privé `Veen-app/veen`.
