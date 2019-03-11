/**
 * [isEmpty 判断字符串是否为空]
 * @param  {[string]}  str [字符串]
 */
const isStrEmpty = (str: string) => {
    if(typeof str === "undefined" || str === null || str.trim() === ""){
        return true;
    }else{
        return false;
    }
}

export {
  isStrEmpty
}