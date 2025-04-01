# Scripts de Formation Personnel

## Introduction

Ce document présente les scripts et protocoles de formation destinés au personnel utilisant le système Sotto dans les établissements de restauration. Conçu pour différents rôles (serveurs, cuisiniers, managers), ce matériel vise à garantir une intégration harmonieuse de notre interface vocale IA dans le flux de travail quotidien du restaurant. Conformément à notre mission de libérer la restauration des écrans pour créer une expérience plus humaine et efficace, ces scripts mettent l'accent sur une interaction naturelle avec le système, tout en préservant et améliorant les interactions humaines au sein de l'établissement.

## Principes généraux de formation

### Philosophie d'apprentissage

Notre approche de formation repose sur trois principes fondamentaux:

1. **Progressivité** - Introduction graduelle des fonctionnalités, du plus simple au plus complexe
2. **Contextualisation** - Formation en situation réelle, dans l'environnement de travail
3. **Autonomisation** - Développement de l'indépendance et de la confiance dans l'utilisation du système

### Structure des sessions

Chaque session de formation suit une structure en quatre temps:

| Phase | Durée | Objectif | Méthode |
|-------|-------|----------|---------|
| Découverte | 30 min | Familiarisation avec le matériel et concepts | Présentation, manipulation |
| Démonstration | 45 min | Visualisation des cas d'usage | Mise en situation par le formateur |
| Pratique guidée | 1h30 | Utilisation assistée | Exercices supervisés |
| Autonomie | 1h | Utilisation indépendante | Mise en situation réelle avec support à distance |

### Indicateurs de réussite

La formation est considérée comme réussie lorsque le membre du personnel:

- Utilise spontanément les commandes vocales appropriées
- Réagit correctement aux retours du système
- Sait résoudre les problèmes courants
- Maintient un niveau élevé d'attention envers les clients
- Exprime un niveau de confiance d'au moins 8/10 dans l'utilisation du système

## Formation des serveurs

### Session 1: Prise en main du matériel

#### Objectifs
- Se familiariser avec l'oreillette
- Maîtriser les gestes essentiels (mise en marche, réglage, positionnement)
- Comprendre les indicateurs (sons, vibrations)

#### Script d'introduction
```
"Bienvenue à cette première session de formation Sotto. Aujourd'hui, nous allons découvrir ensemble comment ce système va transformer votre façon de travailler, en vous libérant des contraintes des écrans et en vous permettant de vous concentrer pleinement sur vos clients.

L'oreillette que vous tenez entre vos mains est votre nouvel outil de travail principal. Elle a été conçue pour être confortable pendant de longues heures et presque invisible pour vos clients. Commençons par apprendre à la positionner correctement..."
```

#### Exercices pratiques
1. **Mise en place de l'oreillette**
   - Positionnement correct dans l'oreille
   - Ajustement pour confort optimal
   - Test de stabilité en mouvement

2. **Familiarisation avec les commandes tactiles**
   - Allumage/extinction
   - Réglage du volume
   - Mise en pause temporaire

3. **Reconnaissance des signaux**
   - Identification des différentes alertes sonores
   - Compréhension des patterns de vibration
   - Réponse appropriée à chaque signal

### Session 2: Commandes vocales fondamentales

#### Commandes essentielles pour les serveurs

| Commande | Fonction | Exemple |
|----------|----------|---------|
| "Table [numéro]" | Identifier une table | "Table 12" |
| "Commande" | Débuter l'enregistrement d'une commande | "Table 5, commande" |
| "Modifier" | Changer une commande existante | "Modifier table 3" |
| "Addition" | Demander l'addition | "Addition table 8" |
| "Confirmer" | Valider une action | "Confirmer" |
| "Annuler" | Annuler la dernière action | "Annuler" |
| "Urgent" | Signaler une situation prioritaire | "Urgent, table 7" |
| "Pause" | Mettre le système en veille temporaire | "Pause 5 minutes" |

#### Exercices de prise de commande
1. **Scénario simple**
   ```
   "Table 4 commande un plat du jour et une eau pétillante"
   ```

2. **Scénario avec modifications**
   ```
   "Table 6 commande une salade César sans croûtons et un steak frites saignant"
   "Modifier table 6, le steak bien cuit plutôt que saignant"
   ```

3. **Scénario complexe**
   ```
   "Table 12 commande deux menus du jour, le premier avec carpaccio en entrée et poulet en plat, le second avec soupe et poisson, plus une bouteille de vin blanc Chablis"
   ```

### Session 3: Gestion des situations spéciales

#### Scénarios à maîtriser
- Client indécis ou qui change d'avis
- Demandes spéciales et allergies
- Gestion des plaintes
- Coordination avec la cuisine pour les temps d'attente
- Recommandations personnalisées

#### Script pour gestion des allergies
```
"Sotto, table 9 signale une allergie aux fruits à coque"

Sotto: "Allergie aux fruits à coque enregistrée pour la table 9. Les plats suivants du menu contiennent des fruits à coque: salade d'automne, dessert noisette-chocolat, glace pralinée. Souhaitez-vous des alternatives?"

"Oui, propose des alternatives"

Sotto: "Pour la salade d'automne, suggestion: salade fraîcheur sans fruits à coque. Pour les desserts: mousse au chocolat, sorbet fruits rouges. Souhaitez-vous que je transmette ces informations à la cuisine?"

"Oui, transmets à la cuisine"
```

## Formation des cuisiniers

### Communication avec la salle

#### Commandes spécifiques cuisine

- **"Prêt [détail]"** - Signaler un plat prêt à être servi
  ```
  "Prêt entrée table 4"
  "Prêt plats tables 7 et 9"
  ```

- **"Délai [détail]"** - Informer d'un retard
  ```
  "Délai 10 minutes pour table 12, rupture de stock sur le poisson"
  ```

- **"Stock [détail]"** - Signaler un problème d'approvisionnement
  ```
  "Stock épuisé sur le plat du jour, proposer alternative"
  ```

#### Gestion des priorités

Le système Sotto aide à la coordination cuisine-salle par un système de priorités intelligent:

1. **Priorité standard** - Ordre chronologique normal
2. **Priorité haute** - Tables VIP, clients pressés (signalés par la salle)
3. **Priorité urgente** - Situations exceptionnelles nécessitant une action immédiate

#### Exercice de coordination

Simulation d'un service avec plusieurs commandes simultanées, incluant:
- Préparation synchronisée des plats d'une même table
- Communication des temps d'attente
- Gestion des modifications de dernière minute
- Alertes sur les allergènes

## Formation des managers

### Supervision et analytics

#### Commandes spécifiques managers

| Commande | Fonction | Exemple |
|----------|----------|---------|
| "Statut service" | Obtenir une vue d'ensemble | "Statut service" |
| "Performance [période]" | Consulter les métriques | "Performance service midi" |
| "Alertes" | Vérifier les problèmes signalés | "Alertes du jour" |
| "Priorité [détail]" | Modifier les priorités | "Priorité haute table 15, clients pressés" |
| "Message [destinataire]" | Envoyer une communication | "Message équipe, offrir dessert table 8 pour anniversaire" |

#### Utilisation des données en temps réel

Les managers peuvent demander à Sotto des informations stratégiques pendant le service:

```
"Sotto, temps d'attente moyen actuel?"

Sotto: "Temps d'attente moyen actuel: 12 minutes pour les entrées, 18 minutes pour les plats principaux. Trois tables attendent depuis plus de 20 minutes: tables 7, 12 et 15."

"Détails table 12"

Sotto: "Table 12: 4 couverts, commande passée il y a 24 minutes. En attente: deux entrecôtes et deux poissons du jour. Statut en cuisine: en préparation, estimation 5 minutes avant service."
```

### Gestion des problèmes courants

#### Protocole de résolution d'incidents

1. **Identification**
   - Nature du problème (technique, service, cuisine)
   - Impact sur l'expérience client
   - Urgence de la résolution

2. **Isolation**
   - Déterminer si le problème est ponctuel ou systémique
   - Évaluer si d'autres tables sont affectées

3. **Résolution**
   - Application du protocole spécifique au problème
   - Communication claire avec l'équipe concernée
   - Suivi jusqu'à résolution complète

4. **Compensation**
   - Décision sur les mesures compensatoires si nécessaire
   - Communication appropriée au client

#### Script de gestion de crise
```
"Sotto, problème technique oreillette serveur Jean"

Sotto: "Problème technique enregistré. Nature du problème?"

"Connexion intermittente"

Sotto: "Compris. Propositions de résolution: 1) Redémarrage de l'oreillette, 2) Remplacement par oreillette de secours, 3) Réassignation temporaire des tables. Quelle option préférez-vous?"

"Option 2, remplacement"

Sotto: "Remplacement d'oreillette programmé. L'oreillette de secours n°3 est disponible au poste de charge. Souhaitez-vous que j'envoie une notification à Jean?"
```

## Évaluation et suivi

### Métriques d'adoption

Après la formation, nous suivrons les indicateurs suivants:

- **Taux d'utilisation** - Fréquence d'interaction avec le système
- **Taux de reconnaissance** - Pourcentage de commandes correctement interprétées
- **Temps d'adaptation** - Durée nécessaire pour atteindre l'aisance
- **Satisfaction utilisateur** - Retours qualitatifs du personnel

### Sessions de perfectionnement

Des sessions complémentaires sont prévues après 2 semaines d'utilisation:

1. **Analyse des difficultés rencontrées**
2. **Introduction des commandes avancées**
3. **Optimisation des flux de travail**
4. **Personnalisation des interactions**

## Conclusion

Cette documentation de formation constitue la base de l'intégration de Sotto dans votre établissement. L'objectif est de permettre à chaque membre de l'équipe de s'approprier rapidement le système, pour qu'il devienne un allié invisible mais puissant dans l'amélioration du service.

Conformément à notre philosophie, Sotto n'est pas conçu pour remplacer l'humain, mais pour le libérer des contraintes technologiques et lui permettre de se concentrer sur ce qui fait l'essence de la restauration: l'attention portée aux clients et la qualité de l'expérience gastronomique.

---

**Pour aller plus loin:**
- Consultez notre bibliothèque de vidéos de formation sur l'espace dédié
- Programmez une session de questions-réponses avec notre équipe support
- Partagez vos retours d'expérience pour nous aider à améliorer le système