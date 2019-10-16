

	var app = new Vue({
		el: '#root',
		data: {
			newSkill: "",
			skills: ["html", "css", "php", "javascript"]
		},
		methods: {
			addSkill(){
				// alert("adding....")
				this.skills.push(this.newSkill); // add elements
				this.newSkill = '';    // blank field
			},
			removeSkill: function(i){
				// alert("adding....")
				this.skills.splice(i, 1); // remove elements
			}
		}
	})



/*	// javascript 
	var data = {name:"Safikul"}
	document.getElementById("name").value = data.name;
	document.getElementById("output").innerHTML = "Your name is : " + data.name;

	function change() {
		data.name = document.getElementById("name").value;
		document.getElementById("output").innerHTML = "Your name is : " + data.name;
	}*/
	

