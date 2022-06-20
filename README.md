# Racetrack Television Network Athletes

## Description

> A website that a user can get to know their world famous jockeys a little better.

### Userflow

> As a user of this application, a user could navigate to the dashboard and quickly filter for any person in the system and have the option to see a more detailed view of that person.

### Build instructions

> Build an application using the Random User Generator API. Use your imagination for the UI/UX flow of the application. Stick to the requirements but do not hold back on doing more if you can. This application should include at least 3 pages (Landing Page, Dashboard Page, Profile Page).

# Instructions on cloning repository

```
npm install
```

**For Typescript**

```shell
npm install --@types/react
npm install --@types/react-dom
npm install --@types/react-redux
npm install --@types/react-router-dom
```

How to run the application:

```shell
# On package.json
"scripts": {
     "start": "BROWSER='brave browser' react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

  },
```

```shell
# To run application
npm start

# to build typescript files (should include dist/files already)
npm run build
```

**Relevant version requirements**

```shell
 "@fortawesome/fontawesome-svg-core": "^6.1.1",
    "@fortawesome/free-solid-svg-icons": "^6.1.1",
    "@fortawesome/react-fontawesome": "^0.1.18",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.41",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "@types/react-redux": "^7.1.24",
    "@types/react-router-dom": "^5.3.3",
    "axios": "^0.27.2",
    "bootstrap": "^5.2.0-beta1",
    "dayjs": "^1.11.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "typescript": "^4.7.3",
    "web-vitals": "^2.1.4"
```

# To do list:

### Functionality

- [ ] refactor states into redux
- [ ] refactor hardcoded variables for apis
- [ ] implement paginationReducer with the paginate with the api's paginate docs
- [ ] implement pageLoads
- [ ] implement seed on profile for state to be the same on refresh

### UI

- [ ] Loading Spinners
- [ ] loader.css
- [ ] integrate temp navbar or navbar all around
- [ ] refactor resuable card components
- [ ] page logo
- [ ] page not found component UI
