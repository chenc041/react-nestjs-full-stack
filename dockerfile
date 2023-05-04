FROM node:19-alpine3.15

LABEL author='double_cl@163.com/chenc'

WORKDIR /myapp

RUN yarn global add pm2

COPY ./packages/api /myapp

EXPOSE 3001

CMD ["pm2-runtime", "/myapp/ecosystem.config.js"]
