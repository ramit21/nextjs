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

Each folder inside the above 2 folders serve as url path of the application. index.tsx serves as the page for the route as per the folder structure. See urls below:

```
See index.tsx render the default domain:
http://localhost:3000

See tsx file resolve to a path:
http://localhost:3000/mytsx

See the response of the api in json format as returned by the api (and not JSX rendered html)
http://localhost:3000/api/hello

```

**_document.tsx**: By default, nextjs adds html content around the jsx being returned from our pages. To modify this page (eg. add custom <head> elements), create the optional _document.tsx file under pages folder(see code in the poc). Once created, this file will modify every html being rendered by nextjs. Note that in this file, we return a class based component (not functional component as with other tsx files) as we need to extends our original Document and more functionality to it. Open any html being returned in this project, and see our custom property present in the Head.

**_app.tsx**: This file is responsible for rendering all of your pages. The code here gets rendered on both server and client side. In contrast, the code in document.tsx executes only at server side as this file is supposed to render only the root document. (See both file's console.log at server as well as in the browser)



