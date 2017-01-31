# FindAVenue
FindAVenue test

## Instructions
```sh
1) Open Terminal and navigate to folder
2) Open index.html in browser
```

To see react > minified.js run: 
```sh
1) $ npm install
2) $ npm run build
or
2) $ npm run build-windows 
```

## Detail
```sh
npm install
```
Installs React/React Dom, and all relevent dev dependences. 


```sh
npm run build
```
Compiles the JSX to JS 
Compiles less to css & minified css

```sh
npm run test
```
Runs Jest/Jasmine tests 

## Further Detail

 Used: 
- HTML 
- Less 
	- CSS / CSS3
	- BEM formatting
- ReactJs
- Components (ES5 ES6  Es6 Stateless)
- Ajax 
- Responsive (Mobile First)
- Git
- Gulp

## Aproach

Was most comfortable using ReactJs as using this and the asosicated technologies would explore a great deal of modern front end web dev.

After setting up the environment, creating lint rules and creating less. Then i setup the functions needed to compile Less > Css and ES6 React (via browserify and babel ) > ES5 JS.

Then i explored via the fourspquer the most relevent API to use, and built this into a on-submit form function to display the relevent results, each result is a single react component, showing off the great use of react's components.

Then i creaeted tests (I know some people like to make tests first! ... :/ ) using different data to test the components.


## Notes

Works best on Mac OSX.
SEO Friendly.
No JS (other then React) or CSS library used to reduce page weight.
AirBnb are great linting rules, unforuntaly they are very strict and only fixed a few plugins, however, perfectly builds.
There is a small bug where you have to press "submit" twice
