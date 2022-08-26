    $(()=>{
      $('.clear > li').each(function(){
        $('.dot_con').append('<li><a href="#"></a></li>')
      });
      $('.clear > li:first-child, .clear > li:first-child > a').addClass('on');
      let len=$('.clear > li').length;
      let cnt=0;
      
      $('.clear > li').click(function(){
        clearInterval(intv);
        $('.clear>li>a').removeClass('on');
        $(this).children('a').addClass('on')

        $(this).index();
        let num=$(this).index(); // 0,1,2,3
        cnt = num;
        $('.clear>li').removeClass('on');
        $('.clear>li').eq(num).addClass('on');
        intv=setInterval(function(){
        nextAni()
      },5000);
      });

      let intv=setInterval(function(){
        nextAni()
      },5000);
      
      function nextAni(){
        $('.clear > li').removeClass('on');
        $('.dot_con>li').children('a').removeClass('on'); 
        cnt++;
        if(cnt>=len){
          cnt=0
        }
        $('.clear>li').eq(cnt).children('a').addClass('on');
        $('.clear>li').eq(cnt).addClass('on');
      }

      function prevAni(){
        $('.clear > li').removeClass('on');
        $('.dot_con>li').children('a').removeClass('on'); 
        cnt--;
        if(cnt<0){ //-1이면 3으로 cnt를 바꿔라
          cnt=len -1; //lenth==4
        }
        $('.clear>li').eq(cnt).addClass('on');
        $('.dot_con>li').eq(cnt).children('a').addClass('on');
      }

      $('.next_btn').click(function(){
        clearInterval(intv);
        nextAni();
        intv=setInterval(function(){
        nextAni()
      },5000);
      });

      $('.prev_btn').click(function(){
        clearInterval(intv);
        prevAni();
        intv=setInterval(function(){
        nextAni()
      },5000);
      });
    });