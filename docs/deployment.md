# Deployment

## Overview

This document describes the deployment process used to publish the Node.js web application to Microsoft Azure App Service. Deployment was automated using GitHub Actions, allowing changes pushed to the GitHub repository to be built and deployed automatically.

---

# Deployment Prerequisites

Before deployment, the following requirements were met:

* Microsoft Azure account
* Active Azure subscription
* GitHub repository containing the project source code
* Node.js application using Express
* Azure App Service
* Azure App Service Plan (Free F1)

---

# Deployment Process

## 1. Prepare the Application

The application was developed locally using Node.js and Express. After testing locally, the source code was committed and pushed to the GitHub repository.

---

## 2. Create Azure Resources

The following Azure resources were created:

| Resource       | Value              |
| -------------- | ------------------ |
| Resource Group | `rg-webapp-lab`    |
| App Service    | `joysmarty-webapp` |
| Region         | West Europe        |
| Runtime        | Node.js 24 LTS     |
| Pricing Tier   | Free (F1)          |

---

## 3. Configure Deployment Source

Azure App Service was connected to the GitHub repository.

Deployment settings included:

* Repository branch: `main`
* Deployment method: GitHub Actions
* Authentication: User-assigned identity

Azure automatically generated a GitHub Actions workflow file inside:

```text
.github/workflows/
```

---

## 4. Configure the Workflow

The generated workflow was modified to support the project structure.

Since the application source code resides inside the `app` directory, the workflow was updated to execute build commands from that directory before deployment.

The workflow performs the following tasks:

* Checks out the repository
* Installs Node.js
* Installs project dependencies
* Builds the application (if required)
* Uploads deployment artifacts
* Authenticates with Azure
* Deploys the application to Azure App Service

---

## 5. Automatic Deployment

After committing changes to the `main` branch, GitHub Actions automatically:

1. Triggered the workflow.
2. Built the application.
3. Connected securely to Azure.
4. Deployed the latest version of the application.

Successful deployments are indicated by a green check mark in the GitHub Actions tab.

---

# Deployment Verification

After deployment completed successfully, the application was accessed using its Azure App Service public URL.

## Public URL

```text
https://joysmarty-webapp-hhbffrbmaeb0a8g7.westeurope-01.azurewebsites.net
```

### Verification Checklist

* ✅ Application loads successfully.
* ✅ HTTPS is enabled.
* ✅ Static files are served correctly.
* ✅ Express server responds to incoming requests.
* ✅ Application is publicly accessible.

> **Screenshot:** Live application running in a web browser.

---

# Continuous Deployment

Continuous deployment was implemented using GitHub Actions.

Whenever code is pushed to the `main` branch:

1. GitHub detects the new commit.
2. The deployment workflow starts automatically.
3. The application is rebuilt.
4. Azure App Service is updated with the latest version.

This eliminates the need for manual deployments and ensures the production environment remains synchronized with the source code.

---

# Deployment Summary

| Item                          | Status      |
| ----------------------------- | ----------- |
| Azure App Service Created     | ✅ Completed |
| GitHub Repository Connected   | ✅ Completed |
| GitHub Actions Configured     | ✅ Completed |
| Application Deployed          | ✅ Completed |
| HTTPS Accessible              | ✅ Completed |
| Continuous Deployment Enabled | ✅ Completed |

---

# Conclusion

The Node.js application was successfully deployed to Azure App Service using GitHub Actions. The deployment pipeline automates the build and release process, allowing future updates to be published automatically whenever changes are pushed to the repository.
