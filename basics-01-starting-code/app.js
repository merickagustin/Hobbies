const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue.Js',
            vueLink: 'https://vuejs.org/v2/guide/'
        };
    }
});

app.mount('#user-goal');