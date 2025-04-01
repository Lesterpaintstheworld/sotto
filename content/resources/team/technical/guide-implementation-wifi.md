# Guide d'Implémentation WiFi

## Introduction

La connectivité WiFi représente la colonne vertébrale de l'écosystème Sotto. Contrairement aux systèmes traditionnels qui peuvent fonctionner avec des connexions intermittentes, notre solution vocale repose entièrement sur une infrastructure réseau solide et optimisée. Ce guide détaille les prérequis techniques, les configurations recommandées et les procédures de test pour garantir une implémentation réussie du système Sotto dans les environnements de restauration.

Une infrastructure WiFi adéquate est essentielle pour assurer la communication fluide et ininterrompue entre les oreillettes du personnel, le système central et l'ensemble de l'écosystème Sotto. Ce document s'adresse aux équipes techniques chargées de l'évaluation préalable et de l'installation des solutions Sotto dans les établissements partenaires.

## Prérequis Techniques

### Matériel Réseau Recommandé

| Composant | Spécification Minimale | Recommandation Optimale | Notes |
|-----------|------------------------|-------------------------|-------|
| Points d'accès | WiFi 5 (802.11ac) | WiFi 6 (802.11ax) | Minimum 2 points d'accès pour redondance |
| Routeur | Double bande (2.4/5GHz) | Maillage (mesh) | Support VLAN recommandé |
| Bande passante | 50 Mbps symétrique | 100+ Mbps symétrique | Fibre optique privilégiée |
| Latence | < 50ms | < 20ms | Critique pour la reconnaissance vocale |
| Redondance | Connexion 4G/5G de secours | Double FAI | Basculement automatique nécessaire |

### Couverture et Densité

La qualité de l'expérience Sotto dépend directement de la couverture WiFi dans l'établissement. Une analyse préalable est indispensable pour identifier:

- **Zones critiques**: Salle, bar, cuisine, réserves, entrée
- **Points morts**: Zones où le signal est faible ou inexistant
- **Sources d'interférence**: Équipements électriques, microondes, autres réseaux
- **Densité d'utilisateurs**: Nombre maximal d'oreillettes simultanées

> **Règle essentielle**: Aucune zone de l'établissement ne doit présenter un signal inférieur à -70 dBm pour garantir une transmission vocale fiable.

### Configuration Réseau

#### Architecture Recommandée

```
Internet ─── Routeur Principal ─┬─ Point d'accès 1 (Salle)
                                │
                                ├─ Point d'accès 2 (Cuisine)
                                │
                                └─ Switch PoE ─── Points d'accès additionnels
```

#### Paramètres SSID

Pour optimiser les performances des oreillettes Sotto:

- Créer un SSID dédié pour le système Sotto
- Configurer le SSID en 5 GHz uniquement
- Activer le band steering pour les appareils compatibles
- Limiter l'accès au SSID par filtrage MAC

#### Qualité de Service (QoS)

La configuration QoS est critique pour prioriser le trafic vocal:

- Prioriser le trafic UDP sur les ports utilisés par Sotto (8080-8089)
- Configurer une file d'attente prioritaire pour les paquets marqués DSCP EF (46)
- Limiter la bande passante des services non essentiels
- Désactiver les fonctionnalités d'économie d'énergie sur les points d'accès

## Procédure d'Évaluation Préalable

### Analyse Site Survey

Avant toute installation, une analyse complète du site est requise:

1. **Cartographie physique**
   - Plan détaillé de l'établissement
   - Identification des matériaux de construction (béton, métal, verre)
   - Repérage des obstacles potentiels au signal

2. **Analyse spectrale**
   - Mesure des interférences sur les bandes 2.4 GHz et 5 GHz
   - Identification des canaux les moins encombrés
   - Détection des réseaux voisins et leur puissance

3. **Test de couverture**
   - Mesure du signal dans toutes les zones opérationnelles
   - Identification des zones nécessitant des points d'accès supplémentaires
   - Création d'une carte thermique de couverture

### Outils Recommandés

- **Analyseurs WiFi professionnels**: Ekahau Site Survey, NetSpot Pro
- **Applications mobiles**: WiFi Analyzer, Network Analyzer Pro
- **Équipement de test**: TP-Link TL-WA801ND pour simulation de points d'accès

## Configuration et Optimisation

### Sécurisation du Réseau

La sécurité du réseau Sotto est primordiale pour protéger les données sensibles:

- **Chiffrement**: WPA3-Enterprise ou minimum WPA2-Enterprise
- **Authentification**: Serveur RADIUS avec certificats
- **Isolation client**: Activer l'isolation des clients sans fil
- **Pare-feu**: Règles restrictives autorisant uniquement les flux nécessaires
- **Mise à jour**: Procédure automatique de mise à jour du firmware

### Optimisation des Points d'Accès

#### Placement Stratégique

- Installer les points d'accès en hauteur (2.5-3m)
- Éviter la proximité immédiate des équipements métalliques
- Orienter les antennes perpendiculairement aux zones à couvrir
- Prévoir un chevauchement de 15-20% entre zones de couverture

#### Configuration Avancée

- **Puissance d'émission**: Ajuster pour éviter les interférences entre points d'accès
- **Sélection de canal**: Configurer manuellement pour éviter les chevauchements
- **Largeur de canal**: 40 MHz sur 5 GHz pour équilibrer débit et portée
- **Roaming**: Activer 802.11r pour transition rapide entre points d'accès
- **Densité client**: Limiter à 15-20 appareils par point d'accès

## Procédures de Test et Validation

### Tests de Performance

Avant de déclarer l'installation conforme, effectuer les tests suivants:

1. **Test de couverture**
   - Vérifier le niveau de signal dans toutes les zones (-65 dBm minimum)
   - Tester avec une oreillette Sotto dans chaque position critique
   - Valider l'absence de points morts

2. **Test de latence**
   - Mesurer le temps de réponse entre l'oreillette et le serveur Sotto
   - Valider que la latence reste < 100ms en charge maximale
   - Tester les transitions entre points d'accès

3. **Test de charge**
   - Simuler l'utilisation maximale prévue (toutes oreillettes actives)
   - Maintenir la communication pendant 30 minutes minimum
   - Vérifier l'absence de déconnexions ou dégradations

### Matrice de Validation

| Test | Critère de succès | Méthode de vérification |
|------|-------------------|-------------------------|
| Couverture | Signal > -65 dBm partout | Cartographie avec outil d'analyse |
| Latence | < 100ms en tout point | Ping continu pendant déplacement |
| Débit | > 5 Mbps par oreillette | Test de bande passante simultané |
| Transition | < 150ms entre AP | Test de roaming avec outil spécialisé |
| Fiabilité | 0 déconnexion sur 4h | Test longue durée en conditions réelles |

### Documentation Post-Installation

À l'issue de l'installation, fournir:

- Carte de couverture WiFi finale avec niveaux de signal
- Inventaire des équipements installés avec configuration
- Paramètres réseau complets (SSID, mots de passe, IP)
- Résultats des tests de performance
- Procédures de dépannage de premier niveau

## Résolution des Problèmes Courants

### Diagnostics de Connectivité

| Symptôme | Causes Possibles | Solutions |
|----------|------------------|-----------|
| Déconnexions fréquentes | Interférences, signal faible | Ajuster canaux, ajouter AP |
| Latence élevée | Congestion réseau, interférences | QoS, changer canal, vérifier FAI |
| Audio saccadé | Perte de paquets, bande passante | Vérifier QoS, optimiser roaming |
| Zones mortes | Obstacles, mauvais placement AP | Repositionner/ajouter des AP |
| Connexion impossible | Problème DHCP, auth | Vérifier serveur DHCP, RADIUS |

### Procédure de Maintenance Préventive

Programmer des vérifications régulières:

- Analyse mensuelle des performances WiFi
- Vérification trimestrielle de la couverture
- Mise à jour semestrielle des firmwares
- Test annuel complet de l'infrastructure

## Conclusion

Une infrastructure WiFi robuste et optimisée constitue le fondement indispensable du système Sotto. En suivant ce guide, vous garantissez une expérience utilisateur fluide et fiable, permettant au personnel de se concentrer sur l'essentiel: le service et l'expérience client.

Les spécifications et recommandations de ce document représentent les conditions idéales pour le déploiement de Sotto. Toutefois, notre équipe technique est disponible pour adapter ces exigences aux contraintes spécifiques de chaque établissement, tout en maintenant les standards de qualité qui font la réputation de notre solution.

---

### Actions Recommandées

- **Avant tout déploiement**: Réaliser une analyse complète du site avec notre outil d'évaluation
- **Pour les installations existantes**: Programmer un audit réseau pour identifier les optimisations possibles
- **Formation**: Inscrire votre équipe technique à notre webinaire mensuel "Infrastructure Réseau pour Sotto"

Pour toute question technique, contactez notre équipe d'intégration à [integration@sotto.ai](mailto:integration@sotto.ai) ou via le canal Slack #team-implementation.