// import CracoLessPlugin from 'craco-less'
const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#e58e10',
                '@secondary-color': '#f4591a',
                '@text-color': '#fbfeff', 
                '@heading-color': '#fbfeff',
                '@border-color-base': '#e58e10',
                '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12)'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};