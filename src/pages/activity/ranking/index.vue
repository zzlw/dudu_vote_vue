<template>
  <div class="" >
    <div class="bg-cover" :style="{height: rem(300),backgroundImage:`url(${srcImg})`}"></div>
    <div class="flex-wrp flex-between flex-end plr40 bg-white ptb30">
      <div class="flex-wrp flex-cell flex-align-center">
        <div class="border-radius overflow-hidden" :style="{width: rem(120), height: rem(120), border: '4px solid #a2b7c6'}">
          <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" />
        </div>
        <div class="size26 color2 pt25 pb10">陈凯</div>
        <div class="size26 color1 plr20" :style="{backgroundColor:'#a2b7c6','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.2</div>
        <div class="color4 pt10">{{55987}}票</div>
      </div>
      <div class="flex-wrp flex-cell flex-align-center">
        <div class="rankingNo1 flex-wrp flex-cell flex-align-center overflow-hidden" :style="{width: rem(204), height: rem(171)}" >
          <div class="border-radius mt10 overflow-hidden" :style="{width: rem(140), height: rem(140), border: '4px solid #dcb691'}">
            <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" />
          </div>
        </div>
        <div class="size26 color2 pt25 pb10">陈凯</div>
        <div class="size26 color1 plr20" :style="{backgroundColor:'#dcb691','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.2</div>
        <div class="color4 pt10">{{55987}}票</div>
      </div>
      <div class="flex-wrp flex-cell flex-align-center">
        <div class="border-radius overflow-hidden" :style="{width: rem(120), height: rem(120), border: '4px solid #cdc0b2'}">
          <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${srcImg})`}" />
        </div>
        <div class="size26 color2 pt25 pb10">陈凯</div>
        <div class="size26 color1 plr20" :style="{backgroundColor:'#cdc0b2','border-radius': rem(20)+' 0 '+rem(20)+ ' 0 '}">NO.2</div>
        <div class="color4 pt10">{{55987}}票</div>
      </div>
    </div>
    <div class="border-t">
      <div class="flex-wrp flex-between flex-align-center plr50 ptb15 bg-white border-b" v-for="(item, index) in listInfo" :key="index">
        <div class="flex-wrp flex-between flex-align-center">
            <div class="color5 size26">{{`${item.title}`}}</div>
            <div class="plr30 flex-wrp flex-center border-radius overflow-hidden" :style="{width: rem(90), height: rem(90)}">
              <img width="100%" height="100%" src="~/assets/img/s.gif" class="bg-cover" :style="{backgroundImage:`url(${item.srcImg})`}" />
            </div>
            <div class="color5 size26">刘若英</div>
        </div>
        <div class="color5 size26">{{item.time}}票</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcImg: '',
      listInfo:[
        {
          srcImg: '',
          title: 'NO.4',
          time: '666'
        },
        {
          srcImg: '',
          title: 'NO.5',
          time: '666'
        },
        {
          srcImg: '',
          title: 'NO.6',
          time: '666'
        }
      ],
    };
  },
  methods: {},
  mounted() {},
  computed: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.rankingNo1{
  background: url(~assets/img/web/ranking_no1.png) no-repeat center / cover;
}
</style>

