<template>
	<!-- 网站首页 -->
	<div @keyup="onKeyboard">
		<div class="z-nav" :style="{ width: (page - 1) * 25 + '%' }"></div>
		<div class="home-app">
			<div class="swiper-container">
				<swiper v-if="img.length > 0" :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="(item, index) in img" :key="index"><img :src="item.img" alt @click="details(index)" /></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-prev" slot="button-prev">
						<div class="preview"><img :src="previmg" alt="预览图" /></div>
					</div>
					<div class="swiper-button-next" slot="button-next">
						<div class="nextview"><img :src="nextimg" alt="预览图" /></div>
					</div>
					<div class="swiper-scrollbar" slot="scrollbar"></div>
				</swiper>
			</div>
			<div class="home-line"></div>
			<div class="home-service">
				<div class="home-service-title">我们的服务</div>
				<div class="home-service-tip">
					<span>专业配置</span>
					<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
					<span>引领开创</span>
				</div>
				<div class="home-service-category">
					<img class="category-one" :src="this.mill" />
					<div class="machine-name">{{ this.mill3 }}</div>
					<div class="describe" @click="$router.push('/pool')">{{ this.mill2 }}</div>
					<!-- <div class="read-more" @click="$router.push('/product')">阅读更多</div> -->
				</div>
				<div class="home-service-category">
					<img class="category-one" :src="this.kuci" />
					<div class="machine-name">{{ this.kuci3 }}</div>
					<div class="describe" @click="$router.push('/pool')">{{ this.kuci2 }}</div>
					<!-- <div class="read-more" @click="$router.push('/pool')">阅读更多</div> -->
				</div>
				<div class="home-service-category">
					<router-link :to="{ name: 'newsdetail', params: { id: item.id } }" v-for="item in xorin" v-bind:key="item.id">
						<img class="category-one" :src="item.img" />
						<div class="machine-name">{{ item.title }}</div>
						<div class="describe">{{ item.info }}</div>
						<!-- <div class="read-more">阅读更多</div> -->
					</router-link>
				</div>
			</div>
			<div class="home-line"></div>
			<div class="home-service">
				<div class="mainall-page">
					<div class="home-service-title">星际云矿池</div>
					<div class="home-service-tip">
						<span>操作便捷</span>
						<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
						<span>自由交易</span>
					</div>
					<div class="home-service-describe">通过购买存力合约，即可实时开启数字货币挖矿，经过星际云通专业的矿场部署和贴心服务，帮助您获得更高的挖矿收益。</div>
					<div class="player">
						<div class="player-list">
							<img class="player-img" src="../../assets/images/new.png" alt />
							<div class="player-title">对于新玩家</div>
							<div class="player-tip">快速入门，价格低廉，操作便捷</div>
						</div>
						<div class="player-list">
							<img class="player-img" src="../../assets/images/zhuan.png" alt />
							<div class="player-title">对于专业玩家</div>
							<div class="player-tip">稳定运营，专业服务，高挖矿收益</div>
						</div>
						<div class="player-list">
							<img class="player-img" src="../../assets/images/da.png" alt />
							<div class="player-title">对于矿池大户</div>
							<div class="player-tip">平台高保障，提供一键式代理挖矿服务</div>
						</div>
					</div>
				</div>
			</div>
			<div class="home-line"></div>
			<div class="home-service">
				<div class="" style="background: none;">
					<div class="">
						<div class="home-service-title">新闻中心</div>
						<div class="home-service-tip"><span>走进Filecoin</span></div>
						<!-- <div class="our-describe"></div> -->
						<div class="chart">
							<div id="echarts" style="width:90%;height:100%; margin:0px auto;">
								<!-- <p style="line-height:40px;text-align: center;font-size:12px;background-color: #0000CC;z-index:99;">Filecoin{{ this.getTime() }}月期货价格</p> -->
							</div>
						</div>
						<div class="newsList">
							<div class="newsList-img">
								<router-link :to="{ name: 'newsdetail', params: { id: id_ } }">
									<img class="thenewsImg" :src="images" alt />
									<div class="news-pop">
										<div class="new-title">{{ titles }}</div>
										<!-- <div class="news-time">{{ times | dateformat('YYYY-MM-DD') }}</div> -->
									</div>
								</router-link>
							</div>
							<div class="newsList-content">
								<router-link :to="{ name: 'newsdetail', params: { id: item.id } }" v-for="item in text" :key="item.id">
									<div>
										<li>
											<!-- <span class="newslist-circle"></span> -->
											{{ item.title }}
										</li>
										<!-- <li style="list-style: none;margin-left: 17px;">{{ item.time | dateformat('YYYY-MM-DD ') }}</li> -->
									</div>
								</router-link>
							</div>
							<div class="newsList-btn" @click="$router.push('/news')">了解更多</div>
						</div>
					</div>
				</div>
			</div>
			<div class="home-line"></div>
			<div class="home-service">
				<div class="">
					<div class="home-service-title">联系我们</div>
					<div class="our-line"></div>
					<div class="send-info">
						<form class="user-info" @submit.prevent="showDatas" autocomplete="off">
							<div class="" style="width: 100%;">
								<div class="user-name">
									<div class="label">称呼</div>
									<input type="text" name="name" v-model="formObj.name" />
								</div>
								<div class="user-name">
									<div class="label">电话</div>
									<input type="tel" name="mobile" v-model="formObj.mobile" />
								</div>
							</div>
							<div class="" style="width: 100%;">
								<div class="user-name">
									<div class="label">信息</div>
									<textarea id cols="30" rows="10" name="message" v-model="formObj.message"></textarea>
								</div>
							</div>
							<input class="user-send" type="submit" value="提交" />
						</form>
						<div class="home-contact">
							<div class="home-contact-list">电话： {{ this.email3 }}</div>
							<div class="home-contact-list">电子邮件：{{ this.email2 }}</div>
							<div class="home-contact-list">地址：{{ companyinfo ? companyinfo[0].address : '' }}</div>
						</div>
					</div>
				</div>
			</div>
			<div><Foot></Foot></div>
		</div>
	</div>
</template>
<script>
import './../../assets/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import echarts from 'echarts';

const slideNum = 5; // slide 的个数

export default {
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			arrow: false,
			pageNum: '',
			timer: null, //定时器
			isAnimation: false,
			previmg: '',
			nextimg: '',
			companyinfo: '',
			swiperOption: {
				// spaceBetween: 4,
				slidesPerView: 1,
				// loop: true,
				autoplay: {
					delay: 5000,
					stopOnLastSlide: false,
					disableOnInteraction: false
				},
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
				// on: {
				//   //关键在这儿，通过点击事件拿到对应的元素，从而确定具体index
				//   tap: function(e) {
				//     console.log(e, e.target, "click");
				//     let dom = e.target.parentNode;
				//     // console.log(dom.dataset.id);
				//     vm.handle(dom.dataset.id);
				//   }
				// }
			},
			img: '',
			titles: '',
			times: '',
			page: 1,
			products: [],
			mill: {},
			mill2: {},
			mill3: {},

			kuci: {},
			kuci2: {},
			kuci3: {},

			xorin: {},
			xorin2: {},
			xorin3: {},
			imges: '',
			images: '',
			id_: '',
			text: [],
			email: {},
			email2: {},
			email3: {},

			usd: '',
			time: [],
			price: [],
			hure: [],
			feck: [],
			hige: '',
			minn: '',

			formObj: {
				name: '',
				title: '',
				mobile: '',
				email: '',
				message: ''
			},
			nextBtnShow: true, // 下一个按钮是否显示
			backTopBtnShow: false // 返回顶部按钮是否显示
		};
	},

	/* computed: {
		_text() {
			return this.text.length > 1 ? this.text[1] : {};
		}
	}, */

	methods: {
		backPageTop() {
			this.$refs.page1.style.top = 0;
			this.$refs.page2.style.top = 0;
			this.$refs.page3.style.top = 0;
			this.$refs.page4.style.top = 0;
			this.$refs.page5.style.top = 0;
			this.page = 1;
			this.pageScrollHandle();
		},
		details(index) {
			if (index == 1) {
				this.$router.push('/product');
			}
			if (index == 2) {
				this.$router.push('/pool');
			}
		},
		onKeyboard(e) {
			return;
		},
		news: function(item) {
			localStorage.setItem('item', JSON.stringify(item));
			this.$router.push('/newsDetail');
		},
		fetchCompanyinfo: function() {
			this.$http
				.get(this.url + '/companyinfo/', {})
				.then(res => {
					if (res.data.code === 200) {
						this.companyinfo = res.data.data;
					} else {
					}
				})
				.catch(() => {});
		},
		fetchFil: function() {
			var that = this;
			this.$http
				.get(this.url + '/filecoin/', {
					params: {}
					// headers:{'Access-Control-Allow-Origin':'*'}
				})
				.then(res => {
					//console.log(res)
					if (res.data.code === 200) {
						var arr=[];
						var times=res.data.data[0];
						that.price=res.data.data[1];
						console.log(that.price)
						var max = Math.max.apply(null, that.price);
						var min = Math.min.apply(null, that.price);
						
						that.hige = parseFloat(max+1).toFixed(2);
						that.minn = parseFloat(min-1).toFixed(2); 
						
						for (let i = 1; i < times.length - 1; i++) {
							var date = times[i].substring(6,12);
							arr.push(date)
							//that.time.push(date);
							that.time = arr;
							console.log(that.time)
						}
		
						let echarts = require('echarts/lib/echarts');
						require('echarts/lib/chart/line');
						// 以下的组件按需引入
						require('echarts/lib/component/tooltip'); // tooltip组件
						require('echarts/lib/component/title'); //  title组件
						require('echarts/lib/component/legend'); // legend组件
						let myChart = echarts.init(document.getElementById('echarts'));
						myChart.setOption({
							title: {
								subtext: '数据来自非小号',
								x: 'right',
								align: 'right'
							},
							grid: {
								left: '15%',
								right: '8%',
								bottom: 50
							},
							legend: {
								data: ['FIL价格'],
								x: 'left',
								y: 10,
								nameTextStyle: {
									fontWeight: 100,
									fontSize: 5,
									fontborder: 1
								}
							},
							/*toolbox: {
							    feature: {
							        saveAsImage: {}
							    }
							},*/
							xAxis: {
								type: 'category',
								boundaryGap: true,
								data: that.time,
								nameTextStyle: {
									fontWeight: 300,
									fontSize: 12
								},
								axisLabel: {
									show: true, //这行代码控制着坐标轴x轴的文字是否显示
									textStyle: {
										color: '#333333', //x轴上的字体颜色
										fontSize: '10' // x轴字体大小
									}
								},
								axisLine: {
									show: true, //是否显示x轴
									lineStyle: {
										color: '#6495ED', // x坐标轴的轴线颜色
										width: 1 //这里是坐标轴的宽度,可以去掉
									}
								},
								axisTick: {
									//决定是否显示坐标刻度
									alignWithLabel: true,
									show: true
								}
							},
		
							yAxis: {
								type: 'value',
								/*min:function(value){
								    var minV=value.min-0.1;
								    return minV.toFixed(2);
								},*/
								min: that.minn,
								max: that.hige,
								/*max:function(value){
								    var maxV=value.max+0.1;
								    return maxV.toFixed(2);
								},*/
								// y轴名称样式
								nameTextStyle: {
									fontWeight: 300,
									fontSize: 12
								},
								// y轴的字体样式
								axisLabel: {
									show: true, //这行代码控制着坐标轴y轴的文字是否显示
									interval: 1,
									formatter: '${value}',
									textStyle: {
										color: '#333333', //y轴上的字体颜色
										fontSize: '10' // y轴字体大小
									}
								},
								axisLine: {
									show: false, //是否显示y轴
									lineStyle: {
										color: '#000', // y坐标轴的轴线颜色
										width: 2 //这里是坐标轴的宽度,可以去掉
									}
								},
								splitLine: {
									//决定是否显示坐标中网格
									show: false
								},
								axisTick: {
									//决定是否显示坐标刻度
									alignWithLabel: true,
									show: false
								}
							},
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'cross',
									label: {
										backgroundColor: '#6a7985'
									}
								}
							},
							series: [
								{
									name: 'FIL价格',
									data: that.price,
									type: 'line',
									itemStyle: {
										normal: {
											color: '#6faef5',
											areaStyle: {
												color: '#6faef5'
											}
										}
									}
									/*markPoint:{
									    data:[
									        {type: "max", name: "最大值"},
									        {type: "min", name: "最小值"}
									    ],
									    itemStyle:{
									        color: 'rgba(0,0,0,0.1)',
									    }
									}*/
								}
							]
						});
					}
				})
				.catch(() => {});
		},
		getTime() {
			//new Date() new一个data对象，当前日期和时间
			var date = new Date();
			var MM = date.getMonth() + 1;
			return MM;
		},
		showDatas: function() {
			if (!this.formObj.name) {
				this.$message({
					message: '请输入姓名',
					type: 'warning',
					duration:1500
				});
				return;
			}
			if (!this.formObj.mobile) {
				this.$message({
					message: '请输入手机号',
					type: 'warning',
					duration:1500
				});
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.formObj.mobile)) {
				this.$message({
					message: '手机号码有误，请重新输入',
					type: 'warning',
					duration:1500
				});
				return false;
			}
			if (!this.formObj.message) {
				this.$message({
					message: '请输入信息',
					type: 'warning',
					duration:1500
				});
				return;
			}
			this.$http
				.post(this.url + '/feedback/', {
					name: this.formObj.name,
					title: this.formObj.title,
					mobile: this.formObj.mobile,
					email: this.formObj.email,
					message: this.formObj.message
				})
				.then(res => {
					if (res.status === 200) {
						this.$message({
							showClose: true,
							message: '留言成功',
							type: 'success',
							duration:1500
						});
						this.formObj.name = '';
						this.formObj.mobile = '';
						this.formObj.message = '';
					} else {
						this.$message.error('留言失败');
					}
				})
				.catch(() => {});
		},
		onPrev() {
			var page = '';
			switch (this.page) {
				case 1:
					this.$refs.page1.style.top = 0;
					break;
				case 2:
					this.$refs.page1.style.top = 0;
					this.page--;
					break;
				case 3:
					this.$refs.page2.style.top = 0;
					this.page--;
					break;
				case 4:
					this.$refs.page3.style.top = 0;
					this.page--;
					break;
				case 5:
					this.$refs.page4.style.top = 0;
					this.page--;
					break;
			}
		},
		onNext() {
			// console.log(this.$refs.page1);
			if (this.page >= slideNum) return;
			var page = '';
			switch (this.page) {
				case 1:
					page = this.$refs.page1;
					break;
				case 2:
					page = this.$refs.page2;
					break;
				case 3:
					page = this.$refs.page3;
					break;
				case 4:
					page = this.$refs.page4;
					break;
				case 5:
					page = this.$refs.page5;
					break;
			}
			if (this.page < slideNum) {
				this.page++;
				if (page) {
					page.style.top = '-100%';
				}
			} else {
				this.$refs.page1.style.top = 0;
				this.$refs.page2.style.top = 0;
				this.$refs.page3.style.top = 0;
				this.$refs.page4.style.top = 0;
				this.$refs.page5.style.top = 0;
				this.page = 1;
			}
			this.pageScrollHandle();
		},

		pageScrollHandle() {
			this.nextBtnShow = this.page !== slideNum;
			this.backTopBtnShow = this.page === slideNum;
			this.pageNum = this.page;
		},
		// 滚轮滚动事件
		handleScroll(e) {
			//console.log(e)
			if (this.isAnimation) {
				return;
			}
			this.isAnimation = true;
			var that = this;
			this.timer = setTimeout(function() {
				clearTimeout(that.timer);
				that.isAnimation = false;
				that.timer = null;
				e.deltaY > 0 ? that.onNext() : that.onPrev();
			}, 600);
		}
	},

	mounted() {
		var that = this;
		window.onkeyup = function(e) {
			console.log(e);
			switch (e.keyCode) {
				case 40:
					that.onNext();
					break;
				case 38:
					that.onPrev();
					break;
			}
		};
		window.addEventListener('mousewheel', this.handleScroll, false);
		this.fetchFil();
		this.fetchCompanyinfo();
		this.$http.get(this.url + '/carousel/').then(res => {
			this.img = res.data;

			/* for(let i=0;i<=this.img.length;i++){
					this.previmg=this.img[i-1];
					this.nextimg=this.img[i+1];
				} */
		});
		this.$http.get(this.url + '/listall/').then(res => {
			// this.products=res.data;
			// 矿机
			this.mill = res.data[1][0].img;
			this.mill2 = res.data[1][0].info;
			this.mill3 = res.data[1][0].title;

			// 矿池
			this.kuci = res.data[2][0].img;
			this.kuci2 = res.data[2][0].info;
			this.kuci3 = res.data[2][0].title;

			// 专题
			this.xorin = res.data[3];
			//新闻
			this.id_ = res.data[0][0].id;
			this.images = res.data[0][0].img;
			this.titles = res.data[0][0].title;
			this.times = res.data[0][0].time;

			this.text = res.data[0].slice(-3);
			this.email = res.data.slice(-1);
			this.email2 = this.email[0][0].email;
			this.email3 = this.email[0][0].phone;
		});

		// var swiper = new swiper('.swiper-container', {
		// 	direction: 'horizontal',
		// 	keyboard: {
		// 		enabled: true
		// 	},
		// 	effect: 'coverflow',
		// 	pagination: {
		// 		el: '.swiper-pagination',
		// 		clickable: true
		// 		// type: "progressbar"
		// 	},
		// 	mousewheel: true,
		// 	navigation: {
		// 		nextEl: '.swiper-button-next',
		// 		prevEl: '.swiper-button-prev'
		// 	}
		// });
	}
};
</script>

<style scoped="scoped" lang="scss">
.swiper-container {
	width: 100%;
	height: auto;
	// height: 100%;
	/* height: calc(100% - 68px); */
	z-index: 9;
}

.swiper-slide {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	position: relative;
}
.swiper-slide:hover {
	cursor: pointer;
}
.swiper-button-prev {
	width: 100px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0.3);
	display: none;
}

.swiper-button-next {
	width: 100px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0.3);
	display: none;
}
.swiper-button-prev:after {
	content: '';
	width: 10px;
	height: 10px;
	border-top: 2px solid #ffffff;
	border-left: 2px solid #ffffff;
	transform: rotate(-45deg);
	position: absolute;
	top: 45px;
	left: 45px;
}

.swiper-button-next:after {
	content: '';
	width: 10px;
	height: 10px;
	border-top: 2px solid #ffffff;
	border-right: 2px solid #ffffff;
	transform: rotate(45deg);
	position: absolute;
	top: 45px;
	left: 45px;
}

.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
	display: block;
}
.preview {
	width: 100px;
	height: 100px;
	position: absolute;
	left: 100px;
	top: 0;
	display: none;
}

.preview > img {
	width: 100%;
	height: 100%;
	display: block;
}

.nextview {
	width: 100px;
	height: 100px;
	position: absolute;
	right: 100px;
	top: 0;
	display: none;
}

.nextview > img {
	width: 100%;
	height: 100%;
	display: block;
}

/* .swiper-button-next:hover {
	display: block;
	background-color: #FFFFFF;
	
}
 
.swiper-button-prev:hover {
	display: block;
	background-color: #FFFFFF;
	
} */
/* .swiper-button-next:hover .nextview {
	display: block;
	background-color: #FFFFFF;
}
.swiper-button-prev:hover .preview {
	display: block;
	background-color: #FFFFFF;
} */

.infos {
	position: absolute;
	top: 422px;
	left: 246px;
}

.txt1 {
	font-size: 60px;
	color: #ffffff;
}

.txt2 {
	font-size: 60px;
	color: #31d3e1;
}

.txt3 {
	font-size: 30px;
	color: #ffffff;
	line-height: 103px;
}

.txt4 {
	font-size: 36px;
	color: #ffffff;
	display: block;
	margin-bottom: 30px;
}

.goto {
	width: 166px;
	height: 60px;
	background: rgba(255, 255, 255, 1);
	border-radius: 5px;
	color: #0069d8;
	font-size: 18px;
	text-align: center;
	line-height: 60px;
}

img {
	width: 100%;
	height: 100%;
}

@media screen and (max-width: 1060px) {
	.txt1 {
		font-size: 40px;
		color: #ffffff;
	}

	.txt2 {
		font-size: 40px;
		color: #31d3e1;
	}

	.txt3 {
		font-size: 20px;
		color: #ffffff;
		line-height: 73px;
	}

	.txt4 {
		font-size: 16px;
		color: #ffffff;
		display: block;
		margin-bottom: 20px;
	}
}

@media screen and (max-width: 750px) {
	.txt1 {
		font-size: 24px;
		color: #ffffff;
	}

	.txt2 {
		font-size: 24px;
		color: #31d3e1;
	}

	.txt3 {
		font-size: 16px;
		color: #ffffff;
		line-height: 43px;
	}

	.txt4 {
		font-size: 14px;
		color: #ffffff;
		display: block;
		margin-bottom: 10px;
	}
}

.arrow {
	opacity: 1;
	animation: arrow 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
	-webkit-animation: arrow 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
	transform: rotate(-90deg);
	-webkit-transform: rotate(-90deg);
	/* position: fixed; */
	position: absolute;
	bottom: 10px;
	left: 50%;
	margin-left: -30px;
	width: 60px;
	height: 60px;
	border-radius: 100%;
	-webkit-border-radius: 100%;
	line-height: 60px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	border: 1px solid #fff;
	cursor: pointer;
	overflow: hidden;
	z-index: 9;
}

.arrow:hover {
	animation-play-state: paused;
	-webkit-animation-play-state: paused;
}

@keyframes arrow {
	0%,
	100% {
		bottom: 10px;
		opacity: 1;
	}

	50% {
		bottom: 50px;
		opacity: 0.5;
	}
}

@-webkit-keyframes arrow {
	0%,
	100% {
		bottom: 10px;
		opacity: 1;
	}

	50% {
		bottom: 50px;
		opacity: 0.5;
	}
}

.slide {
	width: 100%;
	height: 100%;
	background: #ffffff;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: top 0.5s ease;
	overflow: hidden;
}

.slide-put-1 {
	z-index: 1;
}

.slide-put-2 {
	z-index: 2;
}

.slide-put-3 {
	z-index: 3;
}

.slide-put-4 {
	z-index: 4;
}

.cover {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1;
	/* position: fixed; */
	position: absolute;
	top: 0;
	left: 0;
}

.backtop {
	width: 70px;
	height: 70px;
	background-image: url(../../assets/images/backTop.png);
	background-size: 70px 70px;
	display: block;
	position: absolute;
	top: 86%;
	right: 20px;
	z-index: 100;
}
.backtop:hover {
	background-image: url(../../assets/images/backTopOn.png);
	cursor: pointer;
}
.cover-top {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	/* height:70px; */
	/* background:linear-gradient(rgba(0, 0, 0, 0.5) 8%,rgba(0,0,0,0) 1%); */
	position: absolute;
	top: 0;
	left: 0;
}
.cover-top-nav {
	width: 100%;
	height: 68px;
	background-color: #000000;
}

.mainall {
	width: 62.5%;
	height: 62%;
	position: relative;
	top: calc((100% - 62%) / 2);
	left: calc((100% - 62.5%) / 2);
}

.our-service {
	font-size: 30px;
	color: #252525;
	width: 100%;
	height: 29px;
	text-align: center;
}

.our-tip {
	width: 100%;
	height: 14px;
	margin-top: 24px;
	text-align: center;
	color: #999999;
}
.our-top {
	width: 100%;
	height: 14px;
	margin-top: 24px;
	text-align: center;
	color: #999999;
}

.our-line {
	width: 100px;
	height: 1px;
	background: rgba(216, 216, 216, 1);
	margin: 21px auto;
	position: relative;
}

.our-line::after {
	content: '';
	width: 30px;
	height: 1px;
	background: #6f6f6f;
	position: absolute;
	top: 0;
	left: 35px;
}

.our-describe {
	width: 100%;
	height: 100px;
	// overflow: hidden;
	font-size: 14px;
	color: #ffffff;
	width: 100%;
	text-align: center;
	line-height: 100px;
}

.main {
	width: 100%;
	height: 67%;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
}

.category {
	width: 30%;
	height: 100%;
}

.category-one {
	width: 100%;
	height: 52%;
	display: block;
}

.machine-name {
	font-size: 18px;
	color: #202020;
	line-height: 56px;
	font-size: 18px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
}

.describe {
	font-size: 14px;
	color: #999999;
	line-height: 25px;
	height: 75px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}
.describe:hover {
	text-decoration: underline;
	cursor: pointer;
}

.read-more {
	width: 100%;
	height: 35px;
	margin-top: 10px;
	line-height: 35px;
	height: 14px;
	display: block;
	color: #4c82f7;
	font-size: 14px;
	cursor: pointer;
}
.read-more:hover {
	font-weight: bold;
}
.mainall-page {
	width: 54%;
	height: 56%;
	position: relative;
	top: calc((100% - 56%) / 2);
	left: calc((100% - 54%) / 2);
}
.player {
	width: 100%;
	height: 42%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
}

.player-list {
	width: 22%;
	height: 42%;
}

.player-img {
	width: 51%;
	height: auto;
	margin: 0 auto;
	display: block;
}

.player-title {
	font-size: 18px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	line-height: 80px;
}

.player-tip {
	font-size: 14px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	text-align: center;
}
.mainall-contact {
	width: 62%;
	height: 56%;
	position: relative;
	top: calc((100% - 57%) / 2);
	left: calc((100% - 62%) / 2);
}

/* .user-info-top {
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: space-between;
}
.user-info-top1 {
	width: 100%;
	height: 40%;
	display: flex;
	justify-content: space-between;
}
.user-info-top2 {
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-between;
} */

.user-send {
	width: 150px;
	height: 40px;
	border: none;
	background: rgba(76, 130, 247, 1);
	border-radius: 5px;
	text-align: center;
	line-height: 40px;
	color: #ffffff;
	margin-top: 50px;
}

.company-info {
	width: 33%;
	height: 100%;
	float: left;
	display: flex;
	flex-wrap: wrap;
	justify-items: flex-start;
}

.company-info-list {
	width: 100%;
	height: 25%;
}

.company-phone-art {
	width: 25%;
	height: 100%;
	display: block;
	float: left;
}

.company-number {
	float: left;
	width: 70%;
	padding-top: 10px;
	padding-left: 10px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	justify-items: flex-start;
}

.numbers-name {
	width: 100%;
	display: block;
	line-height: 25px;
	color: #ffffff;
	font-size: 14px;
}
.mainall-page1 {
	width: 62%;
	height: 53%;
	position: absolute;
	top: calc((100% - 53%) / 2);
	left: calc((100% - 62%) / 2);
	position: relative;
}
.news-center {
	width: 100%;
	height: 45%;
	position: absolute;
	bottom: 50px;
}

.chart {
	width: 32%;
	height: 100%;
	background: linear-gradient(to bottom, #6181e1, #749aef);
}

.newsList {
	width: 65%;
	float: right;
	height: 100%;
	background-color: #ffffff;
	// background-color:#797979;
}

.newsList-img {
	width: 45%;
	height: 100%;
	display: block;
	float: left;
	position: relative;
}

.news-pop {
	width: 100%;
	height: 25%;
	padding: 8px;
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
	line-height: 20px;
}

.new-title {
	height: 50%;
	line-height: normal;
	color: #ffffff;
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
}
.new-title:hover {
	text-decoration: underline;
	cursor: pointer;
}

.news-time {
	height: 50%;
	color: #ffffff;
	font-size: 12px;
	margin-top: 3px;
}

.newsList-content {
	width: 55%;
	height: 90%;
	float: right;
	color: #202020;
	// padding:10px;
	// box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
	position: relative;
}
.news-more {
	width: 6%;
	height: 10%;
	line-height: 180%;
	text-align: center;
	position: absolute;
	bottom: 10px;
	right: 20px;
	color: #202020;
	border: 1px solid #999999;
}
.news-more:hover {
	cursor: pointer;
	font-weight: bold;
	background: rgba(76, 130, 247, 1);
	border: 1px solid rgba(76, 130, 247, 1);
	color: #ffffff;
}
.home-app {
	display: none;
}
@media screen and (max-width: 1520px) {
	.news-more {
		font-size: 12px;
	}
}

.newslist-circle {
	display: inline-block;
	width: 8px;
	height: 8px;
	background: #202020;
	border-radius: 50%;
	margin: 3px 4px;
	z-index: 99;
}
.newsList-content li:nth-child(odd) {
	color: #202020;
	width: 100%;
	height: 50%;
	display: inline-block;
	margin-bottom: 2%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	position: relative;
	font-size: 16px;
}
.newsList-content li:nth-child(even) {
	display: inline-block;
	width: 100%;
	height: 20%;
	font-size: 12px;
	// margin-bottom:5%;
	color: #797979;
}
.newsList-content li:nth-child(odd):hover {
	text-decoration: underline;
	cursor: pointer;
}
/* .newsList-content li:nth-child(odd)::before {
	content: '';
	width: 8px;
	height: 8px;
	background: red;
	border-radius: 50%;
	position: absolute;
	left: -3px;
	top: 10px;
	z-index: 99;
} */

.l-banner3 {
	background-image: url(../../assets/images/banner3.png);
}
.z-nav {
	position: fixed;
	top: 0;
	left: 0;
	/* width:40%; */
	height: 3px;
	background: #00c0ff;
	z-index: 9999;
	box-shadow: 0 0 5px #00c0ff;
	transition: all 0.5s;
}
@media screen and (max-width: 750px) {
	.home-app {
		display: block;
	}
	.home-contact {
		margin-top: 100px;
	}
	.home-contact-list {
		margin-bottom: 20px;
		font-size: 16px;
		text-align: center;
	}
	//联系我们
	.send-info {
		width: 90%;
		height: 60%;
		margin: 50px auto;
	}
	.user-info {
		width: 100%;
		height: 100%;
		float: left;
		display: flex;
		flex-wrap: wrap;
		justify-items: flex-start;
	}
	.user-info {
		float: none;
	}
	.user-name {
		border-bottom: none;
		color: #000000;
		height: auto;
		overflow: hidden;
		display: flex;
		justify-content: center;
		margin-bottom: 40px;
		height: auto;
		padding: 0 10px;
	}
	.user-name .label {
		color: #000;
		float: left;
		width: 18%;
		padding-top: 0;
		margin-top: 10px;
		margin-right: 30px;
		position: relative;
	}
	.user-name .label:after {
		content: '*';
		font-size: 14px;
		color: red;
		position: absolute;
		left: -10px;
		top: 0px;
	}
	.user-name input {
		background: #edf0f5;
		float: left;
		width: 80%;
		height: 50px;
		line-height: 50px;
		border: none;
	}
	.user-send {
		width: 100px;
		height: 40px;
		border: none;
		background: rgba(76, 130, 247, 1);
		border-radius: 5px;
		text-align: center;
		line-height: 40px;
		color: #ffffff;
		margin-top: 20px;
		margin-left: 75%;
	}
	.user-name textarea {
		background: #edf0f5;
		float: left;
		width: 80%;
		height: 200px;
		line-height: 50px;
		overflow: hidden;
		border: none;
	}
	.user-name input:focus {
		outline: none;
	}

	.user-name textarea:focus {
		outline: none;
	}
	.newsList-btn {
		width: 94%;
		height: 55px;
		margin: 20px auto;
		background: #367fff;
		border-radius: 10px;
		line-height: 55px;
		text-align: center;
		color: #fff;
		font-size: 20px;
	}
	.newsList-content {
		width: 90%;
		margin: 0px auto;
		float: none;
	}
	.newsList-content li {
		border-bottom: 1px solid #ccc;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.newsList {
		width: 100%;
		float: none;
	}
	.newsList-img {
		width: 90%;
		height: 184px;
		margin: 20px auto;
		margin-left: calc(10% / 2);
	}
	.thenewsImg {
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
	}
	.news-pop {
		height: 50px;
		line-height: 50px;
	}
	.new-title {
		height: 100%;
	}
	.chart {
		height: 304px;
		width: 94%;
		margin: 60px auto;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.home-service-describe {
		font-size: 14px;
		padding: 40px 0px;
	}
	.player {
		position: relative;
	}
	.home-line {
		height: 6px;
		background: #eee;
	}
	.home-service {
		background-color: #fff;
		padding: 20px 0;
		margin-top: 20px;
	}
	.home-service-title {
		font-size: 30px;
		color: #333;
		text-align: center;
		margin-bottom: 30px;
		font-weight: 600;
	}
	.home-service-tip {
		font-size: 16px;
		color: #999;
		text-align: center;
		margin-bottom: 30px;
	}
	.home-service-category {
		padding-top: 24px;
		padding-left: 20px;
		box-sizing: border-box;
		width: 100%;
		overflow: hidden;
	}

	.home-pc {
		display: none;
	}
	.our-tip {
		width: 100%;
		height: 30px;
		margin-top: 187px;
	}
	.our-service {
		font-size: 30px;
		width: 100%;
		height: 29px;
		text-align: center;
	}
	.category {
		width: 100%;
		height: 40%;
	}
	.main {
		width: 100%;
		height: 72%;
		display: block;
	}
	.category-one {
		width: 30%;
		height: auto;
		float: left;
		display: block;
		margin-top: 10px;
	}
	.machine-name {
		font-size: 16px;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		float: right;
		width: 70%;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.describe {
		width: 70%;
		line-height: 20px;
		padding-left: 10px;
		font-size: 12px;
		box-sizing: border-box;
		padding-right: 20px;
		// margin-top: 20px;
		height: auto;
		float: right;
	}
	.mainall {
		width: 90%;
		position: relative;
		top: 7%;
		left: 8%;
	}

	.read-more {
		width: 16%;
		height: 35px;
		margin-top: 46px;
		float: right;
		line-height: 35px;
		height: 14px;
		display: block;
	}

	.mainall-page {
		width: 90%;
		height: 80%;
		position: relative;
		top: 10%;
		left: 6%;
	}
	.our-top {
		margin-top: 12%;
	}
	.our-describe {
		margin-top: 14%;
		// word-wrap:break-word;
	}
	.player {
		width: 100%;
		height: 58%;
		// display:flex;
		//    justify-content: space-around;
		//    flex-direction: column;
	}
	.player-list {
		width: 100%;
		height: 42%;
	}
	.player-img {
		width: 50%;
	}
	.player-title {
		width: 100%;
		font-size: 18px;
		line-height: 80px;
		color: #212520;
		margin: 20px auto;
	}

	.player-tip {
		width: 70%;
		font-size: 14px;
		// margin-top: 8%;
		color: #212520;
		text-align: center;
		margin: auto;
	}
	.mainall-page1 {
		width: 90%;
		height: 53%;
		position: absolute;
		top: 10%;
		left: 6%;
		position: relative;
	}
	.news-center {
		display: flex;
		flex-direction: column;
	}
}
</style>
