export const courses = [
    {
        unitCode: "CUC106",
        unitName: "Design and Innovative Communication Technology",
        unitDependency: [],
        unitType: 'CU',
        sem: 1,
        year: 1,
        pressumedKnowledge: ''
    },
    {
        unitCode: "HIT164",
        unitName: "Computer Fundamentals",
        unitDependency: [],
        unitType: 'CO',
        sem: 1,
        year: 1, pressumedKnowledge: ''
    },
    {
        unitCode: "HIT172",
        unitName: "Operating Systems and Applications",
        unitDependency: [],
        unitType: 'CO',
        sem: 1,
        year: 1, pressumedKnowledge: ''
    },
    {
        unitCode: "CUC107",
        unitName: "Cultural Intelligence",
        unitDependency: [],
        unitType: 'CU',
        sem: 2,
        year: 1, pressumedKnowledge: ''
    }, {
        unitCode: "HIT140",
        unitName: "Foundation of Data Science",
        unitDependency: [],
        unitType: 'CO',
        sem: 2,
        year: 1, pressumedKnowledge: ''
    }, {
        unitCode: "HIT137",
        unitName: "Software Now",
        unitDependency: [],
        unitType: 'CO',
        sem: 2,
        year: 1, pressumedKnowledge: ''
    },
    {
        unitCode: "HIT226",
        unitName: "Mobile Web Structure",
        unitDependency: ["HIT164"],
        unitType: 'CO',
        sem: 1,
        year: 2, pressumedKnowledge: ''
    }, {
        unitCode: "HIT234",
        unitName: "Database Concepts",
        unitDependency: [],
        unitType: 'CO',
        sem: 1,
        year: 2, pressumedKnowledge: ''
    },
    {
        unitCode: "HIT274",
        unitName: "Network Engineering Applications",
        unitDependency: [],
        unitType: 'CO',
        sem: 2,
        year: 2, pressumedKnowledge: ''
    }, {
        unitCode: "PMO201",
        unitName: "Project Management",
        unitDependency: [],
        unitType: 'CO',
        sem: 2,
        year: 2, pressumedKnowledge: ''
    }, {
        unitCode: "HIT381",
        unitName: "Human Computer Interaction Design",
        unitDependency: ['HIT226'],
        unitType: 'CO',
        sem: 1,
        year: 3, pressumedKnowledge: 'PMO021'
    }, {
        unitCode: "HIT363",
        unitName: "Enterprises IT Management",
        unitDependency: [],
        unitType: 'CO',
        sem: 1,
        year: 3, pressumedKnowledge: 'PMO201'
    },
    {
        unitCode: "HIT333",
        unitName: "Cyber Security",
        unitDependency: ['HIT226'],
        unitType: 'CO',
        sem: 2,
        year: 3, pressumedKnowledge: 'HIT274'
    }, {
        unitCode: "HIT401",
        unitName: "Capstone Project",
        unitDependency: [],
        unitType: 'CO',
        sem: 2,
        year: 3, pressumedKnowledge: 'Completion of at least 80 credit points of relevant undergraduate units'
    }, {
        unitCode: "HIT235",
        unitName: "Digital System and Computer Architecture",
        unitDependency: [],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT237",
        unitName: "Building Interactive Software",
        unitDependency: ['HIT137'],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT326",
        unitName: "Database Driven Web Application",
        unitDependency: ['HIT226'],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: 'BIS234'
    }, {
        unitCode: "HIT332",
        unitName: "Embedded Mobile System",
        unitDependency: ['HIT235'],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT353",
        unitName: "Business Intelligence Data Mining",
        unitDependency: [],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT365",
        unitName: "C Programming",
        unitDependency: ['HIT137'],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT374",
        unitName: "Enterprises Network Engineering",
        unitDependency: ['HIT274'],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT391",
        unitName: "Machine Learning: Advancements and Applications",
        unitDependency: [],
        unitType: 'SE',
        sem: 1,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT220",
        unitName: "Algorithms and Complexity",
        unitDependency: [],
        unitType: 'SE',
        sem: 2,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT238",
        unitName: "The Mobile Paradigm",
        unitDependency: ['HIT137', 'HIT226'],
        unitType: 'SE',
        sem: 2,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT339",
        unitName: "Distributed Development",
        unitDependency: ['HIT237'],
        unitType: 'SE',
        sem: 2,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "HIT372",
        unitName: "Organisation Network Infrastructure",
        unitDependency: ['HIT172'],
        unitType: 'SE',
        sem: 2,
        year: 0, pressumedKnowledge: ''
    }, {
        unitCode: "ELECTIVE1",
        unitName: "Elective 1",
        unitDependency: [],
        unitType: 'E',
        sem: 1,
        year: 1, pressumedKnowledge: ''
    }, {
        unitCode: "ELECTIVE2",
        unitName: "Elective 2",
        unitDependency: [],
        unitType: 'E',
        sem: 2,
        year: 1, pressumedKnowledge: ''
    }, {
        unitCode: "ELECTIVE3",
        unitName: "Elective 3",
        unitDependency: [],
        unitType: 'E',
        sem: 1,
        year: 3, pressumedKnowledge: ''
    }, {
        unitCode: "ELECTIVE4",
        unitName: "Elective 4",
        unitDependency: [],
        unitType: 'E',
        sem: 2,
        year: 3, pressumedKnowledge: ''
    }
];