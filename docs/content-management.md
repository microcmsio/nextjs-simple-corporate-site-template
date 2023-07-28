# コンテンツ管理

サイト内のコンテンツの大部分は GitHub に格納されており、と特に編集頻度が高い部分については microCMS で管理しています。

microCMS では次のコンテンツを管理しています。

- メタ情報
- ニュース
- カテゴリー
- 事業内容
- カテゴリー

テンプレート利用時に作成された microCMS の管理画面にログインすることで、これらのコンテンツを簡単に編集することができます。

## メタ情報
メタ情報APIは`app/layout.tsx`で利用されており、下記の情報を設定可能です。
- title
- description
- og:title
- og:description
- og:image
- canonical

## ニュース
ニュースAPIは次のファイルで利用されています。
- `app/page.tsx`
- `app/news/page.tsx`
- `app/news/[slug]/page.tsx`
- `app/news/p/[current]/page.tsx`
  
`app/page.tsx`では最新2件を表示、`app/news/page.tsx`では最新10件を表示、`app/news/[slug]/page.tsx`ではニュースの詳細を表示、`app/news/p/[current]`では`current`ページ目の10件分のニュースを表示しています。
