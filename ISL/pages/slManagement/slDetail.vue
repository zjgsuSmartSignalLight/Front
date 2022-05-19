<template name="slDetail">
	<view class="mybar">
		<view class="tj lb">
			<view class="lb2" style="">
				<view class="content3 lb3" style="">点位路口：</view>
				<view class="lb4" style="">
					<view class="content3" style="margin-top: 5.55rpx;font-size: 10rpx;">白杨街道学正街南</view>
					<view>
						<image style="" class="jt" :src="'/static/jt.png'">
						</image>
					</view>
				</view>
				<view class="lb4" style="">
					<view class="content3" style="margin-top: 5.55rpx;font-size: 10rpx;">白杨街道学正街南</view>
					<view>
						<image style="" class="jt" :src="'/static/jt.png'">
						</image>
					</view>
				</view>
				
				
				<view class="xz">
					<view class="xz2">点击图上信号灯选择</view>
				</view>
			</view>
			
			<view style="display: flex;">
				<view class="content3 lb3" style="">设定时长：</view>
				<view class="xz">
					<input class="inputcontent input" @input="onKeyInput" :value="inputValue"/>
				</view>
				<view class="content3 lb3" style="margin-left: 5.55rpx;font-size: 12rpx;margin-top: 9.55rpx;">min</view>
				<button class="bg-blue bu">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'slDetail',
		data() {
			return {
				inputValue:''
			}
		},
		methods: {
			onKeyInput: function(e) {
				this.inputValue = e.target.value
				console.log(this.inputValue)
			}
		}
	}
</script>

<style>
	.lb{
		width: 601.11rpx;
		height: 90.88rpx;
		box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px 3px;
		border-radius: 5px;
	}
	.lb2{
		display: flex;text-align: center;
	}
	.lb3{
		font-size: 15rpx;margin-top: 5.55rpx;
	}
	.lb4{
		display: flex;text-align: center;text-align: center;margin-top: 4.44rpx;
	}
	.jt{
		width: 29.44rpx;height: 29.44rpx;
		transform: rotate(270deg);
	}
	.xz{
		width: 85.55rpx;
		height: 22.77rpx;
		border-color: rgb(187, 187, 187);
		border-width: 0.55rpx;
		border-style: solid;
		box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px 2px;
		border-radius: 2.77rpx;
		background: #FFFFFF;
		margin-top: 5.55rpx;
	}
	.xz2{
		margin-top: 5.55rpx;
		color: #a0a0a2;
		font-size: 8rpx;
	}
	.input{
		color: #000000;
		font-size: 12rpx;
	}
	.bu{
		font-size: 15prx;
		width: 130px;
		height: 50px;
		background-color: #2853d5;
		margin-left: 330.77rpx;
		margin-top: 16.66rpx;
	}
</style>
