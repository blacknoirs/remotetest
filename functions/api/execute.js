let script = "";

export async function onRequestPost({request}) {
    try {
        let data = await request.json();
        script = data.script || "";
        return new Response(JSON.stringify({ok:true}));
    } catch(e) {
        return new Response(null, {status:400});
    }
}

export async function onRequestGet() {
    return new Response(JSON.stringify({script: script}));
}