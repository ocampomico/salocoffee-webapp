# Deployment Guide - Salo Coffee

This guide provides detailed steps to deploy your React + TypeScript + Yarn application to various hosting platforms with your custom domain.

## Prerequisites

- Node.js 20+ installed on your local machine
- Yarn package manager installed
- Your custom domain name
- Git repository (GitHub, GitLab, etc.)

## Option 1: Vercel (Recommended for React Apps)

### Step 1: Prepare Your Repository
```bash
# Clone/download your project locally
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/brew-and-go.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project" and import your repository
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `yarn build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `yarn install`

### Step 3: Configure Custom Domain
1. In Vercel dashboard, go to your project settings
2. Click "Domains" tab
3. Add your custom domain (e.g., `brewandgo.com`)
4. Update your domain's DNS settings:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### Step 4: Environment Variables (if needed)
- Add any environment variables in Vercel dashboard under "Settings" → "Environment Variables"

## Option 2: Netlify

### Step 1: Build Configuration
Create `netlify.toml` in your project root:
```toml
[build]
  publish = "dist/public"
  command = "yarn build"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and connect your Git repository
2. Set build settings:
   - **Build Command**: `yarn build`
   - **Publish Directory**: `dist/public`
3. Deploy the site

### Step 3: Custom Domain
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Update DNS settings as provided by Netlify

## Option 3: VPS/Cloud Server (DigitalOcean, AWS, etc.)

### Step 1: Server Setup
```bash
# On your server (Ubuntu/Debian)
sudo apt update
sudo apt install nginx nodejs yarn git

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Deploy Application
```bash
# Clone your repository
git clone https://github.com/yourusername/brew-and-go.git
cd brew-and-go

# Install dependencies and build
yarn install
yarn build

# Copy built files to web directory
sudo cp -r dist/public/* /var/www/html/
```

### Step 3: Configure Nginx
Create `/etc/nginx/sites-available/brewandgo`:
```nginx
server {
    listen 80;
    server_name brewandgo.com www.brewandgo.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/brewandgo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 4: SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d brewandgo.com -d www.brewandgo.com
```

### Step 5: Process Manager (for backend)
If you need the Express server running:
```bash
# Install PM2
npm install -g pm2

# Start your server
pm2 start "yarn start" --name "brew-and-go"
pm2 startup
pm2 save
```

## Option 4: Docker Deployment

### Step 1: Create Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN yarn build

# Expose port
EXPOSE 5000

# Start application
CMD ["yarn", "start"]
```

### Step 2: Build and Deploy
```bash
# Build Docker image
docker build -t brew-and-go .

# Run container
docker run -d -p 5000:5000 --name brew-and-go-app brew-and-go
```

## Domain DNS Configuration

### For most hosting providers:
- **A Record**: `@` → `[hosting-provider-IP]`
- **CNAME Record**: `www` → `[hosting-provider-domain]`

### Common DNS Providers:
- **Cloudflare**: Use their dashboard to add records
- **GoDaddy**: DNS Management section
- **Namecheap**: Advanced DNS tab

## Post-Deployment Checklist

- [ ] Website loads at your custom domain
- [ ] All navigation links work correctly
- [ ] Contact form functions properly
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active (https://)
- [ ] Page load speed is acceptable
- [ ] SEO meta tags are properly set

## Maintenance

### Updating Your Site
```bash
# Pull latest changes
git pull origin main

# Rebuild and redeploy
yarn install
yarn build

# For VPS: copy new files
sudo cp -r dist/public/* /var/www/html/

# For Vercel/Netlify: automatic deployment on git push
```

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor website performance (Google PageSpeed Insights)
- Check analytics (Google Analytics)

## Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (should be 20+)
2. **Routing issues**: Ensure SPA redirects are configured
3. **API not working**: Check CORS settings and API endpoints
4. **Domain not working**: Verify DNS propagation (use dig command)

### Useful Commands:
```bash
# Check DNS propagation
dig brewandgo.com

# Test website locally
yarn dev

# Build and test production locally
yarn build
yarn start
```

Choose the deployment option that best fits your needs and technical comfort level. Vercel is the easiest for getting started, while VPS gives you the most control.