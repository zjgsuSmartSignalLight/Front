<template>
	<view style="">	
	
	<view style="display: flex; background-color: rgb(12, 29, 55);height: 65rpx;">
		<view style="display: flex;margin-top: -9.55rpx;margin-left: 20rpx;" @click="goVioDetail(id)">
			<view class="isl">
				<view class="isl2">
				<image class="isl2" :src="'/static/I.png'"></image>
				</view>
			</view>
			<view class="isl" style="margin-left: -22.22rpx;">
				<view class="isl2" >
				<image class="isl2" :src="'/static/S.png'" ></image>
				</view>
			</view>
			<view class="isl" style="margin-left: -15.88rpx;">
				<view class="isl2">
				<image class="isl2" :src="'/static/L.png'" ></image>
				</view>
			</view>
		</view>
		<view class="cu-bar tabbar bg-home shadow" style="min-height: 0rpx; margin-left: 5%; width: 70%;">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image' :style="PageCur=='home'?'background-color: #2853d5;':''">	
					<image :src="'/static/tabbar/home.png'"></image>
				</view>	
				<view class="mycontent" style="">总览</view>
			</view>
			<view class="action" @click="NavChange" data-cur="monitor">
				<view class='cuIcon-cu-image' :style="PageCur=='monitor'?'background-color: #2853d5;':''">
					<image :src="'/static/tabbar/monitor.png'"></image>
				</view>	
				<view class="mycontent">交通监测</view>
			</view>
			<view class="action" @click="NavChange" data-cur="slManagement">
				<view class='cuIcon-cu-image' :style="PageCur=='slManagement'?'background-color: #2853d5;':''">
					<image :src="'/static/tabbar/slManagement.png'"></image>
				</view>
				<view class="mycontent">信号灯管理</view>
			</view>
			<view class="action" @click="NavChange" data-cur="stats">
				<view class='cuIcon-cu-image' :style="PageCur=='stats'?'background-color: #2853d5;':''">
					<image :src="'/static/tabbar/stats.png'"></image>
				</view>
				<view class="mycontent">数据统计</view>
			</view>
			<view class="action" @click="NavChange" data-cur="setting">
				<view class='cuIcon-cu-image' :style="PageCur=='setting'?'background-color: #2853d5;':''">
					<image :src="'/static/tabbar/setting.png'"></image>
				</view>	
				<view class="mycontent">设置</view>
			</view>
		</view>
	</view>
	<home  v-if="PageCur=='home'"></home>
	<monitor v-if="PageCur=='monitor'"></monitor>
	<slManagement v-if="PageCur=='slManagement'"></slManagement>
	<stats v-if="PageCur=='stats'"></stats>
	<setting v-if="PageCur=='setting'"></setting>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			goVioDetail(id){
				console.log('gogogo')
				uni.navigateTo({
					url:"../monitor/violationDetail?id="+id
				})
			},
		}
	}
</script>

<style>
	page {
	
		background-color: rgb(11, 37, 109);
		
	}
	.isl{
		width: 45.55upx;
		overflow: hidden;
	}
	.isl2{
		display: block;
		width: 450.07upx;
		height: 85.77upx;
	}
	
</style>
