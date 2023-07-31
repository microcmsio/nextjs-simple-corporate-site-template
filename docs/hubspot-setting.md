# HubSpot の準備

お問い合わせの送信先として HubSpot の準備をしましょう。

1. 下記の公式ドキュメントより HubSpot アカウントのセットアップを行う

   [HubSpot アカウントをセットアップする](https://knowledge.hubspot.com/ja/get-started/set-up-your-account)

2. フォームを作成する

   「マーケティング > リード情報の収集 > フォーム」より、問い合わせを受け取るためのフォームを用意します。

   2-1. フォームのタイプを選択する

   埋め込みフォームを選択します。

   ![](public/hubspot-1.png)

   2-2. テンプレートを選択

   お問い合わせを選択します。

   ![](public/hubspot-2.png)

   2-3. フォームの項目を設定

   左のサイドバーにて「会社名」と検索し、コンタクトプロパティーの「会社名」フィールドを右側にドラック＆ドロップする。

   ![](public/hubspot-3.png)

   下記の項目を設定できたら完了です。

   - 姓：lastname
   - 名：firstname
   - 会社名：company
   - E メール：email
   - メッセージ：message

   ![](public/hubspot-4.png)

3. portalId と formId をコピーし、環境変数に設定する

   「埋め込み」ボタンをクリックすると埋め込みコードの表示ができます。
   その中に記載されている`portalId`と`formId`の値をコピーし、環境変数に設定します。

   ![](public/hubspot-5.png)
