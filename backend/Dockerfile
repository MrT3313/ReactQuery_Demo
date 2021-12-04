FROM node:17

WORKDIR /backend

# copy everything from local backend dir
# into your current working directory in
# the container: /backend
COPY . .

# install dependencies in the container
# the .dockerignore does not copy the 
# node_modules || Dockerfile itself
RUN npm i

CMD ["npm", "run", "dev"]