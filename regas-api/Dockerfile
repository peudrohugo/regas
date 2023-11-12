FROM node:18

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci --quiet
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3333

CMD [ "npm", "run", "start:dev" ]