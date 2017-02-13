a-blog cms theme "echo_zero"
====================================

- - - - - - - - - - - - - - - - - - -

version 1.1.0

Author: Seiko Kuchida  
http://webbingstudio.com/

Copyright 2017 WebbingStudio

- - - - - - - - - - - - - - - - - - -

## echo_zeroとは

「echo_zero」は、a-blog cms専用のテーマです。a-blog cmsの多彩な機能のうち、業務で特に採用される機能のみを選んで実装しています。

既存フレームワークの採用が困難なデザイン重視のサイトや、動作検証にご利用ください。

echoシリーズ ポータルサイト  
[http://cms-skill.com/echo/](http://cms-skill.com/echo/)

デモサイト（準備中）  
[http://cms-skill.com/echo_zero_demo/](http://cms-skill.com/echo_zero_demo/)

## ライセンス

非商用・検証目的の場合は無償でご利用いただけます。商用利用はライセンスをご購入ください（1ドメイン3,000円）。  
ドネーションも歓迎いたします。開発・修正のモチベーションにつながります。

購入とドネーションは、下記URLからお願いいたします。

[http://store.cms-skill.com/](http://store.cms-skill.com/)

当リポジトリで公開されているファイルに関しては、MITライセンスを適用します。

[The MIT License (MIT) | Open Source Initiative](https://opensource.org/licenses/MIT)

下記のJavaScriptライブラリに依存しています。これらもMITライセンスとなります。  
この場を借りて、すばらしいライブラリを提供してくださった開発者の皆様に感謝申し上げます。

- [slick](http://kenwheeler.github.io/slick/)
- [hiraku.js](https://appleple.github.io/hiraku/)
- [Rem-unit-polyfill by chuckcarpenter](http://chuckcarpenter.github.io/REM-unit-polyfill/)

## echo_zeroの機能

このテーマに実装している機能一覧です。

### 外観

- 1カラム・2カラムレイアウトに対応
- メインビジュアル(slick.js)
- オフキャンバスメニュー(hiraku.js)
- 各モジュール（他CMSでの『ウィジェット』）のヘッダ・フッタを「モジュール設定」から編集可能
- カテゴリータイトルの外観を管理ページ「カテゴリー」から編集可能
- エントリーごとにエントリータイトルの非表示が可能
- Twitter・Facebook・LINEボタン

### 内部

- 各ブログのトップページと、各エントリーのMETAを管理ページ「ブログ」から設定可能
- 親ブログの設定を子ブログに継承可能
- カスタムフィールド名をa-blog cms公式テーマ（Site・Simple）と互換
- OGP・Twitterカード対応
- トピックパスのschema.org対応
- 各モジュールの包括セクションのクラス・ヘッダの見出しレベルを「モジュール設定」から編集可能
- 各ブログ・エントリーのhead要素を管理ページ「ブログ」から追加可能
- お問い合わせフォームの自動返信メールの署名を管理ページ「ブログ」から変更可能

### 管理画面・投稿画面

- a-blog cms公式の管理ボックスを改良
- [投稿フォームなどの既存CSSとの衝突を修正するための追加CSS](https://gist.github.com/webbingstudio/ca0561a8881d694715165dd66ff848f3)を実装
- エントリーのピックアップをa-blog cms公式テーマ（Site・Simple）と互換
- アイキャッチ画像・OGP画像を個別に指定可能
- タブレット・高解像度ディスプレイの閲覧を考慮したユニットグループ
- カスタムユニット「ボタン」「余白」「画像＋テキスト」の追加
- 投稿画面の各項目（カテゴリー・タグ等）の表示・非表示を管理ページ「ブログ」から変更可能

### 開発関連

- SaSS・Gulp対応
- a-blog cms独特の仕様を考慮したディレクトリ・インクルード設計
- [モジュール関連のテンプレートの解説ファイル](https://github.com/webbingstudio/acms_theme_echo_zero/blob/49f0b76e9bac253220ab6eaaa5ed69b67fd3e653/dist/themes/echo_zero/include/readme.md)を添付
- ページネーションをモジュールの外に配置可能

## 上位版・拡張について

「echo_zero」は、使用頻度が少ない機能、制作現場では重視されない要素に対応していません。今後追加予定の機能は以下の通りです。

### 上位版で対応予定の機能

- モジュールのデザインパターンを追加
- レイアウト機能
- モジュールユニット
- 関連エントリー
- 動的フォーム
- 非同期のフォームのバリデート
- 非同期のページ読み込み（ポストインクルード）
- PDFの導入マニュアル
- 完全なCSSフレームワーク
- [Hologram | Generate a Styleguide right in your CSS](https://trulia.github.io/hologram/)の連携

### 拡張として販売予定の機能

- イベント情報
- ギャラリー
- スケジュールカレンダー

## 補足資料

- [モジュール関連のテンプレートについて](./blob/master/readme_include.md)