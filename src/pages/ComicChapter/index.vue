<script>
import ArrowButton from '@/components/ArrowButton'
import ImageArea from '@/components/ImageArea'
import ChapterThumb from '@/components/ChapterThumb'

function getChapterRoute (id, cid) {
  return {
    name: 'ComicChapter',
    id: id,
    cid: cid
  }
}

export default {
  name: 'comicChapter',
  data () {
    return {
      page: null, // 第幾頁
      pages: [], // 所有頁數
      pchapter: null, // 上一章
      nchapter: null, // 下一章
      chapter: null // 目前章節
    }
  },
  components: {
    ArrowButton,
    ImageArea,
    ChapterThumb
  },
  computed: {
    src () {
      return this.pages[this.page]
    }
  },
  methods: {
    nextHandler() {
      if (this.page < this.pages.length - 1) {
        this.page++
      }
    },
    prevHandler() {
      if (this.page > 0 - 1) {
        this.page--
      }
    }
  },
  mounted () {
    this.chapter = this.$route.params.cid
    if (this.chapter % 100 < 1 || this.chapter % 100 > 10 || this.chapter / 100 < 1 || this.chapter / 100 > 4) {
      // if no data
      this.$router.replace({
        name: 'Comics'
      })
    } else {
      this.pages = [
        '/static/images/p1.jpg',
        '/static/images/p2.jpg',
        '/static/images/p3.jpg',
        '/static/images/p4.jpg',
        '/static/images/p5.jpg',
        '/static/images/p6.jpg',
        '/static/images/p7.jpg',
        '/static/images/p8.jpg',
        '/static/images/p9.jpg'
      ]
      this.page = 0
      this.nchapter = getChapterRoute(this.$route.params.id, this.chapter - 1)
      this.pchapter = getChapterRoute(this.$route.params.id, this.chapter + 1)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
