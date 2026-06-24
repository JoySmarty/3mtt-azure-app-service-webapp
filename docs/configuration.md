# Configuration

## Overview

This document describes the configuration of the Azure App Service used to host the Node.js web application. It also outlines the runtime environment, deployment settings, and advanced App Service features reviewed during the project.

---

# App Service Configuration

The application was deployed to Azure App Service using the following configuration.

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| App Service Name  | `joysmarty-webapp`             |
| Resource Group    | `rg-webapp-lab`                |
| Region            | West Europe                    |
| Operating System  | Linux                          |
| Runtime Stack     | Node.js 24 LTS                 |
| Pricing Tier      | Free (F1)                      |
| Deployment Method | GitHub Actions                 |
| Authentication    | User-assigned Managed Identity |

---

# Runtime Configuration

The application runs on the Node.js runtime provided by Azure App Service.

The runtime environment includes:

* Node.js 24 LTS
* Express.js web framework
* Automatic HTTPS support
* Managed infrastructure provided by Azure

Azure handles operating system updates, runtime management, and application hosting, allowing developers to focus on application development.

---

# Source Control Integration

Azure App Service was integrated with GitHub to enable automated deployments.

Configuration details:

* Source Provider: GitHub
* Repository Branch: `main`
* Build Provider: GitHub Actions
* Deployment Trigger: Push to the `main` branch

Whenever new code is pushed to the repository, GitHub Actions automatically builds and deploys the application.

---

# Authentication Configuration

Deployment authentication was configured using a **User-assigned Managed Identity**.

This authentication method allows GitHub Actions to securely deploy the application without storing publish profiles or passwords in the repository.

Azure federates the managed identity with GitHub, enabling secure authentication during deployments.

---

# Application Configuration

The application uses the following components:

* Node.js runtime
* Express.js server
* Static HTML and CSS files
* GitHub Actions deployment workflow

The project source code is organized with the application files located inside the `app` directory, while workflow and documentation files are maintained separately.

---

# Deployment Slots

Deployment Slots are an Azure App Service feature that allows multiple deployment environments to exist within the same App Service.

Common deployment slots include:

* Production
* Staging
* Testing

A typical deployment workflow involves deploying a new application version to a staging slot, validating its functionality, and then swapping it with the production slot. This approach minimizes downtime and provides a quick rollback option if issues are detected.

## Review Results

The Deployment Slots feature was reviewed in the Azure portal.

Because this project uses the **Free (F1)** App Service Plan, deployment slots are not available. Azure indicates that this feature requires a higher pricing tier, such as **Standard**, **Premium**, or above.

Although deployment slots were not implemented, reviewing the feature provided an understanding of how Azure supports staged deployments and zero-downtime releases in production environments.

> **Screenshot:** Deployment Slots page in the Azure Portal.

---

# HTTPS Configuration

Azure App Service automatically provisions a secure HTTPS endpoint for the application.

Benefits include:

* Encrypted communication between client and server.
* Secure public access without additional SSL configuration.
* Improved security for users accessing the application.

---

# Configuration Summary

| Configuration Item                | Status |
| --------------------------------- | ------ |
| Node.js Runtime Configured        | ✅      |
| Azure App Service Configured      | ✅      |
| GitHub Integration Enabled        | ✅      |
| User-assigned Identity Configured | ✅      |
| HTTPS Enabled                     | ✅      |
| Deployment Slots Reviewed         | ✅      |

---

# Conclusion

The application was configured using Azure App Service with a managed Node.js runtime and GitHub Actions for automated deployments. While advanced features such as deployment slots were unavailable on the Free pricing tier, their configuration and purpose were reviewed to understand how Azure supports staging environments and zero-downtime deployments in production.
