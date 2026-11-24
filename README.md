# 🚀 Shivam Labs – Modern & Minimal Developer Portfolio

Welcome to **Shivam Singh's Portfolio** (`Shivam Labs`). Built using **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Aceternity UI**.

---

## 📌 Project Features & Highlights
* **Hero Section:** Dynamic Spotlight illumination, animated text generate effect, and call-to-action.
* **Bento Grid:** Interactive grid showing tech stack, global connectivity, and a "Copy Email" button with confetti animation.
* **Featured Projects:** Aceternity 3D Pin cards (3D hover tilt, floating link pins, and tech stack badges).
  * **ORBIT Coaching Portal:** Features your uploaded portal screenshot!
  * **Shivam Labs & AI Automation System:** Easily editable.
* **Work Experience:** Animated moving-border cards for roles and achievements.
* **Engineering Approach:** Interactive canvas reveal cards with glowing phase numbers.
* **Contact & Footer:** Email direct link and social media buttons (GitHub, LinkedIn, Twitter/X, Instagram).

---

## 💻 How to Run Locally

1. **Navigate to the project folder:**
   ```bash
   cd "C:\Users\SHIVAM KUMAR\.gemini\antigravity\scratch\shivam-portfolio"
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Go to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ How to Edit or Add Projects (Sabse Aasan Tarika)

Aapko kisi bhi complex component ya UI code ko chhedne ki zaroorat nahi hai. Saara content ek hi file me hai:
👉 **`data/index.ts`**

### 1. Existing Project ko Edit Kaise Karein:
`data/index.ts` kholein aur `projects` array me jakar edit karein:
```ts
{
  id: 2,
  title: "ORBIT – Student & Admin Portal",
  des: "A complete coaching institute management system featuring secure authentication...",
  img: "/orbit-tutorial.png", // public folder me rakhi hui photo
  iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/dock.svg"],
  link: "https://orbit-tutorial.vercel.app/", // Live site link
  github: "https://github.com/bhumiharshivam1392007-ctrl", // GitHub link
}
```

### 2. Naya Project Kaise Add Karein:
1. Apne naye project ka screenshot `public/` folder me daalein (e.g. `public/my-new-project.png`).
2. `data/index.ts` me `projects` array ke andar ek naya object add kar dein:
```ts
{
  id: 4,
  title: "Aapke Naye Project Ka Naam",
  des: "Project ka short description aur features yahan likhein.",
  img: "/my-new-project.png",
  iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
  link: "https://your-live-project.com",
  github: "https://github.com/bhumiharshivam1392007-ctrl/your-repo",
}
```
Website apne aap naye project card ko 3D Pin animations ke sath display kar degi!

---

## 🌐 How to Deploy to Vercel (Free Hosting)

1. **Apne GitHub par naya repository banayein:**
   ```bash
   git add .
   git commit -m "Shivam Labs portfolio ready"
   git remote add origin https://github.com/bhumiharshivam1392007-ctrl/shivam-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel par deploy karein:**
   * [vercel.com](https://vercel.com) par jayein aur GitHub se sign in karein.
   * `Import Repository` par click karke `shivam-portfolio` select karein.
   * **Deploy** button daba dein! 1 minute ke andar aapki website live ho jayegi.
