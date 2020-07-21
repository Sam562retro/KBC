var notAtem = 0, Atm = 0, Rights = 0, Wrongs = 0, Turn = 0;
var x;
function timer() {
  var a = 10;
  x = setInterval(function () {
    document.getElementById("dis").style.display = "none";
    a = a - 1;
    document.getElementById("time").innerHTML = a;
    if (a == 0) {
      clearInterval(x);
      document.getElementById("q").innerHTML = "Time up!";
      document.getElementById("a").disabled = true;
      document.getElementById("b").disabled = true;
      document.getElementById("c").disabled = true;
      document.getElementById("d").disabled = true;
      document.getElementById("bod").style.backgroundColor = "red";
      document.getElementById("dis").style.display = "block";
      document.getElementById("a").style.opacity = 0.5;
      document.getElementById("b").style.opacity = 0.5;
      document.getElementById("c").style.opacity = 0.5;
      document.getElementById("d").style.opacity = 0.5;
      notAtem = notAtem + 1;
      Turn = Turn + 1;
    }
  }, 1000)
}
var question, a, b, c, d, correct_ans;
function ques(z) {
  switch (z) {
    case 0:
      question = "The language of Lakshadweep. a Union Territory of India, is";
      a = "Tamil";
      b = "Hindi";
      c = "Malyalam";
      d = "Telugu";
      correct_ans = c;
      break;
    case 1:
      question = "The International Literacy Day is observed on";
      a = "Sep 8";
      b = "Nov 28";
      c = "May 2";
      d = "Sep 22";
      correct_ans = a;
      break;
    case 2:
      question = "In which group of places the Kumbha Mela is held every twelve years?";
      a = "Ujjain. Purl; Prayag. Haridwar";
      b = "Prayag. Haridwar, Ujjain,. Nasik";
      c = "Rameshwaram. Purl, Badrinath. Dwarika";
      d = "Chittakoot, Ujjain, Prayag,'Haridwar";
      correct_ans = b;
      break;
    case 3:
      question = "Bahubali festival is related to";
      a = "Islam";
      b = "Hinduism";
      c = "Buddhism";
      d = "Jainism";
      correct_ans = d;
      break;
    case 4:
      question = "Which day is observed as the World Standards  Day?";
      a = "June 26";
      b = "Oct 14";
      c = "Nov 15";
      d = "Dec 2";
      correct_ans = b;
      break;
    case 5:
      question = "Which of the following was the theme of the World Red Cross and Red Crescent Day?";
      a = "'Dignity for all - focus on women'";
      b = "'Dignity for all - focus on Children'";
      c = "'Focus on health for all'";
      d = "'Nourishment for all-focus on children'";
      correct_ans = b;
      break;
    case 6:
      question = "Who is the author of 'Manas Ka-Hans' ?";
      a = "Khushwant Singh";
      b = "Prem chand";
      c = "Jayashankar Prasad";
      d = "Amrit Lal Nagar";
      correct_ans = c;
      break;
    case 7:
      question = "The death anniversary of which of the following leaders is observed as Martyrs' Day?";
      a = "Smt.Indira Gandhi";
      b = "PI.Jawaharlal Nehru";
      c = "Mahatma Gandhi";
      d = "Lal Bahadur Shastri";
      correct_ans = d;
      break;
    case 8:
      question = "September 27 is celebrated as";
      a = "Teacher's Day";
      b = "National Integration Day";
      c = "World Tourism Day";
      d = "International Literacy Day";
      correct_ans = c;
      break;
    case 9:
      question = "Who is the writer of the epic 'Meghdoot' ?";
      a = "Vishakadatta";
      b = "Valmiki";
      c = "Banabhatta";
      d = "Kalidas";
      correct_ans = d;
      break;
    case 10:
      question = "'Good Friday' is observed to commemorate the event of";
      a = "birth of Jesus Christ";
      b = "birth of' St. Peter";
      c = "crucification 'of Jesus Christ";
      d = "rebirth of Jesus Christ";
      correct_ans = c;
      break;
    case 11:
      question = "Who is the author of the book 'Amrit Ki Ore' ?";
      a = "Mukesh Kumar";
      b = "Narendra Modi";
      c = "Upendra Nath";
      d = "Nirad C.choudhary";
      correct_ans = b;
      break;
    case 12:
      question = "Which of the following is observed as Sports Day every year ?";
      a = "22nd April";
      b = "26th July";
      c = "29th August";
      d = "2nd October";
      correct_ans = c;
      break;
    case 13:
      question = "World Health Day is observed on";
      a = "Apr 7";
      b = "Mar 6";
      c = "May 15";
      d = "Apr 28";
      correct_ans = a;
      break;
    case 14:
      question = "Pongal is a popular festival in which state ?";
      a = "Karnataka";
      b = "Kerala";
      c = "Tamil Nadu";
      d = "Andhra Pradesh";
      correct_ans = c;
      break;
  }
}
var k;
function display() {
  if (Turn == 5) {
    document.getElementById("noAtm").innerHTML = notAtem + " are Not Attempted" ;
    document.getElementById("atm").innerHTML = Atm + " are Attempted";
    document.getElementById("cor").innerHTML = Rights + " are Right";
    document.getElementById("wor").innerHTML = Wrongs + " are Wrong";
    document.getElementById("ques").style.display = "none";
    document.getElementById("thanks").style.display = "block";
    document.getElementById("bod").style.backgroundColor = "darkblue";
    document.getElementById("tit").innerHTML = "KBC | Thanks";
  }
  else {
    timer()
    k = Math.floor(Math.random() * Math.floor(15));
    ques(k);
    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;
    document.getElementById("d").innerHTML = d;
    document.getElementById("q").innerHTML = question;
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
    document.getElementById("bod").style.backgroundColor = "darkblue";
    document.getElementById("a").style.opacity = 1;
    document.getElementById("b").style.opacity = 1;
    document.getElementById("c").style.opacity = 1;
    document.getElementById("d").style.opacity = 1;
    Turn = Turn + 1;
  }
}
function check(s) {
  if (correct_ans == s) {
    document.getElementById("q").innerHTML = "right! you are.";
    document.getElementById("bod").style.backgroundColor = "green";
    clearInterval(x);
    document.getElementById("dis").style.display = "block";
    document.getElementById("dis").value = "NEXT >>";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("a").style.opacity = 0.5;
    document.getElementById("b").style.opacity = 0.5;
    document.getElementById("c").style.opacity = 0.5;
    document.getElementById("d").style.opacity = 0.5;
    Rights = Rights + 1;
    Atm = Atm + 1;
  }
  else {
    document.getElementById("q").innerHTML = "wrong! you are.";
    document.getElementById("bod").style.backgroundColor = "red";
    clearInterval(x);
    document.getElementById("dis").style.display = "block";
    document.getElementById("dis").value = "NEXT >>";
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("a").style.opacity = 0.5;
    document.getElementById("b").style.opacity = 0.5;
    document.getElementById("c").style.opacity = 0.5;
    document.getElementById("d").style.opacity = 0.5;
    Wrongs = Wrongs + 1;
    Atm = Atm + 1;
  }
}
