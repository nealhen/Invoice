## Write-up

Given more time I would structure the repo better. All tests, styles, and JS are currently flat in the src repo. I would research structures that would make the app more readable as the app to scales.

I would write unit tests for the functions and methods here. I would also write functional tests using React testing library to test that components are mounting as expected.

I am using react input type=number, so a string can not be entered in the input that is expecting a number. This displays a 0 value on the input on the frontend by default and often results in leading zeros in the input. Given more time I would try to find a solution for this that would keep this validation but have better UX on the frontend.

If this code was in production I think an autosave function would be useful. It could be done simply by calling the `submitInvoice()` function on a timeout every 2 seconds or so, and having an indicator on the front-end to show the user that their work is being saved.

To be production-ready, more time would need to be spent on the styling to ensure that the app is fully responsive and usable on desktop and mobile. The app would also need to be regression tested on popular browsers and cell phones.
