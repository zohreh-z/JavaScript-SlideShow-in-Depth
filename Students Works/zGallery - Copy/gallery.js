Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}

$(function(){
	var pics = $('div.gallery div.bg-div'),
		due = 250,
		delay = 100,
		wd = -270,
		hg=50,
		topimg=0,
		leftimg=0;
		
		pics.each(function() {
			var that = $(this);
			setTimeout(function(){
				wd+=270;
				if(wd>600){
					hg += 200;
					wd = 0;
				}
  				that.animate({
					left:wd,					
					top:hg,
				},due);   
	
			},delay+=due);
        });
		
		pics.mouseover(function(){
			pics.css({opacity:0.5},400);
			//topimg = $(this).top;
			$(this).animate({
				opacity:1,
				'z-index':'2',
				rotate:'360deg',
				scale:2,
//				top:250,
				},400);
		});
		
		pics.mouseout(function(){
			$(this).animate({
				'z-index':'1',
				rotate:'0deg',
				scale:1,
//				top:topimg,
			},200);
			pics.css({opacity:1},400);
		});
})
