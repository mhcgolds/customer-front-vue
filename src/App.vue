<script>
import Sidebar from './views/Layout/Sidebar.vue'
import Navbar from './views/Layout/Navbar.vue'
import Footer from './views/Layout/Footer.vue'

export default {
  name: 'App',
  computed: {
  },
  components: {
    Sidebar,
    Navbar,
    Footer
  }
}
</script>

<template>
  <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
  
        <Sidebar />
  
        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
  
          <Navbar />
  
          <div class="p-6 bg-gray-100 mb-20">
            <router-view></router-view>
          </div>
  
          <Footer />
  
        </div>
      </div>
    </div>
</template>