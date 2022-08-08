echo 'build app '

pnpm run build

echo 'build app end'

echo 'start build docker ----> '

docker build -t registry.cn-shanghai.aliyuncs.com/chenc/react-nestjs-full-stack:0.0.1 .
docker push registry.cn-shanghai.aliyuncs.com/chenc/react-nestjs-full-stack:0.0.1

echo 'build docker end'
