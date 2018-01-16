<template>

    <swiper :height="rem(300)" :show-dots="false">

        <swiper-item
            v-for="(item, index) in items"
            :key="index"
        >

            <OperatorActivityEditorSwiperItem
                v-model="items[index]"
                :remove="() => remove(index)"
                :preview="preview"/>

        </swiper-item>

        <swiper-item>
            <OperatorActivityEditorSwiperItem v-model="newItem" :preview="preview"/>
        </swiper-item>

    </swiper>



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
      }
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

