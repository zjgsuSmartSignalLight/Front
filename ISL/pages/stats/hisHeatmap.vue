<template name="hisHeatmap">
	<view style="" class="mybar">
		<view>
			<view class="mycord0" style="width: 250rpx;">
				<view class="content3">当前点位</view>
				<view class="content4" style="display: flex;">
					<input class="inputcontent" @input="onKeyInput" :value="inputValue" />
					<view>
						<image style=" width: 15.11rpx;height: 15.11rpx; margin-top: 4rpx;margin-left: 60rpx;"
							:src="'/static/search2.png'">
						</image>
					</view>
				</view>

			</view>

			<uni-card class="dw" style="box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px 9px;margin-left: 15rpx;">
				<view style="display: flex;">
					<view class="dw2" style="">
						<view class="content3">选择时间：</view>
						<uni-section :title="'日期用法：' + single" type="line"></uni-section>
						<view class="xzdate" style="display: flex;">
							<uni-datetime-picker type="date" :value="single1" start="2021-3-20" end="2021-6-20"
								@change="changedate1" />
							<view class="content3" style="font-size: 9rpx;padding: 5rpx;">至</view>
							<uni-datetime-picker type="date" :value="single2" start="2021-3-20" end="2021-6-20"
								@change="changedate2" />
						</view>
					</view>



				</view>


			</uni-card>


			<view class="mycord" style="margin-left: 15.11rpx;display: flex;justify-content: space-between;text-align: center;">
				<view style="width: 277.77rpx;height: 230.77rpx;">
					<view class="content3" style="margin-top: 10.11rpx;">车辆类型统计</view>		
					<view class="charts-box" style="margin-left: 11.11rpx;">
						<qiun-data-charts type="ring2" :chartData="chartData" background="none" />
					</view>	
					
				</view>
				<view style="width: 240.77rpx;height: 200.77rpx">
					<view class="content3" style="margin-top: 20.11rpx;">特殊车辆类型统计</view>
					
					<view class="charts-box" style="height: 200.11rpx;">
						<qiun-data-charts
						type="column2"
						:chartData="chartData2"
						background="none"
						/>
					</view>	
				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "hisHeatmap",
		data() {
			return {
				PageCur: 'linechart',
				inputValue: '杭州市白杨街道学林支路',
				single1: "2022-5-20",
				single2: "2022-6-23",
				time: "1",
				car: "1",


				value: 0,
				chartData2:{
				  categories: ["垃圾车", "洒水车", "警车", "消防车","油罐车","救护车"],
				  series: [{
				    name: "数据",
				    data: [400, 250, 180,80,70,20],
					 color: "#5087ec"
				  }]
				},
				chartData: {
				 
					"series": [{
						"data": [{
								"name": "小轿车",
								"value": 11591
							},
							{
								"name": "摩托车",
								"value": 8000
							},
							{
								"name": "公交车",
								"value": 5000
							},
							{
								"name": "自行车",
								"value": 5000
							},
							{
								"name": "行人",
								"value": 2615
							},
							{
								"name": "卡车",
								"value": 2000
							},
							{
								"name": "特殊车辆",
								"value": 1000
							}
						]
					}]
				},

			}
		},
		methods: {
			onKeyInput: function(e) {
				this.inputValue = e.target.value
				console.log(this.inputValue)
			},
			open() {
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			},
			changedate1(e) {
				this.single1 = e;
				console.log("-change事件:", e);
			},
			changedate2(e) {
				this.single2 = e;
				console.log("-change事件:", e);
			},
			changedirect(e) {
				console.log('e:', e);
			},

			selecttime(index, item) {
				console.log(item)
				if (index >= 0) {
					this.time = item.value;
				} else {
					this.time = ""
				}
			},
			selectcar(index, item) {
				console.log(item)
				if (index >= 0) {
					this.car = item.value;
				} else {
					this.car = ""
				}
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.charts-box {
		width: 100%;
		height:100%;
	}
</style>
