new Vue({
  el: '#app',
  data: {
    keywords: [
      'iPad Pro',
      'Macbook Pro',
      'iMac',
      'iPhone',
    ],
    isFocusing: false,
    currentIndex: 0,
    animationTriggerFlag: true,
  },
  computed: {
    before() {
      let keyword = this.keywords[this.currentIndex]
      return (this.isFocusing) ? '' : keyword
    },
    after() {
      let keyword = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? this.keywords[0] : this.keywords[this.currentIndex + 1]
      return (this.isFocusing) ? '' : keyword
    },
    placeholder() {
      let keyword = this.keywords[this.currentIndex]
      return (!this.isFocusing) ? '' : keyword
    },
    shouldAnimate() {
      return !this.isFocusing && this.animationTriggerFlag
    },
  },
  methods: {
    animationEnded(e) {
      if (e.pseudoElement === '::after') {
        this.animationTriggerFlag = false
        
        let newIndex = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? 0 : this.currentIndex + 1
        this.currentIndex = newIndex
        
        setTimeout(() => {
          this.animationTriggerFlag = true
        }, 3000)
      }
    },
    doSearch(e) {
      if (e.keyCode === 13) {
        alert(this.keywords[this.currentIndex])
      }
    }
  },
})