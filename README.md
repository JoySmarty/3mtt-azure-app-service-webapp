# 3mtt-azure-app-service-webapp

# JoySmarty Web Application on Azure App Service

A simple Node.js web application built with Express and deployed to **Microsoft Azure App Service**. This project demonstrates how to host a web application in Azure using a managed Platform as a Service (PaaS) solution and automate deployments with **GitHub Actions**.

---

## Project Overview

The objective of this project was to deploy a Node.js web application to Azure App Service, configure continuous deployment from GitHub, and explore Azure's monitoring, scaling, and configuration capabilities.

The application is hosted on Azure App Service and is automatically redeployed whenever changes are pushed to the `main` branch through a GitHub Actions workflow.

---

## Live Application

**Production URL**

```text
https://joysmarty-webapp-hhbffrbmaeb0a8g7.westeurope-01.azurewebsites.net
```

> **Screenshot:** Live application running in a web browser.

---

## Features

* Node.js and Express web application
* Hosted on Azure App Service
* Secure HTTPS endpoint
* Continuous Deployment using GitHub Actions
* Automated build and deployment pipeline
* Azure monitoring and diagnostics
* Cloud-based hosting with managed infrastructure

---

## Technology Stack

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| Node.js           | Server-side JavaScript runtime |
| Express.js        | Web application framework      |
| HTML5             | Web page structure             |
| CSS3              | Styling                        |
| Git               | Version control                |
| GitHub            | Source code hosting            |
| GitHub Actions    | CI/CD automation               |
| Azure App Service | Cloud hosting platform         |

---

## Project Structure

```text
.
├── app/
│   ├── public/
│   ├── server.js
│   └── package.json
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONFIGURATION.md
│   ├── DEPLOYMENT.md
│   ├── MONITORING-SCALING.md
│   └── TROUBLESHOOTING.md
│
├── screenshots/
│
├── .github/
│   └── workflows/
│
├── README.md
└── LICENSE
```

---

## Documentation

Additional project documentation is available in the `docs` directory.

| Document                | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `ARCHITECTURE.md`       | Application architecture and request flow         |
| `DEPLOYMENT.md`         | Azure deployment process and CI/CD workflow       |
| `CONFIGURATION.md`      | App Service configuration and deployment settings |
| `MONITORING-SCALING.md` | Monitoring tools and scaling options              |
| `TROUBLESHOOTING.md`    | Deployment issues encountered and resolutions     |

---

## Running the Project Locally

### Prerequisites

* Node.js 24 or later
* npm
* Git

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>/app
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## Deployment

The application is deployed to Azure App Service using GitHub Actions.

Deployment workflow:

1. Push changes to the `main` branch.
2. GitHub Actions automatically builds the application.
3. Azure authenticates using a User-assigned Managed Identity.
4. The latest version is deployed to Azure App Service.

---

## Screenshots

Add screenshots to the `screenshots` folder and reference them here.

Suggested screenshots:

* Azure App Service Overview
* GitHub Actions successful deployment
* Live application
* Azure Metrics
* Scale Up page
* Scale Out page

---

## Future Improvements

Potential enhancements for this project include:

* Custom domain configuration
* SSL certificate management
* Environment-specific configuration
* Deployment slots (supported on higher App Service tiers)
* Application Insights integration
* Automated testing in the CI/CD pipeline

---

## Author

**JoySmarty**


