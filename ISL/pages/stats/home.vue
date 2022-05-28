<template name="stats">
	<view class="" style="display: flex;">		
		<view class="leftbar" style="margin-top: 0px;z-index: 1;">
			<view class="item">
			<view class="baritem " @click="NavChange" data-cur="hisFlowrate" :style="PageCur=='hisFlowrate'?'background-color:rgb(40, 83, 213);':''">		
				<view class="content2" >点位车辆流量</view>
			</view>
			
			<view class="baritem " @click="NavChange" data-cur="congestionIndex" :style="PageCur=='congestionIndex'?'background-color:rgb(40, 83, 213);':''">
				<view class="content2" >拥堵指数</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="hisHeatmap" :style="PageCur=='hisHeatmap'?'background-color:rgb(40, 83, 213);':''">
				<view class="content2 ">车辆类型统计</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="imbalanceIndex" :style="PageCur=='imbalanceIndex'?'background-color:rgb(40, 83, 213);':''">				
				<view class="content2 ">违规类型统计</view>
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
		
		<view style="z-index: 1;">
			<hisFlowrate v-if="PageCur=='hisFlowrate'"></hisFlowrate>
			<hisHeatmap v-if="PageCur=='hisHeatmap'"></hisHeatmap>	
			<congestionIndex v-if="PageCur=='congestionIndex'"></congestionIndex>
			<imbalanceIndex v-if="PageCur=='imbalanceIndex'"></imbalanceIndex>	
		</view>
		<view style="">
		<view class="" style="background-color: rgba(19, 64, 102, 0.9);">
			<image class="bg-set" style="margin-top: 65rpx;" :src="'/static/bj4.jpg'"></image>
		</view>
		<view class="bg-set2" style="margin-top: 65rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"stats",
		data() {
			return {
				PageCur:'hisFlowrate',
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
