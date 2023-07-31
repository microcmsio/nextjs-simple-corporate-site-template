# コンテンツ管理

サイト内のコンテンツの大部分は GitHub に格納されており、特に編集頻度が高い部分については microCMS で管理しています。

microCMS では次のコンテンツを管理しています。

- メタ情報
- ニュース
- カテゴリー
- 事業内容
- メンバー

テンプレート利用時に作成された microCMS の管理画面にログインすることで、これらのコンテンツを簡単に編集することができます。
（見つけられない方はとりあえず microCMS にログインしてみてください）

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

## カテゴリー
ニュース用のカテゴリーを管理するAPIです。
ニュースAPIからコンテンツ参照されています。

## 事業内容
事業内容を管理するAPIです。
`app/business/page.tsx`にて利用されています。

下記の情報を設定可能です。
- 事業ロゴ
- 概要
- 画像
- リンク先URL

## メンバー
メンバー情報を管理するAPIです。
`app/members/page.tsx`にて利用されています。

下記の情報を設定可能です。
- 名前
- 役職
- プロフィール
- 画像

## microcms-js-sdkの利用
microCMSのAPIを呼び出すために[microcms-js-sdk](https://www.npmjs.com/package/microcms-js-sdk)を利用しています。
`app/_libs/microcms.ts`内にてSDKクライアントを作成しています。

```typescript
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});
```

また、上記ファイル内でmicroCMSのAPIスキーマに応じた型情報も管理しています。
```typescript
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};
```

microCMS側でAPIスキーマの編集やAPIの追加を行った場合は`app/_libs/microcms.ts`を適宜変更してください。
