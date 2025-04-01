# Architecture Technique

## Introduction

L'architecture technique de Sotto représente l'infrastructure invisible qui permet de libérer les restaurants des écrans tout en optimisant leurs opérations. Ce document détaille les composants techniques, les flux de données et l'infrastructure qui alimentent notre système vocal IA, conçu pour s'intégrer harmonieusement dans l'environnement de restauration. Notre approche privilégie la fiabilité, la performance et la discrétion, permettant à la technologie de s'effacer au profit de l'expérience humaine.

## Vue d'ensemble de l'architecture

L'architecture Sotto s'articule autour de quatre composants principaux qui fonctionnent en synergie pour créer une expérience vocale fluide et efficace.

![Architecture Sotto](https://sotto.ai/images/architecture-overview.png)

### Composants principaux

| Composant | Description | Rôle |
|-----------|-------------|------|
| **Interface Vocale** | Oreillettes et système de reconnaissance vocale | Point de contact avec l'utilisateur |
| **Middleware IA** | Moteurs LLM et traitement contextuel | Interprétation des commandes et génération de réponses |
| **Backend Opérationnel** | Serveurs Next.js et bases de données | Gestion des données et logique métier |
| **Infrastructure Cloud** | Services AWS et systèmes redondants | Hébergement sécurisé et évolutif |

## 1. Interface Vocale

### Matériel d'interaction

L'interface vocale Sotto repose sur des oreillettes WiFi professionnelles spécialement sélectionnées pour répondre aux exigences du secteur de la restauration :

- **Confort prolongé** : Conçues pour être portées pendant des services de 8+ heures
- **Résistance** : Protection contre l'humidité, la chaleur et les chocs légers
- **Autonomie** : 12 heures d'utilisation continue, recharge rapide de 15 minutes pour 2 heures d'autonomie
- **Connectivité** : WiFi dual-band (2.4GHz/5GHz) avec basculement automatique
- **Audio** : Microphones directionnels avec annulation de bruit avancée

### Traitement audio

Le système de traitement audio constitue la première couche critique de notre architecture :

- **Filtrage dynamique** : Suppression des bruits ambiants de restaurant (vaisselle, conversations clients)
- **Reconnaissance contextuelle** : Identification du personnel par empreinte vocale
- **Mise en tampon** : Conservation temporaire des commandes en cas de déconnexion WiFi
- **Compression adaptative** : Optimisation de la bande passante selon la qualité de connexion

## 2. Middleware IA

### Modèles de langage

Au cœur du système Sotto se trouve notre middleware IA spécialisé :

- **LLM optimisé** : Modèle de langage fine-tuné pour le vocabulaire de la restauration
- **Traitement en temps réel** : Latence inférieure à 300ms pour une interaction naturelle
- **Compréhension contextuelle** : Mémorisation des interactions précédentes pour un suivi cohérent
- **Adaptabilité** : Apprentissage continu des spécificités de chaque établissement

### Flux de traitement

```
Commande vocale → Prétraitement audio → Transcription → Analyse d'intention → 
Enrichissement contextuel → Validation logique → Génération de réponse → 
Synthèse vocale → Transmission au serveur
```

### Capacités spécifiques

- **Gestion des interruptions** : Capacité à reprendre une commande interrompue
- **Résolution d'ambiguïtés** : Demande de clarification intelligente sans frustration
- **Adaptation acoustique** : Ajustement aux environnements acoustiques variables
- **Multilinguisme** : Support du français, anglais, espagnol et italien (autres langues en développement)

## 3. Backend Opérationnel

### Architecture Next.js

Notre backend utilise Next.js pour offrir une solution robuste et évolutive :

- **API Routes** : Points d'accès sécurisés pour toutes les opérations
- **Server-Side Rendering** : Interface d'administration performante
- **Progressive Web App** : Fonctionnalités hors-ligne pour la continuité du service
- **WebSockets** : Communication bidirectionnelle en temps réel

### Stockage et persistance

La gestion des données s'appuie sur une architecture hybride :

- **PostgreSQL** : Base de données principale pour les transactions et le catalogue
- **Redis** : Cache haute performance pour les sessions et données temporaires
- **Airtable** : Interface simplifiée pour la gestion du menu et configurations
- **Système de file d'attente** : Traitement asynchrone des commandes avec RabbitMQ

### Intégrations

Le système s'intègre nativement avec l'écosystème de restauration :

- **API LEA POS** : Synchronisation avec notre système de caisse intelligent
- **Passerelles de paiement** : Intégration directe avec les TPE et systèmes de paiement
- **Plateformes de livraison** : Connexion aux API Uber Eats, Deliveroo, etc.
- **Systèmes de réservation** : TheFork, OpenTable et autres plateformes

## 4. Infrastructure Cloud

### Hébergement

L'infrastructure Sotto est conçue pour une fiabilité maximale :

- **Multi-cloud** : Répartition entre AWS (principal) et GCP (backup)
- **Conteneurisation** : Déploiement via Docker et orchestration Kubernetes
- **Auto-scaling** : Ajustement automatique des ressources selon la charge
- **CDN global** : Distribution optimisée du contenu statique

### Sécurité

La protection des données est une priorité absolue :

- **Chiffrement de bout en bout** : Communications sécurisées à tous les niveaux
- **Authentification multi-facteurs** : Accès sécurisé pour l'administration
- **Audit de sécurité** : Vérifications régulières et tests de pénétration
- **Conformité RGPD** : Traitement des données conforme aux réglementations européennes

### Haute disponibilité

Notre architecture garantit un service ininterrompu :

- **SLA de 99,95%** : Engagement de disponibilité pour les composants critiques
- **Redondance géographique** : Réplication des données entre plusieurs régions
- **Basculement automatique** : Détection des défaillances et redirection transparente
- **Mode dégradé intelligent** : Maintien des fonctionnalités essentielles en cas d'incident

## Flux de données et communication

### Cycle de vie d'une commande

Le schéma ci-dessous illustre le parcours complet d'une commande dans l'écosystème Sotto :

1. **Capture vocale** : Le serveur énonce la commande via l'oreillette
2. **Traitement IA** : Interprétation et structuration de la commande
3. **Validation** : Confirmation vocale et vérification des incohérences
4. **Transmission** : Envoi au système de gestion et à la cuisine
5. **Notification** : Alertes vocales sur l'état de préparation
6. **Finalisation** : Confirmation de service et mise à jour des stocks

### Latence et performance

Notre architecture est optimisée pour minimiser les délais :

- **Temps de réponse** : < 1 seconde pour les interactions standard
- **Traitement des commandes** : < 3 secondes de la voix à l'enregistrement
- **Notifications** : Transmission instantanée entre cuisine et service

## Déploiement et installation

### Prérequis techniques

L'installation du système Sotto requiert un environnement minimal :

- **Connexion Internet** : Fibre ou ADSL+ avec débit minimum de 20 Mbps
- **Réseau WiFi** : Couverture complète du restaurant avec points d'accès professionnels
- **Alimentation** : Points de charge stratégiquement placés pour les oreillettes
- **Espace serveur** : Petit espace ventilé pour le serveur local (optionnel)

### Processus d'installation

Notre équipe technique assure une mise en place rapide et non intrusive :

1. **Audit préalable** : Évaluation de l'infrastructure existante
2. **Optimisation réseau** : Installation de points d'accès WiFi si nécessaire
3. **Déploiement matériel** : Configuration des oreillettes et stations de charge
4. **Configuration logicielle** : Importation du menu et personnalisation
5. **Formation** : Sessions de prise en main pour l'équipe
6. **Suivi** : Ajustements pendant les premiers jours d'utilisation

## Évolutivité et maintenance

### Mises à jour

Le système Sotto évolue constamment pour améliorer ses performances :

- **Mises à jour automatiques** : Déploiement nocturne hors des heures de service
- **Améliorations IA** : Enrichissement régulier des capacités linguistiques
- **Nouvelles fonctionnalités** : Ajout trimestriel de fonctionnalités basées sur les retours clients
- **Maintenance prédictive** : Détection proactive des problèmes potentiels

### Extensibilité

L'architecture est conçue pour s'adapter à l'évolution des besoins :

- **API ouvertes** : Possibilité d'intégration avec des systèmes tiers
- **Modules optionnels** : Extensions spécialisées (gestion des stocks, fidélité, etc.)
- **Personnalisation avancée** : Adaptation aux processus spécifiques de chaque établissement

## Conclusion

L'architecture technique de Sotto représente une fusion harmonieuse entre technologie de pointe et simplicité d'usage. En éliminant les interfaces visibles traditionnelles, nous avons conçu un système qui s'intègre naturellement dans l'environnement du restaurant tout en offrant une puissance opérationnelle inégalée. Cette infrastructure robuste, évolutive et discrète permet aux restaurateurs de se concentrer sur l'essentiel : l'expérience culinaire et humaine.

---

### Prochaines étapes

- **Demander une démonstration** pour voir l'architecture Sotto en action dans votre établissement
- **Consulter notre FAQ technique** pour des réponses aux questions spécifiques
- **Contacter notre équipe d'experts** pour une évaluation personnalisée de vos besoins

*Sotto - Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel: l'humain et la gastronomie.*