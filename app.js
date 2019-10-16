

	var app = new Vue({
		el: '#root',
		data: {
			payments: [
				{name: "houseRent", amount: 1500, paid: true},
				{name: "electricity", amount: 1000, paid: false},
				{name: "gas", amount: 800, paid: true},
				{name: "water", amount: 700, paid: false},
				{name: "net", amount: 600, paid: true},
			]
		},
		computed: {
			unpaidPayments(){
				return this.payments.filter(function(p){
					return !p.paid;
				})
			},

			totalAmount(){
				var sum = 0
				for (var i = 0; i < this.payments.length; i++) {
					sum += this.payments[i].amount
				}
				return sum
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
	

