FROM node:18-alpine3.15

LABEL author='double_cl@163.com/chenc'

WORKDIR /myapp

RUN yarn global add pnpm && pnpm add pm2 -g

RUN pnpm config set registry https://registry.npmmirror.com/

COPY ./packages/api /myapp

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]
