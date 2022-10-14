const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {

    try {
        // Objeto de configuracion
        // Para crear un nuevo registro siempre se usa metodo 'POST'
        await fetch(url, {
            method: 'POST', // Crear un registro
            body: JSON.stringify(cliente),// Contenido de la peticion hacia la url
            headers: { // Informacion de que tipo de contenido estamos enviando
                'Content-Type': 'application/json'
            }
        });
        // Enviar al inicio cuando se agrega un nuevo cliente
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url); // Por defecto fetch utiliza el motodo GET
        const clientes = await resultado.json();
        return clientes;

    } catch (error) {
        console.log(error);
    }
}

// Eliminar un cliente
export const eliminarCliente = async id => {
    try {
        // Representa clientes/id
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}