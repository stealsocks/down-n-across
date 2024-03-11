import { json, redirect } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";


export async function POST(event: RequestEvent){

    let data = await event.request.json()

    // store new day params to user's today field and add a new "day"

    let quests = data.quests
    let userId = event.locals.userId

    if(data.action == 'update'){
        // update day in DB, and update streaks table
    }

    else if(data.action == 'start'){
        // update day in DB, and create streaks entry
        return json({
            success: true,
            today: data.today
        })
    }

    return json({success: true})
}