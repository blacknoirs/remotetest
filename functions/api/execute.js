let scripts = {};
let stats = {};

export async function onRequestPost({request}) {
    try {
        let data = await request.json();
        let key = data.key;
        if (key) {
            scripts[key] = data.script || "";
        }
        return new Response(JSON.stringify({ok:true}));
    } catch(e) {
        return new Response(null, {status:400});
    }
}

export async function onRequestGet({request}) {
    let url = new URL(request.url);
    let key = url.searchParams.get("key") || "";
    let clear = url.searchParams.get("clear");
    
    if (url.pathname.includes("/stats")) {
        return new Response(JSON.stringify(stats[key] || {kills:0,total:0}));
    }
    
    let current = scripts[key] || "";
    if (clear === "1") scripts[key] = "";
    
    return new Response(JSON.stringify({script: current}));
}