new Vue({
  el: '#exercise',
  data: {
    toggleClass: false,
    firstOne: 'firstClass',
    secondOne: 'secondClass'
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.toggleClass = !vm.toggleClass;
      }, 2000)
    }
  }
});
