<template>
  <div id="app">
    <ResponsiveNavigation
		:nav-links="navLinks"
		:image-path="require('../assets/logo.png')"
    />
  </div>
</template>

<script>
import ResponsiveNavigation from '@/components/ResponsiveNavigation'

export default {
  components: {
    ResponsiveNavigation
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
		path: '/',
		icon: 'icofont-home icofont-1x'
      },
      {
        text: 'About',
		path: '/about',
		icon: 'icofont-ui-user icofont-1x'
      },
      {
        text: 'Route 1',
		path: '/route-1',
		icon: 'icofont-link icofont-1x'
      },
      {
        text: 'Route 2',
		path: '/route-2',
		icon: 'icofont-link icofont-1x'
      },
      {
        text: 'Route 3',
		path: '/route-3',
		icon: 'icofont-link icofont-1x'
      },
      {
        text: 'Route 4',
		path: '/route-4',
		icon: 'icofont-link icofont-1x'
      }
    ]
  })
}
</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
