window.onload=function(){

// 右侧固定定位动效
  var position1=getClass("gd-position")[0]
    var fly=position1.getElementsByTagName("p")
    var box35=getClass("box35")
    var box100=getClass("box100")[0]
    for (var i = 0; i < fly.length; i++) {
        box35[i].index=i
        box35[i].onmouseover=function(){
            this.flag=true;
            var aa=this
            aa.style.backgroundColor="red"
            setTimeout(function(){
                if(aa.flag){
                   fly[aa.index].style.zIndex=99 
                   fly[aa.index].style.display="block"
                   animate(fly[aa.index],{right:35},200) 
                }
            },200)
            
        }
        box35[i].onmouseout=function(){
            this.flag=false
            this.style.backgroundColor="#000"            
            animate(fly[this.index],{right:80},200,function(){
               this.style.display="none" 
            })
        }
    };
    box100.onmouseover=function(){
        this.style.backgroundColor="red"
    }
    box100.onmouseout=function(){
        this.style.backgroundColor="#000"
    }

    // 点击top返回最顶端
    var toTop=getLast(position1)
    toTop.onclick=function(){
        var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
        animate(obj,{scrollTop:0},500)
    }




  
   //下拉导航  
    var yiji=$(".daohyou");
      var erji=$(".erji");
        for (var i = 0; i < yiji.length; i++){
          yiji[i].index=i;
          hover(yiji[i],function(){
             var lis=$("div",erji[this.index]);
             var h=lis[0].offsetHeight;
             erji[this.index].style.height=0+"px";
             animate(erji[this.index],{height:lis.length*h},600,Tween.Linear);
            },function(){
             animate(erji[this.index],{height:0},600,Tween.Linear);
            }
          )
        }

 //下拉导航最后一个
  var yijis=$(".daohyou-4")[0];
      var erjis=$(".erjiwzdh")[0];

      hover(yijis,function(){
        erjis.style.display="block";
      },function(){
        erjis.style.display="none";
      });

     //窗口浮动
/* function g(){
    var box=$(".boxbbhh")[0];
    var speedx=6,speedy=6;
    var  close=$(".close")[0];
    var maxTop=document.documentElement.clientHeight-box.offsetHeight;
    var maxLeft=document.documentElement.clientWidth-box.offsetWidth;
    function move(){
      var ol=box.offsetLeft;
      var ot=box.offsetTop;
      var left=ol+speedx;
      var top=ot+speedy;
      if(top>=maxTop){
        speedy*=-1;
      }
      if(left>=maxLeft){
        speedx*=-1;
      }
      if(top<0){
        speedy*=-1;
      }
      if(left<0){
        speedx*=-1;
      }
      box.style.left=left+"px";
      box.style.top=top+"px";           

    }
    var t=setInterval(move,50)
    box.onmouseover=function(){
      clearInterval(t)
    }
    box.onmouseout=function(){
      t=setInterval(move,50)
    }
    close.onclick=function(){
    	box.style.display="none";
    }
  }
g();*/


 //搜索

 
    /*var tex=$("#tex");
        tex.onfocus=function(){
           //表单获得焦点
           if(tex.value=="送给孩子的冬日温暖"){
            tex.value=""};
        };
        tex.onblur=function(){
          //表单失去焦点
          if(tex.value==""){
          tex.value="送给孩子的冬日温暖";
          }
        }*/
  //顶部天猫搜索框   HTML俩个ID,与下面的各自获取设置      
 var tex=$("#tex");
	tex.onfocus=function(){//点击这个文本框的时候(表单获得焦点事件)
		if(tex.value=="送给孩子的冬日温暖"){//如果文本框里边是默认值，就把它清空
			tex.value=""
		}		
	}
	tex.onblur=function(){//点击这个文本框外边的时候(表单失去焦点事件)
		if(tex.value){//如果文本框里边有值，不做操作

		}else{//如果文本框是空的，就恢复默认值
			tex.value="送给孩子的冬日温暖"
		}
	}
  

//天猫搜索框
  var tex1=$("#t1x");
  tex1.onfocus=function(){//点击这个文本框的时候(表单获得焦点事件)
    if(tex1.value=="送给孩子的冬日温暖"){//如果文本框里边是默认值，就把它清空
      tex1.value=""
    }   
  }
  tex1.onblur=function(){//点击这个文本框外边的时候(表单失去焦点事件)
    if(tex1.value){//如果文本框里边有值，不做操作

    }else{//如果文本框是空的，就恢复默认值
      tex1.value="送给孩子的冬日温暖"
    }
  }


	//选显卡
/*	var sc=getClass("sc-5");
	var zc=getClass("zhong")
	for(var i=0;i<sc.length;i++){
		sc[i].index=i;//index保存相应对象的i的值
		sc[i].onclick=function(){
			//alert(this.index);
			for(var j=0;j<zc.length;j++){
				zc[j].style.display="none";
				sc[j].style.fontWeight="normal";
				sc[j].style.textDecoration="none";
			}
			zc[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
		}
	}*/

   
        var onearr=[];
        var twoarr=[];
        var threearr=[];
        var fourarr=[];
        var con=$(".con");
        var title=$(".sc-5");
      
        for(var i=0;i<54;i++){
          onearr.push("img/mingpai"+i+".jpg");
          twoarr.push("img/mingpai"+i+".jpg");
          threearr.push("img/mingpai"+i+".jpg");
          fourarr.push("img/mingpai"+i+".jpg"); 
        }
        function randomImg(arr){
          var newarr=[];

          for(var i=0;i<24;i++){
            newarr.push(arr[parseInt(Math.random()*54)])
          }
          return newarr;
        }
         var arr=[onearr,twoarr,threearr,fourarr]
        function show(num){
          var imgarr=randomImg(arr[num]);
          for(var i=0;i<imgarr.length;i++){
            var divs=document.createElement("div");
            divs.style.cssText="width:136px;height:80px;border:1px solid white;float:left;font-size:0px;background:pink;position:relative";
            var as=document.createElement("a");
            as.href="#";
              divs.appendChild(as);
            var imgs=document.createElement("img");
            imgs.src=imgarr[i];
            as.appendChild(imgs);
            imgs.style.cssText="width:136px;height:80px;"
          
            con[num].appendChild(divs);
          }
        }
        show(0);

        for(var i=0;i<title.length;i++){
          title[i].index=i;
          title[i].flag=true;
          title[0].flag=false;
          var now=0;
          title[i].onclick=function(){
           
            for(var j=0;j<con.length;j++){
              con[j].style.display="none";
            }
            con[this.index].style.display="block";
            if(this.flag){
              show(this.index);
              this.flag=false;
            }
          }
        }
        
        var btn=$(".sc5-5")[0]; 
        btn.onclick=function(){
          con[now].innerHTML="";
          show(now);
        }
        
        
     


   

   //红心浮动
     function hongxin(){
     var a=getClass("z-1");
     var b=getClass("xin");
     for (var i=0;i<a.length;i++){
        a[i].index=i;
        a[i].onmouseover=function(){
          b[this.index].style.display="block";
        }
        a[i].onmouseout=function(){
          b[this.index].style.display="none";
        }
     }
  }
  hongxin();

  //轮播
   function ban5(){
    //     	
	      	var imgs=$(".ban1");
	      	var yuan=$(".t-2");
	      	var num=1;
	      	var ajief=$(".banbj")[0];
          var bgcolor=["#DBDBDB","#2B2F71","#E8E8E8","#DBDBDB"];
	      	function move(){
	      		if(num==4){
	      			num=0;
	      		}
	      		for(var i=0;i<imgs.length;i++){
	      			imgs[i].style.zIndex=2;
	      			yuan[i].style.background="blue";
	      		}
	      	  imgs[num].style.zIndex=3;
	      	  yuan[num].style.background="#ff6700";
            ajief.style.background=bgcolor[num];
	          num++;
	        }

	      	var t=setInterval(move,2000);
	        for(var i=0;i<yuan.length;i++){
	       	  	yuan[i].index=i;
     		yuan[i].onmouseover=function(){//滑上事件
     			clearInterval(t);//停止轮播
     			for(var j=0;j<imgs.length;j++){
     				imgs[j].style.zIndex=2;
     				yuan[j].style.background="blue";
     			}
     			imgs[this.index].style.zIndex=3;
          ajief.style.background=bgcolor[this.index];
     			yuan[this.index].style.background="#ff6700";
     		}	
	        yuan[i].onmouseout=function(){
	        num=this.index+1
	        t=setInterval(move,1000);
             }
	      }	
	    }
	      	
   ban5();



//楼层跳转
 function e(){
        var search=$(".dxfcbj")[0];

      var flag=true;
      var flag1=true;//0--440  440-3000
        var floors=$(".f1");

      var button=$(".button")[0];
        var btn=$("div",button);

        //alert(floors[1].offsetTop)
    // alert(btn.length)
   //按钮控制滚动条
        for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
          }
        }

      window.onscroll=function(){


        //搜索框的显示与隐藏
        var scrollT=getScrollT();
        if(scrollT>=440){
          if(flag){//为了保证页面往下拉时只有一个animate函数执行
            animate(search,{top:0},500);
            flag=false;
            flag1=true;
          }           
        }else{
                if(flag1){
                  animate(search,{top:-50});
                  flag1=false;
                  flag=true;
                }         
        }


        //楼层跳转
          if(scrollT>=1000){
            button.style.display="block";
          }else{
            button.style.display="none";
          }
     //滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t<scrollT+100){//如果scrollTop大于当前楼层的top
                //alert(11111)
                for(var j=0;j<btn.length;j++){
                  btn[j].style.color="black";
                }
                btn[i].style.color="red";
              }
              //floors[i].index=i;
            }
       }
   }
 e();

 /*function m(){
	        var btnbox=$(".button")[0];
	        var search=$(".dxfc")[0];
        	var btns=$("div",btnbox);
        	var floors=$(".f1");
        	var flag=true;
     	    var flag1=true;
        	if(document.documentElement.scrollTop==0){
        		document.documentElement.scrollTop=1
        	}
        	for (var i = 0; i < btns.length; i++) {
        		btns[i].index=i;
        		btns[i].onclick=function(){
        			var top=floors[this.index].offsetTop;
        			var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
        			animate(obj,{scrollTop:top-52},1000)
        		}
        	}
             window.onscroll=function(){
             	var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
             	var aa=obj.scrollTop;
             	var scrollT=getScrollT();            	
     		if(scrollT>=100){
     			if(flag){//为了保证页面往下拉时只有一个animate函数执行
     				animate(search,{top:0},500);
     				flag=false;
     				flag1=true;
     			}     			
     		}else{
                if(flag1){
                	animate(search,{top:-50});
                	flag1=false;
                	flag=true;
                }	   			
     		}
            if(aa>1150){
            	btnbox.style.display="block";
            	animate(btnbox,{opacity:1},1000)
            }
            if(aa<1150){
                  btnbox.style.display="none";
                  animate(btnbox,{opacity:0},10)
            };
        }
}
m();*/


   //左移
     var move=$(".f1you11")[0];
	 var moveimg=$("img",move);  	
	 for(var i=0;i<moveimg.length;i++){
	 	moveimg[i].index=i;
	 	moveimg[i].onmouseover=function(){
	       moveimg[this.index].style.cssText="position:relative;left:-3px";
	 	}
	 	moveimg[i].onmouseout=function(){
	        moveimg[this.index].style.cssText="position:relative;left:0px";
	 	}

	 }

//左轮播
   function f(num){ 
      var bannerbox=$(".bannerbox")[num];
      var left=$(".leftbtn")[num];
      var right=$(".rightbtn")[num];
      var flg1=true;
      function aa(){
        if(flg1==true){
          flg1=false;
        animate(bannerbox,{left:-190},1000,function(){
          var fir=getFirst(this);
          this.appendChild(fir);
          this.style.left=0;
          flg1=true;
        })
        }
      }
        function bb(){
          var last=getLast(bannerbox);
            var first=getFirst(bannerbox);
          bannerbox.insertBefore(last,first);
            bannerbox.style.left="-190px";
            animate(bannerbox,{left:0},1000)
         }
      var t=setInterval(aa,3000)

      left.onmouseover=right.onmouseover=function(){
        clearInterval(t);
      }
      left.onmouseout=right.onmouseout=function(){
        t=setInterval(aa,3000);
      }
      right.onclick=function(){
        aa();
      }
      left.onclick=function(){
        bb();
      }


   }
  for(var i=0;i<12;i++){
    f(i);
  }


 /*按需加载*/
         function dfji(){
         var floor=$(".f1zhong"); 

            var ch=document.documentElement.clientHeight;
           
              var scrollT=getScrollT();
               for(var i=0;i<floor.length;i++){
                var imgs=$("img",floor[i]);
              if(floor[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度,如果小于页面内容超出浏览器的距离+浏览器的距离时
                    //获取当前楼层所有图片
                    for(var j=0;j<imgs.length;j++){
                      imgs[j].src=imgs[j].getAttribute("aa")//每一个图片的aa属性的赋值给src属性
                    }
              }
            }
        }
        window.addEvent(window,"scroll",dfji);
        
 //banner 尤华图     
function k(){
   var daos=getClass("ten");
    var fus=getClass("youlatua");
    for (var i = 0; i < daos.length; i++) {
      daos[i].index=i;
      daos[i].onmouseover=function(){
        this.flag=true;
        var aa=this;
        setTimeout(function(){
        if(aa.flag){  
          fus[aa.index].style.display="block";
          animate(fus[aa.index],{left:190,opacity:1},200)
         }
           },100)
        }

      daos[i].onmouseout=function(){
        this.flag=false;
       
        animate(fus[this.index],{left:170,opacity:1},300,function(){
          this.style.display="none";
        })
      }
    }
    
    
    }
k();


     
   
}


