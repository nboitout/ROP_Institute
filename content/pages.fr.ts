// Contenu éditorial — français (langue canonique).
// Sources : site actuel reflexo-occipitopodale.com (Wix), ouvrages Elsevier Masson,
// contenus du repo ROP (guy-boitout.com). À faire relire par l\'institut avant bascule DNS.

import type { PageKey, StandardPageContent } from './types'

export const pagesFr: Record<PageKey, StandardPageContent> = {
  methode: {
    title: 'La méthode <em>R.O.P.</em>',
    intro:
      'La Réflexothérapie Occipito-Podale est une méthode réflexe fondée sur une cartographie en trois dimensions du corps sur le pied et l\'occiput, au service des professionnels de santé.',
    sections: [
      {
        id: 'histoire',
        title: 'Une histoire ancrée dans la clinique',
        blocks: [
          {
            type: 'para',
            text: 'Masseur-kinésithérapeute diplômé en 1970, <strong>Guy Boitout</strong> s\'intéresse très tôt aux thérapies manuelles réflexes : massage réflexe du tissu conjonctif (méthode Dicke), puis réflexologie selon la méthode d\'Eunice Ingham, qu\'il découvre en 1978 et qu\'il enseignera pendant plusieurs années.',
          },
          {
            type: 'para',
            text: 'La pratique quotidienne révèle cependant les limites de ces approches dans les troubles ostéo-musculo-articulaires. Formé à l\'ostéopathie à partir de 1988, Guy Boitout entreprend avec <strong>Jean-Pierre Vadala</strong>, masseur-kinésithérapeute D.E., un travail systématique de confrontation entre tests ostéopathiques et tests réflexes.',
          },
          {
            type: 'para',
            text: 'De cette recherche naît en <strong>1998</strong> la Réflexothérapie Occipito-Podale : une cartographie réflexe fidèle à l\'anatomie réelle, en trois dimensions, et une technique spécifique de stimulation. L\'enseignement de la méthode est structuré dès 2000 au sein de l\'association fondée par les deux auteurs.',
          },
        ],
      },
      {
        id: 'principes',
        title: 'Les principes',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>Une cartographie 3D</strong> — le corps est représenté sur les pieds et l\'occiput en respectant l\'anatomie réelle : les zones réflexes se superposent en profondeur comme les organes dans le corps.',
              '<strong>Une validation croisée</strong> — chaque zone réflexe a été confrontée aux tests ostéopathiques correspondants avant d\'être retenue dans la cartographie.',
              '<strong>Une technique spécifique</strong> — la stimulation cible les mécanorécepteurs des couches superficielles de la peau, pour transmettre une information aux centres nerveux supérieurs.',
              '<strong>Un champ d\'action défini</strong> — la méthode s\'adresse aux dysfonctions réversibles ; elle complète la prise en charge médicale et ne s\'y substitue jamais.',
            ],
          },
          {
            type: 'callout',
            label: 'Important',
            text: 'La R.O.P. est une méthode réflexe complémentaire. Elle ne remplace ni le diagnostic médical, ni les traitements prescrits.',
          },
        ],
      },
      {
        id: 'approfondir',
        title: 'Approfondir',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong><a href="/methode/technique">La technique</a></strong> — la stimulation des mécanorécepteurs cutanés.',
              '<strong><a href="/methode/cartographie">La cartographie 3D</a></strong> — la représentation du corps sur le pied et l\'occiput.',
              '<strong><a href="/methode/fondements">Les fondements théoriques</a></strong> — la démarche de validation clinique.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'La méthode s\'apprend en douze jours, auprès de ses créateurs et de l\'équipe enseignante de l\'institut.',
      href: '/formations',
      label: 'Voir les formations',
    },
  },

  technique: {
    title: 'La <em>technique</em>',
    intro:
      'Une stimulation manuelle précise des mécanorécepteurs cutanés, codifiée pour être reproductible et enseignable.',
    sections: [
      {
        id: 'geste',
        title: 'Le geste',
        blocks: [
          {
            type: 'para',
            text: 'La technique R.O.P. est un massage réflexe spécifique : une stimulation appuyée mais superficielle, appliquée sur des zones précises du pied ou de l\'occiput. Elle cible les <strong>mécanorécepteurs des couches superficielles de la peau</strong>, dont la stimulation transmet une information aux centres nerveux supérieurs.',
          },
          {
            type: 'para',
            text: 'C\'est cette information — et non une action mécanique locale — qui aide l\'organisme à corriger les dysfonctions réversibles. La qualité du geste (localisation, direction, rythme, intensité) conditionne la réponse : elle fait l\'objet d\'un apprentissage pratique encadré tout au long de la formation.',
          },
        ],
      },
      {
        id: 'seance',
        title: 'La séance',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>Un bilan</strong> — l\'interrogatoire et les tests permettent de hiérarchiser les zones à traiter.',
              '<strong>Un traitement hiérarchisé</strong> — les zones sont stimulées dans un ordre raisonné, guidé par le bilan et non par un protocole figé.',
              '<strong>Une réévaluation</strong> — les tests sont repris pour objectiver la réponse immédiate et adapter la suite.',
            ],
          },
          {
            type: 'callout',
            text: 'Les indications, contre-indications, réactions possibles et conseils post-séance sont détaillés dans la formation et dans les ouvrages de référence.',
          },
        ],
      },
    ],
    cta: {
      text: 'Le geste s\'acquiert en pratique supervisée, dès le premier week-end de la formation de base.',
      href: '/formations/base',
      label: 'La formation de base',
    },
  },

  cartographie: {
    title: 'La cartographie <em>3D</em>',
    intro:
      'Une représentation du corps sur le pied et l\'occiput fidèle à l\'anatomie réelle — l\'apport le plus distinctif de la R.O.P.',
    sections: [
      {
        id: 'rupture',
        title: 'Une rupture avec les cartographies traditionnelles',
        blocks: [
          {
            type: 'para',
            text: 'Les cartographies classiques de réflexologie plantaire projettent le corps sur la plante du pied comme sur une surface plane. La R.O.P. propose une <strong>cartographie en trois dimensions</strong> : les zones réflexes occupent le volume du pied — faces plantaire, dorsale, médiale et latérale — comme les structures anatomiques occupent le volume du corps.',
          },
          {
            type: 'para',
            text: 'Un organe profond se projette en profondeur ; une structure superficielle, en surface. Les rapports anatomiques (superpositions, contiguïtés) se retrouvent dans les rapports entre zones réflexes. Cette fidélité à l\'anatomie réelle rend la cartographie <strong>apprenable par la logique</strong> plutôt que par la mémorisation d\'un dessin.',
          },
        ],
      },
      {
        id: 'occiput',
        title: 'Le pied… et l\'occiput',
        blocks: [
          {
            type: 'para',
            text: 'La méthode décrit également une représentation réflexe au niveau de l\'occiput, ainsi que des zones complémentaires (crâne, sacrum). Le couple occiput–pied donne son nom à la méthode et offre au praticien plusieurs voies d\'abord pour une même structure.',
          },
        ],
      },
      {
        id: 'validation',
        title: 'Une cartographie validée par la clinique',
        blocks: [
          {
            type: 'para',
            text: 'Chaque zone de la cartographie a été retenue après confrontation systématique entre tests ostéopathiques et tests réflexes, menée sur des années de pratique par les deux auteurs. Cette démarche est détaillée dans <a href="/methode/fondements">les fondements théoriques</a>.',
          },
        ],
      },
    ],
    cta: {
      text: 'La cartographie complète, planche par planche, est publiée dans les ouvrages Elsevier Masson.',
      href: '/livres',
      label: 'Découvrir les livres',
    },
  },

  fondements: {
    title: 'Les fondements <em>théoriques</em>',
    intro:
      'Rigueur anatomique et pragmatisme clinique : la démarche qui a présidé à la construction de la méthode.',
    sections: [
      {
        id: 'demarche',
        title: 'La démarche',
        blocks: [
          {
            type: 'para',
            text: 'La R.O.P. ne part pas d\'un postulat énergétique mais d\'une double compétence : la connaissance anatomique et palpatoire de l\'ostéopathe, et l\'expérience réflexe du kinésithérapeute formé aux méthodes historiques (Dicke, Ingham).',
          },
          {
            type: 'para',
            text: 'La méthode s\'est construite par <strong>validation croisée</strong> : une dysfonction identifiée par les tests ostéopathiques doit se retrouver à la zone réflexe correspondante, et son traitement réflexe doit modifier le test ostéopathique. Seules les correspondances reproductibles ont été retenues.',
          },
        ],
      },
      {
        id: 'neurophysiologie',
        title: 'Le support neurophysiologique',
        blocks: [
          {
            type: 'para',
            text: 'L\'hypothèse de travail s\'appuie sur les voies réflexes connues : la stimulation des mécanorécepteurs cutanés emprunte les voies nerveuses afférentes vers les centres supérieurs, qui peuvent en retour moduler le tonus, la vasomotricité et la fonction des structures en dysfonction réversible. Le deuxième tome de la méthode approfondit les rapports avec le <strong>système neuro-méningé</strong>.',
          },
          {
            type: 'callout',
            label: 'Honnêteté scientifique',
            text: 'La méthode revendique une démarche clinique rigoureuse, non un statut de thérapeutique validée par essais contrôlés. C\'est précisément l\'objet du <a href="/recherche">programme d\'observation de l\'institut</a> : documenter, mesurer et publier ce que rapportent les patients.',
            tone: 'gold',
          },
        ],
      },
    ],
    cta: {
      text: 'Les fondements sont développés en détail dans les deux tomes publiés chez Elsevier Masson.',
      href: '/livres',
      label: 'Les ouvrages',
    },
  },

  formations: {
    title: 'Les <em>formations</em>',
    intro:
      'Une formation de base de douze jours et des séminaires post-gradués, réservés aux professionnels de santé et aux réflexologues en exercice.',
    sections: [
      {
        id: 'panorama',
        title: 'Le parcours',
        blocks: [
          {
            type: 'table',
            headers: ['Formation', 'Format', 'Pour qui'],
            rows: [
              [
                '<strong><a href="/formations/base">Formation de base R.O.P.</a></strong>',
                '4 week-ends de 3 jours (12 jours)',
                'Professionnels de santé, réflexologues, naturopathes',
              ],
              [
                '<strong><a href="/formations/post-gradues">Post-gradués</a></strong>',
                'Séminaires thématiques',
                'Praticiens ayant validé la formation de base',
              ],
            ],
          },
          {
            type: 'para',
            text: 'Les formations sont dispensées à <strong>Paris, Bordeaux, Nantes et Toulouse</strong> par Guy Boitout, Jean-Pierre Vadala et l\'équipe enseignante de l\'institut.',
          },
          {
            type: 'callout',
            label: 'Formation continue',
            text: 'Organisme enregistré au titre de la formation professionnelle continue sous le n° 24450434645 auprès du préfet de la région Centre-Val de Loire.',
          },
        ],
      },
      {
        id: 'pedagogie',
        title: 'La pédagogie',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>La pratique d\'abord</strong> — chaque zone étudiée est immédiatement travaillée en binôme, sous supervision.',
              '<strong>Les supports de référence</strong> — les deux tomes Elsevier Masson servent de support de cours ; la <a href="https://guy-boitout.com" rel="noopener">plateforme de lecture en ligne</a> les prolonge, chapitre par chapitre, en six langues.',
              '<strong>La certification</strong> — la validation de la formation ouvre l\'inscription à l\'<a href="/praticiens">annuaire des praticiens</a> et l\'accès aux outils de l\'institut.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'Les dates des prochaines sessions sont communiquées sur demande.',
      href: '/contact',
      label: 'Demander le calendrier',
    },
  },

  'formation-base': {
    title: 'Formation R.O.P. <em>de base</em>',
    intro:
      'Douze jours pour acquérir les fondements théoriques, la cartographie 3D et la technique — et les intégrer à votre pratique.',
    sections: [
      {
        id: 'format',
        title: 'Le format',
        blocks: [
          {
            type: 'para',
            text: 'La formation de base se déroule en <strong>4 week-ends de 3 jours</strong>, soit 12 jours de formation, espacés pour permettre la mise en pratique entre les sessions.',
          },
          {
            type: 'table',
            headers: ['Séminaire', 'Contenus principaux'],
            rows: [
              ['<strong>Séminaire 1</strong>', 'Fondements théoriques, principes de la cartographie 3D, apprentissage du geste'],
              ['<strong>Séminaire 2</strong>', 'La colonne vertébrale'],
              ['<strong>Séminaire 3</strong>', 'La ceinture pelvienne et le membre inférieur'],
              ['<strong>Séminaire 4</strong>', 'Synthèse, bilan et hiérarchisation du traitement, cas cliniques'],
            ],
          },
          {
            type: 'callout',
            text: 'Le détail du programme, les dates et les conditions d\'inscription sont adressés sur simple demande via la page <a href="/contact">contact</a>.',
          },
        ],
      },
      {
        id: 'public',
        title: 'Public et prérequis',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Professionnels de santé : masseurs-kinésithérapeutes, ostéopathes, infirmiers, sages-femmes, podologues…',
              'Réflexologues et naturopathes en exercice.',
              'La connaissance de l\'anatomie de base est nécessaire ; des supports de remise à niveau sont conseillés en amont.',
            ],
          },
        ],
      },
      {
        id: 'acquis',
        title: 'À l\'issue de la formation',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Conduire un bilan réflexe et hiérarchiser un traitement R.O.P.',
              'Localiser et traiter les zones réflexes de la cartographie 3D étudiée.',
              'Connaître les indications, limites et contre-indications de la méthode.',
              'Accéder aux séminaires post-gradués et à l\'annuaire des praticiens certifiés.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'Prêt à vous former ? Demandez le dossier d\'inscription de la prochaine session.',
      href: '/contact',
      label: 'Nous contacter',
    },
  },

  'post-gradues': {
    title: 'Les <em>post-gradués</em>',
    intro:
      'Des séminaires thématiques pour approfondir la méthode, réservés aux praticiens ayant validé la formation de base.',
    sections: [
      {
        id: 'seminaires',
        title: 'Les séminaires',
        blocks: [
          {
            type: 'table',
            headers: ['Séminaire', 'Thème'],
            rows: [
              ['<strong>Nerfs crâniens</strong>', 'Les zones réflexes des nerfs crâniens et leurs applications'],
              ['<strong>Pathologies ORL</strong>', 'La sphère ORL : abord réflexe des troubles fonctionnels'],
              ['<strong>Pédiatrie</strong>', 'Spécificités du bilan et du traitement chez l\'enfant'],
              ['<strong>Viscéro-émotionnel</strong>', 'Les rapports viscéro-émotionnels en R.O.P.'],
              ['<strong>Uro-génital</strong>', 'Les dysfonctions de la sphère uro-génitale'],
            ],
          },
          {
            type: 'para',
            text: 'Chaque post-gradué articule rappels théoriques, nouvelles zones ou affinements de la cartographie, et pratique supervisée sur cas cliniques. Le calendrier varie d\'une année à l\'autre : il est communiqué aux praticiens certifiés et sur demande.',
          },
        ],
      },
    ],
    cta: {
      text: 'Praticien certifié ? Recevez le calendrier des prochains séminaires.',
      href: '/contact',
      label: 'Demander le calendrier',
    },
  },

  enseignants: {
    title: 'Les <em>enseignants</em>',
    intro: 'La méthode est enseignée par ses créateurs et par une équipe de praticiens certifiés formés à la pédagogie de l\'institut.',
    sections: [
      {
        id: 'guy-boitout',
        title: 'Guy Boitout',
        blocks: [
          {
            type: 'para',
            text: 'Masseur-kinésithérapeute diplômé en 1970, ostéopathe D.O., Guy Boitout se consacre depuis plus de cinquante ans aux thérapies manuelles réflexes : massage réflexe du tissu conjonctif (méthode Dicke), réflexologie selon Eunice Ingham — qu\'il a enseignée aux côtés de Martine Faure-Alderson —, puis ostéopathie, étudiée à Saint-Étienne et à l\'European School of Osteopathy de Maidstone (Kent).',
          },
          {
            type: 'para',
            text: 'Co-créateur de la R.O.P., il est co-auteur des deux tomes publiés chez Elsevier Masson et poursuit la rédaction du troisième, consacré au système viscéral. Il enseigne la méthode au sein de l\'institut, basé à Sully-sur-Loire.',
          },
        ],
      },
      {
        id: 'jean-pierre-vadala',
        title: 'Jean-Pierre Vadala',
        blocks: [
          {
            type: 'para',
            text: 'Masseur-kinésithérapeute D.E., Jean-Pierre Vadala est co-créateur de la méthode et co-auteur des ouvrages de référence. Son travail avec Guy Boitout sur la confrontation des tests ostéopathiques et réflexes est à l\'origine de la cartographie 3D et des fondements théoriques de la R.O.P.',
          },
        ],
      },
      {
        id: 'equipe',
        title: 'L\'équipe enseignante',
        blocks: [
          {
            type: 'para',
            text: 'Autour des deux fondateurs, des praticiens certifiés assurent l\'encadrement pratique des formations dans les différentes villes. Leur présentation détaillée sera publiée ici avec leur accord.',
          },
        ],
      },
    ],
    cta: {
      text: 'Rencontrez l\'équipe lors de la prochaine session de formation.',
      href: '/formations',
      label: 'Les formations',
    },
  },

  praticiens: {
    title: 'Les <em>praticiens</em> certifiés',
    intro:
      'L\'annuaire des praticiens formés et certifiés par l\'institut, en France et en Espagne.',
    sections: [
      {
        id: 'annuaire',
        title: 'L\'annuaire',
        blocks: [
          {
            type: 'callout',
            label: 'Migration en cours',
            text: 'L\'annuaire est en cours de migration depuis l\'ancien site. Il sera rétabli ici, praticien par praticien, avec leur accord explicite (RGPD). En attendant, <a href="/contact">contactez l\'institut</a> pour être orienté vers un praticien près de chez vous.',
            tone: 'gold',
          },
          {
            type: 'para',
            text: 'Figurer dans l\'annuaire est réservé aux praticiens ayant validé la formation de base. La certification atteste de la formation suivie auprès de l\'institut ; elle ne constitue ni un diplôme d\'État, ni une habilitation médicale.',
          },
        ],
      },
      {
        id: 'praticiens-devenir',
        title: 'Devenir praticien certifié',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Valider la <a href="/formations/base">formation de base</a> (12 jours).',
              'Adhérer à la charte de pratique de l\'institut.',
              'Participer, à terme, au <a href="/recherche">suivi observationnel des patients</a> — la contribution de chaque praticien à la mesure du bénéfice patient.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'Vous êtes praticien certifié et souhaitez figurer dans l\'annuaire ?',
      href: '/contact',
      label: 'Nous contacter',
    },
  },

  livres: {
    title: 'Les <em>ouvrages</em> de référence',
    intro:
      'La méthode est publiée chez Elsevier Masson par ses deux créateurs — et se lit désormais aussi en ligne.',
    sections: [
      {
        id: 'tomes',
        title: 'La trilogie',
        blocks: [
          {
            type: 'table',
            headers: ['Tome', 'Titre', 'Édition'],
            rows: [
              ['<strong>Tome 1</strong>', 'Réflexothérapie occipito-podale', 'Elsevier Masson, 2015'],
              ['<strong>Tome 2</strong>', 'Réflexothérapie occipito-podale et système neuro-méningé', 'Elsevier Masson, 2021'],
              ['<strong>Tome 3</strong>', 'Le système viscéral <em>(en préparation)</em>', 'à paraître'],
            ],
          },
          {
            type: 'para',
            text: 'Les deux premiers tomes exposent les fondements théoriques, la cartographie 3D planche par planche et la technique de traitement. Le troisième tome, consacré au système viscéral, est en cours de rédaction.',
          },
        ],
      },
      {
        id: 'lire-en-ligne',
        title: 'Lire en ligne',
        blocks: [
          {
            type: 'para',
            text: 'Le contenu du troisième tome est publié progressivement, chapitre par chapitre, sur la plateforme de lecture <a href="https://guy-boitout.com" rel="noopener"><strong>guy-boitout.com</strong></a> : lecture multilingue (six langues), planches anatomiques, diaporamas synchronisés et chapitres en accès libre pour découvrir la méthode.',
          },
          {
            type: 'callout',
            text: 'Les tomes 1 et 2 sont disponibles en librairie et auprès des librairies médicales en ligne.',
          },
        ],
      },
    ],
    cta: {
      text: 'Commencez par les chapitres en accès libre sur la plateforme de lecture.',
      href: 'https://guy-boitout.com',
      label: 'Lire en ligne',
    },
  },

  recherche: {
    title: 'La <em>recherche</em> et le suivi patient',
    intro:
      'Mesurer honnêtement ce que la méthode apporte aux patients : le programme observationnel de l\'institut.',
    sections: [
      {
        id: 'pourquoi',
        title: 'Pourquoi un suivi observationnel',
        blocks: [
          {
            type: 'para',
            text: 'La R.O.P. revendique une démarche clinique rigoureuse. La suite logique est de <strong>documenter les résultats rapportés par les patients</strong> : évolution ressentie, tolérance, signaux de sécurité. Ni promesse marketing, ni essai clinique — un registre observationnel honnête, première marche vers des travaux plus formels.',
          },
        ],
      },
      {
        id: 'suivipatient',
        title: 'L\'application SuiviPatient',
        blocks: [
          {
            type: 'para',
            text: 'L\'institut déploie auprès de ses praticiens certifiés une application de suivi : après une séance, le patient répond — sans compte ni installation, via un lien sécurisé — à de courts questionnaires à J0, J+2 et J+21.',
          },
          {
            type: 'bullets',
            items: [
              '<strong>Pour le patient</strong> — consentement explicite et granulaire, questionnaires de quelques minutes, messages de sécurité l\'orientant vers un médecin si nécessaire.',
              '<strong>Pour le praticien</strong> — courbes d\'évolution par épisode, alertes de sécurité qualifiées.',
              '<strong>Pour l\'institut</strong> — un observatoire agrégé et anonymisé du réseau (aucune cellule de moins de 5 patients n\'est publiée).',
            ],
          },
          {
            type: 'callout',
            label: 'Protection des données',
            text: 'Données pseudonymisées, hébergement en Union européenne, consentements versionnés, journal d\'audit : le registre est conçu RGPD d\'abord. Il ne constitue pas un outil de diagnostic.',
          },
        ],
      },
      {
        id: 'publication',
        title: 'Vers la publication des résultats',
        blocks: [
          {
            type: 'para',
            text: 'Les métriques agrégées du réseau seront publiées sur cette page à mesure que le registre s\'étoffera. Cette transparence est au cœur du projet de l\'institut et de son évolution vers une structure à mission.',
          },
        ],
      },
    ],
    cta: {
      text: 'Praticien certifié ? Rejoignez le programme de suivi dès la phase pilote.',
      href: '/contact',
      label: 'Participer',
    },
  },

  institut: {
    title: 'L\'<em>institut</em>',
    intro:
      'Une association dédiée à l\'enseignement de la R.O.P. et à la mesure de son bénéfice pour les patients.',
    sections: [
      {
        id: 'mission',
        title: 'La mission',
        blocks: [
          {
            type: 'para',
            text: 'L\'Institut de Réflexothérapie Occipito-Podale, association loi 1901 basée à Sully-sur-Loire, a trois missions : <strong>transmettre</strong> la méthode aux professionnels de santé, <strong>garantir</strong> la qualité de la pratique par la certification et la formation continue, et <strong>mesurer</strong> le bénéfice apporté aux patients.',
          },
        ],
      },
      {
        id: 'valeurs',
        title: 'Les valeurs',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>Rigueur anatomique</strong> — la cartographie et la technique reposent sur l\'anatomie réelle et la validation clinique croisée.',
              '<strong>Pragmatisme clinique</strong> — la méthode s\'adresse aux dysfonctions réversibles et connaît ses limites.',
              '<strong>Complémentarité</strong> — la R.O.P. complète la médecine, elle ne s\'y substitue jamais.',
              '<strong>Transparence</strong> — les résultats du suivi patient seront publiés, favorables ou non.',
            ],
          },
        ],
      },
      {
        id: 'mission-structure',
        title: 'Vers une structure à mission',
        blocks: [
          {
            type: 'para',
            text: 'L\'association a vocation à évoluer vers une structure à mission d\'intérêt général, dont l\'impact — formation des professionnels, bénéfice rapporté par les patients — sera mesuré et publié annuellement à partir des données de l\'observatoire. Cette page rendra compte de cette évolution.',
          },
        ],
      },
    ],
    cta: {
      text: 'Envie de contribuer au projet de l\'institut ?',
      href: '/contact',
      label: 'Nous écrire',
    },
  },

  contact: {
    title: '<em>Contact</em>',
    intro: 'Inscriptions aux formations, annuaire des praticiens, presse ou partenariats : écrivez-nous.',
    sections: [
      {
        id: 'coordonnees',
        title: 'Nous écrire',
        blocks: [
          {
            type: 'para',
            text: 'L\'institut est basé à <strong>Sully-sur-Loire</strong> (Loiret, France). Les formations se déroulent à Paris, Bordeaux, Nantes et Toulouse.',
          },
          {
            type: 'callout',
            text: 'Le formulaire de contact sera activé lors de la mise en service du site. D\'ici là, les coordonnées publiées sur le site actuel restent valables.',
            tone: 'gold',
          },
          {
            type: 'bullets',
            items: [
              '<strong>Formations</strong> — programme détaillé, dates et dossier d\'inscription sur demande.',
              '<strong>Praticiens certifiés</strong> — inscription à l\'annuaire et accès au programme SuiviPatient.',
              '<strong>Presse & partenariats</strong> — interviews, interventions et projets de recherche.',
            ],
          },
        ],
      },
    ],
  },

  'mentions-legales': {
    title: 'Mentions <em>légales</em>',
    sections: [
      {
        id: 'editeur',
        title: 'Éditeur du site',
        blocks: [
          {
            type: 'para',
            text: 'Institut de Réflexothérapie Occipito-Podale — association loi 1901, Sully-sur-Loire, France. <em>(Dénomination exacte, siège social, SIREN et coordonnées du directeur de la publication à compléter avant la mise en production.)</em>',
          },
        ],
      },
      {
        id: 'hebergement',
        title: 'Hébergement',
        blocks: [
          {
            type: 'para',
            text: 'Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — <a href="https://vercel.com" rel="noopener">vercel.com</a>.',
          },
        ],
      },
      {
        id: 'propriete',
        title: 'Propriété intellectuelle',
        blocks: [
          {
            type: 'para',
            text: 'L\'ensemble des contenus de ce site (textes, cartographies, illustrations, marque R.O.P.) est protégé. Toute reproduction sans autorisation écrite préalable est interdite. Les ouvrages cités sont publiés par Elsevier Masson.',
          },
        ],
      },
    ],
  },

  confidentialite: {
    title: '<em>Confidentialité</em>',
    sections: [
      {
        id: 'principe',
        title: 'Notre principe',
        blocks: [
          {
            type: 'para',
            text: 'Ce site ne dépose aucun traceur publicitaire et n\'utilise aucun service d\'analyse tiers. Le seul cookie utilisé est le cookie <strong>lang</strong>, qui mémorise votre langue d\'affichage pendant un an. Il ne permet aucune identification.',
          },
          {
            type: 'para',
            text: 'Les données transmises via les futurs formulaires (contact, inscription) ne serviront qu\'à répondre à votre demande et ne seront jamais cédées. La politique détaillée sera publiée avec l\'activation des formulaires.',
          },
          {
            type: 'para',
            text: 'Le programme de suivi patient repose sur une application distincte, conçue « RGPD d\'abord » : consentement explicite, pseudonymisation, hébergement en Union européenne. Voir <a href="/recherche">la page recherche</a>.',
          },
        ],
      },
    ],
  },
}
