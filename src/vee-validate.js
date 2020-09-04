import Vue from "vue";
import { extend, localize } from "vee-validate";
import { required, email, min, max } from "vee-validate/dist/rules";
import vi from "vee-validate/dist/locale/vi.json";
import en from "vee-validate/dist/locale/en.json";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);
//install max rule
extend("max",max);



// Install English and Arabic localizations.
localize({
    en: {
        messages: en.messages,
        names: {
            email: "E-mail Address",
            password: "Password",
            phone: "Phone Number"
        },
        fields: {
            password: {
                min: "{_field_} is too short, you want to get hacked?"
            },
            phone: {
                max: "Phone number of 10 mumber"
            }
        }
    },
    vi: {
        messages: vi.messages,
        names: {
            email: "Địa chỉ email",
            password: "Mật khẩu",
            phone: "Số điện thoại"
        },
        fields: {
            password: {
                min: "Mật khẩu quá ngắn, bạn có muốn thay đổi?"
            },
            phone: {
                max: "Số điện thoại gồm 10 số"
            }
        }
    }
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
    get() {
        return LOCALE;
    },
    set(val) {
        LOCALE = val;
        localize(val);
    }
});
