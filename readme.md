# Reprovinci – Frontend toolkit
Frontend toolkit. Framework classes, typography/colors/spacing setup.. The scaffolding we start with. 🚀
The documentation can be run locally or you can check it out on the github page: https://reprovinci.github.io/frontend-toolkit/

## Installation and usage in your project
Install the package in your project with npm or yarn.

npm:
```
npm install --save-dev reprovinci/frontend-toolkit
```
or yarn:
```
yarn add reprovinci/frontend-toolkit
```

Then import it in your main scss file:
```
@import "~rv-frontend-toolkit";
```

## Development & documentation
If you want to read the docs locally or you want to develop the project follow these steps:

- clone the repo
- install the packages
- run the start script for assets rendering and a preview with hot-reload
- or run the build script

**Clone the project:**

```
git clone https://github.com/reprovinci/frontend-toolkit.git
cd frontend-toolkit
```

**Install packages**

Install packages with npm `npm install` or yarn `yarn install`

**Run the local dev server with hot-reload & scss parsing**

With npm run `npm run start` or yarn: `npm start`
The docs are then available at `http://localhost:8080` or the next port avaible.

**To build a release version run the build script**

With npm run `npm run build` or yarn: `npm build`
