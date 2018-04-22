class WebP {
    constructor() {
        this.isSupportWebp = false;

        try {
            this.isSupportWebp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
        } catch(e) {
            console.warn('This browser not support Webp!');
        }
    }

    install(Vue, config) {
        Vue.prototype.$webp = this.isSupportWebp;

        Vue.directive('webp', (el, binding, vnode) => {
            if (vnode.tag !== 'img') {
                return
            }
            if (this.isSupportWebp) {
                try {
                    el.src = binding.value.toString().replace(/(\.jpg|\.png)/g, '.webp')
                } catch(e) {
                    console.error(e);
                }

                document.querySelector('html').classList.add('webp');
            }
        });
    }
}

module.exports = new WebP();
