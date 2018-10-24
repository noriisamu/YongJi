window.onload=function(){
    function btnGroup(btnGroupId) {
        this.entry(btnGroupId);       //调用原型链上的入口方法
    }
    //定义Tab原型链上的入口方法
    btnGroup.prototype.entry = function(btnGroupId) {
        //JS获取各个DOM
        var btn = document.querySelector(btnGroupId);
        this.btnGroup = btn.querySelectorAll('.insurance-icon-div div');
    
        //preIndex是为了与当前的index相比，记录上一次的选择，用于去除效果
        this.preIndex = 1;
        //调用Tab原型链上切换的方法，并且设置默认显示第几个面板
        this.active(0);
        //调用Tab原型链上监听事件方法
        this.event();
    }
    //定义Tab原型链上切换的方法,index表示当前显示的是第几个面板
    btnGroup.prototype.active = function(index) {
        if(index !== this.preIndex){
            //为当前的点击事件添加样式，产生切换效果
            this.btnGroup[index].classList.add('active');
            //将上一次的选择去除样式,preIndex在这里产生了效果,this.preIndex是为了引用当前preIndex值。采用这种方法可以避免循环遍历删除带来的性能问题
            this.btnGroup[this.preIndex].classList.remove('active');
    
            //将本次的index赋值给preIndex，以便下次点击时清除效果
            this.preIndex = index ;
        }
    }
    //定义Tab原型链上监听事件方法
    btnGroup.prototype.event = function() {
        //将this的值用变量保存起来，因为在addEventListener中this指向会产生变换，所以先把this的执行环境保存起来
        var save = this;
        var len = this.btnGroup.length;
        //let声明的变量由于存在块级作用域，除了该块域外其他地方无效；
        //而如果用var的话，for循环代码块不具备块级作用域，因此i认为是全局变量，直接放在全局变量中;因此在监听事件执行环境中不存在变量i，所以此时会沿着作用域链向上寻找，即进入了全局作用域中寻找变量i，最终会达到i的最大值，因此实现不了效果
        for(let i=0;i<len;i++){
            //添加监听事件
            this.btnGroup[i].addEventListener('click',function(){
                //这里save的作用就体现了出来，addEventListener中this指向的是调用addEventListener的对象，因此需要提前保存this的值
                save.active(i);
            },false);
        }
    };
    //声明并且将对象实例化，会自动调用里面的构造函数
    var tab1 = new btnGroup('#btn-group-1');
    var tab2 = new btnGroup('#btn-group-2');
    // var tab3 = new btnGroup('#btn-group-3');
    var tab4 = new btnGroup('#btn-group-4');
    var tab5 = new btnGroup('#btn-group-5');


}