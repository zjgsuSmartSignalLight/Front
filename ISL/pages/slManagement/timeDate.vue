<template name="timeDate">
	<view class="mybar" style="margin-top: -10.55rpx;">
		<view class="" style="display: flex;margin-left: 22.22rpx;margin-top: 33.33rpx;">
			<view>
				<view class="" style="display: flex;width: 279.44rpx;justify-content: space-between;">
					<view class="content3">当前点位</view>
					<view class="content4">
						<input class="inputcontent" @input="onKeyInput" :value="inputValue" />
					</view>
				</view>
				<view class="psxx" style="">
					<view class="content3">监管状态</view>
					<view class="content4">
						<view class="inputcontent">系统监管</view>
					</view>
				</view>
				<view class="psxx" >
					<view class="content3">运行时间</view>
					<view class="content4">
						<view class="inputcontent">06:11:30</view>
					</view>
				</view>
				<view class="psxx">
					<view class="content3">是否处于绿波带</view>
					<view class="content4">
						<view class="inputcontent">否</view>
					</view>
				</view>
				
				<view class="cord" style="margin-top: 11.11rpx;height: 260rpx;">
					<view class="content4" style="width: 279.44rpx;height: 22.22rpx;">
						<view class="inputcontent" style="margin-top: 2.77rpx; font-size: 10rpx; width: 100%;height: 22.22rpx; color: #FFFFFF;">点位实时画面</view>
					</view>
					<view>
						<!--<image style="margin-top: 5.55rpx; width: 261.11rpx;height: 220rpx;" class="" :src="'/static/jk.jpg'">
						</image>-->
						<video id="myVideo" :src="'/static/video/video.mp4'" loop="true" autoplay="true" style="margin-top: 5.55rpx; width: 240.11rpx;height: 200rpx;"
						                    @error="videoErrorCallback" controls></video>
					</view>
				</view>
			</view>
			
			<view style="margin-left: 22.22rpx;">
				<view class="" style="display: flex;width: 279.44rpx;justify-content: space-between;">
					<view class="content3">点位编号</view>
					<view class="content4">						
						<view class="inputcontent">D001</view>
					</view>
				</view>
				
				<view class="cord" style="margin-top: 11.11rpx; width: 292.77rpx;height: 133.88rpx;">
					<view class="content4" style="display: flex; width: 292.77rpx;height: 22.22rpx;">
						<view class="inputcontent td" >相位</view>
						<view class="inputcontent td" >红灯时长（s）</view>
						<view class="inputcontent td" >绿灯时长（s）</view>
						<view class="inputcontent td" >信号灯状态</view>
					</view>
					<view class="content4 xw" style="margin-left: 27.77rpx;">
						<view class="inputcontent " >
							<image style="width: 44.44rpx;height: 44.44rpx;" class="" :src="'/static/xw1.png'">
							</image>
						</view>
						<view class="inputcontent td" style="margin-left: 16.66rpx; margin-top: 12rpx ;font-size: 12rpx;" >28</view>
						<view class="inputcontent td"  style="font-size: 12rpx;margin-top: 12rpx;">26</view>
						<view class="inputcontent td"  style="font-size: 12rpx;margin-top: 12rpx;">绿灯</view>
					</view>
					<view class="content4 xw" style="margin-top: 5.55rpx; margin-left: 27.77rpx;">
						<view class="inputcontent " >
							<image style="width: 44.44rpx;height: 44.44rpx;" class="" :src="'/static/xw2.png'">
							</image>
						</view>
						<view class="inputcontent td" style="margin-left: 16.66rpx; margin-top: 16.66rpx ;font-size: 12rpx;" >26</view>
						<view class="inputcontent td"  style="font-size: 12rpx;margin-top: 16.66rpx;">28</view>
						<view class="inputcontent td yc"  style="font-size: 12rpx;margin-top: 16.66rpx;">异常</view>
					</view>
				</view>
				
				<view class="cord" style="margin-top: 11.11rpx;width: 292.77rpx;height: 90.22rpx;">
					<view class="content4" style="width: 292.77rpx;height: 22.22rpx;">
						<view class="inputcontent" style="margin-top: 2.77rpx; font-size: 10rpx; width: 100%;height: 22.22rpx; color: #FFFFFF;">配时变化</view>
					</view>
					<view style="">
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class="inputcontent td xwt" style="margin-left: -11.11rpx;">10:10:20</view>
							<view class="inputcontent td xwt" style="margin-left: -27.77rpx;" >相位A</view>
							<view class="inputcontent td add" style="margin-left: -16.66rpx;">绿灯时长加2秒</view>
							<view class="inputcontent td sub" >红灯时长减2秒</view>
						</view>
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class="inputcontent td xwt" style="margin-left: -11.11rpx;">10:10:20</view>
							<view class="inputcontent td xwt" style="margin-left: -27.77rpx;" >相位A</view>
							<view class="inputcontent td add" style="margin-left: -16.66rpx;">绿灯时长加2秒</view>
							<view class="inputcontent td sub" >红灯时长减2秒</view>
						</view>
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class="inputcontent td xwt" style="margin-left: -11.11rpx;">10:10:20</view>
							<view class="inputcontent td xwt" style="margin-left: -27.77rpx;" >相位A</view>
							<view class="inputcontent td add" style="margin-left: -16.66rpx;">绿灯时长加2秒</view>
							<view class="inputcontent td " >红灯时长不变</view>
						</view>
					</view>
				</view>
				
				<view class="cord" style="margin-top: 11.11rpx;width: 292.77rpx;height: 90.22rpx;">
					<view class="content4" style="width: 292.77rpx;height: 22.22rpx;">
						<view class="inputcontent" style="margin-top: 2.77rpx; font-size: 10rpx; width: 100%;height: 22.22rpx; color: #FFFFFF;">告警信息</view>
					</view>
					<view style="">
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class=" inputcontent td xwt " style="width: 50.88rpx;margin-left: 12.55rpx;">10:10:20</view>
							<view class=" inputcontent td xwt " style="width: 50.88rpx; margin-left: 26.55rpx;" >相位A</view>
							<view class="inputcontent td " style="margin-left: 20.55rpx; display: flex;">
								<view class="ts" style="">出现</view>
								<view class="ts sub" style="margin-left: -25.11rpx;">消防车，</view>
								<view class="ts" style="margin-left: -16.11rpx;">行驶速度</view>
								<view class="ts sub" style="margin-left: -19.11rpx;">25m/s</view>
							</view>
							
						</view>
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class=" inputcontent td xwt " style="width: 50.88rpx;margin-left: 12.55rpx;">10:10:20</view>
							<view class=" inputcontent td xwt " style="width: 50.88rpx; margin-left: 26.55rpx;" >相位A</view>
							<view class="inputcontent td " style="margin-left: 20.55rpx; display: flex;">
								<view class="ts" style="">出现</view>
								<view class="ts sub" style="margin-left: -25.11rpx;">消防车，</view>
								<view class="ts" style="margin-left: -16.11rpx;">行驶速度</view>
								<view class="ts sub" style="margin-left: -19.11rpx;">25m/s</view>
							</view>
						</view>
						<view class="content4" style="background-color: rgba(19, 64, 102, 0.9) ; display: flex; width: 292.77rpx;height: 22.22rpx;">
							<view class=" inputcontent td xwt " style="width: 50.88rpx;margin-left: 12.55rpx;">10:10:20</view>
							<view class=" inputcontent td xwt " style="width: 50.88rpx; margin-left: 26.55rpx;" >相位A</view>
							<view class="inputcontent td " style="margin-left: 20.55rpx; display: flex;">
								<view class="ts" style="">出现</view>
								<view class="ts sub" style="margin-left: -25.11rpx;">救护车，</view>
								<view class="ts" style="margin-left: -16.11rpx;">行驶速度</view>
								<view class="ts sub" style="margin-left: -19.11rpx;">25m/s</view>
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
		name:'timeDate',
		data() {
			return {
				inputValue: '杭州市白杨街道学林支路',
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
	.gjxx{
		width: 70.88rpx;
	}
	.ts{
		width: 100%;
	}
	.psxx{
		margin-top: 5.55rpx; display: flex;width: 279.44rpx;justify-content: space-between;
	}
	.td{
		width: 100%;height: 33.33rpx; color: #FFFFFF;font-size: 10rpx;
		font-weight: 600;
		margin-top: 2.77rpx;
	}   
	.xw{
		 display: flex; width: 261.11rpx;height: 44.44rpx;background-color: rgba(19, 64, 102, 0.9);
	}
	.xwt{
		color: rgba(255, 90, 0, 1);
	}
	.sub{
		color: rgba(255, 22, 0, 1);
	}
	.add{
		color: rgba(0, 255, 101, 1);
	}
	.yc{
		color: rgba(255, 22, 0, 1);
	}
</style>
