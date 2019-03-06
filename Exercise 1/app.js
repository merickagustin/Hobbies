new Vue({
    el: '#exercise',
    data: {
        name: 'Merick Icy Agustin',
        age: 26,
        image: 'http://www.educoporti.es/wp-content/uploads/2013/10/wwwonline.jpg'
    },
    methods: {
        random_result: function(){
            return Math.random()*1;
        }
    },
});