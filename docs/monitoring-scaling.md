# Monitoring and Scaling

## Overview

This document summarizes the monitoring and scaling capabilities reviewed for the deployed Azure App Service. Azure provides built-in tools to monitor application health, performance, and resource usage, as well as options to scale applications vertically and horizontally as demand increases.

---

# Monitoring

Azure App Service includes several monitoring features that help administrators understand application performance and diagnose issues.

The following monitoring tools were explored:

| Feature                     | Purpose                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------- |
| Metrics                     | Displays performance data such as requests, CPU usage, memory usage, and response time. |
| Activity Log                | Records management operations performed on the App Service.                             |
| Log Stream                  | Displays application logs in real time for troubleshooting.                             |
| Diagnose and Solve Problems | Provides automated diagnostics and recommendations for common issues.                   |

> **Screenshot:** Azure App Service Metrics dashboard.

---

# Metrics Review

The Metrics blade provides insight into the application's operational performance.

Examples of available metrics include:

* Requests
* CPU Percentage
* Memory Working Set
* Average Response Time
* HTTP Response Codes
* Network Data In and Out

These metrics help monitor application health and identify potential performance bottlenecks.

---

# Vertical Scaling (Scale Up)

Vertical scaling increases the computing resources available to the application by moving to a higher App Service pricing tier.

The **Scale Up** page was reviewed, showing multiple pricing plans ranging from **Free (F1)** to **Premium** tiers.

The current deployment uses:

| Setting      | Value          |
| ------------ | -------------- |
| Current Plan | Free (F1)      |
| Memory       | 1 GB           |
| Instances    | 1              |
| Compute      | 60 minutes/day |

Higher pricing tiers provide:

* More CPU resources
* Additional memory
* Increased storage
* Higher availability
* Advanced App Service features

> **Screenshot:** Scale Up (App Service Plan) page.

---

# Horizontal Scaling (Scale Out)

Horizontal scaling increases application capacity by running multiple instances of the application.

The **Scale Out** settings were reviewed.

Current configuration:

| Setting          | Value     |
| ---------------- | --------- |
| Current Plan     | Free (F1) |
| Active Instances | 1         |
| Maximum Scale    | 0         |

The Azure portal indicates that manual scaling, autoscaling, and automatic scaling are unavailable on the Free pricing tier.

To enable horizontal scaling, the application must be upgraded to a supported pricing plan.

> **Screenshot:** Scale Out configuration page.

---

# Scaling Options

Azure App Service supports two primary scaling strategies:

### Vertical Scaling

* Increase CPU resources
* Increase memory
* Upgrade to a higher pricing tier
* Suitable when a single instance requires more computing power

### Horizontal Scaling

* Add multiple application instances
* Distribute incoming traffic across instances
* Improve availability and fault tolerance
* Suitable for applications experiencing increased traffic

---

# Free Tier Limitations

The project was deployed using the **Free (F1)** App Service Plan.

As a result, several enterprise features are unavailable, including:

* Manual Scale Out
* Autoscaling
* Deployment Slots
* Availability Zones

Upgrading to **Basic**, **Standard**, or **Premium** plans enables these advanced capabilities.

---

# Monitoring and Scaling Summary

| Feature                          | Status |
| -------------------------------- | ------ |
| Metrics Reviewed                 | ✅      |
| Activity Log Reviewed            | ✅      |
| Log Stream Explored              | ✅      |
| Scale Up Options Reviewed        | ✅      |
| Scale Out Options Reviewed       | ✅      |
| Free Tier Limitations Identified | ✅      |

---

# Conclusion

Azure App Service provides integrated monitoring and scalable infrastructure to support web applications throughout their lifecycle. Although the Free (F1) pricing tier limits advanced scaling capabilities, reviewing the available monitoring tools and scaling options provided valuable insight into how Azure supports application performance, reliability, and growth.
