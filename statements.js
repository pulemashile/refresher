let temperature=5
if (temperature <0 ){
    console.log("its freezing")
}else if (temperature>=0&&temperature<=15)
    console.log("it cold");
else if(temperature>=16&&temperature<=25)
    console.log("its mild")
else if (temperature>25)
    console.log("its warm")

let temp=25
let condition;

switch (true) {
    case temp < 0:
        condition="its freezing";
        break;
    case temp>=  0&& temp<= 15:
        condition="its cold";
        break
    case temp>=16&& temp<=25:
            condition="its mild";
        break
        case temp>25:
            condition="its warm";
    
        break;
}

console.log("temperature:"+" "+condition)