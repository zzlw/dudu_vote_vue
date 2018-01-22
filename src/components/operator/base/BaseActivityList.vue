<template>
    <div class="pl20 ptb30 flex-wrp flex-between bg-white">
        <div class="" :style="{width: rem(360),height: rem(130)}"  @click.stop="$router.push(`/activity/${activity.id}`)">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover"
                 :style="{backgroundImage:`url(${thumb})`}"/>
        </div>
        <div class="plr20 border-r flex-wrp flex-cell flex-between">
            <div class="title size26 color5 text-nowrap-three">{{activity.title}}</div>
            <div class="flex-wrp">
                <div class="flex-wrp pr10 flex-center">
                    <div :style="{width: rem(30),height: rem(30)}" class="mr5">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-yanjing`"></use>
                        </svg>
                    </div>
                    <div class="size16 color5">111</div>
                </div>
                <div class="flex-wrp pr10 flex-center">
                    <div :style="{width: rem(30),height: rem(30)}" class="mr5">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-liwu`"></use>
                        </svg>
                    </div>
                    <div class="size16 color5">111</div>
                </div>
                <div class="flex-wrp pr10 flex-center">
                    <div :style="{width: rem(30),height: rem(30)}" class="mr5">
                        <svg class="icon base-menu-icon" aria-hidden="true">
                            <use :xlink:href="`#icon-renshutongji`"></use>
                        </svg>
                    </div>
                    <div class="size16 color5">111</div>
                </div>

            </div>
        </div>
        <div class="flex-wrp flex-cell flex-middle plr30">
            <!--<slot name="setUp" :v-show="setUpStatus"/>-->
            <!--<slot/>-->

            <div class="border ptb5 plr10 border-radius5 text-center color1 size22 overflow-hidden color13"
                 :style="{'border-color':'#29d6bf'}" @click.stop="setUpStatus=!setUpStatus">设置
            </div>

            <div class="relative" v-show="setUpStatus">
                <div class="border border-radius5 overflow-hidden size22 bg-white"
                     :style="{width: '100px', position: 'absolute', top: '2px', right: '0px'}">
                    <div class="color4 border-b text-center ptb10" @click.stop="showDialog = true">活动二维码</div>
                    <div class="color4 border-b text-center ptb10" @click.stop="$router.push(`/operator/activity/edit/${activity.id}`)">
                        编辑
                    </div>
                    <div class="color4 border-b text-center ptb10">删除
                    </div>
                    <div class="color4 text-center ptb10" @click.stop="$router.push(`/operator/activity/settings/${activity.id}`)">更多设置</div>
                </div>
            </div>

        </div>

        <!--二维码-->
        <x-dialog :show.sync="showDialog" :hide-on-blur="true" :dialog-style="{width: '100%'}">
          <div class="pt30 pb60 plr30">
            <div class="color2 size32 flex-wrp flex-middle pb20">活动二维码</div>
            <div class="flex-wrp flex-middle">
              <img class="bg-cover block" src="~/assets/img/s.gif"
                   :style="{width: rem(250), height: rem(250),backgroundImage:`url(${activity.qrcode})`}"/>
            </div>
            <div class="size22 color2 flex-wrp flex-middle pd10">长按保存二维码</div>

            <div class="fixed-button h40 flex-wrp flex-center" @click.stop="showDialog = !showDialog">关闭</div>
          </div>
        </x-dialog>


    </div>
</template>

<script>
    export default {
      props: {
        activity: {
          require: true
        }
      },
      data () {
        return {
          showDialog: false,
          setUpStatus: false,
          status: false
          // icons: ['icon-yanjing', 'icon-liwu', 'icon-renshutongji'],
        }
      },

      computed: {
        thumb () {
          if (this.activity.sliders) {
            return this.activity.sliders[0].img
          }
          return ''
        }
      },
      mounted () {},

      components: {},

      methods: {
        sdfd () {
          console.log(23432)
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>

