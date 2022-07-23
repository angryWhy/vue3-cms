<template>
    <div>
        <el-form labe-wdith="100px">
            <el-row>
                <template v-for="item in formItems" :key="item.label">
                    <el-col :span="8">
                        <el-form-item :label="item.label">
                            <template v-if="item.type === 'input' || 'password'">
                                <el-input :placeholder="item.placeHolder" :show-password="item.type === 'password'" />
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from './baseFormType'
export default defineComponent({
    props: {
        formItems: {
            type: Array as PropType<IFormItem[]>
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped>
</style>