# Deploy CRM Basegrid to Cloudflare Pages (get a test link)

Your app is set up for **static export** so you can host it on Cloudflare Pages and get a URL like `https://your-project.pages.dev`.

## Option A: Deploy with Cloudflare Pages (Git)

1. **Push your code to GitHub/GitLab**
   - Create a repo and push the `landing-app` folder (or the whole project).

2. **Log in to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign in.

3. **Create a Pages project**
   - Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Select your repo and branch.

4. **Build settings**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** If only the app is in the repo, leave blank. If the app is in a subfolder (e.g. `landing-app`), set **Root directory** to `landing-app`.
   - **Environment variables:** Add `NODE_VERSION` = `18` (or your Node version) if needed.

5. **Deploy**
   - Click **Save and Deploy**. After the build, your test link will be:
   - `https://<project-name>.pages.dev`

---

## Option B: Deploy by uploading the build (no Git)

1. **Build locally**
   ```bash
   cd landing-app
   npm run build
   ```
   This creates an `out` folder with static files.

2. **Create a Pages project**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
   - Name the project (e.g. `crm-basegrid`).

3. **Upload**
   - Drag and drop the **contents** of the `out` folder (not the folder itself) into the upload area, or upload a zip of the `out` contents.

4. **Your test link**
   - `https://crm-basegrid.pages.dev` (or whatever project name you chose).

---

## After deployment

- **Home:** `https://your-project.pages.dev`
- **Login:** `https://your-project.pages.dev/login`
- **Register:** `https://your-project.pages.dev/register`
- **Privacy Policy:** `https://your-project.pages.dev/privacy-policy`
- **Terms:** `https://your-project.pages.dev/terms`

Share the Pages URL as your Cloudflare test link. Updates: push to Git (Option A) or upload a new build (Option B).
