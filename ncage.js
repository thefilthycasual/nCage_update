(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg',
			'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
			'https://media.giphy.com/media/Vg0JstydL8HCg/giphy-downsized.gif',
			'https://media.giphy.com/media/PHHtPDk6peKyI/giphy.gif',
			'http://topnews.in/files/Nicolas-Cage_0.jpg',
			'https://image.cnbcfm.com/api/v1/image/106069731-1565297100509gettyimages-1052370114.jpeg?v=1565297156&w=929&h=523&vtcrop=y',
			'https://filmfare.wwmindia.com/content/2023/nov/dreamscenarionicolascage11700562859.jpg',
			'http://cache2.artprintimages.com/LRG/10/1062/Y4UL000Z.jpg',
			'https://media.giphy.com/media/jL43fSL8Zh5Vm/giphy-downsized.gif',
			'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/03/Nic-Cage-lowers-his-red-sunglasses-by-the-water-in-The-Unbearable-Weight-of-Massive-Talent-1.jpg',
			'https://www.phillyburbs.com/gcdn/authoring/2012/10/11/NBCC/ghows-PA-943c59e6-a874-4776-8d5c-e0286cb2fe57-ff3513d5.jpeg?crop=399,226,x0,y85&width=399&height=199&format=pjpg&auto=webp',
			'http://resources2.news.com.au/images/2009/11/04/1225794/400950-nicolas-cage.jpg',
			'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article-content/mLOkQQXQFyGH6ZmJqGjis0gyse7qqV.jpg',
			'https://media.tenor.com/BmX9qd2cElwAAAAC/nicholas-cage-why.gif',
			'https://media.tenor.com/fTU-koga4-0AAAAC/crazy-eyes-nicolas-cage.gif',
			'http://starsmedia.ign.com/stars/image/article/908/908074/nicolas-cage-20080905025038648-000.jpg',
			'https://i.pinimg.com/originals/9b/89/bb/9b89bb0c1198834eb2ae7639c7375131.jpg',
			'https://media.giphy.com/media/jL43fSL8Zh5Vm/giphy-downsized.gif',
			'https://i.pinimg.com/736x/97/71/37/977137ba0ec832d4ab6740fbe8dd3083.jpg',
			'http://images.contactmusic.com/newsimages/nicolas_cage_552048.jpg',
			'https://www.filmtipps.at/kritiken/Massive_Talent/thumbs/Massive_Talent_2.jpg',
			'http://24.media.tumblr.com/e68455822f14c29d43bacbc19f15ed36/tumblr_mr1kquuOvD1rimb2bo1_400.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsWm8rICZc-JhAaVdGCqoAnu10nuZY8TbY6atlFEfXkLf-8fRfsGXBZfkmQ1pGOUFiXE&usqp=CAU',
			'https://imgix.ranker.com/list_img_v2/17294/1857294/original/best-nicolas-cage-freak-out-scenes?w=817&h=427&fm=jpg&q=50&fit=crop',
			'https://i.pinimg.com/736x/a2/50/76/a250763d20fdbf9527a6114519d3acb0.jpg',
			'https://2.bp.blogspot.com/-6z8cpZoXa3w/TfDYvHc_SqI/AAAAAAAACKI/N0Q8dq6Zgws/s1600/Nicholas+Cage+Leaving+Las+Vegas.PNG',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
