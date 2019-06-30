module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction Input() {\n    return new Promise((res, rej) => {\n        let prompt = document.getElementById(\"prompt\");\n        let appid = document.getElementById(\"appid\");\n        let submit = document.getElementById(\"prompt-submit\");\n        prompt.style = \"\";\n        submit.onclick = () => {\n            let appval = appid.value;\n            res(appval);\n            prompt.style = \"display: none;\";\n            submit.onclick = null;\n        };\n    });\n}\nexports.default = Input;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1561846290238,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
