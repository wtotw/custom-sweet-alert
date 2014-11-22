custom-sweet-alert
==================

sweet alertで長文を扱うための変更

サイズ調整をもっとスマートに行いたい。


$text.innerHTML = escapeHtml(params.text ||'').split("\n").join("<br>");
を
$text.innerHTML = (params.text || '').split("\n").join("<br>");
に変更すればタグも使用可能
