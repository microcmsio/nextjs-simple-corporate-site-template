# ディレクトリ構成

本リポジトリでは、Next.js v13 から登場した App Router という仕組みを採用しています。

App Router では`app`ディクレトリの配下に置かれたファイル構成に応じて自動的にルーティングされる仕組みとなっています。
本リポジトリの構成を見てみると、下記のようになっています。（いくつか省略あり）

```
app
├── api
├── business
├── contact
├── members
├── news
├── _components
├── _constants
├── _libs
├── layout.module.css
├── layout.tsx
├── page.module.css
└── page.tsx
```

`business`, `contact`, `members`, `news` というディクレトリがあるので、ブラウザから`/business`、`/contact`などとアクセスすると該当ディレクトリ配下の情報が表示されます。
`api`というディクレトリだけ特殊なので、ここではスルーしてください。

![route-segments-to-path-segments](https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/ee376d80-e52a-42ca-aa2b-516fde675f72)
引用： https://nextjs.org/docs/app/building-your-application/routing

また、`_components`, `_constants`, `_libs` といったアンダースコア`_`から始まるディレクトリはルーティングから無視されます

## ファイル名のルール

App Router では特定のファイル名のルールが定まっています。重要なものをいくつか紹介します。

### page.tsx

このファイルに記載した情報が実際に Web ページとして表示されます。

business や contact ディレクトリ配下にも`page.tsx`が置かれており、その内容に応じて表示が行われます。

ブラウザから`/`にアクセスすると`app/page.tsx`の情報が表示され、`/business`にアクセスすると`app/business/page.tsx`の情報が表示されます。

### layout.tsx

UI のレイアウトを指定できるファイルです。
`layout.tsx`内の`children`として`page.tsx`が読み込まれるようなイメージです。

### not-found.tsx

ページが見つからなかった場合にこのファイルに記載された情報が出力されます。
404 ページとして利用すると良いでしょう。

その他のルールについては公式ドキュメントをご参照ください。  
https://nextjs.org/docs/app/building-your-application/routing#file-conventions

## スタイリングについて

方法は色々とありますが、本リポジトリでは CSS Modules を採用しています。

ものすごく簡潔に説明すると、CSS を JavaScript から読み込んで class 名を指定するイメージです。

具体例として、`app/page.tsx`と同階層に`app/page.module.css`があります。

`xxxxx.module.css`というファイル名にすることで CSS Modules と認識される仕組みになっています。

今回の場合、`page.tsx`用の CSS だということが分かりやすいように`page.module.css`としています。中身は普通の CSS が記載されています。

次に`page.tsx`の中を見てみると、次のような記載があります。（いくつか省略あり）

```typescript
import styles from './page.module.css';

export default async function Page() {
   return (
      <section className={styles.top}>
         // ...
      </section>
   );
}
```

import の部分で`./page.module.css`の情報を丸ごと持ってきて、`styles`という変数に格納しています。
section タグの`className`に`styles.top`を渡していますね。

ここでは`page.module.css`内に記載されている`top`という class を指定していることになります。

本リポジトリ内では CSS ファイルはすべて読み込み元のファイルの同階層に配置するようにしています。

`page.tsx`には`page.module.css`、`layout.tsx`には`layout.module.css`、`not-found.tsx`には`not-found.module.css`が対応しています。

### カスタムプロパティ（変数）の使用
頻繁に利用する色などの設定は`app/globals.css`にて変数定義をしています。
```css
:root {
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono',
    'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono',
    'Courier New', monospace;
  --color-text-main: #333;
  --color-text-sub: #999;
  --color-text-unpainted: #fff;
  --color-text-error: #f33;
  --color-bg-main: #fff;
  --color-bg-sub: #f3f3f3;
  --color-bg-code: #fafafa;
  --color-bg-painted: #333;
  --color-border-dark: #333;
  --color-border: #ddd;
  --color-border-light: #f3f3f3;
  --color-current: #eee;
  --color-button-primary: #333;
  --border-radius: 4px;
}
```

ここで定義した変数は、他のCSSファイルから次のように読み取ることができます。
```css
border-bottom: 1px solid var(--color-border);
```

また、`globals.css`自体は`app/layout.tsx`にてインポートしています。
```typescript
import './globals.css';
```
