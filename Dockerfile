FROM node:18.7.0 as backend

WORKDIR /app

COPY ["./backend/package.json", "./backend/package-lock.json", "./"]

RUN npm install

COPY ./backend .

EXPOSE 3010

CMD ["npm", "run", "start"]


FROM node:18.7.0 as frontend

WORKDIR /app

COPY ["./frontend/package.json", "./frontend/package-lock.json", "./"]

RUN npm install

COPY ./frontend .

EXPOSE 3000

CMD ["npm", "run", "start"]



