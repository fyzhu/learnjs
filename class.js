//面向对象之设计模式
//1.工厂模式
function createPerson(name,age,job) {
    var o = new Object();
    o.name= name;
    o.age=age;
    o.job=job;
    o.sayName=function () {
        console.log(this.name)
    };
    return o;
}

var person1=createPerson('Zhuyunfeng',27,'Software Engineer')
var person2=createPerson('Yvan Zhu',28,'Developer')
