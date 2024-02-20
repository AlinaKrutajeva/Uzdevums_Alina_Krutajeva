<h1>Brief overview of the project!</h1>

This project was created using **Nightwatch.js**. It is a browser automation framework that uses the Selenium WebDriver API to control browser behavior for testing purposes.

**In this project the following steps were automated:**
1. Open https://www.ss.lv/lv/.
2. Check that the 'Premises' section is visible and make sure that the name of the section is 'Premises'.
3. Open the 'Premises' section.
4. Open the advertisement filtering, and check that the 'For last 5 days' option is visible, and make sure that its name is 'For last 5 days'.
5. Click on the 'For last 5 days' option.
6. Output the short description, district and price of the first advertisement in the terminal.

**The tests folder** contains the actual test script. This script interact with **the page objects folder** to perform needed test scenario. The project also includes **the tests output folder**, that contains the results of the test runs, including logs, reports and screenshots. This folder can be used to track the progress of the test and identify any issues that need to be addressed.