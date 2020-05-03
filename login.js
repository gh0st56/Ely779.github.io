function Login(){
        var valid = "WyJkIiwiZiIsInYiLCJhIiwiYSIsImZnIiwibWluIl0=";
        var decod = atob(valid);
        var names = eval(decod);
        var name = prompt("Enter your name", "");
        if(name == names[3]+names[0]+names[6]){
                alert("Welcome "+names[3]+names[0]+names[6]);
        }
        else{
                alert("Please provide your name!");
        }

}
