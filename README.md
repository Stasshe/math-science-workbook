自分と友達用の、自作問題掲示サイト

静的サイト、tailwindv3

md, katexを導入。

dbは、リポに直接置く。

./db/{author}/{問題のタイトル}/ans,question.md

の構造

誰でも見やすい感じで。
ダークモードとライトモードに対応
themecontext

mdプレビューについては、https://github.com/Stasshe/Pyxis-CodeCanvas/blob/main/src/components/Tab/MarkdownPreviewTab.tsx
,https://github.com/Stasshe/Pyxis-CodeCanvas/blob/main/src/app/markdown.cssと同じように。
mermaidは積まなくて良い。


ルートページ、
問題一覧



aiっぽくないデザインで、デザイナーが手がけたような、企業的な、見やすいもので。gsapを使うこと。アニメーションは多用しすぎず、見やすさを意識。