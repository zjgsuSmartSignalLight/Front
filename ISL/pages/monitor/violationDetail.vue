<template name="viodetail">
	<view class="mybar" style="margin-left: 11.11rpx;">
		<view style="display: flex;">
			<view class="cord" style="margin-top: 11.11rpx;width: 316.66rpx;height: 370.88rpx;">
				<view class="content4" style="width: 316.66rpx;height: 25.77rpx;">
					<view class="inputcontent" style="width: 100%;height: 25.77rpx; color: #FFFFFF;">违法车辆详细信息</view>
				</view>
				<view style="margin-left: 22.22rpx;">
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">车牌号</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">浙A23445</view>
						</view>
			
					</view>
					<view class="wgdetail" style="">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">位置</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">杭州市白杨街道学林支路</view>
						</view>
			
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">点位编号</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">D0002</view>
						</view>
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">违规时间</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">2022/3/12 19:03</view>
						</view>
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">违规类型</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">漏牌</view>
						</view>
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">车主姓名</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">王海舟</view>
						</view>
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">车主身份证号</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">331022200001010001</view>
						</view>
					</view>
					<view class="wgdetail">
						<view class="content3" style="font-size: 10rpx;margin-top: 5.55rpx;">车辆类型</view>
						<view class="content4" style="width: 163.33rpx;height: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">小轿车</view>
						</view>
					</view>
				</view>
			</view>
			
			<view style="margin-left: 11.11rpx;">
				<view class="cord" style="margin-top: 11.11rpx; height: 260rpx;">
					<view class="content4" style="width: 279.44rpx;height: 25.77rpx;">
						<view class="inputcontent" style="width: 100%;height: 25.77rpx; color: #FFFFFF;">违规画面</view>
					</view>
					<view>
						<image style="margin-top: 5.55rpx; width: 261.11rpx;height: 220rpx;" class="" :src="'/static/lp.jpg'">
						</image>
					</view>
				</view>
				
				
				<view style="margin-top: 74.44rpx;margin-left: 205.55rpx;">
					<button @click="goback" class="cu-btn" style="font-size: 10rpx;width: 72.22rpx;height: 27.77rpx;color: #FFFFFF; background-color: rgb(40, 83, 213)">
						<text class="cuIcon-backwardfill" style="width: 72.22rpx; font-size: 13.88rpx; color: #FFFFFF;"></text>返回</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"viodetail",
		props:{
			id:''
		},
		data() {
			return {
				idDate:this.id,
			}
		},
		methods: {
			goback:function(){
				var godetail=false
				console.log(godetail)
				this.$emit('send_one',godetail)
			}
		},
		mounted: function(option) {
			console.log('mmm')
			console.log(this.idDate)
		}
	}
</script>

<style>
	page {
	
		background-color: rgb(11, 37, 109);
		
	}
	.wgdetail{
		display: flex;
		width: 250rpx;
		justify-content: space-between;
		margin-top: 19.44rpx;
	}
</style>
