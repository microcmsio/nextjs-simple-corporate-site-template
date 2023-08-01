# シンプルなコーポレートサイト

![](public/img-cover.png)

microCMS 公式のシンプルなコーポレートサイトのテンプレートです。
サイト内のお問い合わせ送信先として CRM である [HubSpot](https://www.hubspot.jp/) を利用しています。

## 動作環境

Node.js 18 以上

## 環境変数の設定

ルート直下に`.env`ファイルを作成し、下記の情報を入力してください。

```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
HUBSPOT_PORTAL_ID=xxxxxxxx
HUBSPOT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

`MICROCMS_API_KEY`  
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICROCMS_SERVICE_DOMAIN`  
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

`BASE_URL`
デプロイ先の URL です。プロトコルから記載してください。

例）  
開発環境 → http://localhost:3000  
本番環境 → https://xxxxxxxx.vercel.app/ など

`HUBSPOT_PORTAL_ID`
HubSpot のアカウント ID

`HUBSPOT_FORM_ID`
HubSpot のフォームに割り当てられる ID

## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```

3. 開発環境へのアクセス  
   [http://localhost:3000](http://localhost:3000)にアクセス

## 解説ドキュメント

- [コンテンツ管理](https://github.com/microcmsio/nextjs-simple-corporate-site-template/blob/main/docs/content-management.md)
- [画面プレビューの設定](https://github.com/microcmsio/nextjs-simple-corporate-site-template/blob/main/docs/content-preview.md)
- [ディレクトリ構成](https://github.com/microcmsio/nextjs-simple-corporate-site-template/blob/main/docs/directory-structure.md)
- [HubSpot の準備](https://github.com/microcmsio/nextjs-simple-corporate-site-template/blob/main/docs/hubspot-setting.md)
- [Vercel へのデプロイ](https://github.com/microcmsio/nextjs-simple-corporate-site-template/blob/main/docs/vercel-deploy.md)
