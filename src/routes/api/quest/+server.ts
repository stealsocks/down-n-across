import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";


export async function POST(event: RequestEvent){

    let data = await event.request.json()
    console.log(data)
    let userId = event.locals.userId

    if(data.action == 'delete'){
        let id = data.id
        //delete from DB
    }

    else if(data.action == "update"){
        // update in DB
    }

    else if(data.action == "create"){
        let id = data.id

        // insert id, title, effort, repeat in to DB
    }

    
    return json({success: true})
    
}