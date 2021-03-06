const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player =  $('.player');
const heading = $('header h2');
const thumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const btnRandom = $('.btn-random');

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
    isRandom: false,
    // song: [{

    //         name: 'Ngày mai em đi',
    //         singer: 'Touliver Mix Touliver Le Hieu SOOBIN',
    //         path: './assets/music/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.mp3',
    //         img: './assets/img/Ngay-Mai-Em-Di-Touliver-Mix-Touliver-Le-Hieu-SOOBIN.jpg'
    //     },
    //     {

    //         name: 'Forever love',
    //         singer: 'LK Binz Karik Den BigDaddy T Akayz Andree SOOBIN Yanbi',
    //         path: './assets/music/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.mp3',
    //         img: './assets/img/Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-SOOBIN-Yanbi.jpg'
    //     },
    //     {

    //         name: 'Sài Gòn Đau Lòng Quá',
    //         singer: 'Hua Kim Tuyen Hoang Duyen',
    //         path: './assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3',
    //         img: './assets/img/Sai-Gon-Dau-Long-Qua.jpg'
    //     }
    // ],
    song: [
        {
          name: 'Nevada',
          singer: 'Vicetone',
          path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
          img: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
        },
        {
          name: 'Light It Up',
          singer: 'Robin Hustin x TobiMorrow',
          path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
          img: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
        },
        {
          name: 'Yoru ni kakeru',
          singer: 'YOASOBI',
          path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
          img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
        },
        {
          name: 'Muộn rồi mà sao còn',
          singer: 'Sơn Tùng M-TP',
          path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
          img: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
        },
        {
          name: 'See You Again',
          singer: 'Charlie Puth ft Wiz Khalifa',
          path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
          img: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
        },
       
        {
          name: 'Symphony',
          singer: 'Clean Bandit',
          path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
          img: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
        },
        {
          name: 'Waiting For Love',
          singer: 'Avicii',
          path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
          img: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
        },
        {
          name: 'Alone',
          singer: 'Marshmello',
          path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
          img: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
        },
        {
          name: 'Something Just Like This',
          singer: 'The Chainsmokers & Coldplay',
          path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
          img: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
        },
        {
          name: 'Sugar',
          singer: 'Maroon 5',
          path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
          img: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
        },
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
        // xử lý cd quay và dừng
        const cdThumbAnimate = thumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
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
            cdThumbAnimate.play();
        }
        // khi song is pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            const progressPercent = Math.floor(audio.currentTime/audio.duration *100);
            progress.value = progressPercent;
        }
        // xử lý khi tua xong
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
        // xử lý khi next song
        btnNext.onclick = function (){
            if(!_this.isRandom){
                _this.nextSong();
                audio.play();
            }else{
                _this.random();
                console.log(_this.currentIndex);
                _this.loadCurrentSong();
                audio.play();
            }
        }
        // xử lý khi click nút prev
        btnPrev.onclick = function (){
            _this.prevSong();
            audio.play();
        }
        // xử lý khi nhấn random 
        btnRandom.onclick = function (){
            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle('active');
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        thumb.style.backgroundImage = `url('${this.currentSong.img}')`;
        audio.src = this.currentSong.path;
    },
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.song.length){
            this.currentIndex = 0;
        } 
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.song.length -1;
        } 
        this.loadCurrentSong();
    },
    random: function() {
        let newCurrentIndex;
        do{
            newCurrentIndex = Math.floor(Math.random() * this.song.length);
        }while(newCurrentIndex == this.currentIndex)
        this.currentIndex = newCurrentIndex;
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