<template>
  <div>
    <input v-model="query" style="width: 100px;">
    <el-button v-on:click="sendMsg">发送</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '测试1'
    }
  },
  methods: {
    sendMsg () {
      this.$axios.get('/api/assessmentReporter/qryFactorysByKhxm.json?evaluationItem=a', {
        withCredentials: true
      }).then((res) => {
        console.log(res)
        // alert('成功')
      }).catch(() => {
        alert('失败')
      })
    },
    sendMsg1: () => {
    }
  }
}
</script>
