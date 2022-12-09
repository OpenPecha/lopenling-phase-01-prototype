FROM node:16-alpine
WORKDIR /usr/server/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build
RUN npx prisma generate
ENV NODE_ENV=development
CMD ["npm","run","dev"] 