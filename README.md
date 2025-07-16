# Routing-in-react 

React router v7 

## Steps 

- create a react project 
    ```js
    pnpm create vite
    ```
- install packages
    ```js
    pnpm i
    ```

- edit the files as you like

- install and setup **tailwind css 4** [official website](https://tailwindcss.com/docs/installation/using-vite)

    ```js
    pnpm install tailwindcss @tailwindcss/vite
    ```

- install and configure **react-router** from [official website](https://reactrouter.com/start/declarative/installation)

    ```js
    pnpm install react-router
    ```

- create the following pages inside pages folder 
    - Home
    - About
    - Contact
    - Celebrity
        - Actor
        - Actress

- create a `routes\MyRoutes.jsx` folder inside src 

- import and call `<MyRoutes />` in App.jsx

- for nested routing:
    - add `<Outlet />` in the parent's page

- Wildcard route for PageNotFound ('*' route)

- Finally create a navbar for better navigation