# Galaxy Digital Portal - Deployment Guide

## Issue: 404 Errors on Routes After cPanel Deployment

The problem you're experiencing is common with Single Page Applications (SPAs) deployed to shared hosting. The server doesn't know how to handle client-side routes like `/about`, `/services`, etc.

## Solution 1: .htaccess File (Recommended for cPanel)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Upload the entire `dist` folder** to your cPanel public_html directory

3. **Ensure the `.htaccess` file is in the root** (same level as index.html)

4. **The .htaccess file should contain:**
   ```apache
   RewriteEngine On
   
   # Handle client-side routing
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /index.html [QSA,L]
   ```

## Solution 2: Alternative .htaccess (if above doesn't work)

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Solution 3: Contact Your Hosting Provider

If .htaccess doesn't work, contact your hosting provider and ask them to:
1. Enable mod_rewrite
2. Allow .htaccess overrides
3. Configure the server to handle SPA routing

## Testing Your Deployment

1. **Homepage should work:** `yourdomain.com/`
2. **About page should work:** `yourdomain.com/about`
3. **Services should work:** `yourdomain.com/services`
4. **All routes should work:** Any route should load the app and then navigate

## Common Issues and Fixes

### Issue: Still getting 404s
- Check if .htaccess is uploaded to the correct location
- Ensure mod_rewrite is enabled on your hosting
- Try clearing browser cache

### Issue: Assets not loading
- Check if the `assets` folder was uploaded
- Verify file paths in the built index.html

### Issue: Slow loading
- The compression settings in .htaccess should help
- Consider using a CDN for assets

## File Structure After Upload

Your cPanel public_html should look like this:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other public files]
```

## Need Help?

If you're still experiencing issues:
1. Check cPanel error logs
2. Verify .htaccess is working
3. Test with a simple route like `/about`
4. Contact your hosting provider about SPA support
