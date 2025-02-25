const skills = [
    {
        name: "detecção de água",
        element: "water",
        type: "tool",
        description: "",
        rank: 1,
        areaType: "area",
        cost: {
            mana: 0,
            energy: 0,
            health: 0,
        },
        areaAttributes: {
            radius: 0.5,
            duration: 0,
        },
        baseAttributes: {
            attack: 0,
            defense: 0,
            cooldown: 0,
            execution: 0,
            learnPoints: 0,
        },
        effects: [],
        bonus: []
    },
    {
        name: "acumulo de água",
        element: "water",
        type: "tool",
        description: "",
        rank: 1,
        areaType: "self",
        cost: {
            mana: 0,
            energy: 0,
            health: 0,
        },
        areaAttributes: {
            rate: 1,
        },
        baseAttributes: {
            attack: 0,
            defense: 0,
            cooldown: 0,
            execution: 0,
            learnPoints: 0,
        },
        effects: [
            {
                name: "molhado",
            }
        ],
        bonus: []
    },
    {
        name: "projétil de água",
        element: [
            "water"
        ],
        type: "tool",
        description: "",
        rank: 2,
        areaType: "self",
        cost: {
            mana: 0,
            energy: 0,
            health: 0,
        },
        areaAttributes: {
            rate: 1,
        },
        baseAttributes: {
            attack: 0,
            defense: 0,
            cooldown: 0,
            execution: 0,
            learnPoints: 0,
        },
        effects: [
            {
                name: "molhado",
            }
        ],
        bonus: []  
    }
];