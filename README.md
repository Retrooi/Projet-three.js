 # Projet Quiz wikipedia 

Une petite application React qui transforme l'apprentissage de l'histoire en une aventure interactive. Le projet propose un quiz de culture générale (histoire) avec un système de progression (XP, niveaux, verrous) et une navigation légère.

> Le dépôt s'appelle **Projet-three.js** mais le code actuel n'utilise pas la librairie Three.js. Il s'agit d'une application React simple autour d'un quiz.


 Fonctionnalités principales
- 3 palier de 1 thème par palier
- Dans 1 palie il a 3 niveaux avec la proposition commencer les questions ou les leçon
- Page de lecon (vidéo+texe)
- Quiz de 5 questions (questions + images)
- Une question vaux 1 point d'(XP)
- Timer de 10 secondes par question
- Indication visuelle de bonne / mauvaise réponse
- Système de points (XP) avec niveaux et contenus verrouillés
- Navigation interne via [Wouter](https://github.com/molefrog/wouter)



 Structure du projet

- `src/App.js` — composant principal, logique de quiz et navigation
- `src/index.js` — point d'entrée React
- `src/index.css` — styles globaux
- `public/` — fichier HTML et ressources statiques

---

## Améliorations possibles

- Ajouter d'autres thèmes (science, géographie, etc.)
- Remplacer les liens Wikipédia par des leçons intégrées
- Ajouter des animations ou transitions CSS
- Intégrer un backend pour sauvegarder le score / historique


## 🧪 Tests

Ce projet utilise la configuration par défaut de Create React App.
