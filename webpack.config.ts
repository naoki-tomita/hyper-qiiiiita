import { Configuration } from "webpack";
import { join } from "path";

const config: Configuration = {
  entry: [ "./src/scripts/index.tsx" ],
  output: {
    path: join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  mode: "development",
  module: {
    rules: [
      { loader: "ts-loader", test: /\.tsx?$/ }
    ]
  }
}

export default config;