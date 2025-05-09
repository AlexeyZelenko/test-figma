<template>
  <div class="svg-container">
    <svg ref="svgElement" width="100%" height="200" viewBox="0 0 800 100">
      <path
          class="text-path"
          d="M 50 50 L 90 20 L 90 80 L 50 50 M 100 20 L 100 80 M 110 20 L 130 20 L 130 50 L 110 50 M 110 50 L 130 80 M 140 20 L 140 80 M 150 20 L 180 20 L 180 80 L 150 80 M 190 20 L 190 80 M 200 20 L 230 50 L 200 80 M 240 20 L 240 80 M 250 50 L 270 20 L 290 50 L 270 80 L 250 50 M 300 20 L 340 20 L 340 80 L 300 80 L 300 20 M 350 20 L 350 80 M 360 20 L 380 20 L 390 80 L 370 80 L 360 20 M 400 20 L 440 20 L 440 80 L 400 80 L 400 20 M 450 20 L 490 20 L 490 80 L 450 80 L 450 20 M 500 20 L 500 80 M 510 20 L 550 20 L 550 80 L 510 80 L 510 20 M 570 50 L 590 20 L 610 50 L 590 80 L 570 50 M 620 20 L 620 80 M 640 20 L 640 80 M 650 20 L 650 80 M 660 20 L 690 20 L 690 80 L 660 80"
          fill="none"
          stroke="#42b883"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
      />
    </svg>
    <button @click="playAnimation">Animate</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { animate, svg } from 'animejs';

export default {
  name: 'AnimatedRealEstate',
  setup() {
    const svgElement = ref(null);
    let drawables = null;

    const playAnimation = () => {
      if (drawables) {
        animate(drawables, {
          draw: ['0 0', '0 1', '1 1'],
          ease: 'inOutQuad',
          duration: 2000,
          delay: function(el, i) {
            return i * 80;
          },
          complete: function() {
            // Reset animation after completion (optional)
            setTimeout(() => {
              animate(drawables, {
                draw: '0 0',
                duration: 0
              });
              playAnimation();
            }, 1000);
          }
        });
      }
    };

    onMounted(() => {
      // Create drawables when component is mounted
      if (svgElement.value) {
        drawables = svg.createDrawable('.text-path');
        // Start the animation automatically
        playAnimation();
      }
    });

    return {
      svgElement,
      playAnimation
    };
  }
};
</script>

<style scoped>
.svg-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

button {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #33a06f;
}

svg {
  width: 100%;
  height: auto;
  max-width: 800px;
}
</style>