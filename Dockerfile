FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@8.9.2

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
