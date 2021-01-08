# nextjs

POC - next js basics

Nextjs is a wrapper around reactjs that enables react code to be rendered on server.

To run this POC, run npm install, and resume from step 4 below (skipping steps 1-3).

Steps to scaffold a new nextjs project:

1. Ensure nodejs is instlled on your system. If yes, run the below command to scaffold a project:
```
npx create-next-app <name>
```
2. Add empty tsconfig.json file for typescript, which will be handled by nextjs.
3. Add couple of dependencies to provide type support for non-prod env.
```
npm i typescript @types/node @types/react --save-dev
```
4. Run command: **npm run dev**.

---------

**Concepts:**

The scaffolded project contains 2 important folders: **Public and Pages** folder.

Public folder files are rendered as is. They are not evaluated for typescript code. Check url localhost:3000/vercel.svg

Pages folder contains .ts files (APIs) and .tsx files (react components that return JSX based HTMLs). 

Each folder inside the above 2 folders serve as url path of the application. index.tsx serves as the default page for the route as per the folder structure. 

**Pages/api** is a special folder that contains typescript apis that should not return react components. See api/hello.ts for api code, how we retrieve request body, cookies etc, and how we return a response with correct status code.

**_document.tsx**: By default, nextjs adds html content around the jsx being returned from our pages. To modify this page (eg. add custom <head> elements), create the optional _document.tsx file under pages folder(see code in the poc). Once created, this file will modify every html being rendered by nextjs. Note that in this file, we return a class based component (not functional component as with other tsx files) as we need to extends our original Document and more functionality to it. Open any html being returned in this project, and see our custom property present in the Head.

**_app.tsx**: This file is responsible for rendering all of your pages. The code here gets executed on both server and client side. In contrast, the code in document.tsx executes only at server side as this file is supposed to render only the root document. (See both file's console.log at server as well as in the browser)

**Routing**: Nextjs provides Link component to give SPA like routing experience. If you use traditional anchor tag with href instead, then page will be reloaded everytime link is clicked. See index.tsx on how we wrap the anchor tag with Link tag. 

**Dynamic Routing**: Create folders and/or file names starting and ending with square brackets. These are called slugs. You can also create multi-level slugs using dynamic folder that further contains dynamic file inside it. See fruits/[param1]/[param2] in the POC. Nextjs provides Router component which can be used to fetch the values of the slugs being passed in. You can also define a catch-all slug to catch url hits that don't match other slugs.

You can make custom 404 error page using a custom react component named 404.tsx

For above conepts, see urls below:

```
See index.tsx render the default domain:
http://localhost:3000

See tsx file resolve to a path:
http://localhost:3000/mytsx

See the response of the api in json format as returned by the api (and not JSX returned by react components)
http://localhost:3000/api/hello

Hit the api with browser provided fetch on the console, and see request object in the server logs as per the console.log of code:

fetch('http://localhost:3000/api/hello', { 
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        username: 'admin',
        password: 'password'
    })
})

Nested Route being served from the index.tsx of its corresponding folder:
http://localhost:3000/fruit

Dynamic routes with multi level params (abc and xyz can be any values):
http://localhost:3000/fruit/abc
http://localhost:3000/fruit/abc/xyz 

Unmatched dynamic slug being handled by a catch-all react component:
http://localhost:3000/fruit/abc/xyz/x

404 being rendered by our custom page:
http://localhost:3000/blah



```

