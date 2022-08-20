<template>
  <div>
    pinia----{{ test.name }} ----{{ test.current }}
    <div>
      <button @click="onchange">change</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useTestStore} from "../store";

const test = useTestStore()

// 1   test.current++ 直接修改
// 2   test.$patch({current: 222, name: 'ls'})
// 3 test.$patch((state) => {
// state.name = 'zs'
// state.current++
// if (state.current % 11 == 0) state.current = 0
// else state.name = 'ls'
// })
// 4   test.$state = {current: 2, name: 'ls'}
// 5   test.setCurrent((+'123'))
const onchange = () => {

  test.current++

  // test.$patch({
  //   current: 222,
  //   name: 'ls'
  // })

  // test.$patch((state) => {
  //   state.name = 'zs'
  //   state.current++
  //   if (state.current % 11 == 0) state.current = 0
  //   else state.name = 'ls'
  // })

  // test.$state = {
  //   current: 2,
  //   name: 'ls'
  // }

  // test.setCurrent((+'123'))
}
</script>