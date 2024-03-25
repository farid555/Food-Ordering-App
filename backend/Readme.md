npm i express cors dotenv mongodb mongoose
npm i  ts-node typescript nodemon @types/express @types/cors @types/node --save-dev
npx tsc --init 
npx gitignore node

find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch

git add .gitignore
git commit -m '.DS_Store banished!'

node
require("crypto").randomBytes(32).toString("hex")

npm i express-oauth2-jwt-bearer