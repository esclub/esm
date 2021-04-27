import esm from "https://cdn.skypack.dev/@esclub/esm@0.0.2"
const css = `
.my-counter-button {
    color:blue;
}
`
const template = `
<div>
    <button class="my-counter-button" @click="onClickCounterButton" >click({{count}})</button>
</div>
`
const data = function () {
    return {
        count:0 ,
    }
}
const methods = {
    onClickCounterButton: function () {
        this.increase()
    },
    increase: function () {
        const vm = this
        vm.count++
    }
}
const beforeMount = function () {
    esm.appendCSS(css)
}
export default {
    name: "my-counter",
    template,
    data,
    methods,
    beforeMount,
}