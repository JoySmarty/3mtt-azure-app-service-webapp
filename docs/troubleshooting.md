# Troubleshooting

## Overview

This document records the issues encountered during the deployment of the Node.js web application to Microsoft Azure App Service and the steps taken to resolve them. Documenting these issues provides a useful reference for future deployments and demonstrates the troubleshooting process followed during the project.

---

# Issue 1: Azure Region Quota

## Problem

The initial deployment could not be completed because the selected Azure region did not have sufficient quota available for the App Service resources.

## Cause

Azure subscriptions have regional resource limits. The selected region was unable to allocate the required resources.

## Resolution

A different Azure region (**West Europe**) was selected during App Service creation, allowing the deployment to proceed successfully.

**Status:** Resolved

---

# Issue 2: GitHub Actions Build Failure

## Problem

The GitHub Actions workflow failed during the build stage.

The workflow attempted to execute:

```bash
npm install
```

from the repository root, resulting in a build failure because the application files were located in the `app` directory.

## Cause

The generated GitHub Actions workflow assumed that `package.json` was located in the repository root.

## Resolution

The workflow was updated to execute all Node.js commands from the `app` directory by specifying the correct working directory.

**Status:** Resolved

---

# Issue 3: Node.js Runtime Warning

## Problem

GitHub Actions displayed a warning indicating that Node.js 20 had been deprecated.

## Cause

The workflow referenced older GitHub Actions that were originally designed to run with Node.js 20.

## Resolution

The workflow was updated to use Node.js 24, ensuring compatibility with the current GitHub Actions runtime.

**Status:** Resolved

---

# Issue 4: No Changes to Commit

## Problem

After updating the workflow, Git reported:

```text
nothing to commit, working tree clean
```

## Cause

The workflow had already been updated and committed through the GitHub web interface, leaving the local repository synchronized with the remote repository.

## Resolution

The repository status was verified, and the GitHub Actions workflow was re-run successfully.

**Status:** Resolved

---

# Issue 5: Continuous Deployment Verification

## Problem

It was necessary to confirm that the GitHub Actions workflow deployed the application successfully.

## Resolution

The GitHub Actions workflow completed successfully with all steps passing (green status). The application was then accessed through its Azure App Service HTTPS URL to verify that the deployment had completed correctly.

**Status:** Resolved

---

# Lessons Learned

The deployment process highlighted several important considerations:

* Verify the project structure before configuring deployment workflows.
* Ensure build commands execute from the correct directory.
* Keep workflow actions and runtime versions up to date.
* Review Azure service limitations when selecting pricing tiers.
* Validate deployments by accessing the live application after each successful release.

---

# Troubleshooting Summary

| Issue                           | Resolution                                            |
| ------------------------------- | ----------------------------------------------------- |
| Azure regional quota limitation | Switched deployment to West Europe                    |
| GitHub Actions build failure    | Configured workflow for the `app` directory           |
| Node.js deprecation warning     | Updated workflow to use Node.js 24                    |
| No changes to commit            | Confirmed workflow was already committed              |
| Deployment verification         | Successfully accessed the live application over HTTPS |

---

# Conclusion

The deployment process involved several configuration and environment-related challenges that were successfully resolved. Addressing these issues improved the deployment workflow, ensured compatibility with the Azure hosting environment, and resulted in a reliable continuous deployment pipeline for the application.
