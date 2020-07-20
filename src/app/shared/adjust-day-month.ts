export class AdjustDayAndMonth{

  get day(){
    if ((new Date().getDate()) < 10){
      return `0${new Date().getDate()}`;
    }
    else{
      return `${new Date().getDate()}`;
    }
  }

  get month(){
    if ((new Date().getMonth() + 1) < 10){
      return `0${new Date().getMonth() + 1}`;
    }else{
      return `${new Date().getMonth() + 1}`;
    }
  }
}
