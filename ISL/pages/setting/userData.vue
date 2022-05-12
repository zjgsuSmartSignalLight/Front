<template name="userData">
	<view class="mybar">
		<view class="mycord" style="margin-left: 40.11rpx; width: 550rpx; height: 360.77rpx;position: fixed;margin-top: 20.11rpx;">
			<view style=" margin-left: 30%; width: 222.22rpx;">
				<view style="display: flex;text-align: center;align-items: center;margin-top: 10rpx;">
					<view class="content3 formhead">证件照</view>
					<view style="width: 190.55rpx;text-align: center;display: flex;">
						<image style="margin-left: 30%;margin-top: 5.55rpx; width: 85.55rpx;height: 90.55rpx;background-color: #d7d2d2;" class="" :src="'/static/photo.png'">
						</image>
						<image v-if="ischange==true" @click="upphoto" style="margin-top: 69.55rpx; width: 30.11rpx;height: 30.11rpx;" class="" :src="'/static/upphoto.png'">
						</image>
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">姓名</view>
					<view class="content4 formcontent" v-if="ischange==false">
						<view class="inputcontent">{{userinfo.name}}</view>
							
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.name" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">性别</view>
					<view class="content4 formcontent"  v-if="ischange==false">
						<view class="inputcontent">{{userinfo.sex}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.sex" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">警号</view>
					<view class="content4 formcontent"  v-if="ischange==false">
						<view class="inputcontent">{{userinfo.policeId}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.policeId" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead" style="width: 55.88rpx;text-align: center;">联系电话</view>
					<view class="content4 formcontent"  v-if="ischange==false">
						<view class="inputcontent">{{userinfo.phone}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.phone" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">身份证号</view>
					<view class="content4 formcontent" v-if="ischange==false">
						<view class="inputcontent">{{userinfo.cardId}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.cardId" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">户籍</view>
					<view class="content4 formcontent" v-if="ischange==false">
						<view class="inputcontent">{{userinfo.domicile}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.domicile" />
					</view>
				</view>
				<view class="formitem">
					<view class="content3 formhead">所属单位</view>
					<view class="content4 formcontent" v-if="ischange==false">
						<view class="inputcontent">{{userinfo.address}}</view>
					</view>
					<view class="formcontent inputview" v-if="ischange==true">
						<input class="forminput"  @input="onKeyInput" :value="userinfo.address" />
					</view>
				</view>
			</view>
			
			<view  class="xgbutton" style="margin-left: 430.66rpx;
		margin-top: -28.66rpx;">
			<view v-if="ischange==false" @click="change" class="content3" style="margin-top: 5.55rpx;">修改信息</view>
			<view v-if="ischange==true" @click="confirmchange" class="content3" style="margin-top: 5.55rpx;">确认修改</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"userData",
		data() {
			return {
				ischange:false,
				inputValue:'张三',
				userinfo:{
					"name":'张三',
					"sex":"男",
					"policeId":'JC123456',
					"phone":'13548763598',
					"cardId":'330621255986356987',
					"domicile":'浙江杭州',
					"address":'浙江省***派出所'
				}
			}
		},
		methods: {
			change(){
				
				this.ischange=true
			},
			confirmchange(){
				this.ischange=false
			},
			onKeyInput: function(e) {
				this.inputValue = e.target.value
				console.log(this.inputValue)
			},
			
			//上传头像
			upphoto(){
				uni.chooseImage({
				    count: 1, //上传图片的数量，默认是9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
						console.log(tempFilePaths)
					}
				});
			}
		}
	}
</script>

<style>
	.formitem{
		display: flex;
		width: 210.22rpx;
		justify-content: space-between;
		margin-top: 11.11rpx;
	}
	.formcontent{
		width: 130.55rpx;
		height: 22.22rpx;
	}
	.formhead{
		width: 55.88rpx;
		text-align: center;
	}
	
	.forminput{
		 font-size:9.11rpx ;
		 margin-top: 5.55rpx;
		 margin-left: 5.55rpx;
	}
	.inputview{
		background-color: #FFFFFF;color: #888;
	}
</style>
