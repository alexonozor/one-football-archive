# OneFootball Player Archive

The oneFootball player Archive is a web base application to search and view enabled player profile, i.e users will not be able to view 
a disabled player profile or profiles that isn't available. 

The application is build on top of Angular 8, Angular Material, Angular Flexbox, and served with Nodejs 10 micro server on production.


### Modularity

Player Archive is build with Modularity in mind for the sake of future improvement. 
It uses Angular Lazy loading pattern. Currently, it has only one module which is the player Module that consist of Components;
ProfileComponent, HomeComponent, and PlayerSearchComponent.

#### Home Component
The home component is an entering level for the application module which act as the home page and bootstrap the  PlayerSearchComponent as a child Component. 

#### Player Search Component
Player Search Contain the class and template for the search form.

#### Profile Component
The profile component has a single method  in the class that updates the view when a user enters the page with a proper search params, this method runs as soon as the page loads and take the user back to the homepage if not records are found.

#### Installation

###### Requirements
To install and run this application you will need to install Angular 8 using the CLI and Nodejs 10

Clone Project:

`git clone https://github.com/alexonozor/one-football-archive.git`

Run: `npm install`

Start Application
`ng Serve`

