
/** 
 * 查询参数数据处理
 *
 * @param {Object} queryMap 前端传入的查询参数
 * @param {Array} regexQueryKeyList 需要添加正则验证的参数
 * @param {Object} queryInfo 处理后的查询参数
 */

function queryInfoHandle(queryMap,regexQueryKeyList, queryInfo) {
	for (let i in queryMap) {

		if (queryMap[i] != null) {
			//判断需要正则验证的 参数
			if (regexQueryKeyList.includes(i)) {
				const obj = {
					[i]: { $regex: new RegExp(queryMap[i], 'i') }
				}
				return queryInfo.$or.push(obj)
			}
			const obj = {
				[i]: queryMap[i]
			}
			queryInfo.$or.push(obj)
		}
	}
	if (queryInfo.$or.length == 0) {
		delete queryInfo.$or
	}
}


module.exports = queryInfoHandle