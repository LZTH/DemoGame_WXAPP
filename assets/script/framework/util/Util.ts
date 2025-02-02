
/**
 *工具类
 *定义了一些通用的函数
 * @author guan
 * @date 2021/07/17
 * @export
 * @class Util
 */
const toString = Object.prototype.toString

export default class Util {

    /**
     *计算格网点
     *
     * @author guan
     * @date 2021/07/17
     * @static
     * @param {(cc.Vec2 | cc.Vec3)} pos 实际坐标
     * @param {number} width 单个格子的宽度
     * @param {number} height 单个格子的高度
     * @returns {*}  {cc.Vec2} (col,row, 0)
     * @memberof Util
     */
    public static girdPos(pos: cc.Vec2 | cc.Vec3, width: number, height: number): cc.Vec3 {
        let row: number = Math.floor(pos.y / height);
        let col: number = Math.floor(pos.x / width);
        return cc.v3(col, row, 0);
    }
    // 判断普通对象
    public static isPlainObject(val: any): val is Object {
        return toString.call(val) === '[object Object]'
    }

    public static transRequest(data: any): any {
        // 判断普通对象（不包含Blob，formData之类） 对普通对象进行转换
        // if (this.isPlainObject(data)) {
        //     return JSON.stringify(data)
        // } else {
        //     return data
        // }
        return data;
    }

    public static transData(data: any): any {
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data)
            } catch (e) {
                console.log('转换失败:', e)
            }
        }

        return data
    }
}