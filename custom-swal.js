$(function() {
	$('button').click(function() {
		// スタイルの調整
		$('.sweet-alert').css({
			'max-height':parseInt($(window).height()*0.8)
		});

		// sweet alertの<p>タグの高さを算出
		var swalHeight = parseInt($('.sweet-alert').height())
						- parseInt($('.sweet-alert').css('padding-top'))
						- parseInt($('.sweet-alert').css('padding-bottom'));
		var h2Height = parseInt($('.sweet-alert h2').css('line-height'))
						+ parseInt($('.sweet-alert h2').css('margin-top'))
						+ parseInt($('.sweet-alert h2').css('margin-bottom'));
		var btnHeight = parseInt($('.sweet-alert button').css('font-size'))
						+ parseInt($('.sweet-alert button').css('margin-top'))
						+ parseInt($('.sweet-alert button').css('margin-bottom'))
						+ parseInt($('.sweet-alert button').css('padding-top'))
						+ parseInt($('.sweet-alert button').css('padding-bottom'));
		var pMaxHeight = swalHeight - h2Height - btnHeight;

		// <p>タグのスタイルを設定
		$('.sweet-alert p').css({
			'max-height':pMaxHeight,
			'overflow-y':'auto',
			'text-align':'left'
		});

		swal({
			title: title,
			text: longText
		});

		// sweet alertの位置決め
		var marginTop = -1 * swalHeight / 2 - parseInt($('.sweet-alert').css('padding-top'));

		$('.sweet-alert').css({
			'margin-top':marginTop
		});
	});
});