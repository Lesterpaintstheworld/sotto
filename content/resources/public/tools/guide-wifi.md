# Guide d'Implémentation WiFi

## Introduction

La performance du système Sotto repose fondamentalement sur une infrastructure WiFi robuste et optimisée. Contrairement aux systèmes traditionnels à écrans, Sotto utilise des oreillettes connectées pour faciliter une communication fluide entre le personnel, la cuisine et le système central. Ce guide vous accompagne dans l'évaluation et l'optimisation de votre réseau WiFi pour garantir une expérience Sotto sans interruption, vous permettant de vous concentrer sur ce qui compte vraiment : l'humain et la gastronomie.

## Pourquoi une infrastructure WiFi optimale est cruciale

Pour Sotto, le WiFi n'est pas simplement un "plus" mais le système nerveux qui connecte tous les éléments de votre restaurant. Une connexion fiable garantit :

- **Communication ininterrompue** entre le personnel équipé d'oreillettes
- **Transmission instantanée** des commandes vers la cuisine
- **Synchronisation en temps réel** avec le système de gestion
- **Expérience fluide** pour votre équipe et vos clients

Un réseau WiFi inadapté peut entraîner des retards, des commandes manquées ou des déconnexions qui nuisent à l'expérience que Sotto vise à créer.

## Évaluation de votre infrastructure actuelle

### Audit de couverture WiFi

Avant toute modification, évaluez votre situation actuelle :

1. **Cartographiez votre espace** - Identifiez les zones principales (salle, cuisine, bar, terrasse)
2. **Mesurez la force du signal** - Utilisez une application de mesure WiFi dans chaque zone
3. **Identifiez les zones mortes** - Repérez les endroits où le signal est faible ou inexistant
4. **Testez aux heures de pointe** - Les performances peuvent varier selon l'affluence

### Analyse des performances réseau

Examinez les caractéristiques techniques de votre installation :

| Paramètre | Minimum recommandé | Optimal pour Sotto |
|-----------|-------------------|-------------------|
| Débit descendant | 25 Mbps | 100+ Mbps |
| Débit montant | 10 Mbps | 50+ Mbps |
| Latence | < 50ms | < 20ms |
| Stabilité | 99% | 99.9% |
| Bande passante | 5 GHz | 5 GHz + 2.4 GHz |

### Identification des interférences

Les restaurants présentent des défis spécifiques pour la propagation WiFi :

- **Équipements de cuisine** générant des interférences électromagnétiques
- **Matériaux de construction** (métal, béton épais) bloquant le signal
- **Appareils concurrents** (micro-ondes, téléphones sans fil) sur les mêmes fréquences
- **Réseaux voisins** saturant les canaux disponibles

## Optimisation de votre réseau WiFi

### Placement stratégique des points d'accès

Le positionnement est crucial pour une couverture optimale :

- **Hauteur idéale** : 2-2,5m du sol, à distance des murs et obstacles métalliques
- **Couverture à 360°** : Placez les points d'accès au centre des zones à couvrir
- **Zones critiques** : Assurez une couverture renforcée en cuisine et dans les zones de service
- **Évitez la proximité** avec les équipements électriques générant des interférences

> **Conseil Sotto** : Pour un restaurant de taille moyenne (100-150m²), prévoyez au minimum deux points d'accès de qualité professionnelle plutôt qu'un seul routeur grand public.

### Configuration optimale

Paramétrez votre réseau pour des performances optimales :

- **Séparez les réseaux** : Créez un SSID dédié pour Sotto, distinct du WiFi client
- **Priorisez le trafic** : Configurez la QoS (Quality of Service) pour donner priorité aux appareils Sotto
- **Sélectionnez les canaux WiFi** les moins encombrés (utilisez un analyseur de spectre)
- **Activez le band steering** pour basculer intelligemment entre 2.4 GHz et 5 GHz
- **Mettez à jour régulièrement** le firmware de vos équipements réseau

### Sécurisation du réseau

La sécurité est essentielle pour protéger vos données et celles de vos clients :

- **Utilisez le WPA3** ou au minimum WPA2-Enterprise pour le réseau Sotto
- **Changez les identifiants par défaut** de tous vos équipements réseau
- **Activez le filtrage MAC** pour les appareils Sotto
- **Isolez le réseau professionnel** du réseau client
- **Mettez en place un pare-feu** adapté à votre environnement

## Solutions matérielles recommandées

### Points d'accès professionnels

Voici notre sélection d'équipements parfaitement compatibles avec Sotto :

| Modèle | Taille de restaurant | Caractéristiques | Prix indicatif |
|--------|---------------------|-----------------|----------------|
| Ubiquiti UniFi 6 Lite | Petit (< 100m²) | WiFi 6, MIMO 2x2, jusqu'à 1.5 Gbps | 90-120€ |
| TP-Link EAP245 | Moyen (100-200m²) | WiFi 5, MIMO 3x3, jusqu'à 1.3 Gbps | 80-100€ |
| Ubiquiti UniFi 6 Pro | Grand (> 200m²) | WiFi 6, MIMO 4x4, jusqu'à 5.4 Gbps | 160-190€ |
| Cisco Meraki MR36 | Tous formats avec gestion cloud | WiFi 6, gestion cloud, analytics | Abonnement |

### Maillage WiFi (Mesh)

Pour les espaces complexes ou sur plusieurs niveaux, un système maillé offre une couverture homogène :

- **Avantages** : Transition transparente entre points d'accès, installation simplifiée
- **Inconvénients** : Coût plus élevé, performances légèrement réduites entre nœuds

Recommandations : Systèmes UniFi Mesh, TP-Link Omada, ou Netgear Orbi Pro pour environnements professionnels.

## Processus d'installation et de validation

### Étapes d'implémentation

1. **Planification** - Cartographiez votre espace et déterminez le placement optimal
2. **Installation** - Positionnez et configurez les points d'accès selon les recommandations
3. **Configuration** - Créez un réseau dédié pour Sotto avec paramètres optimaux
4. **Test initial** - Vérifiez la couverture et les performances dans toutes les zones
5. **Ajustements** - Affinez le placement et les paramètres selon les résultats

### Validation des performances

Après installation, validez que votre réseau répond aux exigences Sotto :

- **Test de couverture** : Signal > -65 dBm dans toutes les zones opérationnelles
- **Test de débit** : Minimum 20 Mbps montant/descendant à chaque point de service
- **Test de latence** : < 30ms vers le serveur local Sotto
- **Test de charge** : Performances stables même aux heures de pointe
- **Test de transition** : Passage fluide d'un point d'accès à l'autre

## Résolution des problèmes courants

| Problème | Causes possibles | Solutions |
|----------|-----------------|-----------|
| Zones sans couverture | Obstacles, distance excessive | Ajoutez un point d'accès ou répéteur |
| Déconnexions fréquentes | Interférences, surcharge | Changez de canal, augmentez la puissance |
| Latence élevée | Congestion réseau, équipement obsolète | Priorisation QoS, mise à niveau matérielle |
| Signal faible | Obstacles, puissance insuffisante | Repositionnez les points d'accès, ajustez la puissance |
| Performances réduites aux heures de pointe | Bande passante insuffisante | Augmentez votre forfait internet, optimisez la QoS |

## Maintenance et surveillance continue

Pour garantir des performances optimales dans la durée :

- **Surveillez régulièrement** les performances avec des outils comme WiFi Analyzer
- **Effectuez des tests mensuels** de couverture et de débit
- **Mettez à jour le firmware** de vos équipements réseau tous les trimestres
- **Réévaluez votre installation** après tout réaménagement de l'espace
- **Documentez les modifications** apportées à votre réseau

## Conclusion

Une infrastructure WiFi robuste constitue le fondement invisible mais essentiel sur lequel repose l'expérience Sotto. En suivant ce guide, vous créez les conditions optimales pour que votre système vocal IA fonctionne avec fluidité et fiabilité, vous permettant de vous concentrer sur l'essentiel : offrir une expérience culinaire exceptionnelle à vos clients.

L'équipe Sotto reste à votre disposition pour vous accompagner dans cette mise en place et optimiser votre infrastructure réseau. N'hésitez pas à contacter notre support technique pour une évaluation personnalisée de votre environnement.

---

**Besoin d'assistance pour optimiser votre réseau ?**  
L'équipe technique Sotto peut réaliser un audit complet de votre infrastructure et vous recommander les améliorations nécessaires. [Contactez-nous](mailto:support@sottosystem.com) pour planifier une intervention.