function checkGrade(){
    var studentScore = Number(score.value)
    var mySong = new Audio("excellent.wav")
    var cSong = new Audio("credit.mp3")
    var dSong = new Audio("average.mp3")
    var fSong = new Audio("fail.m4a")

if(studentScore==""){
    disp.innerText = invalid
}   
else if(studentScore<=100 && studentScore>70){
    disp.innerText = "A Excellent!"
    disp.style.color = "gold"
    fSong.pause("fail.m4a")
    mySong.play("excellent.wav")
}
else if(studentScore<=70 && studentScore>60){
    disp.innerText = "B good"
    disp.style.color = "lightblue"
    mySong.play("excellent.wav")
}
else if(studentScore<=60 && studentScore>40){
    disp.innerText = "C try harder"
    disp.style.color = "orange"
    cSong.play("credit.mp3")
    mySong.pause("excellent.wav")
}
else if(studentScore<=40 && studentScore>30){
    disp.innerText = "D fair"
    disp.style.color = ""
    dSong.play("average.mp3")
}
else if(studentScore<=30 && studentScore>0){
    disp.innerText = "F fail"
    disp.style.color = "red"
    fSong.play("fail.m4a")

}
else if(studentScore>100 || studentScore<0){
    disp.innerText = "invalid input!"
    disp.style.color = "red"
}
// else if(studentScore<0){
//     disp.innerText =  "invalidinput"
// }
else{
    alert("not a number")
}
}