# Protocole de Validation des Oreillettes - Test Service Complet

## Introduction

Ce protocole définit la méthodologie de test des oreillettes Sotto sur un service complet en conditions réelles, en utilisant une approche "Wizard of Oz" où un opérateur humain simule les réponses de l'IA. Cette approche permet de valider l'ergonomie et les performances du système sur une durée prolongée, tout en collectant des données précieuses pour l'entraînement de l'IA.

### Objectifs principaux

1. Valider l'ergonomie physique de l'oreillette sur une durée de service complète
2. Tester la fluidité des interactions vocales en conditions réelles de service
3. Mesurer la qualité audio dans différentes zones du restaurant
4. Collecter des données réelles pour calibrer l'IA
5. Identifier les scénarios d'usage spécifiques au service

### Configuration du test

- **Durée** : 1 service complet (11h30-14h30)
- **Participants** :
  * 1 ambassadeur restaurant équipé de l'oreillette
  * 1 opérateur Sotto simulant l'IA
  * 1 observateur technique
- **Matériel** :
  * Oreillette de test + backup
  * Système d'enregistrement audio
  * Outils de mesure acoustique
  * Grilles d'observation

## Configuration du test

### Test comparatif des oreillettes

#### Phase préparatoire
- Test sur 3 services consécutifs (midi ou soir)
- Même ambassadeur pour garantir la cohérence des retours
- Même opérateur Sotto pour standardiser les interactions
- Rotation des 3 types d'oreillettes :
  * Jour 1 : Conduction osseuse
  * Jour 2 : Micro tige
  * Jour 3 : Micro cravate

#### Grille d'évaluation comparative

| Critère | Conduction osseuse | Micro tige | Micro cravate |
|---------|-------------------|------------|---------------|
| Confort (1-10) | | | |
| Qualité audio émission | | | |
| Qualité audio réception | | | |
| Stabilité en mouvement | | | |
| Discrétion visuelle | | | |
| Résistance bruit ambiant | | | |

### Équipe de test

| Rôle | Responsabilités |
|------|-----------------|
| Opérateur Sotto | Simulation des réponses IA, observation des interactions |
| Ambassadeur restaurant | Utilisation du système en service réel |
| Observateur | Documentation des interactions et retours |
| Support technique | Installation et maintenance du matériel |

### Environnement de test

- Restaurant partenaire représentatif
- Phase comparative : 3 services consécutifs
- Phase complète : 1 semaine (2 services par jour)
- Configuration minimale :
  * Réseau WiFi dédié
  * Station d'opérateur isolée
  * Système d'enregistrement audio
  * 3 types d'oreillettes de test + backup

## Protocole de test

### Phase 1 : Installation et formation (Jour 1)

1. **Installation technique**
   - Configuration du réseau
   - Installation du poste opérateur
   - Test des communications
   - Vérification de la couverture WiFi

2. **Formation initiale**
   - Présentation du système à l'ambassadeur
   - Exercices de base (2h)
   - Simulation de service (2h)
   - Questions/réponses

### Phase 2 : Test en conditions réelles (Jours 2-6)

#### Service du midi
- 11h00 : Briefing et vérification matériel
- 11h30-14h30 : Service avec système
- 14h30-15h00 : Debriefing à chaud

#### Service du soir
- 18h00 : Briefing et vérification matériel
- 18h30-22h30 : Service avec système
- 22h30-23h00 : Debriefing à chaud

### Phase 3 : Analyse et conclusion (Jour 7)

- Entretien approfondi avec l'ambassadeur
- Analyse des données collectées
- Synthèse des observations
- Recommandations pour itération

## Aspects à mesurer

### 1. Ergonomie physique

#### Évaluation par type d'oreillette

Pour chaque type d'oreillette (conduction osseuse, micro tige, micro cravate) :

| Critère | Méthode de mesure | Objectif |
|---------|-------------------|-----------|
| Confort | Échelle 1-10 toutes les 2h | > 8/10 |
| Stabilité | Nombre d'ajustements nécessaires | < 3/service |
| Autonomie | Durée effective d'utilisation | > 6h |
| Facilité d'utilisation | Temps pour mettre/enlever | < 30s |
| Discrétion | Retours clients et personnel | Minimal |
| Adaptabilité morphologique | Test sur différents profils | > 90% |

### 2. Qualité audio et reconnaissance vocale

| Critère | Méthode de mesure | Objectif |
|---------|-------------------|-----------|
| Clarté voix | Taux de compréhension | > 95% |
| Bruit ambiant | Mesure dB et impact | Filtrage efficace |
| Latence | Délai de transmission | < 200ms |
| Volume | Ajustements nécessaires | < 2/service |
| STT Accuracy | Taux reconnaissance | > 98% |
| Word Error Rate | WER sur commandes | < 2% |
| Temps réponse STT | Latence traitement | < 300ms |

#### Collecte données IA
- **Variations linguistiques**
  * Accents régionaux
  * Vocabulaire métier
  * Expressions locales
  * Variations saisonnières menu

- **Environnement sonore**
  * Signature acoustique par zone
  * Pics de bruit typiques
  * Patterns de fond sonore
  * Interférences spécifiques

### 3. Interactions service-cuisine

| Aspect | Données à collecter |
|--------|-------------------|
| Temps de transmission | Mesure des délais |
| Clarté des commandes | Taux d'erreur |
| Confirmation réception | Efficacité protocole |
| Gestion des urgences | Temps de réaction |

### 4. Impact client

- Réactions spontanées des clients
- Temps d'attente perçu
- Qualité du service perçue
- Commentaires sur la technologie

### 5. Données pour IA

- Enregistrement des commandes vocales
- Variations linguistiques observées
- Scénarios non anticipés
- Patterns de communication

## Collecte de données

### Outils de mesure

1. **Journal de bord**
   - Incidents techniques
   - Observations ergonomiques
   - Retours utilisateur
   - Situations particulières

2. **Enregistrements audio**
   - Communications service-cuisine
   - Commandes clients
   - Ambiance sonore

3. **Métriques quantitatives**
   - Temps de service
   - Taux d'erreur
   - Utilisation batterie
   - Métriques réseau

### Grille d'observation

| Moment | Aspect | Observation | Impact |
|--------|--------|-------------|---------|
| Installation | Ergonomie | Facilité de mise en place | Adoption |
| Service | Audio | Qualité en période rush | Efficacité |
| Clôture | Batterie | Autonomie réelle | Opérationnel |

## Analyse et livrables

### Rapport quotidien

- Synthèse des observations
- Incidents notables
- Ajustements effectués
- Points d'attention

### Rapport final

1. **Synthèse exécutive**
   - Conclusions principales
   - Go/No-go pour phase suivante
   - Points critiques à adresser

2. **Analyse détaillée**
   - Performance par critère
   - Données quantitatives
   - Retours qualitatifs
   - Recommandations

3. **Annexes**
   - Données brutes
   - Enregistrements
   - Notes d'observation
   - Documentation technique

## Considérations éthiques

### Protection des données

- Consentement des participants
- Anonymisation des données
- Sécurisation des enregistrements
- Conformité RGPD

### Bien-être des participants

- Pauses régulières
- Support continu
- Droit de retrait
- Compensation adaptée

## Prochaines étapes

1. **Validation du protocole**
   - Revue par équipe technique
   - Validation juridique
   - Test à blanc

2. **Préparation matérielle**
   - Commande équipements
   - Configuration outils
   - Tests préliminaires

3. **Planning**
   - Sélection restaurant
   - Recrutement ambassadeur
   - Calendrier détaillé

---

*Document interne - Pour usage équipe Sotto uniquement*
