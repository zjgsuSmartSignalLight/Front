<template name="setting">
	<view class="" style="display: flex;">		
		<view class="leftbar" style="margin-top: 0px;z-index: 1;">
			<view class="item">
			<view class="baritem " @click="NavChange" data-cur="userData" :style="PageCur=='userData'?'background-color:rgb(40, 83, 213);':''">		
				<view class="content2" >个人信息</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="changepw" :style="PageCur=='changepw'?'background-color:rgb(40, 83, 213);':''">				
				<view class="content2 ">修改密码</view>
			</view>
			<view class="baritem" @click="quit" data-cur="quit" :style="PageCur=='quit'?'background-color:rgb(40, 83, 213);':''">
				<view class="content2 ">退出系统</view>
			</view>
			</view>
		</view>
		
		<view style="z-index: 1;">
			<userData v-if="PageCur=='userData'"></userData>
			<changepw v-if="PageCur=='changepw'"></changepw>
			
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
		name:"setting",
		data() {
			return {
				PageCur:'userData'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			quit(e){
				this.PageCur = e.currentTarget.dataset.cur
				uni.navigateTo({
					url:'../index/login'
				})
			}
		}
	}
</script>

<style>

</style>
