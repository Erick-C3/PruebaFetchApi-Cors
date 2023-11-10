const API = "https://ejemplo-api-restv2-production.up.railway.app/productos";

async function obtenerInfo() {
    try {
        const info = await fetch(API);
        const res = await info.json();
        console.log(res);
    } catch (error) {
        console.log("error GET: ", error);
    }
}

async function crearInfo() {
    try {
        const info = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: "prod1",
                precio: -1,
                imagen: "url inventada"
            })
        });
        const res = await info.json();
        console.log(res);
    } catch (error) {
        console.log("error POST: ", error);
    }

}

async function modificarInfo(id) {
    try {
        const info = await fetch(API + "/" + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: "prod1 modif",
                precio: -3,
                imagen: "url inventada modif"
            })
        });
        const res = await info.json();
        console.log(res);
    } catch (error) {
        console.log("error POST: ", error);
    }
}

async function eliminarInfo(id) {
    try {
        const info = await fetch(API + "/" + id, {
            method: "DELETE"
        });
        const res = await info.json();
        console.log(res);
    } catch (error) {
        console.log("error DELETE: ", error);
    }
}

obtenerInfo();