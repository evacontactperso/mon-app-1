export const accompagnementPersonnaliseMeta = {
  title: "Coaching personnalisé — L'Atelier des Méthodes",
  description:
    "Un accompagnement sur mesure pour aider votre enfant à gagner en autonomie. Bilan offert, séances individuelles d'1h par semaine.",
};

export const accompagnementPersonnaliseContent = {
  hero: {
    title: "Un accompagnement sur mesure pour aider votre enfant à gagner en autonomie",
    highlightWord: "sur mesure",
    paragraphs: [
      "Votre enfant ne manque pas forcément de capacités. Il a peut-être simplement besoin qu'on observe précisément sa manière de travailler, qu'on identifie ce qui bloque, puis qu'on construise avec lui des méthodes adaptées à son fonctionnement.",
      "Le coaching personnalisé permet de partir de sa situation réelle : ses cours, ses devoirs, ses contrôles, son organisation, sa motivation, ses difficultés et ses objectifs.",
      "Un accompagnement individuel pour l'aider à mieux travailler, reprendre confiance et devenir progressivement plus autonome.",
    ],
    badges: [
      "Bilan offert",
      "Séances individuelles",
      "1h par semaine",
      "Méthodes sur mesure",
      "Collège & lycée",
      "Suivi dans la durée",
    ],
    ctaPrimary: { label: "Réserver un bilan", href: "/contact?offre=accompagnement-personnalise" },
    ctaSecondary: { label: "Me contacter", href: "/contact?offre=accompagnement-personnalise" },
  },
  bilan: {
    title: "Un diagnostic complet\nde ses méthodes de travail",
    subtitle:
      "Avant de proposer des solutions, il faut comprendre précisément comment votre enfant travaille aujourd'hui. Le coaching commence par un bilan approfondi : organisation, supports de cours, devoirs, révisions, motivation, concentration, autonomie, rapport aux notes et objectifs scolaires. L'objectif est d'identifier les vrais blocages, sans jugement, puis de définir les priorités d'accompagnement",
    columnLabels: {
      axis: "Axe du bilan",
      observe: "Ce que l'on observe",
      questions: "Questions posées",
      outcome: "Ce que cela permet d'identifier",
    },
    rows: [
      {
        axis: "Organisation générale",
        observe: "Agenda, emploi du temps, devoirs, anticipation, gestion des semaines chargées.",
        questions: "Comment note-t-il ses devoirs ? Anticipe-t-il les contrôles ? Sait-il quoi faire chaque soir ?",
        outcome: "S'il manque de méthode pour planifier, prioriser ou répartir son travail.",
      },
      {
        axis: "Supports de cours",
        observe: "Cahiers, classeurs, feuilles volantes, cours incomplets, documents perdus.",
        questions: "Ses cours sont-ils faciles à retrouver ? Sont-ils complets ? Peut-il réviser avec ses supports actuels ?",
        outcome: "Si le problème vient d'une base de travail trop désorganisée ou inutilisable.",
      },
      {
        axis: "Méthodes de révision",
        observe: "Relecture, fiches, récitation, quiz, exercices, entraînement avant contrôle.",
        questions: "Comment révise-t-il aujourd'hui ? Comment sait-il qu'il est prêt ? Que fait-il la veille d'un contrôle ?",
        outcome: "S'il confond « relire » avec « apprendre » ou « avoir travaillé » avec « être prêt ».",
      },
      {
        axis: "Compréhension des cours",
        observe: "Cours difficiles, notions floues, blocages récurrents, questions non posées.",
        questions: "Que fait-il quand il ne comprend pas ? Utilise-t-il le manuel ? Demande-t-il de l'aide ?",
        outcome: "S'il a besoin d'une méthode pour décortiquer un cours et identifier précisément ce qui bloque.",
      },
      {
        axis: "Fiches et synthèse",
        observe: "Fiches trop longues, recopies, absence de hiérarchie, difficulté à aller à l'essentiel.",
        questions: "Fait-il des fiches ? À quoi ressemblent-elles ? Les utilise-t-il vraiment pour réviser ?",
        outcome: "S'il a besoin d'apprendre à sélectionner, reformuler et construire des supports utiles.",
      },
      {
        axis: "Exercices et entraînement",
        observe: "Exercices faits trop vite, correction peu exploitée, erreurs répétées.",
        questions: "Reprend-il les exercices ratés ? Sait-il reconnaître un type d'exercice ? Analyse-t-il ses erreurs ?",
        outcome: "S'il a besoin d'une méthode pour progresser après les exercices et les contrôles.",
      },
      {
        axis: "Concentration et procrastination",
        observe: "Difficulté à démarrer, distractions, téléphone, travail en pointillés, fatigue mentale.",
        questions: "Combien de temps met-il à commencer ? Qu'est-ce qui le distrait ? Comment travaille-t-il seul ?",
        outcome: "S'il a besoin d'une routine de démarrage, d'un cadre de concentration ou de tâches plus découpées.",
      },
      {
        axis: "Motivation et confiance",
        observe: "Découragement, peur de l'échec, impression d'être nul, rejet de certaines matières.",
        questions: "Comment parle-t-il de ses notes ? Se sent-il capable de progresser ? Qu'est-ce qui le décourage ?",
        outcome: "Si l'accompagnement doit aussi reconstruire un sentiment de progression et de maîtrise.",
      },
      {
        axis: "Autonomie à la maison",
        observe: "Place des parents, rappels, tensions, dépendance aux vérifications.",
        questions: "Qui organise le travail ? Qui rappelle les devoirs ? Où naissent les tensions ?",
        outcome: "Ce qui peut être progressivement rendu à l'élève pour alléger la charge parentale.",
      },
      {
        axis: "Objectifs et orientation",
        observe: "Brevet, bac, choix de spécialités, filières, projet personnel, sens donné au travail.",
        questions: "À quoi sert son travail aujourd'hui ? A-t-il un objectif clair ? Une échéance importante ?",
        outcome: "Comment relier la méthode à une motivation plus concrète et à un projet scolaire.",
      },
    ],
  },
  solutions: {
    title: "Des méthodes concrètes, choisies en fonction de ses vrais blocages",
    subtitle:
      "Il n'existe pas une seule bonne méthode valable pour tous les élèves. Certains ont besoin d'un planning très cadré. D'autres doivent d'abord apprendre à faire des fiches. D'autres encore savent travailler, mais perdent leurs moyens devant les contrôles. L'objectif du coaching est de proposer des solutions simples, réalistes et adaptées au profil de votre enfant",
    problemLabel: "Problème observé",
    solutionLabel: "Solutions concrètes mises en place",
    rows: [
      {
        problem: "Il ne sait pas *quoi faire* le soir en rentrant",
        solution: "Transformer chaque devoir en *petites tâches précises*.",
      },
      {
        problem: "Il repousse tout au *dernier moment*",
        solution: "Construire un *planning hebdomadaire*.",
      },
      {
        problem: "Il révise beaucoup, mais *retient peu*",
        solution: "Remplacer la simple relecture par des *entraînements actifs*.",
      },
      {
        problem: "Il se décourage après une *mauvaise note*",
        solution: "Analyser la copie *sans jugement* et en tirer des apprentissages.",
      },
      {
        problem: "Il perd du temps à cause du *désordre*",
        solution: "Créer un *système simple* pour ranger et retrouver les documents.",
      },
      {
        problem: "Il a du mal à *se concentrer*",
        solution: "Travailler par *blocs courts* et retirer les distractions.",
      },
    ],
  },
  methodExample: {
    title: "Une méthode décortiquée en petites étapes faciles à appliquer",
    subtitle:
      "Chaque compétence est décomposée en gestes simples et reproductibles — pour que l'élève sache exactement quoi faire, sans rester seul face à une consigne trop vague",
    exampleTitle: "Exemple : planifier ses révisions pour un contrôle",
    intro:
      "Beaucoup d'élèves savent qu'ils ont un contrôle. Mais ils ne savent pas toujours comment transformer cette échéance en plan de révision précis. Dans le coaching, chaque méthode est découpée en étapes simples, pour que l'élève puisse la reproduire seul ensuite.",
    stepsTitle: "Les 10 étapes d'une révision efficace",
    steps: [
      "Identifier la date du contrôle et la matière concernée.",
      "Clarifier le programme exact : chapitres, notions, exercices, méthodes attendues.",
      "Vérifier que le cours est complet, lisible et utilisable.",
      "Repérer ce qui est compris, flou ou totalement bloquant.",
      "Compléter les zones manquantes avec le manuel, le cours, une vidéo ou une question au professeur.",
      "Synthétiser les éléments essentiels dans une fiche courte ou une checklist.",
      "Apprendre activement : réciter, se questionner, cacher/réécrire, expliquer à voix haute.",
      "S'entraîner avec des exercices types ou des sujets proches du contrôle.",
      "Se tester sans aide pour vérifier ce qui est réellement maîtrisé.",
      "Ajuster le plan : reprendre uniquement ce qui bloque encore avant le jour J.",
    ],
    closing:
      "Objectif : que l'élève ne se contente plus de « réviser », mais sache exactement quoi faire, dans quel ordre et comment vérifier qu'il est prêt.",
  },
  followUp: {
    title: "Un suivi régulier pour installer les progrès dans la durée",
    subtitle:
      "Le coaching personnalisé permet d'accompagner l'élève semaine après semaine. On observe ce qui fonctionne, on ajuste ce qui bloque, on encourage les progrès, et on construit progressivement une méthode plus autonome",
    cards: [
      {
        icon: "📆",
        title: "Un rendez-vous *chaque semaine* pour garder le cap",
        text: "Une séance régulière permet de garder le rythme, de faire le point sur la semaine et d'anticiper les échéances à venir. L'élève n'est pas laissé seul avec de bonnes intentions : il avance avec un cadre.",
      },
      {
        icon: "📈",
        title: "Des *progrès mesurés*, semaine après semaine",
        text: "Chaque séance permet de mesurer ce qui change : devoirs mieux planifiés, révisions plus anticipées, fiches plus efficaces, meilleure concentration, erreurs mieux corrigées. Les progrès deviennent visibles.",
      },
      {
        icon: "🧠",
        title: "Une méthode construite autour de *ses besoins*",
        text: "La méthode est ajustée à son profil : élève anxieux, désorganisé, perfectionniste, démotivé, très lent, trop dépendant des parents ou en difficulté sur une matière précise.",
      },
      {
        icon: "💬",
        title: "Des encouragements réguliers pour *gagner confiance*",
        text: "Un élève qui doute a besoin de voir qu'il peut progresser. Le coaching aide à valoriser les petites victoires, à sortir du « je suis nul » et à reconstruire une relation plus positive au travail.",
      },
      {
        icon: "🏠",
        title: "Un *appui* qui soulage aussi les parents",
        text: "Les parents n'ont plus à porter seuls l'organisation, les rappels et les méthodes. Le suivi donne un cadre extérieur, plus neutre, qui peut apaiser les tensions autour des devoirs.",
      },
    ],
  },
  sessions: {
    title: "Des séances adaptées aux besoins du moment",
    subtitle:
      "Chaque séance répond à une situation concrète : un contrôle à préparer, une note à transformer, une méthode à installer ou un objectif scolaire à clarifier",
    cards: [
      {
        icon: "📝",
        title: "Réviser un grand contrôle sans paniquer",
        text: "Construire une stratégie claire : comprendre le programme, vérifier le cours, faire une fiche utile, mémoriser activement, s'entraîner et corriger ce qui bloque encore.",
      },
      {
        icon: "📈",
        title: "Transformer une mauvaise note en plan d'action",
        text: "Comprendre l'erreur sans se décourager, distinguer un problème de cours, de méthode, d'entraînement ou de gestion du temps, puis préparer la prochaine évaluation autrement.",
      },
      {
        icon: "📄",
        title: "Faire une fiche de révision synthétique",
        text: "Construire une fiche courte, claire et utile : fiche de cours, fiche de méthode, fiche d'exercice, fiche de correction, vocabulaire ou lecture.",
      },
      {
        icon: "😌",
        title: "Apprendre à gérer le stress avant une évaluation",
        text: "Identifier ce qui déclenche le stress, préparer une routine avant contrôle, mieux gérer la pression, éviter la panique de dernière minute et retrouver des repères concrets pour se rassurer.",
      },
      {
        icon: "🏖️",
        title: "Construire un planning de révisions pendant les vacances",
        text: "Transformer les vacances en période utile sans les surcharger : répartir les matières, prévoir les temps de repos, alterner apprentissage et entraînement, et garder un rythme réaliste.",
      },
      {
        icon: "🎓",
        title: "Préparer le brevet ou le bac avec méthode",
        text: "Organiser les révisions sur plusieurs semaines, répartir les matières, choisir les bons supports, suivre ses progrès et s'entraîner dans les conditions de l'examen.",
      },
      {
        icon: "🤖",
        title: "Utiliser l'IA avec intelligence et précaution",
        text: "Apprendre à utiliser l'IA comme un tuteur : demander des indices, générer des quiz, vérifier une méthode, s'entraîner à expliquer, sans se contenter de copier une réponse.",
      },
      {
        icon: "🧭",
        title: "Clarifier son orientation scolaire",
        text: "Réfléchir aux choix de filières, spécialités, options, post-bac ou Parcoursup, en reliant les décisions scolaires aux forces, intérêts et objectifs de l'élève.",
      },
      {
        icon: "🎤",
        title: "Réussir un entretien, un oral ou un concours",
        text: "Préparer un entretien d'école privée, un oral, un concours SESAME/ACCÈS ou une sélection : structurer son discours, raconter son parcours, s'entraîner à répondre clairement.",
      },
    ],
  },
  pricing: {
    id: "packs",
    title: "Choisir l'accompagnement adapté aux besoins de votre enfant",
    subtitle:
      "Chaque pack commence par un bilan approfondi. Ensuite, les séances permettent de travailler un objectif précis ou d'installer un suivi plus régulier, selon la situation de l'élève",
    packs: [
      {
        slug: "pack-3h",
        title: "Pack 3h — Besoin ciblé",
        price: "299 €",
        rate: "soit 100 €/h",
        description:
          "Pour répondre à un problème précis : préparer un gros contrôle, reprendre une mauvaise note, créer une méthode de travail, organiser une période chargée ou apprendre à mieux réviser.",
        idealFor: "Un besoin ponctuel, une difficulté ciblée, une remise à plat rapide.",
        cta: { label: "Choisir le pack 3h", href: "/contact?offre=accompagnement-personnalise&pack=3h" },
        accent: "pink" as const,
      },
      {
        slug: "pack-8h",
        title: "Pack 8h — Suivi renforcé",
        price: "549 €",
        rate: "soit 69 €/h",
        description:
          "Pour accompagner l'élève dans la durée, installer de nouvelles habitudes et suivre ses progrès semaine après semaine.",
        idealFor:
          "Brevet, bac, trimestre important, difficultés d'organisation installées, perte de confiance ou besoin d'autonomie.",
        cta: { label: "Choisir le pack 8h", href: "/contact?offre=accompagnement-personnalise&pack=8h" },
        accent: "indigo" as const,
      },
      {
        slug: "pack-16h",
        title: "Pack 16h — Coaching approfondi",
        price: "944 €",
        rate: "soit 59 €/h",
        description:
          "Pour un suivi long sur une période clé : préparation du brevet ou du bac, reprise en profondeur des méthodes, ou accompagnement sur un trimestre entier.",
        idealFor: "Un besoin structurel, une préparation d'examen exigeante, un suivi sur plusieurs mois.",
        cta: { label: "Choisir le pack 16h", href: "/contact?offre=accompagnement-personnalise&pack=16h" },
        accent: "yellow" as const,
        featured: true,
      },
    ],
  },
  inscription: {
    id: "inscription",
    title: "Inscrire votre enfant à un coaching personnalisé",
    subtitle:
      "Votre enfant a besoin d'un accompagnement plus individualisé ? Le coaching permet de partir de sa situation réelle, de comprendre ce qui bloque et de construire avec lui des méthodes adaptées, étape par étape. Le premier temps d'échange permet de vérifier ses besoins, son niveau, ses échéances et le format d'accompagnement le plus pertinent",
    ctaPrimary: { label: "Réserver un bilan", href: "/contact?offre=accompagnement-personnalise" },
    ctaSecondary: { label: "Poser une question", href: "/contact?offre=accompagnement-personnalise" },
    footnote:
      "Vous hésitez entre le pack 3h, 8h ou le pack 16h ? Écrivez-moi quelques lignes sur la situation de votre enfant : je vous aiderai à choisir l'accompagnement le plus adapté.",
  },
};
