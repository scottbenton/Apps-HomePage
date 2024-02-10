const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

const name = "home_page";
const exposedFiles = {
  "./HomePage": "./src/HomePage.tsx",
};
const PORT = 3000;

module.exports = (_, argv) => [
  {
    output: {
      publicPath: "auto",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      host: "localhost",
      hot: false,
      liveReload: true,
      client: {
        webSocketURL: `ws://localhost:${PORT}/ws`,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: "all",
      port: PORT,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: name,
        filename: "remoteEntry.js",
        remotes: {},
        exposes: exposedFiles,
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  },
  {
    name: "dts",
    entry: Object.values(exposedFiles),
    mode: "development",
    output: {
      publicPath: "auto",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "dts-loader",
              options: {
                name: name,
                exposes: exposedFiles,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
      ],
    },
  },
];
