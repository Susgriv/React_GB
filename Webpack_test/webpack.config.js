const path = require('path');
const MiniCss = require('mini-css-extract-plugin')
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: { // точка входа
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    module: { // модуль
        rules: [ // Правило
            { // Слушать JS файлы
                test: /\.(js|jsx)$/,
                loader: 'babel-loader', // загрузчик
                options: { // Настройки
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [MiniCss.loader, 'css-loader']
            }
        ]
    },
    plugins: [ // Плагины
        new MiniCss({
            filename: path.join('style', '[name].css'), // Создает папку Style и в ней структуру
            chunkFilename: '[id].css' // Кусок файла
        }),
        new HtmlPlugin({
            filename: 'index.html', // Как будет назван наш файл
            template: path.resolve(__dirname, 'public', 'index.html') // Через path.resolve где искать наш html документ
        }),
    ],
    devServer: {
        port: 3000, // Порт
        // hot:true, // Горячая загрузка
        open: false // Чтобы сразу не открывал сервер
    }
}