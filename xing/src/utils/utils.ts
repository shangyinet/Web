import { time } from "console";
import moment from "moment";
// 时间工具
export class TimeUtils {
  static TimeFormatYMDHMS = "YYYY-MM-DD HH:mm:ss";
  static TimeFormatYMD = "YYYY-MM-DD";

  //   当前时间戳
  static currentTimestamp() {
    return moment().unix();
  }
//   时间戳转标准时间
  static convertTimestampToTime(timestamp: number, format: string) {
    return moment(timestamp).format(format);
  }
//   标准时间转时间戳
  static convertTimeToTimestamp(time: string) {
    return moment(time).valueOf();
  }
}
