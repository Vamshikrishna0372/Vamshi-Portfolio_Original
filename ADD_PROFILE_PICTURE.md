# 📸 How to Add Your Profile Picture

## Quick Steps:

1. **Save the profile picture** you shared in the chat
   - Right-click on the image in the chat
   - Save it to your computer
   - Rename it to: `profile.jpg`

2. **Copy to the public folder:**
   ```
   Copy the file to:
   c:\Users\pinna\OneDrive\Desktop\MyProfile\devendra-codes-spark\public\profile.jpg
   ```

3. **Refresh your browser** at http://localhost:8080/

## ✅ What's Changed:

- ✨ Profile picture is now on the **RIGHT SIDE** of the hero section
- 📱 Two-column layout: Text on left, Image on right
- 🎨 Larger profile picture (256px → 384px on desktop)
- 🎯 Better responsive design for all screen sizes

## 🎨 Layout:

```
┌─────────────────────────────────────────┐
│                                         │
│  Text Content        Profile Picture   │
│  (Left Side)         (Right Side)      │
│                                         │
│  - Welcome badge     - Animated        │
│  - Your name         - Round shape     │
│  - Job titles        - Glowing border  │
│  - Description       - Floating        │
│  - Buttons           - Particles       │
│  - Social links                        │
│                                         │
└─────────────────────────────────────────┘
```

## 📱 Responsive Behavior:

- **Mobile**: Image appears ABOVE text (stacked vertically)
- **Desktop**: Image on RIGHT, text on LEFT (side by side)

## 🔍 If Image Doesn't Show:

The component has a fallback - if `profile.jpg` is not found, it will display a beautiful purple gradient circle instead. Once you add your image, it will automatically replace the gradient!

---

**Your dev server is running at: http://localhost:8080/**

Just add the `profile.jpg` file and refresh! 🚀
