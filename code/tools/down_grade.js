function down_grade() {
    Java.perform(function () {
        var SOAPBinding = Java.use("com.neusoft.szair.model.soap.SOAPBinding");
        SOAPBinding.sendXmlToServer.implementation = function (a, b) {
            this.endpoint.value = this.endpoint.value.replace(/https/, "http")
            console.log(this.endpoint.value)
            var result = this.sendXmlToServer(a, b)
            this.endpoint.value = this.endpoint.value.replace(/http/, "https")
            console.log(this.endpoint.value)
            return result
        }
    })
}

setImmediate(down_grade)