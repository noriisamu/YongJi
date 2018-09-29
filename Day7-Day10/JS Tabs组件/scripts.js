function Tab(tabId) {
	this.init(tabId);
}

Tab.prototype.init = function(tabId) {
	var tabWrap = document.querySelector(tabId);
	this.tabs = tabWrap.querySelectorAll('.tab-head li');
	this.panels = tabWrap.querySelectorAll('.tab-panel-wrap .tab-panel');
	//记录上一次选择的序号
	this.current = 0;
 
	this.active(1);
	this.event();
};
 
Tab.prototype.active = function(index) {
	if (index !== this.current) {
		//显示当前的panepl
		this.tabs[index].classList.add('active');
		this.panels[index].classList.add('active');
		//结束上一次的选择
		this.tabs[this.current].classList.remove('active');
		this.panels[this.current].classList.remove('active');
		//保存
		this.current = index;
	}
};
 
Tab.prototype.event = function() {
	//保存当前this
	var tis = this;
	var len = this.tabs.length;
 
	for (let i = 0; i < len; i++) {
		//给tab添加监听
		this.tabs[i].addEventListener ('click', function (event) {
			tis.active(i);
		}, false);
	}
 
};
 
var tab1 = new Tab('#tab1');
tab1.active(1);

var tab2 = new Tab('#tab2');
tab2.active(1);

var tab3 = new Tab('#tab3');
tab2.active(1);
