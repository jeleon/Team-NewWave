		$(document).on('click', '.btn-reply', function(eve){	
			eve.preventDefault();
			$(this).parent().parent().siblings('.comment-footer').slideToggle();
			eve.stopImmediatePropagation();
			console.log($(this));
		});
		
		$(document).on('click', '.btn-send', function(eve){
			var targetObject = $(this).parent().parent().parent().parent().parent();
			//console.log(targetObject);
			var reply_text = $(this).parent().siblings('textarea').val();

			if($.trim(reply_text) == " " || $.trim(reply_text) == ""){
				alert("insert comment");
			} else {
			if($(targetObject).hasClass("comment-main-level"))
				{	
					if($(targetObject).siblings('.comments-list.reply-list')) {
						element_prepend = '<li> <div class="comment-avatar"><img alt="" src="http://dummyimage.com/60"></div><div class="comment-box"> <div class="comment-head"> <h6 class="comment-name"><a href="#">Lorena Rojero</a></h6> <span class="posted-time">Posted on DD-MM-YYYY HH:MM</span> <i class="fa fa-reply"></i> <i class="fa fa-heart"></i> </div> <div class="comment-content">'+ reply_text +' <div class="comment-open"> <a class="btn-reply"> <i class="fa fa-reply"></i> </a> </div> </div> <div class="comment-footer"> <div class="comment-form"> <textarea id="" name="" class="form-control"></textarea> <div class="pull-right send-button"> <a class="btn-send">send</a> </div> </div> </div> </div> </li>';
						 $(targetObject).siblings('.comments-list.reply-list').prepend(element_prepend);
					}
				}
			}	
		});