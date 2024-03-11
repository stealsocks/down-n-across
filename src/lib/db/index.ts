import type { Quest } from "$lib/types";


export async function getQuestsForUser(id: string): Promise<Quest[]>{
    
    return [{
            id: "11434",
            title: "Do nothing",
            effort: 1,
            repeat: false,
            created_on: 1241234
        },
        {
            id: "2432",
            title: "export async function getQuestsForUser(id: string): Promise <Quest[]>{",
            effort: 1,
            repeat: false,
            created_on: 1241234
        },
    ]
}