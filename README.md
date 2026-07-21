# Bliss 💖

Bliss is a modern Android application built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Capacitor**. It uses a single React codebase to generate a native Android application.

---

# Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Capacitor
- Android SDK
- Gradle
- Java 21

---

# Prerequisites

Before building the project, install:

- Node.js (Latest LTS)
- Java 21 (Temurin JDK)
- Android SDK (Command Line Tools or Android Studio)
- Git

---

# Clone the Repository

```bash
git clone https://github.com/hritick342/Bliss.git
cd Bliss
```

---

# Install Dependencies

```bash
npm install
```

---

# Run in Development Mode

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# Android Build Setup

## 1. Build the React App

```bash
npm run build
```

---

## 2. Sync with Capacitor

```bash
npx cap sync android
```

---

## 3. Generate Android APK

Windows

```powershell
cd android
.\gradlew.bat assembleDebug
```

---

# APK Location

```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

# Development Workflow

Whenever you make any changes to the React code:

### Step 1

```bash
npm run build
```

### Step 2

```bash
npx cap sync android
```

### Step 3

```powershell
cd android
.\gradlew.bat assembleDebug
```

The latest APK will always be available at:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

# Update App Icon

Replace:

```
resources/icon.png
```

Generate new icons:

```bash
npx capacitor-assets generate
```

Sync Android:

```bash
npx cap sync android
```

Rebuild APK:

```powershell
cd android
.\gradlew.bat assembleDebug
```

---

# Git Workflow

Check status

```bash
git status
```

Stage changes

```bash
git add .
```

Commit changes

```bash
git commit -m "Describe your changes"
```

Push to GitHub

```bash
git push
```

Pull latest changes

```bash
git pull
```

---

# Project Structure

```
Bliss/
│
├── android/                 # Native Android project
├── resources/               # App icons and splash assets
├── public/                  # Static assets
├── src/                     # React source code
├── dist/                    # Production build
├── capacitor.config.ts
├── vite.config.ts
├── package.json
└── README.md
```

---

# Environment Setup

Example environment variables (PowerShell):

```powershell
$env:JAVA_HOME="C:\Program Files\Eclipse Adoptium\jdk-21.0.11.10-hotspot"
$env:ANDROID_HOME="C:\Android"
$env:ANDROID_SDK_ROOT="C:\Android"
```

---

# Useful Commands

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

Sync Capacitor

```bash
npx cap sync android
```

Open Android project (if Android Studio is installed)

```bash
npx cap open android
```

Generate Android APK

```powershell
cd android
.\gradlew.bat assembleDebug
```

Clean Android build

```powershell
cd android
.\gradlew.bat clean
```

Generate launcher icons

```bash
npx capacitor-assets generate
```

---

# License

This project is intended for learning and internal development purposes.

---

# Author

**Hritick Mohapatra**

GitHub: https://github.com/hritick342