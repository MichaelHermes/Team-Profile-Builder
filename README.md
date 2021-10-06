<h1 align="center">Team Profile Builder Using Node.js</h1>
<h2 align="center">Object-Oriented Programming (OOP) and Test-Driven Development (TDD)</h2>

## Description

This Node.js application allows the user to construct a team profile, complete with a manager, engineers and interns. The teamProfile.html file generated as output from this application can be found [here](https://github.com/MichaelHermes/Team-Profile-Builder/blob/main/dist/teamProfile.html).

![HTML webpage titled “The Dream Team” features boxes listing employee names, titles, and other key info.](./src/Team-Profile-Builder.jpg)

A complete video walkthrough of this console application can be found [here](https://github.com/MichaelHermes/Team-Profile-Builder/blob/main/src/Demonstration.mp4).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The [Inquirer](https://www.npmjs.com/package/inquirer) package is required in order to execute this application.

`npm init`

`npm i inquirer`

## Usage

`node app`

The user is asked for team details, such as Team Name, Manager, Engineers and Interns, via command-line prompts and upon answering those prompts, an HTML file representing the team profile is generated.

## How to Contribute

[Michael Hermes](https://github.com/MichaelHermes)

## Tests

Testing of this application is performed using [Jest](https://www.npmjs.com/package/jest). A total of five classes are tested: `Employee`, `Manager`, `Engineer`, `Intern`, and `Team`.

`npm i jest -D`

## Questions?

Find me on [Github](https://github.com/MichaelHermes) or email me at [mikehermes87@gmail.com](mailto:mikehermes87@gmail.com).
