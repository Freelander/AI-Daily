<template>
	<t-button v-if="isEN" theme="default" variant="dashed" style="margin-bottom: 10px" @click="jumpToX">
		<template #icon><NotificationIcon /></template>
		Follow Me X
	</t-button>
	<t-popup v-else placement="right" show-arrow destroy-on-close>
		<template #content>
			<div class="img-container">
				<img src="https://cdn.jsdelivr.net/gh/freelander/oss@master/img/weixin-qr.png" alt="" />
			</div>
		</template>
		<t-button theme="default" variant="dashed" style="margin-bottom: 10px">
			<template #icon><NotificationIcon /></template>
			交个朋友（备注：AI Daily）
		</t-button>
	</t-popup>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { NotificationIcon } from "tdesign-icons-vue-next";

const route = useRoute();
const isEN = computed(() => route.path.startsWith("/en"));

function jumpToX() {
	window.open("https://x.com/intent/follow?screen_name=GoJun315", "_blank");
}
</script>
<style scoped>
.img-container {
	height: 105px;
	width: 100px;
}

img {
	height: 100px;
	border-radius: 5px;
	margin-top: 5px;
}
</style>
