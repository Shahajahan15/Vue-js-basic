
	var Event = new Vue();
	// component
	Vue.component("tabs", {
		template: `
			<div class="tab">
				<ul>
					<li v-for="tab in tabs" :class="{ 'active': tab.selectedNow }" @click="makeEvent(tab.name)">
						{{ tab.name }}
					</li>
				</ul>
				<div class="details">
					<slot></slot>
				</div>
			</div>
		`,
		data: function () {
			return {
				tabs: []
			}
		},
		created: function(){
			this.tabs = this.$children
		},
		methods: {
			makeEvent: function(s){
				Event.$emit('tabchange', s)
			}
		}
	});


	Vue.component("tab", {
		template: `
			<div class="" v-if="selectedNow">
				<slot></slot>
			</div>
		`,
		data: function(){
			return {
				selectedNow: false
			}
		},

		created: function(){
			var currentTab = this;
			currentTab.selectedNow = currentTab.selected;
			Event.$on('tabchange', function(s){
				if (s == currentTab.name) {
					currentTab.selectedNow = true
				}
				else
				{
					currentTab.selectedNow = false
				}
			})
		},

		props: ['name', "selected"]
	});

	var app = new Vue({
		el: "#root",
		data: {
		}
	})





