# Dropdown Menu

Dropdown created from scratch - no component libraries. This project was created and bootstrapped using `create-react-app`.

## About

The dropdown menu accepts a two props: `items` and `multiple`. The `items` are expected to be an array of objects, where each object contains two attributes that are both strings: an `id` and a `label`. `multiple` is a boolean dictating whether or not the dropdown menu will accept multiple values, this defaults to `false`.
- To modify the list of items used in the example, feel free to add or remove objects to the array in the `items.js` file.
- Example:
  ```javascript
  const items = [
    { id: '1', label: 'Alaska' },
    { id: '2', label: 'California' },
    { id: '3', label: 'Colorado' },
  ];

  // Usage inside a React component
  <Dropdown items={items} />
  ```
## Commands
### `yarn start`

Runs the code and example usage of the menu in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn lint`

Runs `eslint` against the source files.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
