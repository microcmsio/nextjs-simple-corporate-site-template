# HubSpot の準備

お問い合わせの送信先として HubSpot の準備をしましょう。

1. 下記の公式ドキュメントより HubSpot アカウントのセットアップを行う

   [HubSpot アカウントをセットアップする](https://knowledge.hubspot.com/ja/get-started/set-up-your-account)

2. フォームを作成する

   「マーケティング > リード情報の収集 > フォーム」より、問い合わせを受け取るためのフォームを用意します。

   2-1. フォームのタイプを選択する

      埋め込みフォームを選択します。
   
      <img width="1510" alt="hubspot-1" src="https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/6a9baf4c-2be7-441d-8947-895da429358e">

   2-2. テンプレートを選択

      お問い合わせを選択します。
   
      <img width="1512" alt="hubspot-2" src="https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/0e0d6c59-cc07-402c-b908-04037251dee8">

   2-3. フォームの項目を設定

      左のサイドバーにて「会社名」と検索し、コンタクトプロパティーの「会社名」フィールドを右側にドラック＆ドロップする。
   
      <img width="1510" alt="hubspot-3" src="https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/82b40d65-0ef5-4fc0-a1f8-01270d0aa2a6">

      下記の項目を設定できたら完了です。
   
      - 姓：lastname
      - 名：firstname
      - 会社名：company
      - E メール：email
      - メッセージ：message

      画面は次のようになります。
   
      <img width="1510" alt="hubspot-4" src="https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/cc8b8605-e077-4bc0-a6ba-3bb9f8500973">

4. portalId と formId をコピーし、環境変数に設定する

   「埋め込み」ボタンをクリックすると埋め込みコードの表示ができます。
   その中に記載されている`portalId`と`formId`の値をコピーし、環境変数に設定します。
   
   <img width="1508" alt="hubspot-5" src="https://github.com/microcmsio/nextjs-simple-corporate-site-template/assets/4659294/7586b11f-6520-4780-9a57-e5356ddc5229">
