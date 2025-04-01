# Architecture Technique

## Introduction

Ce document présente l'architecture technique complète du système Sotto, notre solution d'interface vocale IA pour la restauration. Il détaille les infrastructures, composants et flux de données qui permettent à notre système de fonctionner de manière fluide, fiable et sécurisée. Cette architecture a été conçue pour éliminer les interfaces à écran traditionnelles au profit d'une expérience vocale naturelle, tout en garantissant une robustesse opérationnelle dans l'environnement exigeant de la restauration.

L'architecture technique de Sotto repose sur quatre piliers fondamentaux : le système d'interaction vocale, l'infrastructure cloud, le système de communication en temps réel, et l'intégration avec l'écosystème plus large de la restauration. Chaque composant a été soigneusement pensé pour offrir une solution discrète mais puissante qui s'intègre naturellement dans le quotidien des restaurants.

## Vue d'ensemble de l'architecture

### Schéma global

```
┌─────────────────────────────────────────────────────────────────────┐
│                        ÉCOSYSTÈME RESTAURANT                         │
│                                                                     │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐ │
│  │  Oreillettes │     │ Imprimantes  │     │ Système de caisse    │ │
│  │    WiFi      │     │  thermiques  │     │      (LEA POS)       │ │
│  └──────┬───────┘     └───────┬──────┘     └───────────┬──────────┘ │
│         │                     │                        │            │
└─────────┼─────────────────────┼────────────────────────┼────────────┘
          │                     │                        │             
┌─────────┼─────────────────────┼────────────────────────┼────────────┐
│         │                     │                        │            │
│         ▼                     ▼                        ▼            │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                      RÉSEAU LOCAL RESTAURANT                   │ │
│  │                      (WiFi sécurisé + Filaire)                 │ │
│  └───────────────────────────────┬────────────────────────────────┘ │
│                                  │                                  │
│                                  ▼                                  │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                    PASSERELLE LOCALE SOTTO                     │ │
│  │                    (Edge Server - Mini PC)                     │ │
│  └───────────────────────────────┬────────────────────────────────┘ │
│                                  │                                  │
└──────────────────────────────────┼──────────────────────────────────┘
                                   │                                   
┌──────────────────────────────────┼──────────────────────────────────┐
│                                  ▼                                  │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                      INFRASTRUCTURE CLOUD                      │ │
│  │                                                                │ │
│  │   ┌─────────────┐   ┌────────────────┐   ┌─────────────────┐   │ │
│  │   │ Service IA  │   │ Base de données│   │ Gestionnaire    │   │ │
│  │   │   Vocale    │   │   (MongoDB)    │   │ d'authentification│  │ │
│  │   └─────────────┘   └────────────────┘   └─────────────────┘   │ │
│  │                                                                │ │
│  │   ┌─────────────┐   ┌────────────────┐   ┌─────────────────┐   │ │
│  │   │ API Backend │   │ Service temps  │   │  Analytics &    │   │ │
│  │   │  (Next.js)  │   │réel (WebSocket)│   │    Monitoring   │   │ │
│  │   └─────────────┘   └────────────────┘   └─────────────────┘   │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Principes architecturaux

Notre architecture repose sur les principes fondamentaux suivants:

- **Résilience locale** : Le système peut fonctionner même en cas de perte temporaire de connexion internet
- **Sécurité multicouche** : Protection des données à chaque niveau du système
- **Latence minimale** : Optimisation pour des interactions vocales instantanées
- **Évolutivité horizontale** : Capacité à s'adapter à des restaurants de toutes tailles
- **Modularité** : Composants indépendants facilitant les mises à jour et l'évolution du système

## Composants principaux

### 1. Système d'interaction vocale

#### Matériel

| Composant | Spécifications | Fonction |
|-----------|----------------|----------|
| Oreillettes | WiFi direct, batterie 8h, microphone directionnel | Interface utilisateur principale |
| Stations de charge | 5 ports USB-C, indicateurs LED | Recharge et stockage des oreillettes |
| Edge Server | Mini PC Intel NUC, 16GB RAM, 512GB SSD | Traitement local et mise en cache |
| Points d'accès WiFi | WiFi 6, couverture optimisée | Connectivité sans fil fiable |

#### Logiciel de reconnaissance vocale

- **Modèle de langage** : LLM spécialisé pour la restauration avec vocabulaire enrichi
- **Traitement audio** :
  - Suppression de bruit adaptative (SNR >20dB)
  - Filtrage des conversations ambiantes
  - Détection d'intention contextuelle
- **Optimisations** :
  - Modèle léger pour traitement local des commandes courantes
  - Streaming vers le cloud pour requêtes complexes
  - Mémoire contextuelle pour suivi des conversations

### 2. Infrastructure cloud

#### Architecture serverless

```
┌──────────────────────────────────────────┐
│             API Gateway                  │
└───────────────────┬──────────────────────┘
                    │
       ┌────────────┴─────────────┐
       │                          │
┌──────▼───────┐          ┌───────▼──────┐
│  Fonctions   │          │  WebSockets  │
│ API (Next.js)│          │   Service    │
└──────┬───────┘          └───────┬──────┘
       │                          │
┌──────▼──────────────────────────▼──────┐
│        Event Bus (Kafka/SQS)           │
└──────┬──────────────────────────┬──────┘
       │                          │
┌──────▼───────┐          ┌───────▼──────┐
│ Traitement   │          │   Service    │
│  Commandes   │          │ Notification │
└──────┬───────┘          └───────┬──────┘
       │                          │
┌──────▼──────────────────────────▼──────┐
│             Base de données            │
│            (MongoDB Atlas)             │
└─────────────────────────────────────────┘
```

#### Services cloud utilisés

- **Hébergement** : Vercel (Next.js) + AWS (services complémentaires)
- **Base de données** : MongoDB Atlas (cluster géo-redondant)
- **Authentification** : Auth0 avec MFA pour administration
- **Stockage** : AWS S3 pour logs et backups
- **CDN** : Cloudflare pour distribution globale optimisée
- **Monitoring** : DataDog + Sentry pour surveillance proactive

### 3. Système de communication en temps réel

#### Protocoles

- **WebSockets** : Communication bidirectionnelle avec les oreillettes
- **MQTT** : Communication légère avec les dispositifs IoT (imprimantes)
- **HTTP/2** : API REST avec multiplexage pour les requêtes administratives
- **gRPC** : Communication inter-services à haute performance

#### Gestion de la latence

- Connexion WebSocket persistante avec heartbeat
- Mise en cache locale des données fréquemment utilisées
- Priorisation du trafic vocal sur le réseau local
- Circuit breakers pour éviter les cascades d'erreurs

#### Fiabilité et résilience

- **Mode dégradé** : Fonctionnalités essentielles disponibles hors-ligne
- **Synchronisation différée** : File d'attente pour opérations pendant déconnexion
- **Redondance** : Réplication des données critiques
- **Monitoring** : Surveillance proactive de la latence et disponibilité

### 4. Intégration avec l'écosystème restaurant

#### Connexions avec systèmes externes

- **LEA POS** : API bidirectionnelle pour synchronisation des commandes et paiements
- **Imprimantes** : Protocole ESC/POS pour tickets cuisine et additions
- **TPE** : Intégration directe pour paiements sans couture
- **Plateformes de livraison** : API Webhook pour Uber Eats, Deliveroo, etc.
- **Fournisseurs** : API pour gestion automatisée des stocks

#### Sécurité des données

- Chiffrement TLS 1.3 pour toutes les communications
- Tokenisation des données sensibles
- Isolation réseau via VLAN dédié
- Authentification multi-facteurs pour accès administrateur
- Audit logs pour toutes les opérations critiques

## Flux de données principaux

### Traitement d'une commande vocale

1. **Capture audio** : L'oreillette enregistre la commande vocale du serveur
2. **Pré-traitement local** : Filtrage du bruit et compression audio
3. **Transmission** : Envoi du flux audio via WebSocket sécurisé
4. **Reconnaissance** : Le service IA transcrit l'audio en texte
5. **Compréhension** : Analyse sémantique pour extraire l'intention et les entités
6. **Validation** : Vérification de cohérence et disponibilité des articles
7. **Confirmation** : Réponse vocale confirmant la commande
8. **Exécution** : Enregistrement dans la base de données et transmission à la cuisine
9. **Notification** : Impression du ticket en cuisine et mise à jour des écrans

Temps de traitement total cible : < 1 seconde

### Synchronisation des données

```
┌────────────────┐     ┌─────────────────┐     ┌────────────────┐
│ Base de données│     │ Service de      │     │ Edge Server    │
│     Cloud      │────►│ synchronisation │────►│    Local       │
└────────────────┘     └─────────────────┘     └────────────────┘
        ▲                                              │
        │                                              │
        └──────────────────────────────────────────────┘
                    Synchronisation bidirectionnelle
```

- Synchronisation incrémentielle toutes les 30 secondes
- Résolution de conflits basée sur horodatage et règles métier
- Priorisation des données critiques (commandes, paiements)
- Compression et différentiel pour optimiser la bande passante

## Considérations de performance

### Optimisations clés

- **Latence vocale** : <200ms de bout en bout pour une expérience naturelle
- **Empreinte mémoire** : <100MB pour l'application sur les edge servers
- **Consommation batterie** : Optimisation pour 8h d'autonomie des oreillettes
- **Bande passante** : <5MB/heure par oreillette en utilisation normale

### Métriques de surveillance

| Métrique | Seuil d'alerte | Seuil critique | Action |
|----------|----------------|----------------|--------|
| Latence API | >500ms | >1s | Scaling automatique |
| Taux d'erreur | >1% | >5% | Notification équipe technique |
| Utilisation CPU | >70% | >90% | Scaling vertical |
| Disponibilité | <99.9% | <99% | Basculement sur système secondaire |

## Sécurité et conformité

### Protection des données

- Conformité RGPD intégrée dès la conception
- Données personnelles minimisées et pseudonymisées
- Chiffrement des données au repos et en transit
- Politique de rétention claire et configurable

### Audit et traçabilité

- Journalisation complète des accès et modifications
- Surveillance des comportements anormaux
- Authentification forte pour tous les accès administratifs
- Séparation des environnements (développement, test, production)

## Évolution et feuille de route technique

### Phase 1 (Actuelle)
- Architecture de base avec reconnaissance vocale et intégration LEA POS
- Système de communication temps réel fiable
- Infrastructure cloud sécurisée

### Phase 2 (6 mois)
- Amélioration des modèles IA pour reconnaissance contextuelle avancée
- Implémentation du mode hors-ligne robuste
- Optimisation des performances et de la consommation énergétique

### Phase 3 (12 mois)
- Intégration de l'analyse prédictive pour anticipation des besoins
- Extension API pour écosystème complet (fournisseurs, réservations)
- Architecture multi-restaurant pour groupes de restauration

## Conclusion

L'architecture technique de Sotto a été conçue pour allier simplicité d'usage et robustesse opérationnelle. En privilégiant une approche hybride (edge computing + cloud), nous garantissons à la fois réactivité et fiabilité, même dans les environnements difficiles des restaurants. La modularité de notre architecture permet une évolution progressive du système pour intégrer de nouvelles fonctionnalités sans perturber le service existant.

### Prochaines étapes

- Finaliser la documentation technique détaillée de chaque composant
- Mettre en place les environnements de test automatisés
- Organiser une revue d'architecture avec l'équipe technique complète
- Préparer les tests de charge pour valider les performances en conditions réelles

---

Pour toute question ou suggestion concernant cette architecture, contacter l'équipe technique à tech@sotto.ai.