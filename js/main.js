class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset"),
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
  
        if (inputMinutes >= 0) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }

  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      if(minutes%5===0&&seconds===59){
        this.speak2("Осталось"+minutes+"минут!");
        this.speak2("Осталось"+minutes+"минут!");
      }

      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer__btn timer__btn--reset">
                  <span class="material-icons">timer</span>
              </button>
          `;
    }

    speak2(text) {
        const message = new SpeechSynthesisUtterance();
        message.lang = "ru-RU";
        message.text = text;
        window.speechSynthesis.speak(message)
      }

    
  }
  
  new Timer(
      document.querySelector(".timer")
  );  
  
  window.onload = function() { 
        //var userImage = document.getElementById('imageOtherUser'); 
        var hangoutButton = document.getElementsByClassName("addRecord"); 

        //hangoutButton.onclick = function() {     }; 
        
          var arr = [];
          while(arr.length < 3){
           // Math.floor(Math.random() * (10 – 4 + 1)) + 4
          
            var r = Math.floor(Math.random() * (7)) + 4;
              if(arr.indexOf(r) === -1) arr.push(r);
          }
          console.log(arr);

          var ele=document.getElementsByClassName("form-checkbox");
          for (var i = 0; i <= 10; i++){
            ele[i].checked=false;  
        }
          for (var i = 0; i <= 2; i++){
            ele[arr[i]].checked=true;  
        }
        document.getElementById('edit-totaltime').value = "8";


          hangoutButton[0].click(); 

          var ele=document.getElementsByClassName("form-checkbox");
          for(var i=6; i<=8; i++){  
             ele[i].checked=true;  
          }   
          document.getElementById('edit-totaltime').value = "8";

          var submitButton= document.getElementById('edit-submit');
         submitButton.click();

         var btnform = document.getElementById('jurspec-record-form');
          btnform.submit();

          const targetButton = document.getElementById('edit-submit');
const clickEvent = new MouseEvent('click');
targetButton.dispatchEvent(clickEvent);

        var tag = document.getElementsByClassName("btn  addRecord")
        list = new Array()
        for (var i = 0; i < tag.length; i++){
        list[i] = tag[i].innerText.replace(['\n'], ' ')}
        window.open().document.write(list.join('<br/>'))
      };