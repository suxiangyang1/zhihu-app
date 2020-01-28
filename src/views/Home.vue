<template>
	<div class="container">
		<div class="wrapper">
			<div class="left">
				<div class="tab">
					<ul class="nav-list">
						<li class="nav-item"><router-link to="/home/recommoned">推荐</router-link></li>
						<li class="nav-item"><router-link to="/home/follow">关注</router-link></li>
						<li class="nav-item"><router-link to="/home/hot">热榜</router-link></li>
					</ul>
				</div>
				<router-view :key="$route.fullPath"/>
			</div>
			<div class="right">
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {};
	},
	created() {}
};
</script>
<style lang="scss" scoped>
.container {
	width: 80%;
	margin: 0 auto;
	.wrapper {
		display: flex;
		.left {
			flex: 0 0 70%;
			margin-right: 20px;
			box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
			border-radius: 3px;
			.tab {
				height: 50px;
				line-height: 50px;
				padding-left: 20px;
				background-color: #fff;
				border-bottom: 1px solid #eee;
				box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
				.nav-list {
					list-style: none;
					display: flex;
					align-items: center;
					.nav-item {
						width: 80px;
						a {
							text-decoration: none;
							color: #444444;
						}
						.router-link-active {
							font-weight: 600;
							color: #439ccc;
						}
					}
				}
			}
			.content {
				background-color: #fff;
				min-height: 400px;
			}
		}
		.right {
			flex: 0 0 30%;
			.card {
				background-color: #fff;
				box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
				border-radius: 3px;
				min-height: 200px;
				margin-bottom: 10px;
				.icon {
					fill: #fecc00;
				}
			}
		}
	}
}
</style>
