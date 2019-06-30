export default function Input() {
    return new Promise((res, rej) => {
        let prompt = document.getElementById("prompt");
        let appid = document.getElementById("appid");
        let submit = document.getElementById("prompt-submit");
        prompt.style = "";
        submit.onclick = () => {
            let appval = appid.value;
            res(appval);
            prompt.style = "display: none;";
            submit.onclick = null;
        };
    });
}