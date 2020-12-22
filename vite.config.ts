const { resolve } = require('path')
export default {
    alias: {
        '/@/': resolve(__dirname, 'src'),
        '/com/': resolve(__dirname, 'src/components'),
        '/router/': resolve(__dirname, 'src/router'),
        '/interface/': resolve(__dirname, 'src/interface'),
        '/functions/': resolve(__dirname, 'src/functions'),
        '/store/': resolve(__dirname, 'src/store'),
        '/view/': resolve(__dirname, 'src/view'),
    }
}