# Render Deployment Guide

## ✅ Changes Made

### Frontend (simple-ecommerce)

1. **render.yaml** - SPA routing config
   - Routes all requests to `/index.html` for React Router
   - Sets `VITE_API_URL` environment variable
   - Build command: `cd simple-ecommerce && npm install && npm run build`
   - Publish path: `simple-ecommerce/dist`

2. **.env** - Backend URL
   - `VITE_API_URL=https://shoe-website-backend-bj1t.onrender.com`

3. **src/components/OrderForm.tsx** - API endpoint
   - Uses full backend URL: `https://shoe-website-backend-bj1t.onrender.com/api/orders`
   - Has 3x retry logic for Render cold starts
   - Proper error handling

4. **src/pages/OrderForm.tsx** - Duplicate form updated
   - Same API logic as components version

5. **App.tsx** - Routes configured
   - `/` - Home
   - `/product/:id` - Product details
   - `/category/:category` - Category page
   - `/about` - About page
   - `/contact` - Contact page

---

## 🚀 Backend (leather-backend) - Already Configured

✅ Route: `POST /api/orders`  
✅ CORS: Enabled (accepts all origins)  
✅ Email: Sends notification on order

### Backend Endpoint

```
POST https://shoe-website-backend-bj1t.onrender.com/api/orders
Content-Type: application/json

{
  "product": "Shoe Name",
  "quantity": 2,
  "total": 50000,
  "customer": "John Doe",
  "phone": "+2348012345678"
}
```

---

## 📋 Render Dashboard Setup

### Frontend Service (Static Site)

1. **Service Details**
   - Name: `simple-ecommerce-frontend` (or your choice)
   - Branch: `master` (or your default)
   - Build Command: `cd simple-ecommerce && npm install && npm run build`
   - Publish Directory: `simple-ecommerce/dist`

2. **Environment Variables**

   ```
   VITE_API_URL=https://shoe-website-backend-bj1t.onrender.com
   ```

3. **Redirects (Routes)**
   - Rewrite: `/*` → `/index.html` (already in render.yaml)

### Backend Service (Web Service)

✅ Already deployed and working

**Environment Variables** (confirm these are set):

- `EMAIL_USER` - Gmail sender address
- `EMAIL_PASS` - Gmail app password
- `OWNER_EMAIL` - Where to send order notifications
- `PORT` - (optional, defaults to 5000)

---

## 🧪 Testing Checklist

### 1. Test Backend Directly

```bash
# In browser:
https://shoe-website-backend-bj1t.onrender.com

# Should return:
# {"status":"OK","message":"Backend is running"}
```

### 2. Test Order Endpoint

```bash
curl -X POST https://shoe-website-backend-bj1t.onrender.com/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "product": "Test Shoe",
    "quantity": 1,
    "total": 50000,
    "customer": "Test User",
    "phone": "+2348012345678"
  }'

# Should return:
# {"success":true,"message":"Order sent successfully! We'll contact you soon."}
```

### 3. Test Frontend Routes

```
https://your-frontend.onrender.com           ✅ Home page loads
https://your-frontend.onrender.com/about     ✅ About page
https://your-frontend.onrender.com/contact   ✅ Contact page
https://your-frontend.onrender.com/product/1 ✅ Product details
```

Refresh each page - React Router should handle routing, NOT show 404

### 4. Test Order Submission

1. Go to frontend
2. Add product to cart
3. Click "Order" button
4. Fill in name and phone
5. Click "Submit"
6. Should show: "Order sent successfully! We'll contact you soon."
7. Check your email for order notification

---

## 🔥 Common Issues & Fixes

### ❌ "Page Not Found" on Refresh

**Cause:** Router not configured  
**Fix:** Ensure `render.yaml` has rewrite rule

### ❌ "Failed to Submit Order"

**Cause:** Wrong backend URL  
**Fix:** Confirm `VITE_API_URL` in Render environment variables

### ❌ "Cannot GET /api/orders"

**Cause:** Route needs POST not GET  
**Fix:** Frontend should use `method: "POST"`

### ❌ Email Not Sending

**Cause:** Missing or wrong email credentials  
**Fix:** Check `EMAIL_USER`, `EMAIL_PASS`, `OWNER_EMAIL` in backend

### ❌ Cold Start Timeout (Render Free)

**Cause:** Free tier goes to sleep  
**Solution:** Order form has 3x retry logic built in ✅

---

## 📝 Code Summary

### Frontend API Call

Location: `src/components/OrderForm.tsx` & `src/pages/OrderForm.tsx`

```typescript
const BACKEND_URL =
  import.meta.env.VITE_API_URL ||
  "https://shoe-website-backend-bj1t.onrender.com";
const orderEndpoint = `${BACKEND_URL.replace(/\/$/, "")}/api/orders`;

const response = await fetch(orderEndpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    product: product.name,
    quantity,
    total: product.price * quantity,
    customer: fullName,
    phone,
  }),
});
```

### Backend Endpoint

Location: `leather-backend/server.js`

```javascript
app.post("/api/orders", async (req, res) => {
  // Sends email to OWNER_EMAIL
  // Returns: {"success":true,"message":"Order sent successfully! We'll contact you soon."}
});
```

---

## ✅ Ready to Deploy!

1. Push both changes to GitHub
2. Render will auto-deploy on push
3. Test using checklist above
4. Monitor Render logs for errors

Good luck! 🚀
