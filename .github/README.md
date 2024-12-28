# **Deploying a Docusaurus Website on GitHub Pages**

Docusaurus is a robust framework designed for creating static websites optimized for documentation, blogs, and portfolios. GitHub Pages, a free web hosting service by GitHub, seamlessly integrates with Docusaurus, allowing developers to host their websites efficiently.

This guide provides an in-depth walkthrough of deploying a Docusaurus site to GitHub Pages.

---

## **Prerequisites**

1. **Tools and Accounts**:
   - Node.js and npm installed on your system.
   - Git installed and configured.
   - A GitHub account.

2. **Basic Understanding**:
   - Familiarity with terminal/command-line operations.
   - Understanding of GitHub repositories and branches.

---

## **Step 1: Set Up Your Docusaurus Project**

1. **Install Docusaurus**:
   - Open your terminal and navigate to the desired directory.
   - Run the following command to create a new Docusaurus project:
     ```bash
     npx create-docusaurus@latest <project-name> classic
     ```
     - Replace `<project-name>` with your desired project name.

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-name>
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   - Start the development server to preview your site locally:
     ```bash
     npm run start
     ```

---

## **Step 2: Configure Docusaurus for GitHub Pages**

1. **Open `docusaurus.config.js`**:
   - Update the following fields:
     ```javascript
     module.exports = {
       title: 'Your Website Title', // Title of your site
       tagline: 'Your tagline here',
       url: 'https://<username>.github.io', // Base URL of your GitHub Pages site
       baseUrl: '/<repository-name>/', // Add trailing slash
       organizationName: '<username>', // Your GitHub username
       projectName: '<repository-name>', // GitHub repository name
     };
     ```

   - Replace `<username>` with your GitHub username.
   - Replace `<repository-name>` with your repository name.

2. **Add `.nojekyll`**:
   - GitHub Pages uses Jekyll by default, which may conflict with your files. Add a `.nojekyll` file to the `static` directory to prevent this.

---

## **Step 3: Set Up a GitHub Repository**

1. **Create a New Repository**:
   - Go to [GitHub](https://github.com) and create a new repository.
   - Repository name: `<repository-name>`.

2. **Link Local Repository**:
   - Initialize Git in your project directory:
     ```bash
     git init
     ```
   - Add a remote origin:
     ```bash
     git remote add origin https://github.com/<username>/<repository-name>.git
     ```
   - Stage and commit the changes:
     ```bash
     git add .
     git commit -m "Initial commit"
     ```
   - Push the changes to the `main` branch:
     ```bash
     git branch -M main
     git push -u origin main
     ```

---

## **Step 4: Deploy Using Docusaurus**

1. **Deploy to GitHub Pages**:
   - Run the following command to deploy your site:
     ```bash
     GIT_USER=<username> npm run deploy
     ```
     - This builds the site and publishes it to the `gh-pages` branch of your repository.

2. **Verify Deployment**:
   - Navigate to `https://<username>.github.io/<repository-name>/` to confirm the deployment.

---

## **Step 5: Automate Deployment with GitHub Actions**

GitHub Actions can automate deployment, ensuring your site is updated whenever you push changes.

1. **Create a Workflow File**:
   - Navigate to your project directory and create the following structure:
     ```
     .github/workflows/deploy.yml
     ```

2. **Add the Workflow Configuration**:
   - Open `deploy.yml` and add:
     ```yaml
     name: Deploy Website

     on:
       push:
         branches:
           - main

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - uses: actions/checkout@v3

           - uses: actions/setup-node@v3
             with:
               node-version: 16

           - name: Install Dependencies
             run: npm install

           - name: Build Website
             run: npm run build

           - name: Deploy to GitHub Pages
             uses: peaceiris/actions-gh-pages@v3
             with:
               github_token: ${{ secrets.GITHUB_TOKEN }}
               publish_dir: build
     ```

3. **Commit and Push Changes**:
   - Commit and push the workflow file:
     ```bash
     git add .github/workflows/deploy.yml
     git commit -m "Add GitHub Actions workflow"
     git push
     ```

4. **Enable GitHub Pages**:
   - Go to the repository's settings on GitHub.
   - Under **Pages**, set the branch to `gh-pages`.

---

## **Step 6: Updating Your Website**

1. **Modify Content**:
   - Update files as needed (e.g., `index.md`, `docs/`).

2. **Push Changes**:
   - Commit and push changes to the `main` branch:
     ```bash
     git add .
     git commit -m "Update content"
     git push
     ```

3. **GitHub Actions**:
   - The workflow automatically rebuilds and deploys your site.

---

## **Conclusion**

This guide outlines the full process of creating and deploying a Docusaurus website on GitHub Pages. By automating deployment with GitHub Actions, you ensure a smooth and efficient workflow for maintaining and updating your website. This method is suitable for personal portfolios, documentation, and content-driven websites.