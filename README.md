# React <> Webpack

Initialization:
```
npm init -y
npm i typescript ts-node -D
npm i webpack-dev-server webpack-merge webpack webpack-cli sass-loader node-sass -D
npx tsc --init
npm i @types/react @types/react-dom -D 
npm i @babel/cli @babel/core @babel/preset-env @babel/plugin-syntax-jsx -D 
npm i @babel/preset-typescript -D 
npm i @babel/preset-react -D 
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh 
npm install --save-dev html-webpack-plugin 
npm i style-loader css-loader sass-loader -D 
npm i file-loader -D 
yarn add babel-loader -D 
npm i babel-loader -D
```

Note: the `-D` option is used to declare that these dependencies are only used in the development environment and will not be sent to the production environment.