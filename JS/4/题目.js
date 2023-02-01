// 1
class YiDeng {
    static str = '京程一灯';
      sayStr = ()=>{
      throw new Error('Need to implement');
    }
  }
  class Student extends YiDeng(){
    constructor(){
      super();
    }
    sayStr(){
      console.log(Student.str);
    }
  }
  const laoyuan = new Student();
  console.log(Student.str);
  laoyuan.sayStr();
  
  //A.undefiend， 报错Need to implement
  // B. undefiend, 京程一灯
  // C. undefined, undefined
  // D.京程一灯， 报错Need to implement
  // E. 京程一灯，京程一灯
  // F.京程一灯，undefined
  // G. str is not defined, 京程一灯