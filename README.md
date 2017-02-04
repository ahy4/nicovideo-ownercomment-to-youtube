# ニコニコの投コメをYouTubeの字幕形式に変換するやつ

ニコニコの投コメを.sbvに変換します

変換前

```
1.95:shita green2:前のキル練習動画でめっちゃお叱りを受けたのでまともに立ち回るよ
10.72:shita green2:両者だいたい射程短い
34.25:shita green2:持つか
41.07:shita green2:あと一人そこにいたんか
```

変換後

```srt
1
00:00:01,950 --> 00:00:04,950
前のキル練習動画でめっちゃお叱りを受けたのでまともに立ち回るよ

2
00:00:10,720 --> 00:00:13,720
両者だいたい射程短い

3
00:00:34,250 --> 00:00:37,250
持つか

4
00:00:41,70 --> 00:00:44,70
あと一人そこにいたんか
```

## 使い方

新しめのnode入れといてくれ

1. clone
2. `$ npm install`
3. srcに変換したい投コメのテキストファイルを入れる。拡張子はなんでもいい
4. `$ gulp`
5. `./dist` に `.srt` ファイルが生成されてるはず

## .srtファイルの活用

YouTubeの字幕機能にアップすればいいと思うよ。字幕になる。

又は、ffmpegで動画に字幕を焼くことも出来る。[ここ](http://www.storange.jp/2015/12/ffmpeg.html)や[ここ](http://maaash.jp/2015/01/ffmpeg-hardsub/)を見よ

`$ brew install ffmpeg --with-libass` 又は`reinstall`して、

`$ ffmpeg -i input.mp4 -vf subtitles=subtitle.srt out.mp4`

で結合できる
