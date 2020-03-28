# vue-cli-plugin-echo-env

> Vue CLI 3+ Plugin that add `echo-env` command to vue-cli-service for easier inspect environment variables.  
>
> 为`vue-cli-service`的添加一个`echo-env`命令，用于查看本次构建时最终环境变量的值，方便在配置环境时进行调试。

## Install
```shell script
vue add @champkeh/echo-env
```

## Config
对每一个构建命令都添加对应的`echo-env`命令，可查看对应构建的环境变量。

`package.json`中的`scripts`配置如下：
```json5
{
  "scripts": {
    "serve": "cross-env NODE_ENV=development vue-cli-service serve --mode development",
    "build:test": "cross-env NODE_ENV=production vue-cli-service build --mode test",
    "build:uat": "cross-env NODE_ENV=production vue-cli-service build --mode uat",
    "build:release": "cross-env NODE_ENV=production vue-cli-service build --mode production",
    "echo-env:dev": "cross-env NODE_ENV=development vue-cli-service echo-env --mode development",
    "echo-env:test": "cross-env NODE_ENV=production vue-cli-service echo-env --mode test",
    "echo-env:uat": "cross-env NODE_ENV=production vue-cli-service echo-env --mode uat",
    "echo-env:prod": "cross-env NODE_ENV=production vue-cli-service echo-env --mode production"
  }
}
```

## Usage
```shell script
# 查看开发环境的配置
npm run echo-env:dev

# 查看uat环境的配置
npm run echo-env:uat
```
