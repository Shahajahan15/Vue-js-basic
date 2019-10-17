
	
	// component
	Vue.component("pannel", {
		template: `
			<div class="pannel">  
				<div class="pannelContent">
					<div class="pannelHeader">
						<slot name="header"></slot>
					</div>
					<div class="pannelTitle">
						<slot name="title"></slot>
					</div>
					<div class="pannelBody">
						<slot name="body"></slot>
					</div>
					<div class="pannelFooter">
						<button @click="$emit('onsave')">save</button>
						<button>cancel</button>
					</div>
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
			showLogin: false
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
	

