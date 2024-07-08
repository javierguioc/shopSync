# ShopSync

## Descripción

ShopSync es una aplicación de carrito de compras que utiliza arquitectura hexagonal para separar las preocupaciones de la lógica de negocio, infraestructura y adaptadores. La información de la sesión del carrito se guarda en el servidor y se refresca para el cliente.

## Demo

[![Ver Demo](https://img.youtube.com/vi/tOBf70z6a0U/0.jpg)](https://youtu.be/tOBf70z6a0U)

## Tecnologías Utilizadas

- **Arquitectura Hexagonal**
- **Node.js**
- **React**
- **Next.js**
- **Static Storage**
- **CRUD**
- **Mono Repo**
- **JavaScript**
- **Hooks**
- **Server Side Rendering (SSR)**

## Características

- **Carrito de Compras**: Guarda la información de la sesión del carrito en el lado del servidor.
- **Renderizado del Lado del Servidor**: Mejorando la performance y la experiencia del usuario.

## Endpoints del Servidor

- **Lista de productos**: Obtiene la lista de productos disponibles.
- **Lista del carrito y sus elementos**: Obtiene la lista de productos en el carrito.
- **Servicio para actualizar y agregar productos al carro**: Permite modificar la cantidad de productos en el carrito.
- **Servicio para eliminar elementos del carro**: Permite eliminar productos del carrito.

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/javierguioc/shopSync
    cd shopSync
    ```

2. Instalar dependencias en la raíz del proyecto:
    ```sh
    npm install
    ```

3. Instalar dependencias en el frontend:
    ```sh
    cd apps/frontend
    npm install
    cd ../..
    ```

4. Instalar dependencias en el backend:
    ```sh
    cd apps/backend
    npm install
    cd ../..
    ```

### Uso

#### Monorepo

Desde la raíz del proyecto, puedes correr tanto el frontend como el backend con un solo comando:
```sh
npm run dev
```
#### Independientemente

Si prefieres correr el frontend y el backend por separado, sigue estos pasos:

##### Backend

1. Ir al directorio del backend:
    ```sh
    cd apps/backend
    ```
2. Iniciar el servidor:
    ```sh
    npm run dev
    ```

##### Frontend

1. Ir al directorio del frontend:
    ```sh
    cd apps/frontend
    ```
2. Iniciar el servidor:
    ```sh
    npm run dev
    ```

## Nota

El objetivo de este proyecto era practicar. 
El feedback o ideas son bien recibidas.



## Hecho Por

Hernan Javier Guio Carrillo
