

//code for timer here --------------------------->

const startingMinutes = 1;
let time = startingMinutes * 90;

const countdownEl = document.getElementById('countdown');


this.$myrestartButton = $(".myrestart");
this.$myrestartButton.on("click", ()=>{
    location.reload();

})

var intervalId=setInterval(updateCountdown,1000)

function updateCountdown() {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  
  seconds = seconds < 10 ? '0' + seconds : seconds ;
  
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
  if(minutes==0 && seconds==0){
      //console.log("time up")
      clearInterval(intervalId)
      this.$mymodal = $(".mymodal");
      this.$myoverlay = $(".my-modal-overlay");
      this.$myoverlay.show();
      this.$mymodal.fadeIn("slow");

  }
  
}


(function(){
    
    var Memory = {
  
        init: function(cards){
            this.$game = $(".game");
            this.$modal = $(".modal");
            this.$overlay = $(".modal-overlay");
            this.$restartButton = $("button.restart");
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
        },
  
        shuffleCards: function(cardsArray){
            this.$cards = $(this.shuffle(this.cardsArray));
        },
  
        setup: function(){
            this.html = this.buildHTML();
            this.$game.html(this.html);
            this.$memoryCards = $(".card");
            this.paused = false;
            this.guess = null;
            this.binding();
        },
  
        binding: function(){
            this.$memoryCards.on("click", this.cardClicked);
            this.$restartButton.on("click", $.proxy(this.reset, this));
        },
        // kinda messy but hey
        cardClicked: function(){
            var _ = Memory;
            var $card = $(this);
            if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
                $card.find(".inside").addClass("picked");
                if(!_.guess){
                    _.guess = $(this).attr("data-id");
                } else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
                    $(".picked").addClass("matched");
                    _.guess = null;
                } else {
                    _.guess = null;
                    _.paused = true;
                    setTimeout(function(){
                        $(".picked").removeClass("picked");
                        Memory.paused = false;
                    }, 600);
                }
                if($(".matched").length == $(".card").length){
                    _.win();
                }
            }
        },
  
        win: function(){
            this.paused = true;
            setTimeout(function(){
                Memory.showModal();
                Memory.$game.fadeOut();
            }, 1000);
        },
  
        showModal: function(){
            clearInterval(intervalId)
            this.$overlay.show();
            this.$modal.fadeIn("slow");
        },
  
        hideModal: function(){
            this.$overlay.hide();
            this.$modal.hide();
        },
  
        reset: function(){
            this.hideModal();
            this.shuffleCards(this.cardsArray);
            this.setup();
            location.reload();
            
        },
  
        // Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
        shuffle: function(array){
            var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
            }
            return array;
        },
  
        buildHTML: function(){
            var frag = '';
            this.$cards.each(function(k, v){
                frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
                <div class="front"><img src="'+ v.img +'"\
                alt="'+ v.name +'" /></div>\
                <div class="back"><img src="images/logo.jpg"\
                alt="Codepen" /></div></div>\
                </div>';
            });
            return frag;
        }
    };
  
    var cards = [
      {
          name: "1",
          img: "images/1.jpg",
          id: 1,
      },
      {
          name: "2",
          img: "images/2.jpg",
          id: 2
      },
      {
          name: "3",
          img: "images/3.jpg",
          id: 3
      },
      {
          name: "4",
          img: "images/4.jpg",
          id: 4
      }, 
      {
          name: "5",
          img: "images/5.jpg",
          id: 5
      },
      {
          name: "6",
          img: "images/6.jpg",
          id: 6
      },
      {
          name: "7",
          img: "images/7.jpg",
          id: 7
      },
      {
          name: "8",
          img: "images/8.jpg",
          id: 8
      },
      {
          name: "9",
          img: "images/9.jpg",
          id: 9
      },
      {
          name: "10",
          img: "images/10.jpg",
          id: 10
      },
      {
          name: "11",
          img: "images/11.jpg",
          id: 11
      },
      {
          name: "12",
          img: "images/12.jpg",
          id: 12
      }
    ];
   
    Memory.init(cards);
  
  
  })();
