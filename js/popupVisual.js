window.mdc.autoInit();

// tabs
new mdc.tab.MDCTab(document.querySelector('.mdc-tab'));
new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

$(function() {

	$('.mdc-tab').click(function(event) {
		var id =  $(this).data('target');
		$('.panel').removeClass('active');
		$(id).addClass('active');
	});

	$('.item-grid .more-info').click(function(){			

		$(this).parents('.item-grid').addClass('open-info');
		$(this).parents('.item-grid').find('.extra-info').css('display', 'block').delay('40').animate({'opacity': 1});

		setTimeout(function(){
			$(this).parents('.item-grid').find('.extra-info > div').css('display', 'block').animate({'opacity': 1, 'top':0}, 200);	
		}, 40);
		
		// setTimeout(function(){
		// 	$('#tile1 form button').css('display', 'block').animate({'opacity': 1, 'top':0}, 200);
		// 	$('#tile1 .cx, #tile1 .cy').addClass('s1');
		// 	setTimeout(function(){$('#tile1 .cx, #tile1 .cy').addClass('s2');}, 100);
		// 	setTimeout(function(){$('#tile1 .cx, #tile1 .cy').addClass('s3');}, 200);	
		// }, 100);		
		
	});		
	
	
	// $('#tile1 .close').click(function(){			

	// 	$('#tile1 .cx, #tile1 .cy').removeClass('s1 s2 s3');	
		
	// 	$('#tile1 form button').animate({'opacity': 0, 'top':-20}, 120, function(){$(this).css('display', 'none')});		
	// 	setTimeout(function(){
	// 		$('#tile1 form div').animate({'opacity': 0, 'top':-20}, 120, function(){
	// 			$(this).css('display', 'none')				
	// 		});	
	// 		$('#tile1 div.settings-form').animate({'opacity':0}, 120, function(){$(this).hide();});		      

	// 		$('#tile1').removeClass('animate');
	// 	}, 50);								

	// });
});