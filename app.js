
	
	// component
	Vue.component("pannel", {
		template: `
			<div class="pannel" v-if="show">  
				<div class="pannelTitle">
					<div class="close" @click="show = false">x</div>
					{{ title }}
				</div>
				<div class="pannelContent">
					{{ content }}
				</div>
				<div class="inputs">
					<slot></slot>
				</div>
			</div>
		`,
		props:['title', 'content'],
		data: function(){
			return {
				show: true
			}
		}
	})

	var app = new Vue({
		el: "#root",
		data: {

		}
	})

	//  global filters
	// Vue.filter("lower", function(s){
	// 	return s.toLowerCase()
	// })

	// var app = new Vue({
	// 	el: '#root',
	// 	data: {
	// 		name: "Shahajahan All Cse",
	// 		profession: "Software Engineering",
	// 		date: new Date()
	// 	},
	// 	computed: {
	// 		upperCaseName(){
	// 			return this.name.toUpperCase()
	// 		}
	// 	},
	// 	//  locally filters
	// 	filters: {  
	// 		upper(s){
	// 			return s.toUpperCase()
	// 		},

	// 		bdformat(d){
	// 			return d.getUTCDate() + "-" + (d.getUTCMonth()+1) + "-" + d.getUTCFullYear()
	// 		}
	// 	}
	// })


/*	// javascript 
	var data = {name:"Safikul"}
	document.getElementById("name").value = data.name;
	document.getElementById("output").innerHTML = "Your name is : " + data.name;

	function change() {
		data.name = document.getElementById("name").value;
		document.getElementById("output").innerHTML = "Your name is : " + data.name;
	}*/
	

