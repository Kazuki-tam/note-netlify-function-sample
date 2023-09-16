# Astro & Netlify Functions環境（note記事出力）
AstroとNetlify Functionsを利用した環境でnote記事を表示するモック環境。  
noteのRSSを利用し、自サイトに記事出力を行うことを目指します。

[Demo環境](https://note-rss-sample.netlify.app/)

## ✅ 利用条件
- [note記事情報](https://note.com/)
- [Netlify](https://www.netlify.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [pnpm](https://pnpm.io/ja/)
- [Node.js v18以上](https://nodejs.org/ja)

## 🚀 プロジェクト構成

Astroのスターター構成をベースにNetlify Functionを利用するためのディレクトリー（netlify）を追加しています。

```text
.
├── dist
├── netlify
│   └── functions
├── node_modules
├── public
└── src
    ├── components
    ├── hooks
    └── pages
```

コンポーネント作成には [React](https://ja.react.dev/) を利用しています。お好きな実装方法に読み換えていただいて問題ありません。

## 👀 利用方法
本環境はNetlify CLIの利用を前提としています。CLIのインストールがまだの場合は以下コマンドを実行してください。

```bash
npm install netlify-cli -g
```

### 環境変数の設定
`.env.example`をコピーし、プロジェクトルートに`.env`ファイルを作成します。  
デプロイ先のURLとRSSのURLを設定してください。

```
ALLOWED_ORIGIN=https://your-site.netlify.app/
RSS_URL=https://note.com/your-account/rss
```

[iframe、RSSで、自分のサイトにnoteを表示する](https://www.help-note.com/hc/ja/articles/4402395202841-iframe-RSS%E3%81%A7-%E8%87%AA%E5%88%86%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%ABnote%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B)

### パッケージインストール
以下コマンドで依存パッケージをインストールします。
```bash
pnpm install
```

### 開発スタート
以下コマンドで開発をスタートします。
```bash
pnpm dev
```

### Netlifyへのデプロイ
GitHubと連携することで簡単に自動デプロイが行えます。

[GitHubのリポジトリとNetlifyを接続して、ホスティングする](https://www.newt.so/docs/tutorials/connect-to-netlify)

## 🧞 コマンド一覧

以下のコマンドはすべてプロジェクトルートで実行します。

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 依存パッケージインストール                            |
| `pnpm dev`             | ローカルサーバー起動       |
| `pnpm build`           | プロジェクトのビルド         |

