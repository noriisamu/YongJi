//对象级别插件开发，传递jQuery实参，立即调用执行；
!function($){
	//定义jQuery对象Tab方法
	var Tab = function(ele){
		this.ele = ele;
		//jQuery进行DOM选择
		options = $('.tab');
		//默认配置，方便修改和增加可扩展性
		this.defaluts = {
			tabLi:'.tab-head li',
			eventType:"click",
			active:'active',
			tabPanel:'.tab-panel'
		};	
		//点击事件
		this.active();
	};

	Tab.prototype  = {
		"active":function(){
			ele = this.ele;
			//知识点:添加的事件处理程序在其依附的元素的作用域中运行
			//保存当前this的值，jQuery中on()方法this指向会产生变换，所以先把this的执行环境保存起来
			var save = this;
			//将this.defaluts的属性和方法传递给options
			options = this.defaluts;
			//给tab_li标签添加监听事件
				ele.find(options.tabLi).on(options.eventType, function(){
					// console.log(this);
					$(this).addClass(options.active).siblings().removeClass(options.active);
					var index = $(this).index();
					//如果刚才没有保存this为save，那么这里的this就会指向li标签，从而找不到panpel
					save.ele.find(options.tabPanel).eq(index).show().siblings().hide();
				})
			}
	}

	//$.fn.extend用于给jQuery对象添加方法，对jQuery.prototype进行扩展，为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
	//此部分完成注册成jQuery方法
	$.fn.extend({
		tab:function(){
			this.each(function(){
				new Tab($(this))
			})
			return this;
		}
	})
	}(jQuery);
