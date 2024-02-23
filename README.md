# Swagger Petstore Sample

### To run (with Maven)
To run the server, run this task:

```
mvn package jetty:run
```

This will start Jetty embedded on port 8080.

### To run (via Docker)

Expose port 8080 from the image and access petstore via the exposed port. You can then add and delete pets as you see fit.

*Example*:

```
docker build -t swaggerapi/petstore3:unstable .
```

```
docker pull swaggerapi/petstore3:unstable
docker run  --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable
```

# What does Playwright support

- One API, cross platform, cross language and cross browser
- Test on Windows, Linux and MacOS
- Supports Chromium, Firefox & Webkit
- Playwright API can be used in JavaScript, TypeScript, Python, Java & .NET

# Why Playwright

Resilent tests:
- Auto-waiting
- Web first assertions (automatic retries)
- Strong debugging capabilities (tracing, screenshots, videos...)

Fast execution:
- Isolated testing (new browser profile for each test)
- Re-use authentication (save and reuse state)

Powerful tooling:
- CodeGen
- Inspector
- Traceviewer

  
# Test suite
The tests in the framework will cover:

- Pet operations
- Store operations
- User operations

# Solution
The solution implemented automates API test cases for the Petstore application. The test cases cover various operations related to managing pets, accessing store inventory, and handling user-related operations.
Each of these operations represents a specific functionality within the Petstore application, and the automated test cases ensure that these functionalities work as expected, providing validation and regression testing for the API endpoints.

# Usage Playwright

Get started by installing Playwright using npm or yarn. Alternatively you can also get started and run tests using the VS Code Extension.

> npm init playwright@latest

> yarn create playwright

Running tests

> npx playwright test

Here are the most common options available in the command line.

Run a single test file

> npx playwright test tests/test.spec.ts

Run a set of test files

> npx playwright test tests/api

Run tests in headed browsers

> npx playwright test --headed

Run all the tests against a specific project

> npx playwright test --project=chromium

Disable parallelization

> npx playwright test --workers=1

Choose a reporter

> npx playwright test --reporter=html

Ask for help
> npx playwright test --help

> <img width="661" alt="image" src="https://github.com/leandroferreira25/qaat/assets/52759535/8ad9385d-d1da-4c6f-9662-f129b502ea2a">



# Usage Artillery.io

Artillery was designed with best practices for modern production-engineering in mind. Test at cloud-scale, test any stack, and go from zero to production-grade testing fast.

> npm install -g artillery@latest

# Run the Load Test
artillery run load-test.yml

# Generating HTML Report
artillery run --output test-run-report.json my-script.yaml
artillery report test-run-report.json

This will create a test-run-report.json.html file in the current directory which you can open in a browser.

<img width="497" alt="image" src="https://github.com/leandroferreira25/qaat/assets/52759535/853b0000-6a9a-4a37-b3bd-ea8d83733ceb">




