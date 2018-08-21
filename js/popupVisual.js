window.mdc.autoInit();

// tabs
var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#popup-menu'));
var panels = document.querySelector('.panels');

dynamicTabBar.tabs.forEach(function(tab) {
	tab.preventDefaultOnClick = true;
});

function updatePanel(index) {
	var activePanel = panels.querySelector('.panel.active');
	if (activePanel) {
		activePanel.classList.remove('active');
	}
	var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
	if (newActivePanel) {
		newActivePanel.classList.add('active');
	}
}

dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
	var nthChildIndex = tabs.activeTabIndex;
	updatePanel(nthChildIndex);
});

$(function() {

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