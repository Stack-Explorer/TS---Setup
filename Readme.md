# 1. Initial Project Setup
npm init -y
# 2. Install Dependencies
Production :- npm install express
Development :- npm install -D typescript @types/node @types/express tsx
# 3. Configure TS
npx tsc --init
# 4. Create Server 
mkdir src && touch src/server.ts
# 5. Define Scripts in package.json
"scripts": {
    "dev": "npx tsx --watch src/server.ts",
    "build" : "tsc",
    "start": "node dist/server.js",
}