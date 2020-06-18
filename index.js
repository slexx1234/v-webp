class WebP {
    constructor() {
        this.isSupportWebp = false;
    }

    async install(Vue, config) {
        this.isSupportWebp = await this.checkWebP('lossy');

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

    checkWebP(feature) {
      return new Promise((resolve) => {
        var kTestImages = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        var img = new Image();
        img.onload = function () {
            var result = (img.width > 0) && (img.height > 0);
            resolve(result)
        };
        img.onerror = function () {
            console.warn('This browser not support Webp!');
            resolve(false)
        };
        img.src = "data:image/webp;base64," + kTestImages[feature];
      })
  }
}

module.exports = new WebP();
