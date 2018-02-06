<template>
  <div class="head flex-wrp flex-between bg-284860 plr20 ptb20" @click="$router.back()">
      <div class="flex-wrp flex-align-center" :style="{flex:1}">
          <div class="leftIcon" :style="{width: rem(40), height: rem(40)}">
              <svg class="icon base-menu-icon" aria-hidden="true">
                  <use :xlink:href="`#icon-zuojiantou`"></use>
              </svg>
          </div>
          <div class="size26 color1 pl5">返回</div>
      </div>
      <div class="color1 size26 text-center"  :style="{flex:3}">
          {{title}}
      </div>
      <div class=""  :style="{flex:1}"></div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    computed: {
    },
    async mounted () {
    },
    methods: {
    },
  }
</script>
