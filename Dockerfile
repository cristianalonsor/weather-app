#generamos el sistema operativo donde estará montada la imagen
#tiene la carpeta app, donde va generalmente la app
FROM node:19.2-alpine3.17 as build-step

RUN mkdir -p /app

#directorio de trabajo para usar
WORKDIR /app

#copiamos el build de la app a la carpeta que se servirá
COPY package.json package-lock.json ./

RUN npm install

COPY . /app

RUN npm run build --prod

##segundo paso##

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/weather-app /usr/share/nginx/html