<template name="slManagement">
	<view class="" style="display: flex;">		
		<view class="leftbar" style="margin-top: 0px;">
			<view class="item">
			
			<view class="baritem" @click="NavChange" data-cur="timeDate" :style="PageCur=='timeDate'?'background-color:rgb(40, 83, 213);':''">				
				<view class="content2 ">信号灯详情</view>
			</view>
			<view class="baritem" @click="NavChange" data-cur="timeManage" :style="PageCur=='timeManage'?'background-color:rgb(40, 83, 213);':''">
				<view class="content2 ">配时管理</view>
			</view>
			
			</view>
			<view class="cu-bar tabbar" style="margin-top: 280rpx;">
			<view class="action" @click="tp" >
				<view class='cuIcon-cu-image' :style="isbigscreen==true?'background-color: #2853d5;':''">	
					<image style="width: 25.77rpx;height: 20.77rpx;display: inline-block;top: -16%;":src="'/static/big.png'"></image>
				</view>	
				<view class="mycontent" v-if="isbigscreen==false" style="color: #FFFFFF;">大屏显示</view>
				<view class="mycontent"  v-if="isbigscreen==true" style="color: #FFFFFF;">取消大屏显示</view>
			</view>
			</view>
		</view>
		
		<view>
		
			<timeDate v-if="PageCur=='timeDate'"></timeDate>
			<timeManage v-if="PageCur=='timeManage'"></timeManage>		
		</view>
	</view>
</template>

<script>
	export default {
		name:"slManagement",
		data() {
			return {
				PageCur:'timeDate',
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
