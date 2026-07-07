// Editorial content — English.
// Translated from the canonical French (pages.fr.ts). Keep section ids identical.

import type { PageKey, StandardPageContent } from './types'

export const pagesEn: Record<PageKey, StandardPageContent> = {
  methode: {
    title: 'The <em>R.O.P.</em> method',
    intro:
      'Occipito-Podal Reflexotherapy is a reflex method built on a three-dimensional cartography of the body on the foot and the occiput, in the service of healthcare professionals.',
    sections: [
      {
        id: 'histoire',
        title: 'A history rooted in clinical practice',
        blocks: [
          {
            type: 'para',
            text: 'A physiotherapist qualified in 1970, <strong>Guy Boitout</strong> turned early to manual reflex therapies: connective-tissue reflex massage (the Dicke method), then reflexology after Eunice Ingham, which he discovered in 1978 and went on to teach for several years.',
          },
          {
            type: 'para',
            text: 'Daily practice, however, revealed the limits of these approaches in osteo-musculo-articular disorders. Trained in osteopathy from 1988, Guy Boitout undertook with <strong>Jean-Pierre Vadala</strong>, state-qualified physiotherapist, a systematic confrontation of osteopathic tests with reflex tests.',
          },
          {
            type: 'para',
            text: 'From this research, Occipito-Podal Reflexotherapy was born in <strong>1998</strong>: a reflex cartography faithful to real anatomy, in three dimensions, and a specific stimulation technique. Teaching of the method was structured from 2000 within the association founded by the two authors.',
          },
        ],
      },
      {
        id: 'principes',
        title: 'The principles',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>A 3D cartography</strong> — the body is represented on the feet and the occiput respecting real anatomy: reflex zones are layered in depth as organs are in the body.',
              '<strong>Cross-validation</strong> — every reflex zone was confronted with the corresponding osteopathic tests before being retained in the cartography.',
              '<strong>A specific technique</strong> — stimulation targets the mechanoreceptors of the superficial layers of the skin, transmitting information to the higher nerve centres.',
              '<strong>A defined scope</strong> — the method addresses reversible dysfunctions; it complements medical care and never replaces it.',
            ],
          },
          {
            type: 'callout',
            label: 'Important',
            text: 'R.O.P. is a complementary reflex method. It replaces neither medical diagnosis nor prescribed treatments.',
          },
        ],
      },
      {
        id: 'approfondir',
        title: 'Go deeper',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong><a href="/methode/technique">The technique</a></strong> — stimulating the cutaneous mechanoreceptors.',
              '<strong><a href="/methode/cartographie">The 3D cartography</a></strong> — the representation of the body on the foot and the occiput.',
              '<strong><a href="/methode/fondements">The theoretical foundations</a></strong> — the clinical validation approach.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'The method is learned in twelve days, from its creators and the institute\'s teaching team.',
      href: '/formations',
      label: 'See the training courses',
    },
  },

  technique: {
    title: 'The <em>technique</em>',
    intro:
      'A precise manual stimulation of the cutaneous mechanoreceptors, codified to be reproducible and teachable.',
    sections: [
      {
        id: 'geste',
        title: 'The gesture',
        blocks: [
          {
            type: 'para',
            text: 'The R.O.P. technique is a specific reflex massage: a firm yet superficial stimulation applied to precise zones of the foot or the occiput. It targets the <strong>mechanoreceptors of the superficial layers of the skin</strong>, whose stimulation transmits information to the higher nerve centres.',
          },
          {
            type: 'para',
            text: 'It is this information — not a local mechanical action — that helps the organism correct reversible dysfunctions. The quality of the gesture (location, direction, rhythm, intensity) conditions the response: it is the object of supervised practical learning throughout the training.',
          },
        ],
      },
      {
        id: 'seance',
        title: 'The session',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>An assessment</strong> — history-taking and tests allow the zones to be treated to be prioritised.',
              '<strong>A prioritised treatment</strong> — zones are stimulated in a reasoned order, guided by the assessment rather than a fixed protocol.',
              '<strong>A re-evaluation</strong> — tests are repeated to objectify the immediate response and adapt what follows.',
            ],
          },
          {
            type: 'callout',
            text: 'Indications, contraindications, possible reactions and post-session advice are detailed in the training and in the reference books.',
          },
        ],
      },
    ],
    cta: {
      text: 'The gesture is acquired through supervised practice, from the very first weekend of the foundation course.',
      href: '/formations/base',
      label: 'The foundation course',
    },
  },

  cartographie: {
    title: 'The <em>3D</em> cartography',
    intro:
      'A representation of the body on the foot and the occiput faithful to real anatomy — the most distinctive contribution of R.O.P.',
    sections: [
      {
        id: 'rupture',
        title: 'A break with traditional cartographies',
        blocks: [
          {
            type: 'para',
            text: 'Classical foot-reflexology charts project the body onto the sole of the foot as onto a flat surface. R.O.P. proposes a <strong>three-dimensional cartography</strong>: reflex zones occupy the volume of the foot — plantar, dorsal, medial and lateral aspects — as anatomical structures occupy the volume of the body.',
          },
          {
            type: 'para',
            text: 'A deep organ projects in depth; a superficial structure, at the surface. Anatomical relationships (superpositions, contiguities) are found again in the relationships between reflex zones. This fidelity to real anatomy makes the cartography <strong>learnable through logic</strong> rather than by memorising a drawing.',
          },
        ],
      },
      {
        id: 'occiput',
        title: 'The foot… and the occiput',
        blocks: [
          {
            type: 'para',
            text: 'The method also describes a reflex representation at the occiput, together with complementary zones (skull, sacrum). The occiput–foot pair gives the method its name and offers the practitioner several approaches to the same structure.',
          },
        ],
      },
      {
        id: 'validation',
        title: 'A clinically validated cartography',
        blocks: [
          {
            type: 'para',
            text: 'Every zone of the cartography was retained after systematic confrontation of osteopathic tests with reflex tests, carried out over years of practice by the two authors. This approach is detailed in <a href="/methode/fondements">the theoretical foundations</a>.',
          },
        ],
      },
    ],
    cta: {
      text: 'The complete cartography, plate by plate, is published in the Elsevier Masson volumes.',
      href: '/livres',
      label: 'Discover the books',
    },
  },

  fondements: {
    title: 'The theoretical <em>foundations</em>',
    intro:
      'Anatomical rigour and clinical pragmatism: the approach that presided over the construction of the method.',
    sections: [
      {
        id: 'demarche',
        title: 'The approach',
        blocks: [
          {
            type: 'para',
            text: 'R.O.P. does not start from an energetic postulate but from a dual competence: the anatomical and palpatory knowledge of the osteopath, and the reflex experience of the physiotherapist trained in the historical methods (Dicke, Ingham).',
          },
          {
            type: 'para',
            text: 'The method was built by <strong>cross-validation</strong>: a dysfunction identified by osteopathic tests must be found at the corresponding reflex zone, and its reflex treatment must modify the osteopathic test. Only reproducible correspondences were retained.',
          },
        ],
      },
      {
        id: 'neurophysiologie',
        title: 'The neurophysiological support',
        blocks: [
          {
            type: 'para',
            text: 'The working hypothesis rests on known reflex pathways: stimulation of cutaneous mechanoreceptors travels the afferent nerve pathways towards the higher centres, which in return can modulate tone, vasomotricity and the function of structures in reversible dysfunction. The second volume of the method deepens the relationship with the <strong>neuro-meningeal system</strong>.',
          },
          {
            type: 'callout',
            label: 'Scientific honesty',
            text: 'The method claims a rigorous clinical approach, not the status of a therapy validated by controlled trials. This is precisely the object of the <a href="/recherche">institute\'s observation programme</a>: documenting, measuring and publishing what patients report.',
            tone: 'gold',
          },
        ],
      },
    ],
    cta: {
      text: 'The foundations are developed in detail in the two volumes published by Elsevier Masson.',
      href: '/livres',
      label: 'The books',
    },
  },

  formations: {
    title: 'The <em>training</em> courses',
    intro:
      'A twelve-day foundation course and post-graduate seminars, reserved for healthcare professionals and practising reflexologists.',
    sections: [
      {
        id: 'panorama',
        title: 'The pathway',
        blocks: [
          {
            type: 'table',
            headers: ['Course', 'Format', 'For whom'],
            rows: [
              [
                '<strong><a href="/formations/base">R.O.P. foundation course</a></strong>',
                '4 weekends of 3 days (12 days)',
                'Healthcare professionals, reflexologists, naturopaths',
              ],
              [
                '<strong><a href="/formations/post-gradues">Post-graduate seminars</a></strong>',
                'Thematic seminars',
                'Practitioners who have completed the foundation course',
              ],
            ],
          },
          {
            type: 'para',
            text: 'Courses are given in <strong>Paris, Bordeaux, Nantes and Toulouse</strong> by Guy Boitout, Jean-Pierre Vadala and the institute\'s teaching team.',
          },
          {
            type: 'callout',
            label: 'Continuing education',
            text: 'Registered continuing professional training organisation, no. 24450434645, with the prefect of the Centre-Val de Loire region (France).',
          },
        ],
      },
      {
        id: 'pedagogie',
        title: 'The pedagogy',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>Practice first</strong> — every zone studied is immediately worked on in pairs, under supervision.',
              '<strong>Reference materials</strong> — the two Elsevier Masson volumes serve as course material; the <a href="https://guy-boitout.com" rel="noopener">online reading platform</a> extends them, chapter by chapter, in six languages.',
              '<strong>Certification</strong> — completing the course opens registration in the <a href="/praticiens">practitioner directory</a> and access to the institute\'s tools.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'Dates of upcoming sessions are provided on request.',
      href: '/contact',
      label: 'Request the calendar',
    },
  },

  'formation-base': {
    title: 'The R.O.P. <em>foundation</em> course',
    intro:
      'Twelve days to acquire the theoretical foundations, the 3D cartography and the technique — and integrate them into your practice.',
    sections: [
      {
        id: 'format',
        title: 'The format',
        blocks: [
          {
            type: 'para',
            text: 'The foundation course takes place over <strong>4 weekends of 3 days</strong>, i.e. 12 days of training, spaced out to allow practice between sessions.',
          },
          {
            type: 'table',
            headers: ['Seminar', 'Main contents'],
            rows: [
              ['<strong>Seminar 1</strong>', 'Theoretical foundations, principles of the 3D cartography, learning the gesture'],
              ['<strong>Seminar 2</strong>', 'The spinal column'],
              ['<strong>Seminar 3</strong>', 'The pelvic girdle and the lower limb'],
              ['<strong>Seminar 4</strong>', 'Synthesis, assessment and treatment prioritisation, clinical cases'],
            ],
          },
          {
            type: 'callout',
            text: 'The detailed programme, dates and enrolment conditions are sent on request via the <a href="/contact">contact</a> page.',
          },
        ],
      },
      {
        id: 'public',
        title: 'Audience and prerequisites',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Healthcare professionals: physiotherapists, osteopaths, nurses, midwives, podiatrists…',
              'Practising reflexologists and naturopaths.',
              'Basic anatomy knowledge is required; refresher materials are recommended beforehand.',
            ],
          },
        ],
      },
      {
        id: 'acquis',
        title: 'On completion',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Conduct a reflex assessment and prioritise an R.O.P. treatment.',
              'Locate and treat the reflex zones of the 3D cartography studied.',
              'Know the indications, limits and contraindications of the method.',
              'Access the post-graduate seminars and the directory of certified practitioners.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'Ready to train? Request the enrolment file for the next session.',
      href: '/contact',
      label: 'Contact us',
    },
  },

  'post-gradues': {
    title: 'The <em>post-graduate</em> seminars',
    intro:
      'Thematic seminars to deepen the method, reserved for practitioners who have completed the foundation course.',
    sections: [
      {
        id: 'seminaires',
        title: 'The seminars',
        blocks: [
          {
            type: 'table',
            headers: ['Seminar', 'Theme'],
            rows: [
              ['<strong>Cranial nerves</strong>', 'The reflex zones of the cranial nerves and their applications'],
              ['<strong>ENT pathologies</strong>', 'The ENT sphere: reflex approach to functional disorders'],
              ['<strong>Paediatrics</strong>', 'Specifics of assessment and treatment in children'],
              ['<strong>Viscero-emotional</strong>', 'Viscero-emotional relationships in R.O.P.'],
              ['<strong>Uro-genital</strong>', 'Dysfunctions of the uro-genital sphere'],
            ],
          },
          {
            type: 'para',
            text: 'Each post-graduate seminar combines theoretical reminders, new zones or refinements of the cartography, and supervised practice on clinical cases. The calendar varies from year to year: it is communicated to certified practitioners and on request.',
          },
        ],
      },
    ],
    cta: {
      text: 'A certified practitioner? Receive the calendar of upcoming seminars.',
      href: '/contact',
      label: 'Request the calendar',
    },
  },

  enseignants: {
    title: 'The <em>teachers</em>',
    intro: 'The method is taught by its creators and by a team of certified practitioners trained in the institute\'s pedagogy.',
    sections: [
      {
        id: 'guy-boitout',
        title: 'Guy Boitout',
        blocks: [
          {
            type: 'para',
            text: 'A physiotherapist qualified in 1970 and osteopath D.O., Guy Boitout has devoted more than fifty years to manual reflex therapies: connective-tissue reflex massage (the Dicke method), reflexology after Eunice Ingham — which he taught alongside Martine Faure-Alderson —, then osteopathy, studied in Saint-Étienne and at the European School of Osteopathy in Maidstone (Kent).',
          },
          {
            type: 'para',
            text: 'Co-creator of R.O.P., he is co-author of the two volumes published by Elsevier Masson and is writing the third, devoted to the visceral system. He teaches the method within the institute, based in Sully-sur-Loire (France).',
          },
        ],
      },
      {
        id: 'jean-pierre-vadala',
        title: 'Jean-Pierre Vadala',
        blocks: [
          {
            type: 'para',
            text: 'A state-qualified physiotherapist, Jean-Pierre Vadala is co-creator of the method and co-author of the reference works. His work with Guy Boitout on confronting osteopathic and reflex tests is at the origin of the 3D cartography and the theoretical foundations of R.O.P.',
          },
        ],
      },
      {
        id: 'equipe',
        title: 'The teaching team',
        blocks: [
          {
            type: 'para',
            text: 'Around the two founders, certified practitioners provide practical supervision of the courses in the various cities. Their detailed presentation will be published here with their consent.',
          },
        ],
      },
    ],
    cta: {
      text: 'Meet the team at the next training session.',
      href: '/formations',
      label: 'The training courses',
    },
  },

  praticiens: {
    title: 'The certified <em>practitioners</em>',
    intro:
      'The directory of practitioners trained and certified by the institute, in France and Spain.',
    sections: [
      {
        id: 'annuaire',
        title: 'The directory',
        blocks: [
          {
            type: 'callout',
            label: 'Migration in progress',
            text: 'The directory is being migrated from the previous site. It will be restored here, practitioner by practitioner, with their explicit consent (GDPR). In the meantime, <a href="/contact">contact the institute</a> to be directed to a practitioner near you.',
            tone: 'gold',
          },
          {
            type: 'para',
            text: 'Listing in the directory is reserved for practitioners who have completed the foundation course. Certification attests to the training followed with the institute; it constitutes neither a state diploma nor a medical qualification.',
          },
        ],
      },
      {
        id: 'praticiens-devenir',
        title: 'Becoming a certified practitioner',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Complete the <a href="/formations/base">foundation course</a> (12 days).',
              'Adhere to the institute\'s practice charter.',
              'In time, take part in the <a href="/recherche">patient outcome follow-up</a> — each practitioner\'s contribution to measuring patient benefit.',
            ],
          },
        ],
      },
    ],
    cta: {
      text: 'A certified practitioner who would like to appear in the directory?',
      href: '/contact',
      label: 'Contact us',
    },
  },

  livres: {
    title: 'The reference <em>books</em>',
    intro:
      'The method is published by Elsevier Masson by its two creators — and can now also be read online.',
    sections: [
      {
        id: 'tomes',
        title: 'The trilogy',
        blocks: [
          {
            type: 'table',
            headers: ['Volume', 'Title', 'Edition'],
            rows: [
              ['<strong>Volume 1</strong>', 'Réflexothérapie occipito-podale', 'Elsevier Masson, 2015'],
              ['<strong>Volume 2</strong>', 'Réflexothérapie occipito-podale et système neuro-méningé', 'Elsevier Masson, 2021'],
              ['<strong>Volume 3</strong>', 'The visceral system <em>(in preparation)</em>', 'forthcoming'],
            ],
          },
          {
            type: 'para',
            text: 'The first two volumes set out the theoretical foundations, the 3D cartography plate by plate, and the treatment technique. The third volume, devoted to the visceral system, is being written.',
          },
        ],
      },
      {
        id: 'lire-en-ligne',
        title: 'Read online',
        blocks: [
          {
            type: 'para',
            text: 'The content of the third volume is being published progressively, chapter by chapter, on the reading platform <a href="https://guy-boitout.com" rel="noopener"><strong>guy-boitout.com</strong></a>: multilingual reading (six languages), anatomical plates, synchronised slideshows and free-access chapters to discover the method.',
          },
          {
            type: 'callout',
            text: 'Volumes 1 and 2 are available in bookshops and from online medical booksellers.',
          },
        ],
      },
    ],
    cta: {
      text: 'Start with the free-access chapters on the reading platform.',
      href: 'https://guy-boitout.com',
      label: 'Read online',
    },
  },

  recherche: {
    title: '<em>Research</em> and patient follow-up',
    intro:
      'Honestly measuring what the method brings to patients: the institute\'s observational programme.',
    sections: [
      {
        id: 'pourquoi',
        title: 'Why an observational follow-up',
        blocks: [
          {
            type: 'para',
            text: 'R.O.P. claims a rigorous clinical approach. The logical next step is to <strong>document patient-reported outcomes</strong>: perceived evolution, tolerance, safety signals. Neither a marketing promise nor a clinical trial — an honest observational registry, the first step towards more formal work.',
          },
        ],
      },
      {
        id: 'suivipatient',
        title: 'The SuiviPatient application',
        blocks: [
          {
            type: 'para',
            text: 'The institute is deploying a follow-up application with its certified practitioners: after a session, the patient answers — without an account or installation, via a secure link — short questionnaires at day 0, day 2 and day 21.',
          },
          {
            type: 'bullets',
            items: [
              '<strong>For the patient</strong> — explicit, granular consent, questionnaires taking a few minutes, safety messages directing them to a doctor when necessary.',
              '<strong>For the practitioner</strong> — evolution curves per episode, qualified safety alerts.',
              '<strong>For the institute</strong> — an aggregated, anonymised observatory of the network (no cell of fewer than 5 patients is ever published).',
            ],
          },
          {
            type: 'callout',
            label: 'Data protection',
            text: 'Pseudonymised data, hosting in the European Union, versioned consents, audit log: the registry is designed GDPR-first. It is not a diagnostic tool.',
          },
        ],
      },
      {
        id: 'publication',
        title: 'Towards publication of the results',
        blocks: [
          {
            type: 'para',
            text: 'Aggregated network metrics will be published on this page as the registry grows. This transparency is at the heart of the institute\'s project and its evolution towards a mission-driven structure.',
          },
        ],
      },
    ],
    cta: {
      text: 'A certified practitioner? Join the follow-up programme from the pilot phase.',
      href: '/contact',
      label: 'Take part',
    },
  },

  institut: {
    title: 'The <em>institute</em>',
    intro:
      'An association devoted to teaching R.O.P. and to measuring its benefit for patients.',
    sections: [
      {
        id: 'mission',
        title: 'The mission',
        blocks: [
          {
            type: 'para',
            text: 'The Occipito-Podal Reflexotherapy Institute, a French non-profit (association loi 1901) based in Sully-sur-Loire, has three missions: to <strong>transmit</strong> the method to healthcare professionals, to <strong>guarantee</strong> the quality of practice through certification and continuing education, and to <strong>measure</strong> the benefit brought to patients.',
          },
        ],
      },
      {
        id: 'valeurs',
        title: 'The values',
        blocks: [
          {
            type: 'bullets',
            items: [
              '<strong>Anatomical rigour</strong> — the cartography and the technique rest on real anatomy and cross clinical validation.',
              '<strong>Clinical pragmatism</strong> — the method addresses reversible dysfunctions and knows its limits.',
              '<strong>Complementarity</strong> — R.O.P. complements medicine; it never replaces it.',
              '<strong>Transparency</strong> — the results of the patient follow-up will be published, favourable or not.',
            ],
          },
        ],
      },
      {
        id: 'mission-structure',
        title: 'Towards a mission-driven structure',
        blocks: [
          {
            type: 'para',
            text: 'The association intends to evolve towards a public-benefit, mission-driven structure whose impact — professional training, patient-reported benefit — will be measured and published annually from the observatory\'s data. This page will report on that evolution.',
          },
        ],
      },
    ],
    cta: {
      text: 'Would you like to contribute to the institute\'s project?',
      href: '/contact',
      label: 'Write to us',
    },
  },

  contact: {
    title: '<em>Contact</em>',
    intro: 'Course enrolment, practitioner directory, press or partnerships: write to us.',
    sections: [
      {
        id: 'coordonnees',
        title: 'Write to us',
        blocks: [
          {
            type: 'para',
            text: 'The institute is based in <strong>Sully-sur-Loire</strong> (Loiret, France). Courses take place in Paris, Bordeaux, Nantes and Toulouse.',
          },
          {
            type: 'callout',
            text: 'The contact form will be activated when the site goes live. Until then, the contact details published on the current site remain valid.',
            tone: 'gold',
          },
          {
            type: 'bullets',
            items: [
              '<strong>Training</strong> — detailed programme, dates and enrolment file on request.',
              '<strong>Certified practitioners</strong> — directory listing and access to the SuiviPatient programme.',
              '<strong>Press & partnerships</strong> — interviews, talks and research projects.',
            ],
          },
        ],
      },
    ],
  },

  'mentions-legales': {
    title: 'Legal <em>notice</em>',
    sections: [
      {
        id: 'editeur',
        title: 'Publisher',
        blocks: [
          {
            type: 'para',
            text: 'Institut de Réflexothérapie Occipito-Podale — French non-profit (association loi 1901), Sully-sur-Loire, France. <em>(Exact legal name, registered office, SIREN and publication director to be completed before going live.)</em>',
          },
        ],
      },
      {
        id: 'hebergement',
        title: 'Hosting',
        blocks: [
          {
            type: 'para',
            text: 'This site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA — <a href="https://vercel.com" rel="noopener">vercel.com</a>.',
          },
        ],
      },
      {
        id: 'propriete',
        title: 'Intellectual property',
        blocks: [
          {
            type: 'para',
            text: 'All content on this site (texts, cartographies, illustrations, the R.O.P. name) is protected. Any reproduction without prior written authorisation is prohibited. The books cited are published by Elsevier Masson.',
          },
        ],
      },
    ],
  },

  confidentialite: {
    title: '<em>Privacy</em>',
    sections: [
      {
        id: 'principe',
        title: 'Our principle',
        blocks: [
          {
            type: 'para',
            text: 'This site sets no advertising trackers and uses no third-party analytics service. The only cookie used is the <strong>lang</strong> cookie, which remembers your display language for one year. It allows no identification.',
          },
          {
            type: 'para',
            text: 'Data sent through the future forms (contact, enrolment) will only be used to answer your request and will never be sold or shared. The detailed policy will be published when the forms are activated.',
          },
          {
            type: 'para',
            text: 'The patient follow-up programme relies on a separate application designed GDPR-first: explicit consent, pseudonymisation, hosting in the European Union. See <a href="/recherche">the research page</a>.',
          },
        ],
      },
    ],
  },
}
