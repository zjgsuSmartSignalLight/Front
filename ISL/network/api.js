const commoneUrl  = "http://altairxixi.top:8081/"; //公共路径 
const commoneUrl2  = "http://47.99.164.238:9090/"; //公共路径2 

// const userId = uni.getStorageSync("userinfo_Data").id //用户id

// //post请求封装
// function postRequest(url,data,type){
// 	var promise = new Promise((resolve,reject) => {
// 		var postData = data;
// 		uni.request({
// 			url:commoneUrl + url,
// 			data:postData,
// 			method:'POST',
// 			// dataType:"jsonp",
// 			// jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
// 			// jsonpCallback:"success_jsonpCallback",

// 			header:{
// 				'content-type': type || 'application/json;charset=UTF-8','token':uni.getStorageSync('token')}, //token可以不要，看后端
// 			success:function(res){
// 				resolve(res.data);
				
// 			},
// 			error:function(e)
// 			{
// 				reject('网络出错');
// 			}
// 		})
// 	});
// 	return promise;
// }

// //get请求封装
// function getRequest(url,data){
// 	var promise = new Promise((resolve,reject) => {
// 			var postData = data;
// 			uni.request({
// 				url:commoneUrl + url,
// 				data:postData,
// 				method:"GET",
// 				dataType:'json',
// 				header:{
// 					'content-type': 'application/json','token':uni.getStorageSync('token')},
// 				success:function(res){
// 					resolve(res.data);
					
// 				},
// 				error:function(e)
// 				{
// 					reject('网络出错');
// 				}
// 			});
// 	});
// 	return promise;
// }
// //put请求封装
// function putRequest(url,data,heads){
// 	var promise = new Promise((resolve,reject) => {
// 			var postData = data;
// 			uni.request({
// 				url:commoneUrl + url,
// 				data:postData,
// 				method:"PUT",
// 				dataType:'json',
// 				header:{
// 					'content-type': 'application/json','token': uni.getStorageSync('token')},
// 				success:function(res){
// 					resolve(res.data);
					
// 				},error:function(e){
// 					reject('网络出错');
// 				}
// 			});
// 	});
// 	return promise;
// }
// //del请求封装
// function delRequest(url,data){
// 	var promise = new Promise((resolve,reject) => {
// 			var postData = data;
// 			uni.request({
// 				url:commoneUrl + url,
// 				data:postData,
// 				method:"DELETE",
// 				dataType:'json',
// 				header:{
// 					'content-type': 'application/json','token': uni.getStorageSync('token')},
// 				success:function(res){
// 					resolve(res.data);
				
// 				},error:function(e){
// 					reject('网络出错');
// 				}
// 			});
// 	});
// 	return promise;
// }



//获取信号灯列表
function get_light_list(){
	var promise = new Promise((resolve,reject) => {
			var postData = '';
			uni.request({
				url:commoneUrl + 'light/list',
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;	
}

//获取交通指数
function get_msg_figure(){
	var promise = new Promise((resolve,reject) => {
			var postData = '';
			uni.request({
				url:commoneUrl + 'msg/figure',
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;	
}

//获取城市车辆
function get_msg_motorNum(){
	var promise = new Promise((resolve,reject) => {
			var postData = '';
			uni.request({
				url:commoneUrl + 'msg/motorNum',
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;	
}

//获取交通点位状态
function get_msg_passinfo(){
	var promise = new Promise((resolve,reject) => {
			var postData = '';
			uni.request({
				url:commoneUrl + 'msg/passinfo',
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;	
}


//获取统计违规项
function get_violation_statistic(){
	var promise = new Promise((resolve,reject) => {
			var postData = '';
			uni.request({
				url:commoneUrl2 + 'violation/statistic',
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;	
}


module.exports = {
    // post: postRequest,
    // get: getRequest,
	// put: putRequest,
	// del: delRequest,
	ip: commoneUrl,
	// userId : userId
	get_light_list: get_light_list,
	get_msg_figure: get_msg_figure,
	get_msg_motorNum: get_msg_motorNum,
	get_msg_passinfo: get_msg_passinfo,
	get_violation_statistic: get_violation_statistic,
	
};
