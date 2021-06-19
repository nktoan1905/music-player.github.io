const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log($('.playlist'));
const app = {
    song: [{

            name: 'Ngày mai em đi',
            singer: 'Touliver Mix Touliver Le Hieu SOOBIN',
            path: './assets/music/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.mp3',
            img: './assets/img/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.jpg'
        },
        {

            name: 'Forever love',
            singer: 'LK Binz Karik Den BigDaddy T Akayz Andree SOOBIN Yanbi',
            path: './assets/music/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.mp3',
            img: './assets/img/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.jpg'
        },
        {

            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hua Kim Tuyen Hoang Duyen',
            path: './assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3',
            img: './assets/img/Sai-Gon-Dau-Long-Qua.jpg'
        },
        {

            name: 'Ngày mai em đi',
            singer: 'Touliver Mix Touliver Le Hieu SOOBIN',
            path: './assets/music/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.mp3',
            img: './assets/img/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.jpg'
        },
        {

            name: 'Forever love',
            singer: 'LK Binz Karik Den BigDaddy T Akayz Andree SOOBIN Yanbi',
            path: './assets/music/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.mp3',
            img: './assets/img/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.jpg'
        },
        {

            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hua Kim Tuyen Hoang Duyen',
            path: './assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3',
            img: './assets/img/Sai-Gon-Dau-Long-Qua.jpg'
        },
        {

            name: 'Ngày mai em đi',
            singer: 'Touliver Mix Touliver Le Hieu SOOBIN',
            path: './assets/music/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.mp3',
            img: './assets/img/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.jpg'
        },
        {

            name: 'Forever love',
            singer: 'LK Binz Karik Den BigDaddy T Akayz Andree SOOBIN Yanbi',
            path: './assets/music/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.mp3',
            img: './assets/img/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.jpg'
        },
        {

            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hua Kim Tuyen Hoang Duyen',
            path: './assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3',
            img: './assets/img/Sai-Gon-Dau-Long-Qua.jpg'
        }
    ],
    render: function() {
        const htmls = this.song.map(song => {
            return ` <div class="song">
            <div class="thumb" style="background-image: url('${song.img}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>`;
        })
        console.log(htmls);
        $('.playlist').innerHTML = htmls.join('');
    },
    start: function() {
        this.render();
    }
}
app.start();