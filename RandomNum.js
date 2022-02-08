MinNum = 1
MaxNum = 100
function ranNum(){
    Answer = Math.floor(Math.random() * (MaxNum - MinNum) + MinNum);
    Random = prompt('Try to guess the number between ' + MinNum + ' to ' + MaxNum);
    ans = parseInt(Answer);
    Ran1 = parseInt(Random);
    if(Ran1 != ans){
        while(Ran1 !== ans){
            if(Ran1 < MinNum || Ran1 > MaxNum){
                alert('Incorrect !\nThe answer is ' + ans + ' !')
            }
            else if(Ran1 < ans){
                MinNum = Ran1
                Ran2 = parseInt(Ran1);
                Ran1 = prompt('Try to guess the number between ' + (Ran2 + 1) + ' and ' + MaxNum)
                if(Ran1 < MinNum || Ran1 > MaxNum){
                    alert('Incorrect !\nThe answer is ' + ans + ' !')
                }
                if(Ran1 == ans){
                    alert('Correct !\nThe answer is ' + ans + ' !')
                }
            }         
            else if(Ran1 > ans){
                MaxNum = Ran1;
                Ran1 = prompt('Try to guess the number between ' + MinNum + ' and ' + (Ran1 - 1))
                if(Ran1 < MinNum || Ran1 > MaxNum){
                    alert('Incorrect !\nThe answer is ' + ans + ' !')
                }
                if(Ran1 == ans){
                    alert('Correct !\nThe answer is ' + ans + ' !')
                }
            }          
        }
    }
}
ranNum()

