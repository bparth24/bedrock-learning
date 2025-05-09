# example1-basic

## Description

The `example1-basic` project demonstrates a basic setup of the Bedrock framework. It includes essential modules such as `bedrock-express`, `bedrock-mongodb`, `bedrock-server`, and others to create a foundational application. The project showcases how to initialize, start, and observe the lifecycle of a Bedrock application.

### Features

- **Bedrock Framework**: Utilizes the core Bedrock framework to manage the application lifecycle.
- **Express Integration**: Adds `bedrock-express` for handling HTTP requests.
- **MongoDB Support**: Includes `bedrock-mongodb` for database integration.
- **Session Management**: Uses `bedrock-session-mongodb` for session handling.
- **Validation**: Implements `bedrock-validation` for data validation.
- **Views and Webpack**: Integrates `bedrock-views` and `bedrock-webpack` for rendering views and managing assets.

### What I Learned

1. **Application Lifecycle**: Learned how Bedrock manages the application lifecycle through events like `bedrock.init`, `bedrock.start`, `bedrock.ready` and `bedrock.started`.
2. **Logging**: Observed how to use Bedrock's logging system to track application progress and debug issues.
3. **Modular Design**: Understood how Bedrock modules can be added to extend functionality.
4. **Integration**: Learned how to integrate MongoDB and Express into a Bedrock application.
5. **Startup Observability**: Gained insights into observing and debugging the startup process using Bedrock's event system.

### Troubleshooting

#### Node.js Compatibility Issue

I ran into an issue when using the latest Node.js version (v23.4.0) with this project. The error originated from the `esm` package, which had compatibility problems with the newer Node.js version.

#### The Problem

The Bedrock framework was designed to work with older Node.js versions and relies on the `esm` package for module loading. However, Node.js 23.x introduced changes to its internal module system, which caused conflicts with `esm`.

#### How I Fixed It

To resolve this issue, I switched to Node.js 18.x, as recommended in the Bedrock documentation. Here’s what I did:

1. **Installed Node.js 18.x using NVM**:

   ```bash
   nvm install 18
   ```

2. **Switched to Node.js 18.x**:

   ```bash
   nvm use 18
   ```

3. **Started the Application**:

   ```bash
   npm start
   ```

After switching to Node.js 18.x, the application worked perfectly without any errors.

#### My Takeaway

This experience taught me the importance of checking the `engines` field in the `package.json` file or the framework documentation for compatibility. In this case, the `engines` field specifies:

```json
"engines": {
  "node": ">=18"
}
```

This means Node.js 18.x is the minimum supported version for this project.

### Testing with Node.js 20+

I successfully tested this project with Node.js 20.x. Here’s how I did it:

#### Steps to Test

1. **Install Node.js 20.x Using NVM**:
   If you don’t already have Node.js 20.x installed, use the following command:

   ```bash
   nvm install 20
   ```

2. **Switch to Node.js 20.x**:
   Activate Node.js 20.x:

   ```bash
   nvm use 20
   ```

3. **Verify Node.js Version**:
   Confirm that you’re using Node.js 20.x:

   ```bash
   node -v
   ```

4. **Run the Application**:
   Start the application to ensure it works as expected:

   ```bash
   npm start
   ```

#### Observations

The application ran successfully without any issues on Node.js 20.x. This confirms that the project is compatible with Node.js 20+.

#### Key Takeaway

While the `engines` field in `package.json` specifies `>=18.0.0`, this project is also compatible with Node.js 20.x. Always ensure your Node.js version aligns with the project requirements for a smooth experience.

### How to Run

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Application**:

   ```bash
   npm start
   ```

3. **Expected Output**:

   ```bash
    parthbhatt@localhost example1-basic % npm start

    > example1-basic@1.0.0 start
    > node app.js

    2025-05-09T16:27:17.719Z - info: [bedrock/primary] starting process "bedrock1d" workerPid=undefined, workerId=undefined, details={
      "pid": 63313
    }
    2025-05-09T16:27:17.723Z - info: [bedrock/primary] started workerPid=undefined, workerId=undefined, details={
      "timeMs": 30
    }
    2025-05-09T16:27:17.851Z - info: [bedrock/worker] starting process "bedrock1d-worker" workerPid=63353, workerId=823dc1b96b45efe5
    2025-05-09T16:27:17.852Z - info: Initializing the app... workerPid=63353, workerId=823dc1b96b45efe5
    2025-05-09T16:27:17.852Z - info: Starting application... workerPid=63353, workerId=823dc1b96b45efe5
    2025-05-09T16:27:17.852Z - info: Application ready... workerPid=63353, workerId=823dc1b96b45efe5
    2025-05-09T16:27:17.852Z - info: Application fully started! workerPid=63353, workerId=823dc1b96b45efe5
    2025-05-09T16:27:17.852Z - info: [bedrock/worker] started workerPid=63353, workerId=823dc1b96b45efe5, details={
      "timeMs": 18
    }
   ```
