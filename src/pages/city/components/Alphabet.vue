<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchstart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref='item'>{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 设置timeout节流函数，避过触摸时频繁执行造成性能损失
      setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    console.log('updated')
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    vertical-align: center
    display: flex
    flex-direction: column
    justify-content: center
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
