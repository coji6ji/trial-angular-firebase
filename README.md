# README

Angular の技術的キャッチアップを目的とした簡単なペット育成CRUDアプリケーションです.

## 機能

- 掲示板
  - 一覧表示
    - 掲示板一覧を表示します
    - ページネーション
  - 新規作成
    - 掲示板を作成します
  - 編集
    - 掲示板を削除します
  - 削除
    - 掲示板を削除します
  - タグ検索
    - 掲示板作成時に付けたタグで検索します
- 掲示板コメント
  - 投稿
    - 掲示板にコメントを投稿します
  - 削除
    - 投稿したコメントを削除します
- ユーザー認証
  - ユーザー認証を行います
    - ユーザー登録
    - ログイン
    - ログアウト

## 技術スタック

- Server
  - Ruby
    - Ruby on Rails v5
    - gem
      - pry-byebug
      - rails-i18n
      - bootstrap
      - kaminari (pagenation)
      - rails-flog
      - annotate
    - Test
      - RSpec
  - MySQL
- Front
  - html
    - erb
  - css
    - scss
    - Bootstrap
  - js
    - JQuery

## 学習内容

- Railsについて
  - 変数定義などの基本構文
  - resources を使用したルーティング
  - pry-byebug を使用したデバック
  - REST API の作成方法
  - RSpec を使用したユニットテスト
  - seed を使用したテストデータの作成
  - データの validation 方法
