import path from 'node:path';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';

const isDev = process.env.NODE_ENV !== 'production';
const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
    mode: isDev ? 'development' : 'production',
    entry: { main: './src/main.tsx' },
    output: {
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve('dist'),
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: { syntax: 'typescript', tsx: true },
                transform: {
                  react: { runtime: 'automatic', refresh: isDev },
                },
              },
            },
          },
          type: 'javascript/auto',
        },
        {
          test: /\.s?css$/,
          use: ['postcss-loader'],
          type: 'css/auto',
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new rspack.HtmlRspackPlugin({ template: './index.html' }),
      new rspack.CopyRspackPlugin({ patterns: [{ from: 'public', to: '.' }] }),
      ...(isDev
        ? [new ReactRefreshRspackPlugin(), new rspack.HotModuleReplacementPlugin()]
        : []),
    ],
    devServer: {
      port: 1420,
      host: host || 'localhost',
      static: './public',
      ...(host
        ? {
            client: {
              webSocketURL: { protocol: 'ws', hostname: host, port: 1421 },
            },
          }
        : {}),
    },
    watchOptions: {
      ignored: /src-tauri/,
    },
});
