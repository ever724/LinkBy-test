<template>
  <div class="test">
    <div id="items">
      <h1>My Items</h1>
      <div class="item">
        <h3>Items with Score 20</h3>
        <ul>
          <li 
            v-for="item in itemsWithScore(items.items, 20)"
            v-bind:key="item.id"
            :class="[ { 'only-one' : isLengthOne(itemsWithScore(items.items, 20)) } ]"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>Items with Score 30</h3>
        <ul>
          <li 
            v-for="item in itemsWithScore(items.items, 30)"
            v-bind:key="item.id"
            :class="[ { 'only-one' : isLengthOne(itemsWithScore(items.items, 30)) } ]"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>Items with Score 50</h3>
        <ul>
          <li 
            v-for="item in itemsWithScore(items.items, 50)"
            v-bind:key="item.id"
            :class="[ { 'only-one' : isLengthOne(itemsWithScore(items.items, 50)) } ]"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    items: Object
  },
  methods: {
    itemsWithScore(items, score) {
      return items.filter((item) => item.score == score)
    },
    isLengthOne(items) {
      console.log(items)
      return items.length == 1 ? true : false
    }
  },
};
</script>
<style scoped>
.item .only-one {
  color: red;
}
</style>
