<template>
    <div class="nav-header">
        <i class="fold-menu" :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i>
        <div class="content">
            <hy-breadcrumb />
            <user-info />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'


import { useStore } from '@/store'
import { useRoute } from 'vue-router'


export default defineComponent({
    components: {

    },
    emits: ['foldChange'],
    setup(props, { emit }) {
        const isFold = ref(false)
        const handleFoldClick = () => {
            isFold.value = !isFold.value
            emit('foldChange', isFold.value)
        }

        // 面包屑的数据: [{name: , path: }]
        const store = useStore()

        return {
            isFold,
            handleFoldClick,

        }
    }
})
</script>

<style scoped lang="less">
.nav-header {
    display: flex;
    width: 100%;

    .fold-menu {
        font-size: 30px;
        cursor: pointer;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        padding: 0 20px;
    }
}
</style>
