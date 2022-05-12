<template name="changepw">
	<view class="mybar">
		<view class="mycord" style="margin-left: 40.11rpx; width: 550rpx; height: 360.77rpx;position: fixed;margin-top: 20.11rpx;">
			<view class="content3" style="width: 220.66rpx;margin-top: 10%;margin-left: 25%;">
				<uni-forms ref='form' :modelValue="f4rmData" >
					<uni-forms-item class="formhead" label="旧密码:" name="oldpw" style="" >
						<uni-easyinput   type="password" v-model="formData.oldpw"  class="forminput" style="" />
					</uni-forms-item>
					<uni-forms-item class="formhead" label="新密码:" name="newpw" style="">
						<uni-easyinput  type="password"  class="forminput" v-model="formData.newpw"  />
					</uni-forms-item>
					<uni-forms-item class="formhead" label="确认新密码:" name="againpw">
						<uni-easyinput  type="password"  class="forminput" v-model="formData.againpw" />
					</uni-forms-item> 
				</uni-forms>
				
				<view  class="xgbutton" style="margin-top: 33.33rpx;margin-left: 13%;">			
				<view  @click="submitForm" class="content3" style="margin-top: 5.55rpx;font-size: 12rpx;">保存</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "changepw",
		data() {
			var validatePass = (rule, value, callback) => {
						if (value === '') {
							callback(new Error('请再次输入密码'));
						} else if (value !== this.formData.newpw) {
							callback(new Error('两次输入密码不一致!'));
						} else {
							callback();
						}
					};
			
			return {
				formData: {
					oldpw: 'bbb',
					newpw: 'nnn',
					againpw: 'mmm'
				},
				rules: {
					// 对name字段进行必填验证
					oldpw: {
						rules: [{
							required: true,
							errorMessage: '请输入旧密码',
						}]
					},
					newpw: {
						rules: [{
							required: true,
							errorMessage: '请输入新密码',
						}]
					},
					againpw: {
						rules: [{
								required: true,
								errorMessage: '请再次输入新密码',
							},{
						validateFunction:function(rule,value,callback){
							console.log(value)
							console.log(this.formData)
							if (value!='mmmmmm') {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}
						]
					
					},
				}
			}
		},
		mounted() {
				// 需要在onReady中设置规则
				console.log("nmm")
				this.$refs.form.setRules(this.rules)
			},
		methods: {
			
			submitForm(form) {
						this.$refs.form.validate().then(res=>{
							console.log('表单数据信息：', res);
						}).catch(err =>{
							console.log('表单错误信息：', err);
						})
					}
		}
	}
</script>

<style>
	.uni-forms-item__label .label-text{
		color: #FFFFFF;
		font-size: 9.11rpx;
	}
	.forminput{
		
		transform:scale(1.4);background-color: rgb(234, 222, 222);
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px 3px;
		border-color: rgb(19, 58, 100);
		border-width: 3px;
		border-style: solid;
	}
	.formhead{
		margin-top: 11.11rpx;
	}
</style>
