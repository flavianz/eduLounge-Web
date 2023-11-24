export const subjects: {
    [key: string]: {
        teacher: {
            name: string;
        };
        average: string;
        klassen: string[];
        name: string;
        tests: {
            [key: string]: {
                name: string;
                start: number;
                end: number;
                topics: string;
                createdAt: number;
                mark: number;
                type: "project" | "presentation" | "exam";
                weight: number;
            };
        };
    };
} = {
    bg: {
        teacher: {
            name: "Melanie Rast",
        },
        average: "4.267",
        name: "Biologie",
        klassen: ["1a"],
        tests: {
            "0": {
                name: "Einführung, Zytologie 1\t",
                start: new Date(2023, 9, 26).getTime(),
                end: new Date(2023, 9, 26).getTime(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "project",
                mark: 4,
                weight: 1,
            },
            "1": {
                name: "Praktikumsnote",
                start: Date.now(),
                end: Date.now(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "presentation",
                mark: 4.8,
                weight: 0.5,
            },
            "2": {
                name: "Zytologie II",
                start: Date.now(),
                end: Date.now(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "exam",
                mark: 4,
                weight: 1,
            },
        },
    },
    history: {
        teacher: {
            name: "Anja Messerli",
        },
        average: "4.5",
        name: "Bildnerisches Gestalten",
        klassen: ["1a, 1i"],
        tests: {
            "0": {
                name: "Bleistift",
                start: Date.now(),
                end: Date.now(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "project",
                mark: 6,
                weight: 0.5,
            },
            "1": {
                name: "Vortrag",
                start: Date.now(),
                end: Date.now(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "presentation",
                mark: 5,
                weight: 1,
            },
            "2": {
                name: "Farbenlehre",
                start: Date.now(),
                end: Date.now(),
                topics: "-Bleistifte\n-Zeichnungen",
                createdAt: Date.now(),
                type: "exam",
                mark: 4.5,
                weight: 1,
            },
        },
    },
    student1: {
        teacher: {
            name: "Mr. Smith",
        },
        average: "A",
        klassen: ["Math", "Science"],
        name: "John Doe",
        tests: {
            test1: {
                name: "Midterm Exam",
                start: 1637698800000,
                end: 1637702400000,
                topics: "Algebra",
                createdAt: 1637650800000,
                mark: 85,
                type: "exam",
                weight: 0.5,
            },
            test2: {
                name: "Project 1",
                start: 1637799600000,
                end: 1637803200000,
                topics: "Statistics",
                createdAt: 1637761200000,
                mark: 92,
                type: "project",
                weight: 0.3,
            },
        },
    },
    student2: {
        teacher: {
            name: "Ms. Johnson",
        },
        average: "B+",
        klassen: ["History", "English"],
        name: "Jane Smith",
        tests: {
            test1: {
                name: "History Presentation",
                start: 1637893200000,
                end: 1637896800000,
                topics: "World War II",
                createdAt: 1637845200000,
                mark: 78,
                type: "presentation",
                weight: 0.4,
            },
            test2: {
                name: "Final Exam",
                start: 1637990400000,
                end: 1637994000000,
                topics: "Literature",
                createdAt: 1637952000000,
                mark: 88,
                type: "exam",
                weight: 0.6,
            },
        },
    },
    student10: {
        teacher: {
            name: "Mr. Smith",
        },
        average: "A",
        klassen: ["Math", "Science"],
        name: "John Doe",
        tests: {
            test1: {
                name: "Midterm Exam",
                start: 1637698800000,
                end: 1637702400000,
                topics: "Algebra",
                createdAt: 1637650800000,
                mark: 85,
                type: "exam",
                weight: 0.5,
            },
            test2: {
                name: "Project 1",
                start: 1637799600000,
                end: 1637803200000,
                topics: "Statistics",
                createdAt: 1637761200000,
                mark: 92,
                type: "project",
                weight: 0.3,
            },
        },
    },
    student20: {
        teacher: {
            name: "Ms. Johnson",
        },
        average: "B+",
        klassen: ["History", "English"],
        name: "Jane Smith",
        tests: {
            test1: {
                name: "History Presentation",
                start: 1637893200000,
                end: 1637896800000,
                topics: "World War II",
                createdAt: 1637845200000,
                mark: 78,
                type: "presentation",
                weight: 0.4,
            },
            test2: {
                name: "Final Exam",
                start: 1637990400000,
                end: 1637994000000,
                topics: "Literature",
                createdAt: 1637952000000,
                mark: 88,
                type: "exam",
                weight: 0.6,
            },
        },
    },
    student3: {
        teacher: {
            name: "Mr. Anderson",
        },
        average: "A-",
        klassen: ["Physics", "Chemistry"],
        name: "Alice Johnson",
        tests: {
            test1: {
                name: "Chemistry Project",
                start: 1638091200000,
                end: 1638094800000,
                topics: "Chemical Reactions",
                createdAt: 1638043200000,
                mark: 94,
                type: "project",
                weight: 0.4,
            },
            test2: {
                name: "Physics Exam",
                start: 1638182400000,
                end: 1638186000000,
                topics: "Newtonian Mechanics",
                createdAt: 1638134400000,
                mark: 87,
                type: "exam",
                weight: 0.6,
            },
        },
    },
    student4: {
        teacher: {
            name: "Mrs. Davis",
        },
        average: "B",
        klassen: ["Computer Science", "Math"],
        name: "Bob Thompson",
        tests: {
            test1: {
                name: "Programming Project",
                start: 1638286800000,
                end: 1638290400000,
                topics: "Data Structures",
                createdAt: 1638238800000,
                mark: 80,
                type: "project",
                weight: 0.4,
            },
            test2: {
                name: "Math Quiz",
                start: 1638378000000,
                end: 1638381600000,
                topics: "Geometry",
                createdAt: 1638330000000,
                mark: 75,
                type: "exam",
                weight: 0.6,
            },
        },
    },
    student5: {
        teacher: {
            name: "Mr. Wilson",
        },
        average: "A+",
        klassen: ["Literature", "History"],
        name: "Eva Rodriguez",
        tests: {
            test1: {
                name: "Literary Analysis",
                start: 1638475200000,
                end: 1638478800000,
                topics: "Shakespearean Sonnets",
                createdAt: 1638427200000,
                mark: 98,
                type: "presentation",
                weight: 0.5,
            },
            test2: {
                name: "History Project",
                start: 1638566400000,
                end: 1638570000000,
                topics: "Renaissance",
                createdAt: 1638518400000,
                mark: 96,
                type: "project",
                weight: 0.5,
            },
        },
    },
    student6: {
        teacher: {
            name: "Mrs. Taylor",
        },
        average: "C+",
        klassen: ["Art", "Music"],
        name: "Michael Turner",
        tests: {
            test1: {
                name: "Art Exhibition",
                start: 1638663600000,
                end: 1638667200000,
                topics: "Impressionism",
                createdAt: 1638615600000,
                mark: 68,
                type: "presentation",
                weight: 0.4,
            },
            test2: {
                name: "Music Recital",
                start: 1638754800000,
                end: 1638758400000,
                topics: "Classical Composers",
                createdAt: 1638706800000,
                mark: 72,
                type: "presentation",
                weight: 0.6,
            },
        },
    },
    student7: {
        teacher: {
            name: "Mr. Garcia",
        },
        average: "B-",
        klassen: ["Spanish", "Geography"],
        name: "Sophia White",
        tests: {
            test1: {
                name: "Spanish Quiz",
                start: 1638846000000,
                end: 1638849600000,
                topics: "Verb Conjugation",
                createdAt: 1638798000000,
                mark: 82,
                type: "exam",
                weight: 0.5,
            },
            test2: {
                name: "Geography Project",
                start: 1638937200000,
                end: 1638940800000,
                topics: "Climate Zones",
                createdAt: 1638889200000,
                mark: 76,
                type: "project",
                weight: 0.5,
            },
        },
    },
    student15: {
        teacher: {
            name: "Mr. Wilson",
        },
        average: "A+",
        klassen: ["Literature", "History"],
        name: "Eva Rodriguez",
        tests: {
            test1: {
                name: "Literary Analysis",
                start: 1638475200000,
                end: 1638478800000,
                topics: "Shakespearean Sonnets",
                createdAt: 1638427200000,
                mark: 98,
                type: "presentation",
                weight: 0.5,
            },
            test2: {
                name: "History Project",
                start: 1638566400000,
                end: 1638570000000,
                topics: "Renaissance",
                createdAt: 1638518400000,
                mark: 96,
                type: "project",
                weight: 0.5,
            },
        },
    },
    student16: {
        teacher: {
            name: "Mrs. Taylor",
        },
        average: "C+",
        klassen: ["Art", "Music"],
        name: "Michael Turner",
        tests: {
            test1: {
                name: "Art Exhibition",
                start: 1638663600000,
                end: 1638667200000,
                topics: "Impressionism",
                createdAt: 1638615600000,
                mark: 68,
                type: "presentation",
                weight: 0.4,
            },
            test2: {
                name: "Music Recital",
                start: 1638754800000,
                end: 1638758400000,
                topics: "Classical Composers",
                createdAt: 1638706800000,
                mark: 72,
                type: "presentation",
                weight: 0.6,
            },
        },
    },
    student17: {
        teacher: {
            name: "Mr. Garcia",
        },
        average: "B-",
        klassen: ["Spanish", "Geography"],
        name: "Sophia White",
        tests: {
            test1: {
                name: "Spanish Quiz",
                start: 1638846000000,
                end: 1638849600000,
                topics: "Verb Conjugation",
                createdAt: 1638798000000,
                mark: 82,
                type: "exam",
                weight: 0.5,
            },
            test2: {
                name: "Geography Project",
                start: 1638937200000,
                end: 1638940800000,
                topics: "Climate Zones",
                createdAt: 1638889200000,
                mark: 76,
                type: "project",
                weight: 0.5,
            },
        },
    },
    student18: {
        teacher: {
            name: "Mrs. Taylor",
        },
        average: "C+",
        klassen: ["Art", "Music"],
        name: "Michael Turner",
        tests: {
            test1: {
                name: "Art Exhibition",
                start: 1638663600000,
                end: 1638667200000,
                topics: "Impressionism",
                createdAt: 1638615600000,
                mark: 68,
                type: "presentation",
                weight: 0.4,
            },
            test2: {
                name: "Music Recital",
                start: 1638754800000,
                end: 1638758400000,
                topics: "Classical Composers",
                createdAt: 1638706800000,
                mark: 72,
                type: "presentation",
                weight: 0.6,
            },
        },
    },
    student19: {
        teacher: {
            name: "Mr. Garcia",
        },
        average: "B-",
        klassen: ["Spanish", "Geography"],
        name: "Sophia White",
        tests: {
            test1: {
                name: "Spanish Quiz",
                start: 1638846000000,
                end: 1638849600000,
                topics: "Verb Conjugation",
                createdAt: 1638798000000,
                mark: 82,
                type: "exam",
                weight: 0.5,
            },
            test2: {
                name: "Geography Project",
                start: 1638937200000,
                end: 1638940800000,
                topics: "Climate Zones",
                createdAt: 1638889200000,
                mark: 76,
                type: "project",
                weight: 0.5,
            },
        },
    },
};
