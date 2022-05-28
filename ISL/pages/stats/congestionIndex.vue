<template name="congestionIndex">
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
			

			<view class="mycord" style="margin-left: 15.11rpx;">
				<view class="staticbarview">
					<view class="staticbar-item " @click="NavChange" data-cur="linechart"
						:style="PageCur=='linechart'?'background-color:rgb(17, 62, 103);':''">
						<view class="content3" style="width: 300rpx;">折线图</view>
					</view>
					<view class="staticbar-item " @click="NavChange" data-cur="listchart"
						:style="PageCur=='listchart'?'background-color:rgb(17, 62, 103);':''">
						<view class="content3" style="width: 300rpx;">表格</view>
					</view>
				</view>

				<view v-if="PageCur=='linechart'">
					<view class="chartview" style="">
						<view class="charts-box">
							<qiun-data-charts type="mydemotype" :chartData="chartData" background="#133a64" />
						</view>
					</view>
				</view>
				
				<view v-if="PageCur=='listchart'">
					<view class="chartview" style="height: 180rpx;">
						<view>
							<view class="listchart" style="border-radius: 5rpx;background-color: rgb(18, 34, 69);">
								<view class="content3">时间</view>
								<view class="content3">拥堵指数</view>
							</view>
							
							<view style="height: 166.66rpx;overflow-y: auto;">
								<view class="listchart" v-for="(item,index) in chartData.categories" >
									<view class="content3">{{item}}</view>
									<view class="content3">{{chartData.series[0]["data"][index]}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		name: "congestionIndex",
		data() {
			return {
				PageCur: 'linechart',
				inputValue: '杭州市白杨街道学林支路',
				single1: "2022-5-20",
				single2: "2022-6-23",
				time: "1",
				car: "1",
				timelist: [{
						label: "1h",
						value: "1"
					},
					{
						label: "2h",
						value: "2"
					},
					{
						label: "4h",
						value: "4"
					},
					{
						label: "6h",
						value: "6"
					},
					{
						label: "8h",
						value: "8"
					}
				],
				carlist: [{
						label: "小轿车",
						value: "1"
					},
					{
						label: "大货车",
						value: "2"
					},
					{
						label: "大客车",
						value: "3"
					},
					{
						label: "自行车",
						value: "4"
					},
					{
						label: "摩托车",
						value: "5"
					},
					{
						label: "特殊车辆",
						value: "8"
					}
				],
				value: 0,
				range: [{
					"value": 0,
					"text": "南北方向"
				}, {
					"value": 1,
					"text": "东西方向"
				}],
				chartData: {
					"categories": [
						"9:00",
						"10:00",
						"11:00",
						"12:00",
						"13:00",
						"14:00",
						"15:00",
						"16:00",
						"17:00",
						"18:00",
						"19:00",
						"20:00",
						"21:00"
					],
					"series": [{
						"name": "拥堵指数",
						"data": [
							10,
							12,
							4,
							3,
							9,
							7,
							12,
							11,
							23,
							7,
							8,
							13,
							12
						],
						"color": "#7cb5ec"
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
			changedate(e) {
				this.single = e;
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
	.mycord1{
		margin-left: 15.11rpx;
		 box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px 9px;
		 border-radius: 2rpx;
		 background-color: rgb(17, 62, 103, 0.4);
	}
</style>
