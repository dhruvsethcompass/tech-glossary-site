# 🚀 GitHub Setup Guide

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `tech-glossary-site`
   - **Description**: "A beautiful tech glossary micro-site built with Cursor AI"
   - **Visibility**: Select **Public**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Your Local Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/tech-glossary-site.git

# Push your code to GitHub
git push -u origin main
```

**Or copy the exact commands from the GitHub page after creating your repo.**

## Step 3: Enable GitHub Pages

1. In your GitHub repository, click **"Settings"**
2. In the left sidebar, click **"Pages"** (under "Code and automation")
3. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **"Save"**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR_USERNAME.github.io/tech-glossary-site/`

## Step 4: Verify Deployment

1. Visit your GitHub Pages URL
2. Test the search functionality
3. Check responsiveness on mobile
4. Share the link! 🎉

## Troubleshooting

**If push fails with authentication error:**
- Use a Personal Access Token instead of password
- Go to GitHub Settings → Developer settings → Personal access tokens
- Generate a token with `repo` permissions
- Use the token as your password when prompted

**If GitHub Pages doesn't work:**
- Wait 2-3 minutes after enabling Pages
- Check the Pages settings to see deployment status
- Ensure the branch is `main` and folder is `/ (root)`
- Try a hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## Quick Reference

Your local repository is ready at:
```
/Users/dhruv.seth/Projects/core-eng-mono/tech-glossary-site
```

Current branch: `main`  
Commits: 1 commit ready to push



