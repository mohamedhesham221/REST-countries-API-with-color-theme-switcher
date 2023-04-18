# REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Installation](#installation)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- See country location on google map. (additional)
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![screencapture](./src/assets/screencapture.jpg)

### Links

- Live Site URL: [https://rest-countries-api-with-color-theme-switcher-tau.vercel.app/](https://rest-countries-api-with-color-theme-switcher-tau.vercel.app/)

## My process

### Built with

- HTML
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- it is a [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### What I learned

I learned how to integrated google maps and fontawesome icons in react app
To see how you can add code snippets, see below:

```js
<GoogleMapReact
          bootstrapURLKeys={{ key: KeySecure.key }}
          defaultCenter={{
            lat: location.state.latlng[0],
            lng: location.state.latlng[1],
          }}
          defaultZoom={mapZoom}
        >
          <Marker lat={location.state.latlng[0]} lng={location.state.latlng[1]} />
        </GoogleMapReact>
            <FontAwesomeIcon icon={faLocationDot} style={{color : "#202c37", transform: "scale(2)"}}/>
```

### Useful resources

- [https://github.com/google-map-react/google-map-react](https://github.com/google-map-react/google-map-react) - This repo helped me how to render map components in the browser using  Google Maps API.
- [https://fontawesome.com/v5/docs/web/use-with/react](https://fontawesome.com/v5/docs/web/use-with/react) - helped me understand how to integrate fontawesome in react app.

## Author

- Frontend Mentor - [@mohamedhesham221](https://www.frontendmentor.io/profile/mohamedhesham221)
- Linkedin - [Muhammad Hisham](https://www.linkedin.com/in/muhammad-hisham-23544b253/)

## Installation

- clone the repo `git clone https://github.com/mohamedhesham221/REST-countries-API-with-color-theme-switcher`.
- install dependencies `npm install`.
- start project with `npm start`.
- it can be viewed in the browser at `http://localhost:3000`.
- build the app for production to the `build` folder.\ `npm run build`.
