/*
________                ___________           .__          
\______ \   _______  __ \__    ___/___   ____ |  |   ______
 |    |  \_/ __ \  \/ /   |    | /  _ \ /  _ \|  |  /  ___/
 |    `   \  ___/\   /    |    |(  <_> |  <_> )  |__\___ \ 
/_______  /\___  >\_/     |____| \____/ \____/|____/____  >
        \/     \/                                       \/
*/

if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    Vue.config.devtools = true;
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue;
}


var app = new Vue({
    el: '#app',
    data: {
        galleryTitle: 'Black & White Photo Grid',
        images: []
    },

    mounted: function () {
        this.getImages();
    },

    methods: {
        getImages: function () {
            var numberOfImages = 3;

            for (let index = 0; index < numberOfImages; index++) {
                const element = numberOfImages;

                this.images.push({ src: './img/Massimo_Margagnoni_photo01.jpg', title: 'photo' });
            }
        }
    }
})

//https://picsum.photos/v2/list

/*
	<div>
		<img src="./img/Massimo_Margagnoni_photo01.jpg" title="Black and white photo from sea by Massimo Margagnoni">
	</div>
	<div>
		<img src="./img/Massimo_Margagnoni_photo02.jpg" title="Black and white photo from nature by Massimo Margagnoni">
	</div>
	<div>
		<img src="./img/Massimo_Margagnoni_photo03.jpg" title="Black and white photo from beach by Massimo Margagnoni">
    </div>
*/
