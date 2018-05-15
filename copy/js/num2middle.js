require.config(requireConfig);
require([
    'jquery',
    'vue',
    '_base',
],function($,Vue,_base){
	 var vm = new Vue({
        el: '.content2',
        data: {
        	aColor: ['#ff6565','#ff8670','#ffa57b','#ffbd83','#ffe18f','#d2e3a1','#86e7c1','#44ebdd','#3bc7ea'],
        	hotlist: [],
        	maxValue: 100,
        	
        	eventdatas: [],
        	eventlist: [],
        	cNum: 0,//0~4
        },
        ready: function(){
        	var self = this, fNum = 0;
			this.fetchData();
			this.fetchHot();
			var $sec = $('.sec-2 .ct');
			var timer = setInterval(function(){
				vm.cNum += 2;
				if (vm.cNum >= 10) vm.cNum = 0;
				$sec.animate({'opacity':'0'}, 400, function(){
					vm.eventlist = vm.eventdatas.slice(vm.cNum, vm.cNum+2);
					$sec.animate({'opacity':'1'}, 800)
				})
				fNum += 1;
				if (fNum >= 100) {//每15分钟
					fNum = 0;
					self.fetchData();
					self.fetchHot();
				}
			},9000)
        },
        methods: {
        	fetchData: function(){
        		$.ajax({
        			url:pageApiRootUri + "areahot",
        			dataType: 'json',
        			success: function(datas){
        				vm.hotlist = datas;
        				vm.maxValue = datas[0]['value'];
        			}
        		});
        	},
        	fetchHot: function(){
        		$.ajax({
        			url:pageApiRootUri +'eventhot',
        			dataType: 'json',
        			success: function(datas){
        				vm.eventdatas = datas;
        				vm.eventlist = vm.eventdatas.slice(vm.cNum, vm.cNum+2);
        			}
        		})
        	}
        }
    })
	
})
