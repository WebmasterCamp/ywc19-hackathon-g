quick-next
===

Quick start template for NextJS application

> This repository has been configured for upcoming new **App Router** by default ([Documentation](https://beta.nextjs.org/docs/routing/fundamentals)). Feel free to change back to regular page routing if you want, no deployment process changed.

Prerequisite
---

1. Install Node LTS
2. Install [pnpm](https://pnpm.io) package manager by running `npm i -g pnpm` command
3. (Optionally) [Docker](https://docker.com) for container image debugging

Development
---

1. Create a repository by using this repository as a template
2. Install dependencies with `pnpm i` command
3. Develop anything with `pnpm dev`!

Deployment
---

1. Create project in [Deploys.app](https://deploys.app) console. This project ID will be `DEPLOYS_NAME` secrets
2. Create deployment credentials
    1. Create service account at **Service Accounts > Create**. You will get service account email address which will be `DEPLOYS_AUTH_USER` secrets
    2. Click into **service account email** and click **Create key** button. You will get deployment key which will be `DEPLOYS_AUTH_PASS` secrets
    3. Create a role at **Roles > Create** with `deployment.*` permissions
    4. Create user at **Users > Add** with service account email, and role that created earlier
3. Add those secrets into GitHub via **Settings > Secrets and variables > Actions**
4. Push a commit to trigger deployment or mannualy trigger it yourself in Actions tab

Local deployment troubleshooting
---

1. Make sure Docker service as active
2. Build image locally with `docker build -t quick-next .`
3. Run production image with `docker run --name next-debug -p 3000:3000 quick-next`
4. Deployment should be active locally at http://localhost:3000

