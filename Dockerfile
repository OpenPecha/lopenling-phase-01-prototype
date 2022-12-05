FROM node:16-alpine

WORKDIR /usr/server/app


COPY ./package.json ./

RUN npm install

COPY ./ .

# RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

CMD ["npm","start"]
