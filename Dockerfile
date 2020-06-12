FROM node:alpine as dadabuild
WORKDIR '/appdada'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx 
COPY --from=dadabuild /appdada/build /usr/share/nginx/html

