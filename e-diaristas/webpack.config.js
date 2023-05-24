const mimeTypes = require("mime-types");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        test: /\.(css|png|jpg|jpeg|gif|svg)$/,
        type: mimeTypes.lookup("image/png"),
        type: mimeTypes.lookup("text/html"),
        type: mimeTypes.lookup("text/css"),
      },
    ],
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
    },
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
};
