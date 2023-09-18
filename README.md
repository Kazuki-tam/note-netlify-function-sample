# Astro note記事出力
Astro環境でnote記事を表示するモック環境。  
noteのRSSを利用し、自サイトに記事出力を行うことを目指します。

[Demo環境](https://note-rss-sample.netlify.app/)

## ✅ 利用条件
- [note記事情報](https://note.com/)
- [pnpm](https://pnpm.io/ja/)
- [Node.js v18以上](https://nodejs.org/ja)

## 🚀 プロジェクト構成

Astroのスターター構成をベースにNetlify Functionを利用するためのディレクトリー（netlify）を追加しています。

```text
.
├── dist
├── node_modules
├── public
└── src
    ├── components
    ├── lib
    └── pages
```

## 👀 利用方法
`RSSFeed.astro` ファイルでRSS取得先のURLが設定できます。

```ts
const RSS_URL = "https://note.com/アカウント名/rss";
```

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

## 🧞 コマンド一覧

以下のコマンドはすべてプロジェクトルートで実行します。

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 依存パッケージインストール                            |
| `pnpm dev`             | ローカルサーバー起動       |
| `pnpm build`           | プロジェクトのビルド         |

