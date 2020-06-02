var a = {
  fun1 () {
    console.log(this)
    console.log(this.value)
    console.log(1)
  },
  fun2: () => {
    console.log(this)
    console.log(this.value)
    console.log(2)
  },
  fun3: function () {
    console.log(this)
    console.log(this.value)
    console.log(3)
  },
  value: '123'
}

a.fun1()

a.fun2()

a.fun3()
