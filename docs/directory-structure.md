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

business, contact, members, news というディクレトリがあるので、ブラウザから`/business`、`/contact`などとアクセスすると該当ディレクトリ配下の情報が表示されます。

api というディクレトリだけ特殊なので、ここではスルーしてください。

また、\_components, \_constants, \_libs といったアンダースコア（\_）から始まるディレクトリはルーティングから無視されます

### ファイル名のルール

App Router では特定のファイル名のルールが定まっています。重要なものをいくつか紹介します。

#### `page.tsx`

このファイルに記載した情報が実際に Web ページとして表示されます。

business や contact ディレクトリ配下にも`page.tsx`が置かれており、その内容に応じて表示が行われます。

ブラウザから`/`にアクセスすると`app/page.tsx`の情報が表示され、`/business`にアクセスすると`app/business/page.tsx`の情報が表示されます。

#### `layout.tsx`

UI のレイアウトを指定できるファイルです。
`layout.tsx`内の`children`として`page.tsx`が読み込まれるようなイメージです。

#### `not-found.tsx`

ページが見つからなかった場合にこのファイルに記載された情報が出力されます。
404 ページとして利用すると良いでしょう。

その他のルールについては公式ドキュメントをご参照ください。  
https://nextjs.org/docs/app/building-your-application/routing#file-conventions

## スタイリングについて

方法は色々とありますが、本リポジトリでは CSS Modules を採用しています。

ものすごく簡潔に説明すると、CSS を JavaScript から読み込んで class 名を指定するイメージです。

具体例を見ていきますと、`app/page.tsx`と同階層に`app/page.module.css`があるかと思います。

`xxxxx.module.css`というファイル名にすることで CSS Modules と認識される仕組みになっています。

今回の場合、`page.tsx`用の CSS だということが分かりやすいように`page.module.css`としています。中身は普通の CSS が記載されています。

次に`app/page.tsx`の中を見てみましょう。諸々と割愛しますが、次のような記載があります。

```
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

`page.tsx`には`page.module.css`、`layout.tsx`には`layout.module.css`、`not-found.tsx`には`not-found.module.css`を対応させています。
