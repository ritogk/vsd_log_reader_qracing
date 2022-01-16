# なにこれ？
Qracingで出力したcsvログをvsd for gpsで読み取るためのプラグインです。

# 環境
aviutl 1.0.0<br>
Qracing 3.99.400


# 使い方
①Qracing側からcsvログを出力<br>
「ファイル」→「トラックのエクスポート」→「MS Excelファイル(CSV形式)」<br>
<br>
②qracing.jsを以下におく
```
aviutl100\vsd_plugins\_log_reader\qracing.js
```

③vsd for gps側からログを開く。<br>
ファイル選択時に「qracing_csv(*.csv)」を指定する
<img src="https://user-images.githubusercontent.com/72111956/149644111-21b1a6cf-6dc8-47f1-ae47-fa31d2c7b1e7.png" width=600>

あとはご自由に調整してください～<br>
<img src="https://user-images.githubusercontent.com/72111956/149644112-01dc9f77-0237-4258-88b8-51f47efe8774.png" width=600>

# バグ
gセンサーの表示が狂ってます(誰か直して)<br>






