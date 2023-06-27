function rotateHands() {
    var time = getSecondsSinceStartOfDay();
  
    var secondsHand = document.getElementById('seconds');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');
  
    var secondsRotation = (time % 60) * 6;
    var minutesRotation = ((time / 60) % 60) * 6;
    var hourRotation = ((time / 3600) % 12) * 30;
  
    secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
    minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
  }
  
  function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
      new Date().getMinutes() * 60 +
      new Date().getHours() * 3600;
  }
  
  setInterval(rotateHands, 1000);
  