@gov.au/searchbox
============

> 


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/searchbox
```

```shell
npm install @gov.au/searchbox
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
searchbox
├─ core
├─ text-inputs
│  └─ core
└─ buttons
   └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/searchbox/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };

----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import AUsearchbox from '@gov.au/searchbox';

<AUsearchbox 
	label="Search" 
	btnText="Search"
	responsive={true}
	id="def-search"
	onClick={() => console.log('hello')}
/>

All props:


<AUsearchbox 
	label="Search"                        {/* Text of the label */}
	btnText="Search"                      {/* Text on the button */}
	btnType                               {/* Type of button, either 'button', 'reset' or 'submit'*/}
	dark={true}                           {/* Dark variation */}
	responsive={true}                     {/* Responsive variation, text turns to icon on smaller devices*/}
	icon={false}                          {/* Icon only, hides text on button */}
	id="def-search"                       {/* ID of the text input, required */}
	className=""                          {/* Additional class, optional */}
	onClick={() => console.log('hello')}  {/* Click handler for the button */}
/>


```