FROM node

WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm install

COPY . .

EXPOSE 5000

EXPOSE 3000

CMD npm start