# Checklist de Déploiement Sotto

## Introduction

Ce document présente la liste de vérification standardisée pour chaque déploiement du système Sotto dans un nouvel établissement. Une installation réussie est cruciale pour garantir l'adoption et la satisfaction du client. Cette checklist méthodique permet à notre équipe d'opérations de maintenir une qualité constante et d'assurer que chaque restaurant bénéficie d'une expérience d'intégration fluide et professionnelle. En suivant ce processus structuré, nous minimisons les risques d'erreurs et créons une base solide pour une relation durable avec nos partenaires restaurateurs.

## Phases de Déploiement

Le processus de déploiement Sotto se divise en quatre phases distinctes, chacune essentielle à la réussite globale de l'implémentation:

1. **Pré-déploiement** - Préparation et planification
2. **Installation technique** - Mise en place de l'infrastructure
3. **Formation et configuration** - Personnalisation et apprentissage
4. **Lancement et suivi** - Activation et support initial

## Phase 1: Pré-déploiement

### Évaluation initiale du restaurant

- [ ] Réaliser un audit complet de l'espace physique du restaurant
- [ ] Documenter les points d'alimentation électrique disponibles
- [ ] Cartographier la couverture WiFi existante (test de puissance du signal)
- [ ] Identifier les zones à forte densité sonore
- [ ] Évaluer les besoins en matériel supplémentaire (routeurs, répéteurs)

### Analyse des processus existants

- [ ] Documenter le flux de service actuel (de la commande au paiement)
- [ ] Identifier les points de friction dans les opérations actuelles
- [ ] Recueillir les attentes spécifiques du restaurateur
- [ ] Analyser la carte et les spécificités du menu
- [ ] Évaluer le niveau de familiarité technologique de l'équipe

### Préparation logistique

- [ ] Planifier une date d'installation pendant une période de faible affluence
- [ ] Confirmer la disponibilité du personnel clé pour la formation
- [ ] Préparer le matériel nécessaire:
  * [ ] Oreillettes (nombre adapté à l'équipe + 20% de réserve)
  * [ ] Stations de charge
  * [ ] Routeurs/répéteurs WiFi (si nécessaire)
  * [ ] Matériel de secours

### Configuration préliminaire

- [ ] Créer le compte restaurant dans le système administrateur
- [ ] Importer la carte et les menus dans la base de données Sotto
- [ ] Configurer les profils utilisateurs pour le personnel
- [ ] Préparer les modèles de commandes spécifiques au restaurant
- [ ] Adapter les paramètres acoustiques aux spécificités du lieu

## Phase 2: Installation technique

### Infrastructure réseau

- [ ] Vérifier la qualité de la connexion Internet (vitesse minimale: 50 Mbps)
- [ ] Installer des points d'accès WiFi supplémentaires si nécessaire
- [ ] Configurer un réseau dédié pour le système Sotto (SSID: Sotto-[NomRestaurant])
- [ ] Sécuriser le réseau avec un protocole WPA2-Enterprise
- [ ] Tester la couverture dans tous les espaces de service

| Zone | Force du signal | Latence | Action requise |
|------|----------------|---------|----------------|
| Salle principale | ≥ -60 dBm | < 30 ms | Aucune |
| Terrasse | -60 à -70 dBm | < 50 ms | Répéteur recommandé |
| Cuisine | < -70 dBm | > 50 ms | Installation AP obligatoire |

### Installation des points de charge

- [ ] Identifier les emplacements stratégiques pour les stations de charge
- [ ] Installer les stations à proximité des zones de service
- [ ] Vérifier l'accessibilité et la discrétion des installations
- [ ] Tester l'alimentation électrique de chaque station
- [ ] Étiqueter discrètement chaque station selon sa zone

### Test de l'environnement sonore

- [ ] Effectuer des tests acoustiques aux heures d'affluence
- [ ] Identifier les zones problématiques (cuisine bruyante, bar)
- [ ] Calibrer les paramètres de reconnaissance vocale selon l'environnement
- [ ] Tester les performances des microphones dans différentes conditions
- [ ] Ajuster les seuils de sensibilité si nécessaire

## Phase 3: Formation et configuration

### Configuration du système

- [ ] Personnaliser l'interface vocale selon les besoins spécifiques
- [ ] Configurer les zones et sections du restaurant
- [ ] Paramétrer les flux de communication (salle-cuisine-bar)
- [ ] Définir les niveaux d'autorisation pour chaque type d'utilisateur
- [ ] Intégrer le système avec les solutions existantes (caisse, etc.)

### Formation de l'équipe de direction

- [ ] Former le/la gérant(e) et les managers à l'interface d'administration
- [ ] Expliquer le tableau de bord et les analyses disponibles
- [ ] Démontrer les procédures de gestion des utilisateurs
- [ ] Former aux procédures de résolution des problèmes courants
- [ ] Présenter les ressources de support disponibles

### Formation du personnel de service

- [ ] Organiser des sessions de formation par groupes de 4-5 personnes maximum
- [ ] Distribuer les oreillettes et expliquer leur fonctionnement
- [ ] Pratiquer les commandes vocales de base (prise de commande, modifications)
- [ ] Former aux commandes avancées (annulations, additions, etc.)
- [ ] Réaliser des exercices pratiques en conditions réelles

### Formation du personnel de cuisine

- [ ] Expliquer le système de notification des commandes
- [ ] Former à la communication avec la salle via le système
- [ ] Démontrer les alertes de plats prêts et leur gestion
- [ ] Pratiquer les scénarios courants (rupture d'ingrédients, temps d'attente)

## Phase 4: Lancement et suivi

### Test en conditions réelles

- [ ] Organiser un service test avec une clientèle limitée (amis/famille)
- [ ] Avoir l'équipe Sotto présente pour assistance immédiate
- [ ] Recueillir les retours en temps réel et ajuster les paramètres
- [ ] Identifier les derniers points de friction et les résoudre
- [ ] Vérifier les performances du système en charge réelle

### Lancement officiel

- [ ] Confirmer que tous les tests préliminaires sont concluants
- [ ] S'assurer que tout le personnel est à l'aise avec le système
- [ ] Mettre en place une équipe de support dédiée pour les 3 premiers jours
- [ ] Prévoir un plan de secours en cas de problème technique
- [ ] Activer le système pour le service client

### Suivi initial (J+1 à J+7)

- [ ] Effectuer un debriefing quotidien avec l'équipe du restaurant
- [ ] Recueillir les retours et difficultés rencontrées
- [ ] Ajuster les paramètres selon les besoins identifiés
- [ ] Offrir des sessions de formation complémentaires si nécessaire
- [ ] Surveiller les métriques d'utilisation et de performance

### Évaluation post-déploiement (J+30)

- [ ] Organiser une réunion d'évaluation avec la direction du restaurant
- [ ] Présenter les métriques d'amélioration (temps de service, satisfaction)
- [ ] Recueillir les suggestions d'amélioration
- [ ] Planifier les formations pour le nouveau personnel
- [ ] Établir un calendrier de suivi régulier

## Gestion des problèmes courants

### Problèmes techniques

| Problème | Vérification | Solution |
|----------|--------------|----------|
| Perte de connexion WiFi | Force du signal, interférences | Repositionner/ajouter des points d'accès |
| Oreillette non fonctionnelle | Batterie, connectivité | Remplacer par une unité de secours |
| Reconnaissance vocale défaillante | Niveau de bruit ambiant | Recalibrer les paramètres, vérifier le positionnement du micro |
| Latence dans les commandes | Charge réseau, serveur | Vérifier la bande passante, redémarrer les services |

### Problèmes d'utilisation

| Problème | Vérification | Solution |
|----------|--------------|----------|
| Difficulté à se faire comprendre | Prononciation, bruit | Formation complémentaire, ajustement des paramètres |
| Résistance du personnel | Identification des freins | Accompagnement personnalisé, démonstration des bénéfices |
| Commandes incorrectes | Logs système, formulations | Ajuster les modèles de reconnaissance, clarifier les instructions |

## Contrôle qualité et validation

### Critères de validation du déploiement

- [ ] Taux de reconnaissance vocale > 95% dans toutes les zones
- [ ] Temps de latence < 1 seconde pour les commandes standard
- [ ] 100% du personnel formé et autonome
- [ ] Intégration complète avec les systèmes existants
- [ ] Documentation spécifique au restaurant finalisée et remise

### Documentation à compléter

- [ ] Plan du restaurant avec zones de couverture WiFi
- [ ] Liste du personnel formé avec niveau de compétence
- [ ] Personnalisations spécifiques au restaurant
- [ ] Contacts d'urgence et procédures de support
- [ ] Rapport de déploiement signé par le restaurateur

## Conclusion

La standardisation du processus de déploiement est essentielle pour garantir une expérience cohérente et de haute qualité pour chacun de nos partenaires restaurateurs. Cette checklist assure que chaque installation Sotto respecte nos standards d'excellence et pose les bases d'une relation durable et mutuellement bénéfique.

En suivant méthodiquement ces étapes, nous créons les conditions optimales pour que le système Sotto s'intègre harmonieusement dans l'environnement du restaurant, libérant ainsi le personnel des contraintes technologiques visibles pour se concentrer sur l'essentiel : l'humain et la gastronomie.

---

**Actions pour l'équipe opérationnelle:**
- Utiliser cette checklist pour chaque nouveau déploiement
- Documenter les spécificités rencontrées pour enrichir nos connaissances
- Proposer des améliorations à ce processus après chaque cycle de 5 déploiements
- Partager les bonnes pratiques et les solutions innovantes avec l'ensemble de l'équipe