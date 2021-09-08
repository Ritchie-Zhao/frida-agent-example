function hook_encode() {
    Java.perform(function x() {
        var Base64 = Java.use("android.util.Base64");
        var ByteString = Java.use("com.android.okhttp.okio.ByteString");
        Base64.encodeToString.overload('[B', 'int').implementation = function (v1, v2) {
            console.log("v1:", ByteString.of(v1).utf8());
            console.log("v2:" + v2);
            var encry = this.encodeToString(v1, v2);
            console.log("encry:" + encry);
            return encry
        };
    })
}


function hook_sha1() {
    Java.perform(function x() {
        var DeviceUtil = Java.use('com.bk.base.util.bk.DeviceUtil');
        DeviceUtil.SHA1ToString.implementation = function (s1) {
            console.log("s1:" + s1);
            var st = this.SHA1ToString(s1);
            console.log("st:" + st);
            return st
        }
    })
}

function main() {
    hook_sha1()
    hook_encode()
}

setImmediate(main);
