//todo singleton, cb list로 관리 this.cb 멤버변수가 detect안에서 어떻게 작동하는가?

class HrefDetectionService {
  private constructor() {}

  private oldHref?: string;
  private interval?: any;

  public static readonly instance = new HrefDetectionService();

  private callBackList: {
    id: number;
    callBack: (location: Location) => void;
  }[] = [];

  public addCallBack = (callBack: (location: Location) => void) => {
    const id = new Date().getTime();
    this.callBackList.push({ id, callBack });
    return id;
  };
  public removeCallBack = (id: number) => {
    this.callBackList.filter((item) => item.id !== id);
  };

  public readonly start = () => {
    this.oldHref = "";

    const detect = () => {
      if (this.oldHref != window.location.href) {
        this.callBackList.forEach((item) => {
          item.callBack(window.location);
        });
        this.oldHref = window.location.href;
      }
    };

    this.interval = setInterval(function () {
      detect();
    }, 100);
  };

  public readonly stop = () => {
    this.interval && clearInterval(this.interval);
    this.interval = undefined;
    this.oldHref = undefined;
  };
}
export default HrefDetectionService;
