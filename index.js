
var WebP = module.exports = {}

WebP.isSupportWebp = false

try {
    WebP.isSupportWebp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0)
} catch(e) {
    console.warn('This browser not support Webp!')
}

WebP.install = function (Vue, config) {
    Vue.prototype.$webp = WebP.isSupportWebp;

    Vue.directive('webp', function (el, binding, vnode) {
        if (vnode.tag !== 'img') {
            return
        }
        if (WebP.isSupportWebp) {
            try {
                el.src = binding.value.toString().replace(/(\.jpg|\.png)/g, '.webp')
            } catch(e) {
                console.error(e)
            }

            document.querySelector('html').classList.add('webp')
        }
    })
}
