// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
document.write(a instanceof Array)
document.write(b instanceof Array)
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var test = [1, 2, 3, 4, 5];
for(var i=0;i<test.length;i++){
    test[i]=test[i]*2
}
document.write(test)
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var colors1=colors.join(" ")
document.write(colors1)
// case 2 output: 'Red+Green+White+Black'
var colors1=colors.join("+")
document.write(colors1)
// case 3 output: 'Red,Green,White,Black'
var colors1=colors.join(",")
document.write(colors1)

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var te = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
te.sort(function(a,b){return b-a});
document.write(te)


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

//TODO should output: 'a'
function findMost2(arr) {
    var h = {};
    var maxNum = 0;
    var maxEle = null;
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        h[a] === undefined ? h[a] = 1 : (h[a]++);
        if (h[a] > maxNum) {
            maxEle = a;
            maxNum = h[a];
        }
    }
    return maxEle;
}