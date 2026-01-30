# Push CRM Basegrid to GitHub (repo name: CRMGRID)

## 1. Create the repo on GitHub

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** `CRMGRID`
3. **Description:** (optional) CRM Basegrid – Landing page and app.
4. Choose **Public**.
5. **Do not** add a README, .gitignore, or license (we already have them).
6. Click **Create repository**.

## 2. Connect and push from your PC

In a terminal, from the **landing-app** folder, run (replace `YOUR_GITHUB_USERNAME` with your GitHub username):

```bash
cd "c:\Users\Herat\Desktop\Cord4\CRM GRID\landing-app"

git remote add origin https://github.com/YOUR_GITHUB_USERNAME/CRMGRID.git
git push -u origin main
```

If you already added a remote with a different URL, update it:

```bash
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/CRMGRID.git
git push -u origin main
```

## 3. Your repo URL

After pushing:

**https://github.com/YOUR_GITHUB_USERNAME/CRMGRID**

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.
