// Nom complet de l'éditeur de Veen, une seule constante pour toutes les pages (jalon 9.4).
// Thomas la complète ; elle remplit chaque élément marqué data-editor-name.
const EDITOR_NAME = 'Thomas';

for (const element of document.querySelectorAll('[data-editor-name]')) {
  element.textContent = EDITOR_NAME;
}
