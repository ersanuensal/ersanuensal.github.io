if (!self.define) {
    let e, i = {};
    const a = (a, s) => (a = new URL(a + ".js", s).href, i[a] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = i, document.head.appendChild(e)
        } else e = a, importScripts(a), i()
    })).then((() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (s, c) => {
        const d = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[d]) return;
        let r = {};
        const n = e => a(e, d),
            f = {
                module: {
                    uri: d
                },
                exports: r,
                require: n
            };
        i[d] = Promise.all(s.map((e => f[e] || n(e)))).then((e => (c(...e), r)))
    }
}
define(["./workbox-01a46df5"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "css/styles.css",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    }, {
        url: "images/icons/icon-192x192.png",
        revision: "bf108e87f2f5e6e0e6cc8c55f53e3dd5"
    }, {
        url: "images/icons/icon-512x512.png",
        revision: "a6aaa96254940864f67696a1ef4dcd37"
    }, {
        url: "index.html",
        revision: "bba97d389571ceacf2147740ec3d50e1"
    }, {
        url: "js/app.js",
        revision: "dcb8f8bb305db0737004812232c4e6d2"
    }, {
        url: "manifest.json",
        revision: "344b48aa6706e373d6391675dd0da694"
    }, {
        url: "pwa-1/css/style.css",
        revision: "baca23965b4d6526ab53d75af90591fc"
    }, {
        url: "pwa-1/css/styles.css",
        revision: "4c4f58908e66af1d2bfeff0c1d9e9ea0"
    }, {
        url: "pwa-1/images/coffee1.jpg",
        revision: "5a4cc9384ba359f44f162f517bbd80cd"
    }, {
        url: "pwa-1/images/coffee2.jpg",
        revision: "cd0614e93ed23646618b4123d4e206e8"
    }, {
        url: "pwa-1/images/coffee3.jpg",
        revision: "25e0a8ef2a68ac6bfdbe9e7db24d9505"
    }, {
        url: "pwa-1/images/coffee4.jpg",
        revision: "63d9d9dcd448e1bbf79278fb47b5d168"
    }, {
        url: "pwa-1/images/coffee5.jpg",
        revision: "121f781999e144f180251e50fc07d2e6"
    }, {
        url: "pwa-1/images/coffee6.jpg",
        revision: "af2546b17d6ba778d515855ea2f76e6d"
    }, {
        url: "pwa-1/images/coffee7.jpg",
        revision: "23ede40dd9c5928ede28a900fcd4993d"
    }, {
        url: "pwa-1/images/coffee8.jpg",
        revision: "14dcdcaa346c732e817c2ee3ebd0339a"
    }, {
        url: "pwa-1/images/coffee9.jpg",
        revision: "e522dd7f36632f687003253dea28b249"
    }, {
        url: "pwa-1/images/icons/icon-128x128.png",
        revision: "3eeffc003410a7dee11a7b69f5b7860c"
    }, {
        url: "pwa-1/images/icons/icon-144x144.png",
        revision: "d5715bf8909f937e9fa446356a8bea4b"
    }, {
        url: "pwa-1/images/icons/icon-152x152.png",
        revision: "250be01822fcb5f82bc878525a94a3b1"
    }, {
        url: "pwa-1/images/icons/icon-192x192.png",
        revision: "626d74523880cbd5d34c91b8191727ea"
    }, {
        url: "pwa-1/images/icons/icon-384x384.png",
        revision: "dc5b7365ea3193a032a451647bd3c03b"
    }, {
        url: "pwa-1/images/icons/icon-512x512.png",
        revision: "2a0c4e51250d739c38e608ee06f672de"
    }, {
        url: "pwa-1/images/icons/icon-72x72.png",
        revision: "92d233b5837c22ae418c3b2913e68516"
    }, {
        url: "pwa-1/images/icons/icon-96x96.png",
        revision: "03914f7bda64d15d7cb773f34949c321"
    }, {
        url: "pwa-1/index.html",
        revision: "6c35105ca001e21504aa33c5d1be56d3"
    }, {
        url: "pwa-1/js/app.js",
        revision: "a476606a8959ec52cbd8e903e954a2b4"
    }, {
        url: "pwa-1/manifest.json",
        revision: "cce48138a93901bb77e498e52534533d"
    }, {
        url: "pwa-1/README.md",
        revision: "043825d62ef82458e1044243d6c10388"
    }, {
        url: "pwa-1/serviceWorker.js",
        revision: "cad91a4abb095df553e4e1bbb4150de5"
    }, {
        url: "pwa-2/index.html",
        revision: "3fbcaf5bab12d0edc3c5478474110684"
    }, {
        url: "pwa-2/js/app.js",
        revision: "22d5496131b73a0e3608dab41ef8d62f"
    }, {
        url: "pwa-3/index.html",
        revision: "0bc1c5db50413d2c8d5e76f1b06db2c3"
    }, {
        url: "pwa-3/js/app.js",
        revision: "f24f6157bb446375d18ed88e96241597"
    }, {
        url: "pwa-4/index.html",
        revision: "246cc49d3a1f9827ed5c8695bdaf2858"
    }, {
        url: "pwa-4/js/app.js",
        revision: "82e634f9f5c81905d7bcca10ec0ffa4f"
    }, {
        url: "pwa-5/index.html",
        revision: "d9a2090a4e81e4fa8cf916545404a17d"
    }, {
        url: "pwa-5/js/app.js",
        revision: "4971beb6d257f36943888b45c91ff726"
    }, {
        url: "serviceWorker.js",
        revision: "44b4e29bc6cbd5e1fa3fa434c21ede73"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map