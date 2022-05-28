<template name="imbalanceIndex">
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
				<view style="width: 277.77rpx;height: 270.77rpx;">
					<view class="content3" style="margin-top: 10.11rpx;">违规类型统计</view>		
					<view class="charts-box" style="margin-top: 11.11rpx;margin-left: 10rpx;">
						
						<qiun-data-charts type="ring3" :chartData="chartData" background="none" />
					</view>	
					
				</view>
				<view style="width: 277.77rpx;height: 230.77rpx;color:#FFFFFF ;font-size: 9rpx;">
					<view class="content3" style="margin-top: 10.11rpx;">违规事件排行</view>
					<view style="background-color: #133a64;width: 277.77rpx;margin-top: 11.11rpx;margin-left: -11.11rpx;">
						<view class="wgtable" style="border-bottom: #FFFFFF solid 0.55rpx;background-color:#122444;;">
							<view class="content3" style="width:45rpx;padding: 5rpx;">排名</view>
							<view class="content3"style="width: 50rpx;">类型</view>
							<view class="content3" style="width: 45rpx;">数量</view>
						</view>
						
						<view class="wgtable" v-for="(item,index) in wgData" style="border-bottom: #FFFFFF solid 0.55rpx;">
							<view class="content3" style="width: 45rpx;padding: 5rpx;">{{index+1}}</view>
							<view class="content3"style="width: 50rpx;">{{item.name}}</view>
							<view class="content3" style="width: 45rpx;">{{item.value}}</view>
							
						</view>
					</view>
					
				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "imbalanceIndex",
		data() {
			return {
				PageCur: 'linechart',
				inputValue: '杭州市白杨街道学林支路',
				single1: "2022-5-20",
				single2: "2022-6-23",
				time: "1",
				car: "1",


				value: 0,
				wgData: [{
						"name": "违规变道",
						"value": 100
					},
					{
						"name": "超员",
						"value": 90
					},
					{
						"name": "违规掉头",
						"value": 80
					},
					{
						"name": "遮挡号牌",
						"value": 70
					},
					{
						"name": "闯红灯",
						"value": 60
					},
					{
						"name": "违规倒车",
						"value": 50
					},
					{
						"name": "套牌",
						"value": 40
					},
					{
						"name": "逆行",
						"value": 30
					}
				],
				chartData2:{
				  categories: ["小型机动车", "大型机动车", "非机动车", "特殊车辆"],
				  series: [{
				    name: "数据",
				    data: [1390, 699, 1688,1000],
					 color: "#5087ec"
				  }]
				},
				chartData: {
				 
					"series": [{
						"data":[{
						"name": "违规变道",
						"value": 100
					},
					{
						"name": "超员",
						"value": 90
					},
					{
						"name": "违规掉头",
						"value": 80
					},
					{
						"name": "遮挡号牌",
						"value": 70
					},
					{
						"name": "闯红灯",
						"value": 60
					},
					{
						"name": "违规倒车",
						"value": 50
					},
					{
						"name": "套牌",
						"value": 40
					},
					{
						"name": "逆行",
						"value": 30
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
		height:220.66rpx;
	}
	.wgtable{
		display: flex;width: 277.77rpx;text-align: center;align-items: center;justify-content: space-between;
	}
	.content3{
		font-size: 10rpx;
		color: #FFFFFF;
	}
</style>
