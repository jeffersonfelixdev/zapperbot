FROM node:latest
WORKDIR /usr/web
ARG APP_API_URL=${APP_API_URL}
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
