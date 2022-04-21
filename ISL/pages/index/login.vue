<template>
	<view>
		<view>
			<image style="" class="loginbg" :src="'/static/signbackgraound.png'"></image>
		</view>
		<view style="color: #FFFFFF;font-size: 22rpx;margin-top: 50rpx;margin-left: 400rpx;">智能信号灯管理系统</view>
		<view style="position: fixed; width: 230rpx;height: 350px; margin-left: 450.66rpx;margin-top: 50rpx;background-color:rgb(100,149,237,0.1);text-align: center;border:#057bb8 solid 0.5rpx ;">
			<view class="content3" style="font-size: 20rpx;margin-top: 20rpx;">用户登录</view>
			<view style="margin-top: 20rpx;margin-left: -72rpx;">
			<uni-forms ref="form" :modelValue="formData" style="height: 80rpx;" :rules="rules">
				<uni-forms-item  name="id">
					<uni-easyinput style="width: 150rpx; transform: scale(1.2);color: #FFFFFF;" :styles="focus=='id'?styles:nostyles" @focus="focus1" prefixIcon="person-filled" v-model="formData.id" placeholder="用户名" >
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item  name="pw" style="margin-top: 10rpx;">
					<uni-easyinput :styles="focus=='pw'?styles:nostyles" style="color: #FFFFFF;width: 150rpx;transform: scale(1.2);" @focus="focus2" prefixIcon="locked-filled" type="password" v-model="formData.pw" placeholder="密码">
					</uni-easyinput>
				</uni-forms-item>
			</uni-forms>
			</view>
			<view style="display: flex;justify-content: space-between;margin-top: 10rpx;">
				<view style="display: flex;margin-left: 23rpx;">
					<view class="content3" style="">
						<label class="radio" ><radio style="transform: scale(0.6);" value="r1" :checked="isrepw" @click="change"/></label>
					</view>
					<view class="content3"  style="font-size: 8rpx;margin-left: 3rpx;margin-top: 4rpx;">记住密码</view>
				</view>
				<view style="display: flex;margin-top: 4rpx;">
					<view class="content3"  style="font-size: 8rpx;">忘记密码？</view>
					
				</view>
			</view>
			<view style="margin-top: 1rpx;"@click="submit">
				<button style="width: 180rpx;height: 30rpx; border-radius: 5rpx;font-size: 13rpx;" class="cu-btn bg-blue">登录</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			value:'',
			styles:{
				borderColor: '#057bb8',
				
			},
			nostyles:{},
			formData: {
							id: '',
							pw: ''
						},
			focus:'id',
			
			isrepw:false,
			rules: {
							// 对name字段进行必填验证
							id: {
								rules: [{
										required: true,
										errorMessage: '请输入用户名',
									}
								]
							},
							pw: {
								rules: [{
										required: true,
										errorMessage: '请输入密码',
									}
								]
							},
					}
			}
		},
		methods: {
				focus1(){
					this.focus='id'
					console.log(this.focus)
				},
				focus2(){
					this.focus='pw'
					console.log(this.focus)
				},
				Clickid(e){
					console.log(this.formData.id)
				},
				Clickpe(e){
					console.log(this.formData.id)
				},
				change(){
					this.isrepw=!this.isrepw
					console.log(this.isrepw)
				},
				submit() {
							this.$refs.form.validate().then(res=>{
								console.log('表单数据信息：', res)
								if(res.id=='admin'&&res.pw=="12345"){
									uni.navigateTo({
										url:'./index'
									})
								}
							}).catch(err =>{
								console.log('表单错误信息：', err);
							})
						}
		}
	}
</script>

<style>
	.loginbg{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	
</style>
