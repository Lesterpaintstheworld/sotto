# Manuel de Support Niveau 1

*Document interne pour les équipes Sotto*

## Introduction

Ce manuel fournit les procédures standardisées de résolution des problèmes courants pour l'équipe de support niveau 1 de Sotto. En tant que première ligne d'assistance auprès de nos restaurateurs partenaires, votre rôle est essentiel pour garantir une expérience fluide avec notre système vocal IA. Ce document vous guidera à travers les problèmes les plus fréquemment rencontrés et leurs solutions, vous permettant de résoudre efficacement la majorité des incidents sans avoir à les escalader vers le support de niveau 2.

Notre approche du support client reflète l'essence même de Sotto : être discret, efficace, attentif et élégant. Même face à des difficultés techniques, nous maintenons une communication claire, professionnelle et rassurante, tout en apportant des solutions concrètes qui permettent à nos partenaires de se concentrer sur l'essentiel : l'humain et la gastronomie.

## Principes fondamentaux du support Sotto

### Notre philosophie d'assistance

1. **Discrétion et efficacité** : Résoudre les problèmes rapidement sans perturber le service du restaurant
2. **Proactivité** : Anticiper les besoins et identifier les problèmes potentiels avant qu'ils n'affectent l'expérience
3. **Langage clair** : Communiquer sans jargon technique excessif
4. **Empathie** : Comprendre que chaque minute d'interruption impacte directement l'activité de nos partenaires

### Niveaux de priorité des incidents

| Niveau | Description | Temps de réponse cible | Exemples |
|--------|-------------|------------------------|----------|
| P1 | Critique - Service totalement indisponible | 15 minutes | Système vocal entièrement hors service, aucune oreillette ne fonctionne |
| P2 | Majeur - Fonctionnalité principale dégradée | 30 minutes | Reconnaissance vocale intermittente, délais importants |
| P3 | Modéré - Fonctionnalité secondaire affectée | 2 heures | Problème avec une fonctionnalité spécifique, une seule oreillette défectueuse |
| P4 | Mineur - Impact limité | 24 heures | Questions d'utilisation, demandes de fonctionnalités |

## Procédures de diagnostic

### Vérifications initiales

Avant de plonger dans des diagnostics spécifiques, effectuez systématiquement ces vérifications :

1. **État du système** : Consultez le tableau de bord d'état des services Sotto pour vérifier si un incident général est en cours
2. **Version du logiciel** : Confirmez que le restaurant utilise la dernière version du système
3. **Connectivité réseau** : Vérifiez l'état de la connexion WiFi du restaurant
4. **Historique récent** : Consultez les tickets récents pour ce partenaire pour identifier d'éventuels problèmes récurrents

### Collecte d'informations essentielles

Pour chaque incident, recueillez systématiquement :

- ID du restaurant et informations de contact
- Description précise du problème (quoi, quand, combien d'utilisateurs affectés)
- Actions déjà entreprises par le restaurateur
- Journaux système pertinents (accessibles via le portail administrateur)

## Résolution des problèmes courants

### 1. Problèmes de connexion des oreillettes

#### Symptômes
- Oreillettes déconnectées du système
- Connexion intermittente
- Voyant d'état clignotant en rouge

#### Procédure de résolution

1. **Vérifier l'état de charge**
   - Demander au partenaire de placer l'oreillette sur son socle de charge pendant au moins 10 minutes
   - Vérifier que le voyant de charge s'allume correctement (bleu fixe)

2. **Réinitialiser l'oreillette**
   - Guider le partenaire pour maintenir le bouton d'alimentation pendant 10 secondes
   - Attendre que le voyant clignote en bleu, indiquant la réinitialisation

3. **Vérifier la connexion WiFi**
   - Demander au partenaire de confirmer que l'oreillette est à portée du routeur WiFi
   - Vérifier dans le portail administrateur que le signal WiFi est suffisant à l'emplacement concerné
   - Si nécessaire, suggérer l'ajout d'un répéteur WiFi dans les zones à signal faible

4. **Réassocier l'oreillette**
   - Accéder au portail administrateur avec les identifiants du restaurant
   - Naviguer vers "Gestion des appareils" > "Oreillettes"
   - Sélectionner "Réassocier" pour l'oreillette problématique
   - Guider le partenaire pour suivre les instructions à l'écran

> **Note** : Si après ces étapes l'oreillette ne se connecte toujours pas, il peut s'agir d'un problème matériel. Créez un ticket de niveau 2 pour un remplacement potentiel.

### 2. Problèmes de reconnaissance vocale

#### Symptômes
- Le système ne répond pas aux commandes vocales
- Mauvaise interprétation fréquente des commandes
- Latence excessive entre la commande et la réponse

#### Procédure de résolution

1. **Vérifier les niveaux sonores ambiants**
   - Demander si le restaurant est particulièrement bruyant au moment des problèmes
   - Vérifier les niveaux de bruit ambiant dans les journaux système

2. **Vérifier le microphone**
   - Guider le partenaire pour inspecter si le microphone est obstrué (résidus, poussière)
   - Proposer un nettoyage délicat avec un chiffon sec

3. **Tester la reconnaissance vocale**
   - Demander au partenaire d'effectuer le test vocal intégré :
     - "Sotto, lancer le test de reconnaissance vocale"
     - Suivre les instructions pour prononcer les phrases de test
   - Analyser les résultats du test dans le portail administrateur

4. **Ajuster les paramètres de sensibilité**
   - Accéder au portail administrateur
   - Naviguer vers "Paramètres" > "Reconnaissance vocale"
   - Ajuster légèrement la sensibilité du microphone (+10%)
   - Demander au partenaire de tester à nouveau

5. **Vérifier les mises à jour linguistiques**
   - Confirmer que les dernières mises à jour du modèle linguistique sont installées
   - Si nécessaire, forcer la mise à jour depuis "Paramètres" > "Système" > "Mises à jour"

> **Conseil** : Pour les restaurants avec des accents régionaux prononcés ou un vocabulaire spécifique, proposez d'activer la période d'apprentissage adaptatif de 7 jours.

### 3. Problèmes de communication entre salle et cuisine

#### Symptômes
- Messages non transmis entre la salle et la cuisine
- Délais excessifs dans la transmission des commandes
- Confirmations manquantes

#### Procédure de résolution

1. **Vérifier la configuration des zones**
   - Accéder au portail administrateur
   - Naviguer vers "Configuration" > "Zones de service"
   - Confirmer que les zones "Salle" et "Cuisine" sont correctement définies
   - Vérifier que les oreillettes sont assignées aux bonnes zones

2. **Tester la communication inter-zones**
   - Demander à un membre du personnel en salle d'envoyer un message test à la cuisine
   - Vérifier dans les journaux système que le message est correctement routé

3. **Vérifier la couverture WiFi**
   - Analyser la carte de couverture WiFi dans le portail administrateur
   - Identifier les éventuelles zones mortes entre la salle et la cuisine
   - Suggérer des ajustements de placement du routeur ou l'ajout de répéteurs si nécessaire

4. **Réinitialiser le module de communication**
   - Naviguer vers "Système" > "Modules" > "Communication inter-zones"
   - Sélectionner "Redémarrer le module"
   - Demander au personnel de tester à nouveau après le redémarrage

### 4. Problèmes de gestion des commandes

#### Symptômes
- Commandes non enregistrées dans le système
- Articles manquants dans les commandes
- Modifications de commandes non prises en compte

#### Procédure de résolution

1. **Vérifier l'intégration avec le système de caisse**
   - Accéder au portail administrateur
   - Naviguer vers "Intégrations" > "Système de caisse"
   - Vérifier l'état de la connexion et les dernières synchronisations
   - Forcer une synchronisation manuelle si nécessaire

2. **Examiner les journaux de commandes**
   - Naviguer vers "Rapports" > "Journaux de commandes"
   - Rechercher les commandes problématiques par heure ou numéro de table
   - Vérifier si les commandes apparaissent dans les journaux mais pas dans le système de caisse

3. **Tester le processus de commande**
   - Guider le partenaire pour effectuer une commande test
   - Suivre le parcours de la commande dans le système en temps réel
   - Identifier à quelle étape la commande échoue

4. **Vérifier la configuration du menu**
   - Naviguer vers "Menu" > "Configuration"
   - Confirmer que tous les articles mentionnés comme problématiques sont correctement configurés
   - Vérifier les synonymes et variations de prononciation pour les articles fréquemment mal interprétés

## Procédure d'escalade

Si vous ne parvenez pas à résoudre un problème après avoir suivi les procédures ci-dessus, suivez ce processus d'escalade :

1. **Préparer les informations d'escalade**
   - Résumez clairement le problème et les étapes déjà entreprises
   - Joignez tous les journaux système pertinents
   - Incluez les coordonnées directes du partenaire

2. **Déterminer le niveau d'urgence**
   - P1/P2 : Escalade immédiate par téléphone + ticket
   - P3/P4 : Escalade par ticket uniquement

3. **Créer un ticket de niveau 2**
   - Utilisez le modèle "Escalade N2" dans le système de tickets
   - Assignez au groupe approprié selon la nature du problème :
     - Problèmes matériels → Équipe Hardware
     - Problèmes logiciels → Équipe Software
     - Problèmes d'intégration → Équipe Intégrations

4. **Informer le partenaire**
   - Expliquez clairement que le problème nécessite une expertise supplémentaire
   - Donnez une estimation réaliste du temps de résolution
   - Proposez des solutions temporaires si possible

## Suivi et documentation

Pour chaque incident résolu :

1. **Documenter la solution**
   - Détaillez précisément les étapes qui ont permis de résoudre le problème
   - Notez tout comportement inhabituel ou information pertinente pour l'équipe technique

2. **Mise à jour de la base de connaissances**
   - Si vous avez découvert une nouvelle solution, proposez-la pour inclusion dans la base de connaissances
   - Utilisez le formulaire "Suggestion KB" accessible depuis le portail support

3. **Suivi proactif**
   - Pour les problèmes P1/P2 : Planifiez un appel de suivi 24h après la résolution
   - Pour les problèmes récurrents : Signalez-les à l'équipe produit via le canal #product-feedback

## Conclusion

Ce manuel couvre les procédures essentielles pour résoudre efficacement les problèmes les plus courants rencontrés par nos partenaires restaurateurs. Votre rôle en tant que support de niveau 1 est crucial pour maintenir la promesse de Sotto : permettre aux restaurants de se libérer des contraintes technologiques pour se concentrer sur l'humain et la gastronomie.

Rappelez-vous que chaque interaction avec un partenaire est une opportunité de renforcer sa confiance dans notre solution. En résolvant rapidement et efficacement les problèmes, vous contribuez directement à la mission de Sotto de transformer positivement l'expérience de la restauration.

Si vous avez des suggestions pour améliorer ce manuel ou les procédures qu'il contient, n'hésitez pas à les partager via le formulaire de feedback accessible dans la section "Ressources d'équipe" du portail support.

---

*Document version 1.2 - Dernière mise à jour : 15 mars 2024*  
*Pour toute question concernant ce document, contactez l'équipe Knowledge Management*