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
                nombre: "Producto netlify",
                precio: 99999,
                imagen: "https://static-00.iconduck.com/assets.00/netlify-icon-2048x2048-xurlvzbi.png"
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
                nombre: "prod4 modif",
                precio: -4,
                imagen: "url 4 inventada modif"
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

crearInfo();