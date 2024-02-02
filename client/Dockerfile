FROM node:21.6-alpine as BUILDER

WORKDIR /app

COPY . .

RUN npm install -D

ENV APP_API_URL=https://api.globalexportcars.ru
RUN npm run build:prod

FROM nginx:1.23.3-alpine
COPY --from=BUILDER /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


