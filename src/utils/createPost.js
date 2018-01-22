// 默认海报创建
class DefaultCreatePost {
  constructor (config, canvas, img) {
    // 默认海报的参数
    this.isDefault = config.isDefault
    this.platformName = config.platformName
    this.banner = config.banner
    this.title = config.title
    this.oldPrice = config.oldPrice
    this.nowPrice = config.nowPrice
    this.vipPrice = config.vipPrice
    this.overtime = config.overtime

    // 自定义海报的参数
    this.postUrl = config.postUrl
    this.codeWidth = config.codeWidth
    this.codeTop = config.codeTop
    this.codeLeft = config.codeLeft

    // 两种海报的通用参数
    this.codeUrl = config.codeUrl

    this.getTextLength = this.getTextLength.bind(this)
    this.cutString = this.cutString.bind(this)
    this.myDrawText = this.myDrawText.bind(this)
    this.drawPrice = this.drawPrice.bind(this)
    this.drawDefaultPost = this.drawDefaultPost.bind(this)
    this.drawCustomPost = this.drawCustomPost.bind(this)
    this.drawPost = this.drawPost.bind(this)
    this.canvas = canvas
    this.img = img
  }

  // 计算字符串的字节数
  getTextLength (str) {
    let len = str.length
    let trueLen = 0
    for (let i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 128) {
        trueLen += 2
      } else {
        trueLen += 1
      }
    }
    return trueLen
  }

  // 按字节长度截取字符串，返回substr截取位置
  cutString (str, leng) {
    let len = str.length
    let tlen = len
    let nlen = 0
    for (let x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        if (nlen + 2 < leng) {
          nlen += 2
        } else {
          tlen = x
          break
        }
      } else {
        if (nlen + 1 < leng) {
          nlen += 1
        } else {
          tlen = x
          break
        }
      }
    }
    return tlen
  }

  myDrawText ([ctx, font, color, align, x, y, text]) {
    ctx.font = font
    ctx.fillStyle = color
    ctx.textAlign = align
    ctx.fillText(text, x, y)
  }
  drawPrice ([ctx, h1, h2, h3, h4, w, DPR]) {
    // 价位背景
    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, h1 + h2 + h3, w, h4)
    // 判断是否有会员价
    if (this.vipPrice) {
      ctx.strokeStyle = '#ddd'
      ctx.beginPath()
      ctx.moveTo(w / 2, h1 + h2 + h3 + 10 * DPR)
      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      ctx.lineTo(w / 2, h1 + h2 + h3 + h4 - 10 * DPR)
      ctx.stroke()
      // 原价
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#333', 'left', 30 * DPR, h1 + h2 + h3 + 18 * DPR, '原价￥'])
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#ff4622', 'left', 68 * DPR, h1 + h2 + h3 + 18 * DPR, this.oldPrice])
      // 抢购价
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#333', 'left', 30 * DPR, h1 + h2 + h3 + 40 * DPR, '抢购价￥'])
      this.myDrawText([ctx, `bold ${23 * DPR}px 微软雅黑`, '#ff4622', 'left', 85 * DPR, h1 + h2 + h3 + 40 * DPR, this.nowPrice])
      // 会员价
      // 会员价的长度
      let vipLen = this.getTextLength(this.vipPrice) * 10 * DPR + 5 * DPR
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#333', 'right', w - 30 * DPR - vipLen, h1 + h2 + h3 + 40 * DPR, '会员价￥'])
      this.myDrawText([ctx, `bold ${20 * DPR}px 微软雅黑`, '#ff4622', 'right', w - 30 * DPR, h1 + h2 + h3 + 40 * DPR, this.vipPrice])
    } else {
      // 抢购价长度
      let vipLen = this.getTextLength(this.nowPrice) * 13 * DPR
      // 原价
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#333', 'left', w / 2 - 56 * DPR, h1 + h2 + h3 + 18 * DPR, '原价￥'])
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#ff4622', 'left', w / 2 - 18 * DPR, h1 + h2 + h3 + 18 * DPR, this.oldPrice])
      // 抢购价
      this.myDrawText([ctx, `bold ${13 * DPR}px 微软雅黑`, '#333', 'center', w / 2 - 13 * 4 * DPR / 2 - 5 * DPR, h1 + h2 + h3 + 40 * DPR, '抢购价￥'])
      this.myDrawText([ctx, `bold ${23 * DPR}px 微软雅黑`, '#ff4622', 'center', w / 2 + vipLen / 2 - 5 * DPR, h1 + h2 + h3 + 40 * DPR, this.nowPrice])
    }
  }
  // canvas 转为图片
  canvasToImg (canvas) {
    const url = canvas.toDataURL()
    this.img.setAttribute('src', url)
    canvas.style.display = 'none'
  }
  // 绘制自定义海报
  drawCustomPost (box, canvas, ctx) {
    // 填充 bg
    let bg = new Image()
    bg.crossOrigin = 'anonymous'
    bg.src = this.postUrl

    const self = this
    bg.onload = function () {
      // 最外层宽度
      const w = box.offsetWidth
      const h = w * bg.height / bg.width
      canvas.width = w
      canvas.height = h
      ctx.drawImage(bg, 0, 0, w, h)

      // 填充二维码, 二维码有可能不存在
      if (self.codeUrl) {
        let codeImg = new Image()
        codeImg.src = self.codeUrl
        const x = w * self.codeLeft / 750
        const y = w * self.codeTop / 750
        const codeSize = w * self.codeWidth / 750
        codeImg.onload = function () {
          ctx.drawImage(codeImg, x, y, codeSize, codeSize)
          self.canvasToImg(canvas)
        }
      }
    }
  }
  // 绘制默认海报
  drawDefaultPost (box, canvas, ctx) {
    const DPR = window.devicePixelRatio || 1
    // 最外层宽度
    const w = box.offsetWidth * DPR
    // 最大文本宽度
    const textMaxWidth = w - 30 * DPR * 2

    // 计算总体高度
    // 平台标题高度
    let h1 = 35 * DPR
    // banner 高度
    let h2 = 0.426 * w
    // 抢购标题高度
    let h3 = Math.ceil(this.getTextLength(this.title) * 7 * DPR / textMaxWidth
    ) * 26 * DPR + 16 * DPR
    // 价位背景
    let h4 = 48 * DPR
    // 底部高度
    let h5 = 70 * DPR + w * 0.4969
    let h = Math.ceil(h1 + h2 + h3 + h4 + h5)

    canvas.width = w
    canvas.height = h

    // 画整体背景
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, w, h)

    // 写入title文本
    this.myDrawText([ctx, `bold ${15 * DPR}px 微软雅黑`, '#333', 'center', w / 2, 23 * DPR, this.platformName])

    // 填充标题
    let title = this.title
    let cutIndex = this.cutString(this.title, textMaxWidth / (7 * DPR))
    for (let i = 1; this.getTextLength(title) > 1; i++) {
      this.myDrawText([ctx, `bold ${14 * DPR}px 微软雅黑`, '#333', 'center', w / 2, h1 + h2 + 26 * i * DPR, title.substr(0, cutIndex).trim()])
      title = title.substr(cutIndex)
    }
    // 填充价格
    this.drawPrice([ctx, h1, h2, h3, h4, w, DPR])
    // 结束日期背景线条
    ctx.strokeStyle = '#999'
    ctx.beginPath()
    ctx.moveTo(w / 2 - 109 * DPR, h1 + h2 + h3 + h4 + 24 * DPR)
    ctx.lineWidth = 1
    ctx.lineCap = 'round'
    ctx.lineTo(w / 2 + 109 * DPR, h1 + h2 + h3 + h4 + 24 * DPR)
    ctx.stroke()

    // 结束日期背景
    ctx.fillStyle = '#fff'
    ctx.fillRect(w / 2 - 74 * DPR, h1 + h2 + h3 + h4 + 10 * DPR, 148 * DPR, 25 * DPR)

    // 日期文字
    const overTimeText = '抢购结束日期：' + this.overtime
    this.myDrawText([ctx, `${11 * DPR}px 微软雅黑`, '#333', 'center', w / 2, h1 + h2 + h3 + h4 + 27 * DPR, overTimeText])

    // http://public.duduapp.net/dolife/static/images/postBg.png
    // 填充二维码背景
    let codeBg = new Image()
    codeBg.crossOrigin = 'anonymous'
    codeBg.src = 'http://public.duduapp.net/dolife/static/images/postBg.png'

    const self = this
    codeBg.onload = function () {
      ctx.drawImage(codeBg, 0, h1 + h2 + h3 + h4 + 35 * DPR, w, w * 0.4969)

      // 填充二维码
      let code = new Image()
      code.src = self.codeUrl
      code.onload = function () {
        ctx.drawImage(code, 0.1 * w, h1 + h2 + h3 + h4 + 35 * DPR + w * 0.06, 0.359375 * w, 0.359375 * w)

        // 填充banner
        let banner = new Image()
        banner.crossOrigin = 'anonymous'
        banner.src = self.banner
        banner.onload = function () {
          ctx.drawImage(banner, 0, 35 * DPR, w, h2)
          self.canvasToImg(canvas)
        }
      }
    }

    // 底部文字
    const tip = '长按识别或扫描二维码抢购此商品'
    this.myDrawText([ctx, `${11 * DPR}px 微软雅黑`, '#999', 'center', w / 2, h - 25 * DPR, tip])
  }

  // 绘制海报
  drawPost () {
    const box = document.body
    const ctx = this.canvas.getContext('2d')
    if (this.isDefault) {
      this.drawDefaultPost(box, this.canvas, ctx)
    } else {
      this.drawCustomPost(box, this.canvas, ctx)
    }
  }
}

export default {
  draw: (defaultConfig, canvas, img) => {
    const myDefault = new DefaultCreatePost(defaultConfig, canvas, img)
    myDefault.drawPost()
  }
}
