# base image
FROM node:16

# working directory
WORKDIR /app

# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 8080


# install and cache app dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --ignore-platform


# copy app files and build
COPY . /app
RUN yarn build
# start app
CMD [ "yarn", "start" ]
