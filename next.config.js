module.exports = {
    webpack: (config) => {
      return Object.assign({}, config, {
        externals: Object.assign({}, config.externals, {
          fs: 'fs',
        }),
        module: Object.assign({}, config.module, {
            rules: [
                {
                  test: /\.txt/,
                  use: 'raw-loader',
                },
              ],
            },
        ),
      });
    }
  };