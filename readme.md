a-blog cms theme "echo_zero"
====================================

- - - - - - - - - - - - - - - - - - -

version 1.2.0

Author: Seiko Kuchida  
http://webbingstudio.com/

Copyright 2017 WebbingStudio

- - - - - - - - - - - - - - - - - - -

## a-blog cms バージョン2.7.2以降でのインポートについて

インポートの仕様変更により、テストページ中の以下のコンテンツが崩れる現象を確認しています。本来の動作には影響ありません。

- 「テーブル」ユニットではなく「自由入力」ユニットで作成された表組
- 「テキスト」ユニットの「引用」


### 「ブログ」画面からのインポートについて

バージョン2.7.0以降では、管理ページ「ブログ」画面からのインポート機能が実装されました。

しかし、以下の理由から、本テーマでは対応の予定はありません。旧来の「メンテナンスメニュー」からのインポートを、引き続きご利用ください。

- 「フォーム」に対応していない
- 既存アーカイブとの重複を防ぐために、パスを変更している画像がリンク切れとなる

## a-blog cms バージョン2.7.0での不具合について

バージョン2.7.2で修正されました。下記記事を参照ください。

[http://webbingstudio.com/weblog/cms/entry-832.html](http://webbingstudio.com/weblog/cms/entry-832.html)

- - - - - - - - - - - - - - - - - - -

## echo_zeroとは

「echo_zero」は、a-blog cms専用のテーマです。a-blog cmsの多彩な機能のうち、業務で特に採用される機能のみを選んで実装しています。

デモサイト  
[http://cms-skill.com/echo_zero_demo/](http://cms-skill.com/echo_zero_demo/)

echoシリーズ ポータルサイト  
[http://cms-skill.com/echo/](http://cms-skill.com/echo/)

## ライセンス

非商用・検証目的の場合は無償でご利用いただけます。商用利用はライセンスをご購入ください（1ドメイン3,000円＋日本国消費税）。  
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

## 補足資料

- [解説資料（デモサイト内）](http://cms-skill.com/echo_zero_demo/docs/)
- [モジュール関連のテンプレートについて](https://github.com/webbingstudio/acms_theme_echo_zero/blob/master/readme_include.md)