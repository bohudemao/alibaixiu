$('#logout').on('click', function () {
    var isConfirm = confirm('您确定要退出吗？')
    if(isConfirm){
      $.ajax({
        type: "post",
        url: "/logout",
        success: function (response) {
          location.href = 'login.html'
        },
        error: function (response) {
          alert('退出失败')
        }
      });
    }
  });