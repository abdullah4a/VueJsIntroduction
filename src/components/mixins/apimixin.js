import Vue from "vue";
import axios from "axios";
Vue.use(axios);
export default {
    name: "Home",
    components: {},
    props: {
        msg: String,
    },
    data() {
        return {
            employee: undefined,
        };
    },
    mounted() {
        axios
            .get("https://dummy.restapiexample.com/api/v1/employees")
            .then((resp) => {
                // console.warn(resp.data.data);
                this.employee = resp.data.data;
            })
            .catch((err) => {
                console.error(err);
            });
    },
};