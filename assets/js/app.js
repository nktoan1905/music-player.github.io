const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player =  $('.player');
const heading = $('header h2');
const thumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
/**
 * Render App
 * Scroll Top
 * Play / pause / seek
 * Cd rotate
 * Next/ Previous
 * Radom
 * Next / Repeat when ended
 * Active song
 * Scroll active song into view
 * Play Song when click
 */
const app = {
    currentIndex: 0,
    isPlaying: false,
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
        $('.playlist').innerHTML = htmls.join('');
    },
    defineProperty: function () {
        Object.defineProperty(this, 'currentSong', {
          get: function () {
            return this.song[this.currentIndex];
          },
        });
      },
    handleEvent: function() {
        const cdWidth = cd.offsetWidth;
        const _this = this;
        // xử lý phóng to thu nhỏ
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth/cdWidth;
        }
        // xử lý khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
            
                audio.pause();
            }else{
                audio.play();
            }
        }
        // Khi song is playing 
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');
        }
        // khi song is pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
        }
        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            const progressPercent = Math.floor(audio.currentTime/audio.duration *100);
            progress.value = progressPercent;
        }
        // xử lý khi tua song
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
    },
    loadCurrentSong: function() {

        
        heading.textContent = this.currentSong.name;
        thumb.style.backgroundImage = `url('${this.currentSong.img}')`;
        audio.src = this.currentSong.path;
        console.log(audio , heading, thumb);
    },
    start: function() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperty();
        // Lắng nghe / xử lý các sự kiện (Dom Event)
        this.handleEvent();
        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        // render playlist
        this.render();
    }
}
app.start();