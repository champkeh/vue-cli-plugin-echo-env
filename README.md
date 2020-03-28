# vue-cli-plugin-inspect-env

> Vue CLI 3+ Plugin that add `inspect-env` command to vue-cli-service for easier inspect environment variables.  
>
> 为`vue-cli-service`的添加一个`inspect-env`命令，用于查看本次构建时最终环境变量的值，方便在配置环境时进行调试。

## Install
```shell script
vue add @champkeh/inspect-env
```

## Config
对每一个构建命令都添加对应的`inspect-env`命令，可查看对应构建的环境变量。

`package.json`中的`scripts`配置如下：
```json5
{
  "scripts": {
    "serve": "cross-env NODE_ENV=development vue-cli-service serve --mode development",
    "build:test": "cross-env NODE_ENV=production vue-cli-service build --mode test",
    "build:uat": "cross-env NODE_ENV=production vue-cli-service build --mode uat",
    "build:release": "cross-env NODE_ENV=production vue-cli-service build --mode production",
    "inspect-env:dev": "cross-env NODE_ENV=development vue-cli-service inspect-env --mode development",
    "inspect-env:test": "cross-env NODE_ENV=production vue-cli-service inspect-env --mode test",
    "inspect-env:uat": "cross-env NODE_ENV=production vue-cli-service inspect-env --mode uat",
    "inspect-env:prod": "cross-env NODE_ENV=production vue-cli-service inspect-env --mode production"
  }
}
```

## Usage
```shell script
# 查看开发环境的配置
npm run inspect-env:dev

# 查看uat环境的配置
npm run inspect-env:uat
```
