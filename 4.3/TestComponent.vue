<script>
export default {
  beforeMount () {
    setTimeout(() => {
      this.injectedMethod()
    }, 1000)
  }
}
</script>
