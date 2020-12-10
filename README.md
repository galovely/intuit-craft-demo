# react dashboard for craft demo

React dashboard for the Intuit Demo

A frontend Framework for building data-driven applications running in the browser on top of REST/GraphQL APIs, using ES6, [React](https://facebook.github.io/react/) and [Material Design](https://material.io/). Open sourced and maintained by [marmelab](https://marmelab.com/).

## Features

* Adapts to any backend (REST, GraphQL, SOAP, etc.)
* Powered by [material-ui](https://material-ui.com/), [redux](https://redux.js.org/), [react-final-form](https://final-form.org/react), [react-router](https://reacttraining.com/react-router/) and a few more
* Super-fast UI thanks to optimistic rendering (renders before the server returns)
* Undo updates and deletes for a few seconds
* Relationships (many to one, one to many)
* Data Validation
* Internationalization (i18n)
* Themeable, Highly customizable interface
* Supports any authentication provider (REST API, OAuth, Basic Auth, ...)
* Full-featured datagrid (sort, pagination, filters)
* Large library of components for various data types: boolean, number, rich text, etc.
* Conditional formatting
* Filter-as-you-type
* Supports any form layout (simple, tabbed, etc.)
* Custom actions
* WYSIWYG editor
* Customize dashboard, menu, layout
* Super easy to extend and override (it's just React components)
* Can be included in another React app

## Libraries dependencies used
* React Router
* React Redux
* Material UI
* Rest (Rest API call)
* Data JSON Server (retrieve the dummy data)
* Local Storage (Persistent local storage)
* Apollo Data GraphQL (query the API data)
* ReChart for the graphs
* Data Provider for fetch mock data and data generator retail 

## Installation

React-admin is available from npm. You can install it (and its required dependencies)
using:

```sh
npm install react-admin
#or
yarn add react-admin
```


You can run those example applications by calling:

```sh
# At the react-admin project root
make install
# or
yarn install

# Run the demo application
make build
make run-demo
```

And then browse to the URL displayed in your console.

### Setup

Clone this repository and run `make install` to grab the dependencies, then `make build` to compile the sources from TypeScript to JS.

And then browse to [http://localhost:4000/](http://localhost:4000/)

## License

React-admin is licensed under the [MIT License](https://github.com/marmelab/react-admin/blob/master/LICENSE.md), sponsored and supported by [marmelab](https://marmelab.com).
