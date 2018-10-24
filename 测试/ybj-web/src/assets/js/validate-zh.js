$().ready(function() {
    // 在键盘按下并释放及提交后验证提交表单
      $("#claimApply-form-1").validate({
        rules: {
        remittee: "required",
        depositBank: "required",

        phoneNumber: {
            required: true,
            minlength: 11,
            maxlength: 11
          },
          identify: {
            required: true,
            minlength: 18,
            maxlength: 18
          },
          bankCount: {
            required: true,
            minlength: 16,
            maxlength: 19
          },
          topic: {
            required: "#newsletter:checked",
            minlength: 2
          },
          agree: "required"
        },
        messages: {
          remittee: "*请输入您的名字",
          phoneNumber: {
            required: "请输入正确的手机号码",
            minlength: "手机号码由11位数字组成",
            maxlength: "手机号码由11位数字组成",
          },
          identify: {
            required: "请输入正确的身份证号码",
            minlength: "第二代身份证号码由18位数字组成",
            maxlength: "第二代身份证号码由18位数字组成"
          },
          bankCount: {
            required: "请输入正确的银行账号",
            minlength: "请输入正确的银行账号",
            maxlength: "请输入正确的银行账号"
          },
          depositBank: "请输入正确的开户行"
         }
        })
    });