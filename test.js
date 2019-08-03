/*let val='tom';
let obj={};
Object.defineProperty(obj,'name',{
    set(newVal){
        val=newVal;
        console.log('属性被修改');
    },
    get(){
        console.log('属性被获得!');
        return val;
    }
});
obj.name='liuhuan';
console.log(obj.name);*/

/*let obj={name: 'liuhuan', age: 20, address: '1234kkk'};
obs(obj);
console.log(obj.name);
obj.name='llll';
console.log(obj.name);
function obs(obj) {
    if (!obj || typeof obj !== 'object') return;
    let keys = Object.keys(obj);
    keys.forEach(key => {
        defined(obj,key,obj[key]);
    })
}
var  val1;
function defined(obj, key, val) {
    Object.defineProperty(obj, key, {
        set(v) {
            console.log(`设置${key}值`);
             val= v;
        },
        get() {
            console.log(`获得${key}值！`);
            return val;
        }
    })
}*/
let obj = {
    myname: 'liuhuan',
    get myname() {
        console.log('get');
        return this.name;
    },
    set myname(othername) {
        console.log('set');
        this.name = othername;
    }
};
obj.myname='123';
console.log(obj.myname);