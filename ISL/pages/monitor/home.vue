<template name="monitor">
	<view class="" style="display: flex;">		
		<view class="leftbar" style="margin-top: 0px;">
			<view class="item">
			<view class="baritem " @click="NavChange" data-cur="heat" :style="PageCur=='heat'?'background-color:rgb(40, 83, 213);':''">		
				<view class="content2" >城市热力图</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="moni" :style="PageCur=='moni'?'background-color:rgb(40, 83, 213);':''">				
				<view class="content2 ">点位监测</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="wg" :style="PageCur=='wg'?'background-color:rgb(40, 83, 213);':''">
				<view class="content2 ">违规监测</view>
			</view>
			
			</view>
			<view class="cu-bar tabbar" style="margin-top: 280rpx;">
			<view class="action" @click="tp" >
				<view class='cuIcon-cu-image' :style="isbigscreen==true?'background-color: #2853d5;':''">	
					<image style="width: 25.77rpx;height: 20.77rpx;display: inline-block;top: -16%;" :src="'/static/big.png'"></image>
				</view>	
				<view class="mycontent" v-if="isbigscreen==false" style="color: #FFFFFF;">大屏显示</view>
				<view class="mycontent"  v-if="isbigscreen==true" style="color: #FFFFFF;">取消大屏显示</view>
			</view>
			</view>
		</view>
		
		<view>
			<heatmap v-if="PageCur=='heat'"></heatmap>
			<pointMonitor v-if="PageCur=='moni'"></pointMonitor>
			<violation v-if="PageCur=='wg'"></violation>		
		</view>
	</view>
</template>

<script>
	export default {
		name:"monitor",
		data() {
			return {
				PageCur:'heat',
				isbigscreen:false
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			tp(){
				this.isbigscreen=!this.isbigscreen
			}
		}
	}
</script>

<style>

</style>
