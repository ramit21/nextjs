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
4. Run:
```
npm run dev
```
