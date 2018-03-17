# fake-movie-database-api
This REST api is made to fullill Pluralsight's course [Play by Play: iOS and Swift from Scratch](https://app.pluralsight.com/library/courses/play-by-play-ios-swift-from-scratch/). The course relied on [OMDb API](http://omdbapi.com/), but they are no longer an open api. They require you to sign up and pay for poster url's.

My Api only contains some Batman and Star Wars movies. But are enough to finish the course, perfectly. You are welcome to use this REST api for whatever purpose you have. The response is sent as an JSON object

## Getting Started

### Installing
* `git clone https://github.com/gautemo/fake-movie-database-api.git`
* `cd fake-movie-database-api`
* `npm install`

### Deploy on localhost
`npm start`

### Running the tests
`npm test`

## Usage
Open http://localhost:3000 to open the info page.

Send GET request to http://localhost:3000/api to use the REST Api. The Api requires a query string parameter s, like this http://localhost:3000/api?s=SearchTerm. For now the Api only contains Batman and Star Wars movies, so try searching for those, or part of those titles with three or more characters.

## Contributing
Feel free to send pull requests, to improve or expand this demo api.

## Authors
Gaute Meek Olsen

## Live
The server and landing page are deployed on a heroku server with automaticly deploy on git master push, [Fake Movie Database Api](https://fake-movie-database-api.herokuapp.com/)