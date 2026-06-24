# Architecture

## Overview

This project is a simple Node.js web application built with the Express framework and deployed to Microsoft Azure App Service. The application serves static web content and demonstrates how a web application can be hosted in the cloud with continuous deployment using GitHub Actions.

The architecture follows a straightforward client-server model, where users access the application through a web browser over HTTPS. Azure App Service hosts the application and manages the underlying infrastructure, while GitHub Actions automates the build and deployment process whenever changes are pushed to the repository.

---

## Architecture Components

| Component         | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| Client            | A web browser used to access the application.                             |
| Node.js           | JavaScript runtime responsible for executing the server-side application. |
| Express.js        | Web framework used to create the HTTP server and serve static files.      |
| Azure App Service | Platform as a Service (PaaS) that hosts and manages the web application.  |
| GitHub Repository | Stores the application's source code and workflow configuration.          |
| GitHub Actions    | Automates the build and deployment pipeline to Azure App Service.         |

---

## Project Structure

```text
.
├── app/
│   ├── public/
│   │   ├── index.html
│   │   └── styles.css
│   ├── server.js
│   └── package.json
├── .github/
│   └── workflows/
├── docs/
└── README.md
```

---

## System Architecture

```text
                  +----------------------+
                  |      End User        |
                  |    (Web Browser)     |
                  +----------+-----------+
                             |
                         HTTPS Request
                             |
                             v
                  +----------------------+
                  | Azure App Service    |
                  |  (Node.js Runtime)   |
                  +----------+-----------+
                             |
                     Express Application
                             |
                 Serves Static HTML & CSS
                             |
                             v
                  +----------------------+
                  |      Web Content      |
                  |  index.html, CSS      |
                  +----------------------+
```

---

## Deployment Architecture

```text
Developer
     |
     | git push
     v
+-------------------+
| GitHub Repository |
+---------+---------+
          |
          | GitHub Actions
          v
+-------------------+
| Build & Deploy    |
+---------+---------+
          |
          v
+-------------------+
| Azure App Service |
+---------+---------+
          |
          | HTTPS
          v
      End Users
```

---

## Request Flow

1. A user enters the application's public HTTPS URL in a web browser.
2. The browser sends an HTTPS request to Azure App Service.
3. Azure App Service forwards the request to the Node.js runtime.
4. The Express application processes the request.
5. Express serves the requested static content from the `public` directory.
6. The browser renders the HTML and CSS for the user.

---

## Continuous Deployment Workflow

The project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

The deployment workflow is automatically triggered whenever changes are pushed to the `main` branch.

The workflow performs the following tasks:

* Checks out the latest source code.
* Sets up the Node.js runtime.
* Installs project dependencies.
* Builds the application (if applicable).
* Deploys the application to Azure App Service.

This automation ensures that the production environment remains synchronized with the latest version of the source code.

---

## Benefits of the Architecture

This architecture provides several advantages:

* Simple and lightweight application design.
* Managed hosting through Azure App Service without server administration.
* Secure application access using HTTPS.
* Automated deployments using GitHub Actions.
* Easy maintenance and future scalability through Azure App Service pricing tiers.
