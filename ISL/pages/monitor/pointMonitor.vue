<template name="pointMonitor">
	<view class="mybar">
		<view class="" style="display: flex;margin-left: 20.11rpx;">
			<view>
				<view style="display: flex;width: 279.44rpx;justify-content: space-between;">
					<view class="content3">当前点位</view>
					<view class="content4">
						<input class="inputcontent" @input="onKeyInput" :value="inputValue" />
					</view>
				</view>

				<view class="cord" style="margin-top: 11.11rpx;">
					<view class="content4" style="width: 279.44rpx;height: 20.77rpx;margin-left: -1rpx;">
						<view class="inputcontent" style="width: 100%;height: 20.77rpx; color: #FFFFFF;">实时监控</view>
					</view>
					<view>
						<!-- <image style="margin-top: 5.55rpx; width: 240.11rpx;height: 200rpx;" class="" :src="'/static/jk.jpg'">
						</image> -->
						<video id="myVideo" :src="'/static/video/video.mp4'" loop="true" autoplay="true" style="margin-top: 5.55rpx; width: 240.11rpx;height: 200rpx;"
						                    @error="videoErrorCallback" controls></video>
					</view>
				</view>

				<view class="cord" style="margin-top: 11.11rpx;height: 110.77rpx;">
					<view class="content4" style="width: 279.44rpx;height: 20.77rpx;margin-left: -1rpx;">
						<view class="inputcontent" style="width: 100%;height: 20.77rpx; color: #FFFFFF;">点位信息</view>
					</view>
					<view style="margin-left: 18.22rpx;">
						<view style="display: flex;width: 222.22rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">点位编号</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">D0001</view>
							</view>

						</view>
						<view style="display: flex;width: 222.22rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">点位位置</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">杭州市白杨街道学林支路</view>
							</view>

						</view>
						<view style="display: flex;width: 222.22rpx;justify-content: space-between;margin-top: 15px;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">监测状态</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">系统监测</view>
							</view>

						</view>
					</view>
				</view>

			</view>

			<view style="margin-left: 22.22rpx;">
				<view class="cord" style="width: 290.33rpx;height: 140.33rpx;">
					<view class="content4" style="width: 290.33rpx;height: 20.77rpx;margin-left: -1rpx;">
						<view class="inputcontent" style="width: 100%;height: 20.77rpx; color: #FFFFFF;">点位指数</view>
					</view>
					<view style="margin-left: 22.22rpx;">
						<view style="display: flex;width: 250rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">机动车流量</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">{{A1}}</view>
							</view>

						</view>
						<view style="display: flex;width: 250rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">非机动车流量</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">{{A2}}</view>
							</view>

						</view>
						<view style="display: flex;width: 250rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">拥堵指数</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">{{msg.d2}}</view>
							</view>

						</view>
						<view style="display: flex;width: 250rpx;justify-content: space-between;margin-top: 8.33rpx;">
							<view class="content3" style="font-size: 9.11rpx;margin-top: 5.55rpx;">失衡指数</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 8rpx;margin-top: 2.22rpx;">{{msg.d3}}</view>
							</view>

						</view>
					</view>
				</view>

				<view class="cord" style="width: 290.33rpx;height: 230.11rpx;margin-top: 11.11rpx;">
					<view class="content4" style="width: 290.33rpx;height: 20.77rpx;margin-left: -1rpx;">
						<view class="inputcontent" style="width: 100%;height: 20.77rpx; color: #FFFFFF;">点位数据</view>
					</view>
					<view style="margin-top: 10.22rpx; margin-left: 22.22rpx; display: flex;width: 230.77rpx;justify-content: space-between;">
						<view class="inputcontent" style=" color: #FFFFFF;">机动车总数：{{A1}}</view>
						<view class="inputcontent" style=" color: #FFFFFF;">非机动车总数：{{A2}}</view>
					</view>
					<view class="charts-box" style="margin-top: 16.66rpx;">
						<qiun-data-charts type="ring" :chartData="chartData" background="rgba(19, 64, 102, 0.9)" />
					</view>
				</view>

			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "pointMonitor",
		data() {
			return {
				inputValue: '杭州市白杨街道学林支路',
				//交通指数
				msg:{
					d1:0,   //违规指数
					d2:0,   //拥堵指数
					d3:0,   //失衡指数
				},
				//车辆数据
				carData:{
					A1:0,           //机动车总数
					A2:0,           //非机动车总数
					man:0,          //行人
					bicycle:0,      //自行车
					car:0,          //小汽车
					bus:0,          //公交车
					truck:0,        //卡车
					motorcycle:0,   //摩托车
					
				},
				A1:0,
				A2:0,
				chartData: {
					
				 series: [{
						"data": [{
								"name": "行人",
								"value": 50
							},
							{
								"name": "自行车",
								"value": 30
							},
							{
								"name": "小汽车",
								"value": 20
							},
							{
								"name": "公交车",
								"value": 18
							},
							{
								"name": "卡车",
								"value": 8
							},
							{
								"name": "摩托车",
								"value": 8
							}
						]
					}],
				},
			}
		},
		mounted:function(){
			this.get_msg_figure();
			this.get_msg_motorNum();
		},
		methods: {
			onKeyInput: function(e) {
				this.inputValue = e.target.value
				console.log(this.inputValue)
			},
			//获取交通指数
			get_msg_figure:function(){
				this.api.get_msg_figure().then(res=>{
					// console.log("msg",JSON.stringify(res["违规指数"]));
					console.log("交通指数:",res);
					this.msg.d1 = JSON.stringify(res["违规指数"]);
					this.msg.d2 = JSON.stringify(res["拥堵指数"]);
					this.msg.d3 = JSON.stringify(res["失衡指数"]);
				})
			},
			//获取车辆总数
			get_msg_motorNum:function(){
				this.api.get_msg_motorNum().then(res=>{
					console.log('车辆总数',res)
					// console.log("特殊车辆",res["特殊车辆"]["total"])
					this.$data.A1 = res["机动车"]
					this.$data.A2 = res["非机动车"]
				})
			},
		}
	}
</script>

<style>
	page {

		background-color: rgb(11, 37, 109);
		
	}

	.charts-box {
		width: 100%;
		height: 166.66rpx;
	}
</style>
