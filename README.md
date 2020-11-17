## Instructions

Hello and welcome to the Xero Front-End Developer pre-interview exercise!

To get a better idea of your skills, we'd like you to implement a basic invoicing UI based on a wireframe design.

You should spend no more than one hour on this exercise, allowing 10-15 minutes for a write-up at the end. We don't expect you to complete everything, but we'd like you to write down (at the bottom of this file) a high-level overview of what else you would do to complete the task, and then what else you might do to to get the code to a production-grade state.

This repository was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A junior developer started writing some code in `src/App.js`. Feel free to use or adapt that if it's useful.

We want to see code that speaks to your strengths. If you feel your strengths are in design and CSS, then please feel free to spend the time on making the form more beautiful than the wireframe. If your strengths are in JavaScript, then feel free to focus on the logical aspects of the functionality.

## The UI and functionality we'd like you to build

![Invoice wireframe](/frontend_interview.png)

The design consists of three input fields and a button laid out horizontally. The input fields are: Description, Cost and Quantity.

The button text is "Add item", and when clicked, it should add a new row to a table below the input fields.

The table has four columns: Description, Cost, Quantity, and Price, where the Price is the Cost of the item multiplied by the Quantity.

Below the table is a right-aligned total that contains the sum of all prices in the table.

Below the total is a right-aligned button with the text "Submit invoice". When clicked, this would normally make a call to a backend, but for this exercise, you can just make a call to `console.log` with the data you would send to a backend API.

We look forward to seeing what you come up with!

## Your write-up

Tell us what you'd do next if you had more time, and what else you might do to to get the code to a production-grade state.

## Write-up

Given more time I would structure the repo better. All tests, styles, and JS are currently flat in the src repo. I would research structures that would make the app more readable as the app to scales.

I would write unit tests for the functions and methods here. I would also write functional tests using React testing library to test that components are mounting as expected.

I am using react input type=number, so a string can not be entered in the input that is expecting a number. This displays a 0 value on the input on the frontend by default and often results in leading zeros in the input. Given more time I would try to find a solution for this that would keep this validation but have better UX on the frontend.

If this code was in production I think an autosave function would be useful. It could be done simply by calling the `submitInvoice()` function on a timeout every 2 seconds or so, and having an indicator on the front-end to show the user that their work is being saved.

To be production-ready, more time would need to be spent on the styling to ensure that the app is fully responsive and usable on desktop and mobile. The app would also need to be regression tested on popular browsers and cell phones.
