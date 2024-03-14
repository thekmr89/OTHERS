const formControls = $(".form-control");
  formControls.on('focus',function(){
      $(this).siblings("label").addClass('valid');
  });
  formControls.on(
      "input change blur",
      throttle(function () {
        const $label = $(this).siblings("label");
        $label.toggleClass("valid", this.value !== "");
      })
    );
    function throttle(callback, delay = 250) {
      let isThrottled = false;
      return function () {
        if (!isThrottled) {
          callback.apply(this, arguments);
          isThrottled = true;
          setTimeout(() => (isThrottled = false), delay);
        }
      };
  };
