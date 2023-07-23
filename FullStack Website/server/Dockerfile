FROM node:latest


RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .
COPY package-lock.json .


RUN npm install 
RUN npm install -g nodemon


COPY . .

EXPOSE 3000

CMD ["nodemon", "index.js"]