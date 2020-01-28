<template>
	<div class="recommened">
		<div v-for="(item, index) in followList" :key="index" class="card">
			<h3 v-if="item.target.question == null">{{ item.target.title }}</h3>
			<h3 v-else>{{ item.target.question.title }}</h3>
			<p>作者：{{ item.target.author.name }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			followList: []
		};
	},
	created() {
		this.axios.get('/api/follow').then(res => {
			this.followList = res.data.data.data;
			console.log(this.followList);
		});
	}
};
</script>
<style lang="scss" scoped>
.recommened {
	padding: 10px;
	.card {
		height: 200px;
		border-bottom: 1px solid #eee;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
		color: #4f4f4f;
	}
}
</style>
