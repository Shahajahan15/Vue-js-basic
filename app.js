
var Home = {
		template: `
			<div class="main">
				<div class="foo">
					<h3>Home</h3>
					<p>Home page content goes here .....</p>
				</div>
			</div>
		`
	};

	var About = {
		template: `
			<div class="main">
				<div class="foo">
					<h3>About</h3>
					<p>About page content goes here .....</p>
				</div>
			</div>
		`
	};

	var Contact = {
		template: `
			<div class="main">
				<div class="foo">
					<h3>Contact</h3>
					<p>Contact page content goes here .....</p>
				</div>
			</div>
		`
	};

	var Blog = {
		template: `
			<div class="main">
				<div class="foo">
					<h3>Blog</h3>
					<p>Blog page content goes here .....</p>
				</div>
			</div>
		`
	};

	var routes = [
		{path: '/home', component: Home},
		{path: '/about', component: About},
		{path: '/contact', component: Contact},
		{path: '/blog', component: Blog}
	];

	var router = new VueRouter({
		routes: routes,
		mode: 'history',
		base: '/Vuerouter'
	})

	var app = new Vue({
		router: router
	}).$mount("#root")


/*

	// component
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
	el: '#root',
	data: {
	}
})*/

