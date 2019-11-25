<template>
  <nav :style="{ background: background || '#333' }">
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="image-logo" @click="toggleClose">
        <img :src="imagePath" height="40px" width="40px" />
      </figure>
      <li class="close" @click="toggleClose">
        <i class="icofont-close-line"></i>
      </li>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <router-link
          :to="link.path"
          :style="{ color: linkColor || '#DDD' }"
        >
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['navLinks', 'imagePath'],
  methods: {
    toggleClose () {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    },
  }
}
</script>

<style scoped lang="scss">
img {
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex;
display: -o-flex;
display: flex;
}
nav {
  width: 100%;
  box-shadow: 2px 2px 2px #CCC;
  min-height: 60px;
  line-height: 60px;
  overflow: hidden;
  ul {
    display: flex; 
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    figure {
      cursor: pointer;
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      padding: 0 10px;
    }

    i {
      font-size: 22px;
      text-align: center;
      padding: 0 10px;
    }

    li {
      list-style-type: none;
    }
  }
}
 .close {
    display: none;
    }
@media screen and (max-width: 759px) {
  nav {
    .close {
    display: none;
      i {
      color: #fff;
      }
    }
    .active {
      .close {
      display: block;
      position: absolute;
      top: -40px;
      margin-left: -10px;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      }
    }
    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 300ms ease all;
      top: 60px;
      background: #000;

      &.active {
        left: 0px;
      }

      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }

      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      a {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
