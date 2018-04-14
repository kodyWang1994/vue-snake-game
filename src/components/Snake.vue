<template>
  <div class="hello">
    <div class="game-panel">
      <div v-for="col in 1536" :key="col" class="col-item" :class="{'snake': isSnake(col), 'food': food == col}"></div>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'Snake',
  data () {
    return {
      snakeBody: [1],
      food: 0,
      direction: 'RIGHT'
    }
  },
  created () {
    this.init()
  },
  mounted () {
    document.onkeydown = event => {
      this.keyUp(event)
    }
  },
  methods: {
    isSnake (col) {
      return _.indexOf(this.snakeBody, col) > -1
    },
    move () {
      setInterval(() => {
        const last = _.last(this.snakeBody)
        var newBody = []
        if (last === this.food) {
          newBody = this.snakeBody
          this.food = this.random(1, 1536)
        } else {
          newBody = _.rest(this.snakeBody)
        }
        if (last > 1536) {
          newBody.push(last - 1536)
        } else if (last < 1) {
          newBody.push(1536 + last)
        } else {
          switch (this.direction) {
            case 'LEFT':
              newBody.push(last - 1)
              break
            case 'TOP':
              newBody.push(last - 32)
              break
            case 'RIGHT':
              newBody.push(last + 1)
              break
            case 'DOWN':
              newBody.push(last + 32)
              break
            default:
              newBody.push(last + 1)
              break
          }
        }
        this.snakeBody = newBody
      }, 100)
    },
    random (min, max) {
      var range = max - min
      var rand = Math.random()
      var num = min + Math.round(rand * range) // 四舍五入
      return num
    },
    keyUp (event) {
      // 左,上,右,下
      if (event.keyCode === 37) {
        this.direction = 'LEFT'
      } else if (event.keyCode === 38) {
        this.direction = 'TOP'
      } else if (event.keyCode === 39) {
        this.direction = 'RIGHT'
      } else if (event.keyCode === 40) {
        this.direction = 'DOWN'
      }
    },
    init () {
      this.food = this.random(1, 1536)
      this.move()
    }
  }
}
</script>

<style scoped>
.game-panel {
  position: relative;
  width: 320px;
  height: 480px;
  overflow: hidden;
  line-height: 0;
}

.col-item {
  background: #ccc;
  width: 10px;
  height: 10px;
  display: inline-block;
}

.snake {
  background: #000;
}

.food {
  background: red;
}
</style>
