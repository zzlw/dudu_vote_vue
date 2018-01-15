<template>

    <div class="swiper">
        <div v-for="(item, index) in items" :key="index">
            <OperatorActivityEditorSwiperItem v-model="items[index]" :remove="() => remove(index)" :preview="preview"/>
        </div>

        <OperatorActivityEditorSwiperItem v-model="newItem" :preview="preview"/>
        <base-data-three :data="data" class="border-b">

                <div slot="number" slot-scope="{ number }" class="bold size26 color5 lh200">{{number}}</div>
                <div slot="title" slot-scope="{ title }" class="size22 color5">{{title}}</div>

        </base-data-three>
    </div>

</template>

<script>
import OperatorActivityEditorSwiperItem from "@/components/operator/activity/editor/OperatorActivityEditorSwiperItem";

export default {
  components: {
    OperatorActivityEditorSwiperItem
  },
  props: ["value", "preview"],
  data() {
    return {
      items: this.value,
      newItem: {
        img: "",
        url: ""
      },
      // base-data-three start
      data: [
        {
          number: 167,
          text: "参与选手"
        },
        {
          number: 167,
          text: "累计投票"
        },
        {
          number: 167,
          text: "访问量"
        }
      ]
    };
  },
  watch: {
    value() {
      this.items = this.value;
    },
    newItem() {
      if (this.newItem.img) {
        this.items.push({
          img: this.newItem.img,
          url: this.newItem.url
        });
        this.newItem.img = "";
        this.newItem.url = "";
        this.$emit("input", this.items);
      }
    }
  },
  methods: {
    remove(index) {
      this.items = this.items.filter((v, i) => i !== index);
      this.$emit("input", this.items);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

